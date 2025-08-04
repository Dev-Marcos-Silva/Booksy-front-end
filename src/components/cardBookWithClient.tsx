import imageBook from "../assets/img/book.webp"
import imageUser from "../assets/img/profile.webp"
import { ArrowRightLeft } from "lucide-react"
import { SmallButton } from "./smallButton"

interface BookType{
}

export function CardBookWithClient({}: BookType){
    return (
        <div className="border-but-200 border-1 w-full rounded-xl flex justify-between bg-bg-100 py-3 shadow-lg">
            <div className="flex items-center  gap-4 px-3" >

                <img className="max-w-42 h-50 object-cover border-but-200 border-1 rounded-xl" src={imageBook} alt="" />

                <div className="flex flex-col justify-center gap-6 py-2" >
                    <div>
                        <h2 className="text-font-100 text-base" >Mockup Your Design Here</h2>
                        <p className="text-font-100 text-sm ">Autor(a) Marcos Silva</p>
                    </div>
                    <div>
                        <p className="text-font-100 text-sm ">Edição 1</p>
                        <p className="text-font-100 text-sm ">Drama</p>
                        <p className="text-font-100 text-xs ">11/02/2023</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center" >
                 <ArrowRightLeft size={30} color="#4D2519"/>
            </div>
            
            <div className="flex items-center  gap-4 px-0" >
            
                <img className="max-w-30 max-h-30 object-cover border-but-200 border-1 rounded-full mx-3" src={imageUser} alt="" />
                
                <div className="flex flex-col gap-2" >
                    <h2 className="text-font-100 text-base" >Marcos Silva</h2>
                    <p className="text-font-100 text-sm ">marcos.silva@gmail.com</p>
                    <p className="text-font-100 text-sm ">(00) 00000-0000</p>
                    <p className="text-font-100 text-sm ">Fortaleza-ce</p>
                    <p className="text-font-100 text-sm ">Rua 20, Jardim Cearense, casa 200</p>
                </div>

                <div className="flex flex-col justify-center gap-6 pl-1 pr-2" >
                    <SmallButton text="Concluído" isSave={true}/>
                </div>
                 
            </div>
            
        </div>
    )
}