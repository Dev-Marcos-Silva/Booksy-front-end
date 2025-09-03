import imageBook from "../../assets/img/book.webp"
import imageUser from "../../assets/img/profile.webp"
import { api } from "../../service/api"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import { formatDate } from "../../utils/formatDate"
import { SmallButton } from "../buttons/smallButton"
import { StopWatch } from "../ui/stopWatch"

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
    isDelivered: boolean
}

export function CardCustomerRequest({ isDelivered, ...data}: BookType){

    return (
        <div className="border-font-200 border-1 w-full rounded-xl flex justify-between bg-font-500 py-3 shadow-lg">
            <div className="flex items-center  gap-4 px-3" >

                <img className="max-w-42 h-50 object-cover border-font-200 border-1 rounded-xl" src={data.image? `${api.defaults.baseURL}/upload/book/${data.image}`: imageBook} alt={`capa do livro ${data.title}`} />

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
            <div className="flex items-center  gap-4 px-4">

                <img className="max-w-30 max-h-30 object-cover border-font-200 border-1 rounded-full mx-3" src={data.avatar? `${api.defaults.baseURL}/upload/profile/${data.avatar}` : imageUser} alt="" />
                
                <div className="flex flex-col gap-2" >
                    <h2 className="text-base" >{data.name?.toUpperCase()}</h2>
                    <p className="text-font-300 text-sm ">{data.email}</p>
                    <p className="text-font-300 text-sm ">({data.ddd}) {data.phone}</p>
                    <p className="text-font-300 text-sm ">{capitalizeFirstLetter(data.city)}</p>
                    <p className="text-font-300 text-sm ">
                        {capitalizeFirstLetter(data.street)}, {capitalizeFirstLetter(data.neighborhood)}, {data.number}
                    </p>
                </div>

                {
                    isDelivered?
                    <div className="flex flex-col justify-center gap-6 px-5" >
                        <SmallButton text="Aceite" isSave={true}/>
                        <SmallButton text="Negar" isSave={false}/>
                    </div>
                    :
                     <div className="flex flex-col justify-center gap-6 px-3" >
                        <StopWatch days={24}/>
                        <SmallButton text="Entregar" isSave={true}/>
                    </div>
                }
               
            </div>  
        </div>
    )
}