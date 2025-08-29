import { api } from "../../service/api"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import { ButtonCard } from "../buttons/buttonCard"
import { ButtonMark } from "../buttons/buttonMark"
import { Star } from "lucide-react"

interface BookType{
    id: string
    title: string
    author: string
    image: string
}

export function CardBookUser({id, title, author, image}: BookType){
    return (
        <div className="relative w-52 h-66 border-1 border-font-200 rounded-sm shadow-lg">

            <img className="w-full h-full object-cover rounded-sm " src={image && `${api.defaults.baseURL}/upload/book/${image}`} alt={`capa do livro ${title}`}/>

            <div className="absolute h-full w-full top-0 flex flex-col justify-end opacity-0 hover:opacity-100 duration-500 rounded-sm" >
                <div className="flex justify-end items-start h-33 p-4">
                    <ButtonMark/>
                </div>
                <section className="bg-font-500 h-33 flex flex-col justify-center px-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <abbr className="no-underline" title={capitalizeFirstLetter(title)}>
                            <h2 className="font-medium whitespace-nowrap overflow-hidden truncate">{capitalizeFirstLetter(title)}</h2>
                        </abbr>
        
                        <p className="text-sm">Autor(a): {author.toUpperCase()}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex gap-1 items-center font-medium"><Star color="#FCCA23" fill="#FCCA23" strokeWidth={0}/>4.7</span>
                        <ButtonCard text="Ver mais" link={`/user/book/${id}`} size="text-sm" />
                    </div>
                </section>
            </div>
            
        </div>
    )
}