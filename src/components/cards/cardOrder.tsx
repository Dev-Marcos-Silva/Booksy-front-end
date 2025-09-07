import imageBook from "../../assets/img/book.webp"
import imageLibrary from "../../assets/img/logo.webp"
import { api } from "../../service/api"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import { formatDate } from "../../utils/formatDate"
import { numberOfStars } from "../../utils/numberOfStars"
import { ButtonCard } from "../buttons/buttonCard"
import { ArrowBigDown, Star } from "lucide-react"

interface BookType{
    id: number
    name: string | undefined
    avatar: string | null | undefined
    email: string | undefined
    ddd: string | undefined
    phone: string | undefined
    street: string | undefined
    neighborhood: string | undefined
    number: string | undefined
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
    isAccept: string | undefined
    orderDate: string | null
    deliveryDate: string | null
    returnDate: string | null
}

export function CardOrder({...data}: BookType){

    const stars = data.stars

    const star = stars.map(star => star.star)

    const average = numberOfStars(star)

    return (
        <div className="grid grid-cols-9 grid-rows-1 h-68 rounded-sm">

            <div className="col-span-2" >
                <img className="w-full max-w-60  h-full object-cover rounded-md" src={data.image? `${api.defaults.baseURL}/upload/book/${data.image}`: imageBook} alt={`capa do livro ${data.title}`} />
            </div>
                   
            <section className="col-span-5 flex flex-col gap-2 ml-6" >

                <div className="bg-bg-300 flex justify-between p-3 rounded-md">
                    <div className="flex h-full gap-4">
                        <img className="w-34 max-h-28  object-cover rounded-md border-1 border-but-100" src={data.avatar? `${api.defaults.baseURL}/upload/library/${data.avatar}`: imageLibrary} alt={`Imagem da biblioteca ${data.name}`}/>

                        <div className="flex flex-col justify-between py-1 ">
                            <div>
                                <h1 className="text-lg">{capitalizeFirstLetter(data.name)}</h1>
                                <p className="text-sm text-font-300">{capitalizeFirstLetter(data.street)}, {capitalizeFirstLetter(data.neighborhood)}, {data.number}</p>
                            </div>
                            <div>
                                <p className="text-sm text-font-300">{data.email}</p>
                                <p className="text-sm text-font-300">({data.ddd}) {data.phone}</p>
                            </div> 
                        </div>
                    </div>

                    <div className="flex items-center flex-col" >
                        <p className={` ${data.isAccept === "true"? "text-font-600": "text-font-300"} border-1 bg-bg-primary rounded-2xl px-2`}>
                            {data.isAccept === "true"? "Aceito": "Em análise"}
                        </p>
                    </div>
                </div>

                <aside className="bg-bg-300 p-3 h-full rounded-md flex flex-col justify-between">
                   
                    <h2 className="text-lg max-w-2xs">{data.title}</h2>

                    <span>
                        <p className="text-sm text-font-300"><span className="text-base">Autor(a) </span>{data.author?.toUpperCase()}</p>
                    </span>
                        
                    <div className="flex justify-between items-center" >
                        <span className="flex gap-1 items-center font-medium" ><Star color="#FC9B1C" fill="#FC9B1C" size={22} strokeWidth={1}/>{average.toFixed(1)}</span>
                        <ButtonCard text="Avaliar" link={`/user/book/${data.bookId}/assessments`} size="text-base"/>
                    </div>
                </aside>

            </section>

            <section className="col-span-2 flex items-center justify-evenly flex-col border-1 border-but-100 rounded-md mx-5" >
                <div className="flex items-center flex-col" >
                    <h3 className="text-lg">Pedido</h3>
                    <p className="text-sm text-font-300">{formatDate(data.orderDate)}</p>
                </div>
                    <ArrowBigDown fill="" />
                <div className="flex items-center flex-col" >
                    <h3 className="text-lg">Adquirido</h3>
                    <p className="text-sm text-font-300">{data.deliveryDate? formatDate(data.deliveryDate): "Em análise"}</p>
                </div>
                    <ArrowBigDown fill="" />
                <div className="flex items-center flex-col">
                    <h3 className="text-lg">Entregar</h3>
                    <p className="text-sm text-font-300">{data.returnDate? formatDate(data.returnDate): "Em análise"}</p>
                </div>
            </section>
        </div>
    )
}