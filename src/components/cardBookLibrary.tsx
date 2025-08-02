import image from "../assets/img/book.webp"
import { ButtonCard } from "./buttonCard"

interface BookType{
    size: string
}

export function CardBookLibrary({size}: BookType){
    return (
        <div className={` max-w-62 ${size} border-1 border-but-200 rounded-sm`}>
            
            <section  className="relative w-full h-4/5">
                <img className="w-full h-full object-cover rounded-t-sm " src={image} alt=""/>

                <div className="absolute h-full w-full top-0 flex flex-col justify-end opacity-0 hover:opacity-100 duration-500 rounded-sm" >
                    <section className="bg-font-500 h-26 flex flex-col justify-center px-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <abbr className="no-underline" title="Mockup Your Design Mockup Your Design Mockup Your Design">
                            <h2 className="font-medium whitespace-nowrap overflow-hidden truncate">Mockup Your Design Mockup Your Design Mockup Your Design</h2>
                        </abbr>
        
                        <p className="text-sm">Autor(a): Marcos Silva</p>
                    </div>

                    </section>
                </div>
            </section>

            <div className="bg-font-500 w-full h-1/5 py-2 px-4 border-t-1 border-but-200 flex justify-between items-center">
                <ButtonCard text="ver mais" link="/user/details" size="text-sm"/>
                <ButtonCard text="editar" link="/#" size="text-sm"/>
            </div>       
        </div>
    )
}