import { deleteHistoryBook, type deleteHistoryBookTypeRequest } from "../../http/deleteHistoryBook"
import { useMutation } from "@tanstack/react-query"
import imageBook from "../../assets/img/book.webp"
import { api } from "../../service/api"
import { formatDate } from "../../utils/formatDate"
import { numberOfStars } from "../../utils/numberOfStars"
import { ButtonCard } from "../buttons/buttonCard"
import { Star, X } from "lucide-react"
import { authContex } from "../../hook/authContext"

interface BookType{
    id: number
    name: string | undefined
    avatar: string | null | undefined
    bookId: string | undefined
    image: string | null | undefined
    title: string | undefined
    author: string | undefined
    stars: {
        id: number
        created_at: string
        star: number
        book_id: string
        user_id: string
    }[]
    endDate: string | null
}

export function CardHistory({...data}: BookType){

    const { account } = authContex()

    const stars = data.stars
    
    const star = stars.map(star => star.star)
    
    const average = numberOfStars(star)

    const bookDelete = useMutation<void, Error, deleteHistoryBookTypeRequest>({
        mutationFn: deleteHistoryBook,
        onSuccess: () => {
            alert("Livro excluído com sucessso")
        },
        onError: () => {
            alert("Algo deu errado ao excluir livro!") 
        }
    })

    async function handleHistoryDelete(historyBookId: number){

        if(!account){
            return
        }

        bookDelete.mutate({
            userId: account.id,
            historyBookId,
            visibility: "false",
            token: account.token
        })
    }

    return (
        <div className="flex w-76 h-44 border-1 m-1 border-font-200 rounded-sm">

            <img className="max-w-30 h-full object-cover" src={data.image? `${api.defaults.baseURL}/upload/book/${data.image}`: imageBook} alt={`capa do livro ${data.title}`} />
        

            <div className="relative pt-8 px-2 w-46 h-full bg-font-500 flex flex-col gap-2">
                <button 
                    className="absolute cursor-pointer right-2 top-2 "
                    onClick={() => handleHistoryDelete(data.id) }
                >
                    <X size={20} />
                </button>
                
                <abbr className="no-underline" title={data.title}>
                    <h1 className="font-medium  overflow-hidden truncate ">{data.title}</h1>
                </abbr>

                <p className="text-sm">Autor(a): {data.author?.toUpperCase()}</p>

                <div className="flex justify-between items-center pt-2">
                        <span className="flex gap-1 items-center font-medium text-sm"><Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={20}/>{average.toFixed(1)}</span>
                        <ButtonCard text="Avaliar" link={`/user/book/${data.bookId}/assessments`} size="text-xs"/>
                </div>

                <div className="flex flex-col w-full items-center" >
                    <h2 className="text-sm">Concluído em</h2>
                    <p className="text-xs">{formatDate(data.endDate)}</p>
                </div>

            </div>
        </div>
    )
}