import image from "../assets/img/book.webp"
import { ButtonCard } from "./buttonCard"
import { ButtonMark } from "./buttonMark"
import { Star } from "lucide-react"

interface BookType{
    
}

export function CardBookUser({}: BookType){
    return (
        <div className="relative max-w-54 h-64 border-1 border-font-200 rounded-sm shadow-lg">

            <img className="w-full h-full object-cover rounded-sm " src={image} alt=""/>

            <div className="absolute h-full w-full top-0 flex flex-col justify-end opacity-0 hover:opacity-100 duration-500 rounded-sm" >
                <div className="flex justify-end items-start h-33 p-4">
                    <ButtonMark/>
                </div>
                <section className="bg-font-500 h-33 flex flex-col justify-center px-2 gap-2">
                    <div className="flex flex-col gap-1">
                        <abbr className="no-underline" title="Mockup Your Design Mockup Your Design Mockup Your Design">
                            <h2 className="font-medium whitespace-nowrap overflow-hidden truncate">Mockup Your Design Mockup Your Design Mockup Your Design</h2>
                        </abbr>
        
                        <p className="text-sm">Autor(a): Marcos Silva</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex gap-1 items-center font-medium"><Star color="#FCCA23" fill="#FCCA23" strokeWidth={0}/>4.7</span>
                        <ButtonCard text="Ver mais" link="/user/details" size="text-sm" />
                    </div>
                </section>
            </div>
            
        </div>
    )
}