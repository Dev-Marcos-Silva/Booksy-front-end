import imageBook from "../assets/img/book.webp"
import imageUser from "../assets/img/profile.webp"
import { SmallButton } from "./smallButton"

interface BookType{
    
}

export function CardClient({}: BookType){
    return (
        <div className="border-font-200 border-1 w-full rounded-xl flex justify-between bg-font-500 py-2 shadow-lg">
            <div className="flex items-center  gap-4 px-4" >
                
                <img className="max-w-30 max-h-30 object-cover border-font-200 border-1 rounded-full mx-3" src={imageUser} alt="" />
                
                <div className="flex flex-col gap-2" >
                    <h2 className="text-base" >Marcos Silva</h2>
                    <p className="text-font-300 text-sm ">marcos.silva@gmail.com</p>
                    <p className="text-font-300 text-sm ">(00) 00000-0000</p>
                     <p className="text-font-300 text-sm ">Fortaleza-ce</p>
                    <p className="text-font-300 text-sm ">Rua 20, Jardim Cearense, casa 200</p>
                </div>

            </div>
            <div className="flex gap-4 px-4" >
                <img className="max-w-42 h-50 object-cover border-font-200 border-1 rounded-sm" src={imageBook} alt="" />

                <div className="flex flex-col justify-center gap-6 py-2" >
                    <div>
                        <h2 className="text-base" >Mockup Your Design Here</h2>
                        <p className="text-font-300 text-sm ">Autor(a) Marcos Silva</p>
                    </div>
                    <div>
                        <p className="text-font-300 text-sm ">Edição 1</p>
                        <p className="text-font-300 text-sm ">Drama</p>
                        <p className="text-font-300 text-xs ">11/02/2023</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6 px-3" >
                    <SmallButton text="Aceite" color="font-600" />
                    <SmallButton text="Negar" color="font-700"/>
                </div>

            </div>
            
        </div>
    )
}