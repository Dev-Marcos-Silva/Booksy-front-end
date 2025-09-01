import image from "../../assets/img/book.webp"
import { ButtonCard } from "../buttons/buttonCard"
import { Star, X } from "lucide-react"

export function CardHistory(){
    return (
        <div className="flex w-76 h-44 border-1 m-1 border-font-200 rounded-sm">

            <img className="max-w-30 h-full object-cover" src={image} alt=""/>

            <div className="relative pt-8 px-2 w-46 h-full bg-font-500 flex flex-col gap-2">
                <button className="absolute cursor-pointer right-2 top-2 " >
                    <X size={20} />
                </button>
                
                <abbr className="no-underline" title="Mockup Your Design Mockup Your Design Mockup Your Design">
                    <h1 className="font-medium  overflow-hidden truncate ">Mockup Your Design Mockup Your Design Mockup Your Design</h1>
                </abbr>

                <p className="text-sm">Autor(a): Marcos Silva</p>

                <div className="flex justify-between items-center">
                        <span className="flex gap-1 items-center font-medium text-sm"><Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={20}/>4.7</span>
                        <ButtonCard text="Avaliar" link="/book" size="text-sm"/>
                </div>

                <div className="flex flex-col w-full items-center" >
                    <h2 className="text-sm text-font-600">concluído em</h2>
                    <p className="text-xs">10/05/2025</p>
                </div>

            </div>
        </div>
    )
}