import imagenBook from "../assets/img/book.webp"
import imagenLibrary from "../assets/img/logo.webp"
import { ButtonCard } from "./buttonCard"
import { ArrowBigDown, Star } from "lucide-react"

export function CardOrder(){
    return (
        <div className="grid grid-cols-9 grid-rows-1 h-68 rounded-sm">

            <div className="col-span-2" >
                <img className="w-full max-w-60  h-full object-cover rounded-md" src={imagenBook} alt=""/>
            </div>
                   
            <section className="col-span-5 flex flex-col gap-2 ml-6" >

                <div className="bg-bg-300 p-3 flex h-full gap-4 rounded-md">
                    <img className="w-34 max-h-28  object-cover rounded-md border-1 border-but-100" src={imagenLibrary} alt="" />

                    <div className="flex flex-col justify-between py-1 ">
                        <div>
                            <h1 className="text-lg" >Digital Library</h1>
                            <p className="text-sm text-font-300">Rua 20, Jardim cearense, 200</p>
                    </div>
                        <div>
                            <p className="text-sm text-font-300">digital.library@gmail.com</p>
                            <p className="text-sm text-font-300">(85) 91234-5678 </p>
                        </div> 
                    </div>
                </div>

                <aside className="bg-bg-300 p-3 h-full rounded-md flex flex-col justify-between">
                   
                    <h2 className="text-lg max-w-2xs">Mockup Your Design Here</h2>

                    <span>
                        <p className="text-sm text-font-300"><span className="text-base">Autor(a)</span> Agatha Christie</p>
                    </span>
                        
                    <div className="flex justify-between items-center" >
                        <span className="flex gap-1 items-center font-medium" ><Star color="#FC9B1C" fill="#FC9B1C" size={22} strokeWidth={1}/>4.7</span>
                        <ButtonCard text="avaliar" link="/user/details" size="text-base"/>
                    </div>
                </aside>

            </section>

            <section className="col-span-2 flex items-center justify-evenly flex-col border-1 border-but-100 rounded-md mx-5" >
                <div className="flex items-center flex-col" >
                    <h3 className="text-xl">Pedido</h3>
                    <p className="text-sm text-font-300">02/03/2024</p>
                </div>
                    <ArrowBigDown fill="" />
                 <div className="flex items-center flex-col" >
                    <h3 className="text-xl">Adquirido</h3>
                    <p className="text-sm text-font-300">05/03/2024</p>
                </div>
                    <ArrowBigDown fill="" />
                <div className="flex items-center flex-col">
                    <h3 className="text-xl">Entregar</h3>
                    <p className="text-sm text-font-300">05/05/2024</p>
                </div>
            </section>
        </div>
    )
}