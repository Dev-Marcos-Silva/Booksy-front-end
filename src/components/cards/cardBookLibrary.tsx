import { api } from "../../service/api"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import { ButtonCard } from "../buttons/buttonCard"

interface BookType{
    id: string
    title: string
    author: string
    image: string
    updataAt: string

}

export function CardBookLibrary({id, title, author, image, updataAt}: BookType){

    return (
        <div className="w-56 h-74 border-1 border-but-200 rounded-sm shadow-lg">
            
            <section  className="relative w-full h-4/5">
                <img className="w-full h-full object-cover rounded-t-sm " src={image && `${api.defaults.baseURL}/upload/book/${image}?v=${updataAt}`} alt={`capa do livro ${title}`}/>

                <div className="absolute h-full w-full top-0 flex flex-col justify-end opacity-0 hover:opacity-100 duration-500 rounded-sm" >
                    <section className="bg-font-500 h-26 flex flex-col justify-center px-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <abbr className="no-underline" title={capitalizeFirstLetter(title)}>
                            <h2 className="font-medium whitespace-nowrap overflow-hidden truncate">{capitalizeFirstLetter(title)}</h2>
                        </abbr>
        
                        <p className="text-sm">Autor(a): {author.toUpperCase()}</p>
                    </div>

                    </section>
                </div>
            </section>

            <div className="bg-font-500 w-full h-1/5 py-2 px-4 border-t-1 border-but-200 flex justify-between items-center">
                <ButtonCard text="Ver mais" link={`/library/book/${id}`} size="text-sm"/>
                <ButtonCard text="Editar" link={`/library/update/${id}`} size="text-sm"/>
            </div>       
        </div>
    )
}