import { useMutation } from "@tanstack/react-query"
import imageBook from "../../assets/img/book.webp"
import imageUser from "../../assets/img/profile.webp"
import { authContex } from "../../hook/authContext"
import { api } from "../../service/api"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import { formatDate } from "../../utils/formatDate"
import { SmallButton } from "../buttons/smallButton"
import { putComplete, type putCompleteTypeRequest } from "../../http/putComplete"
import { queryClient } from "../../service/queryClient"

interface BookType{
    id: number
    name: string | undefined
    avatar: string | null | undefined
    email: string | undefined
    ddd: string | undefined
    phone: string | undefined
    city: string | undefined
    street: string | undefined
    neighborhood: string | undefined
    number: string | undefined
    image: string | null | undefined
    title: string | undefined
    author: string | undefined
    edition: string | undefined
    category: string | undefined
    date: string | undefined
    returnDate: string | null
    endDate: string | null
    isFinished: boolean
}

export function CardFinishedBook({isFinished, ...data}: BookType){

    const { account } = authContex()

    if(!account){
        return
    }

    const rendBookComplete = useMutation<void, Error, putCompleteTypeRequest>({
        mutationFn: putComplete,
        onSuccess: () => {
            alert("Livro completo com sucesso")
            queryClient.refetchQueries({
                queryKey: ["keyGetRendBookLibrary", account.id]
            })
        },
        onError: () => {
            alert("Algo deu errado ao concluir o livro!") 
        },
    })

    async function handleRendBookComplete(bookId: number){

        if(!account){
            return
        }

        rendBookComplete.mutate({
            rendBookId: bookId,
            isComplete: "true",
            token: account.token
        })
    }

    return (
        <div className={`${isFinished? "border-font-600 bg-bg-400":"border-font-700 bg-bg-500"} py-3 shadow-lg border-1 w-full rounded-xl flex justify-between`}>
            <div className="flex items-center w-md gap-4 px-3" >

                <img className={`${isFinished? "border-font-600":"border-font-700"} border-1 rounded-xl max-w-42 h-50 object-cover`} src={data.image? `${api.defaults.baseURL}/upload/book/${data.image}`: imageBook} alt={`capa do livro ${data.title}`} />

                <div className="flex flex-col justify-center gap-8 py-2" >
                    <div className="flex flex-col gap-1" >
                        <h2 className="text-base" >{data.title}</h2>
                        <p className="text-font-300 text-sm ">Autor(a) {data.author?.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-font-300 text-sm ">{data.edition}</p>
                        <p className="text-font-300 text-sm ">{data.category}</p>
                        <p className="text-font-300 text-xs ">{formatDate(data.date)}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center  gap-4 px-3" >
            
                <img className={`${isFinished? "border-font-600 bg-bg-400":"border-font-700 bg-bg-500"}border-but-200 border-1 rounded-full mx-3 w-30 h-30 object-cover`} src={data.avatar? `${api.defaults.baseURL}/upload/profile/${data.avatar}` : imageUser} alt={`imagem do usuário ${data.name}`} />
                
                <div className="flex flex-col gap-2" >
                    <h2 className="text-font-100 text-base" >{capitalizeFirstLetter(data.name)}</h2>
                    <p className="text-font-100 text-sm ">{data.email}</p>
                    <p className="text-font-100 text-sm ">({data.ddd}) {data.phone}</p>
                    <p className="text-font-100 text-sm ">{capitalizeFirstLetter(data.city)}</p>
                    <p className="text-font-100 text-sm ">
                        {capitalizeFirstLetter(data.street)}, {capitalizeFirstLetter(data.neighborhood)}, {data.number}
                    </p>
                </div>

                {
                    isFinished?
                    <div className="bg-bg-primary flex flex-col items-center justify-evenly border-font-600 border-1 rounded-xl h-full px-3" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-lg text-font-100 font-semibold">Encerrado em</h2>
                            <p className=" text-font-100 font-medium">{formatDate(data.endDate)}</p>
                        </div>
                    </div>
                    : 
                    <div className="bg-bg-primary flex flex-col items-center justify-evenly border-font-700 border-1 rounded-xl h-full px-3" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-lg text-font-100 font-semibold">Encerrado em</h2>
                            <p className=" text-font-100 font-medium">{formatDate(data.returnDate)}</p>
                        </div>
                        <SmallButton 
                            text="Finalizar" 
                            isSave={true}
                            onClick={() => handleRendBookComplete(data.id)}
                        />
                    </div>
                }
                    
            </div>  
        </div>
    )
}