import { api } from "../../service/api"
import imageBook from "../../assets/img/book.webp"
import imageUser from "../../assets/img/profile.webp"
import { ArrowRightLeft } from "lucide-react"
import { SmallButton } from "../buttons/smallButton"
import { formatDate } from "../../utils/formatDate"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"

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
}

export function CardBookWithClient({...data}: BookType){
    return (
        <div className="border-but-200 border-1 w-full rounded-xl flex justify-between bg-bg-100 py-3 shadow-lg">
            <div className="flex items-center  gap-4 px-3" >

               <img className="max-w-42 h-50 object-cover border-but-100 border-1 rounded-xl" src={data.image? `${api.defaults.baseURL}/upload/book/${data.image}`: imageBook} alt={`capa do livro ${data.title}`} />
               
                <div className="flex flex-col justify-center gap-8 py-2" >
                    <div className="flex flex-col gap-1" >
                        <h2 className="text-font-100 text-base" >{data.title}</h2>
                        <p className="text-font-100 text-sm ">Autor(a) {data.author?.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-font-100 text-sm ">{data.edition}</p>
                        <p className="text-font-100 text-sm ">{data.category}</p>
                        <p className="text-font-100 text-xs ">{formatDate(data.date)}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center" >
                 <ArrowRightLeft size={30} color="#4D2519"/>
            </div>
            
            <div className="flex items-center  gap-4 px-0" >
            
                <img className="max-w-30 max-h-30 object-cover border-but-200 border-1 rounded-full mx-3" src={data.avatar? `${api.defaults.baseURL}/upload/profile/${data.avatar}` : imageUser} alt="" />
                
                <div className="flex flex-col gap-2" >
                    <h2 className="text-font-100 text-base" >{capitalizeFirstLetter(data.name)}</h2>
                    <p className="text-font-100 text-sm ">{data.email}</p>
                    <p className="text-font-100 text-sm ">({data.ddd}) {data.phone}</p>
                    <p className="text-font-100 text-sm ">{capitalizeFirstLetter(data.city)}</p>
                    <p className="text-font-100 text-sm ">
                        {capitalizeFirstLetter(data.street)}, {capitalizeFirstLetter(data.neighborhood)}, {data.number}
                    </p>
                </div>

                <div className="flex flex-col justify-center gap-6 px-5" >
                    <SmallButton text="Finalizar" isSave={true}/>
                </div>
                 
            </div>  
        </div>
    )
}