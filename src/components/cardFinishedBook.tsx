import imageBook from "../assets/img/book.webp"
import imageUser from "../assets/img/profile.webp"
import { SmallButton } from "./smallButton"

interface BookType{
    isComplete: boolean
}

export function CardFinishedBook({isComplete}: BookType){
    return (
        <div className={`${isComplete? "border-font-600 bg-bg-400":"border-font-700 bg-bg-500"} py-3 shadow-lg border-1 w-full rounded-xl flex justify-between`}>
            <div className="flex items-center  gap-4 px-3" >

                <img className={`${isComplete? "border-font-600":"border-font-700"} border-1 rounded-xl max-w-42 h-50 object-cover`} src={imageBook} alt="" />

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

            <div className="flex items-center  gap-4 px-3" >
            
                <img className={`${isComplete? "border-font-600 bg-bg-400":"border-font-700 bg-bg-500"}border-but-200 border-1 rounded-full mx-3 max-w-30 max-h-30 object-cover`} src={imageUser} alt="" />
                
                <div className="flex flex-col gap-2" >
                    <h2 className="text-font-100 text-base" >Marcos Silva</h2>
                    <p className="text-font-100 text-sm ">marcos.silva@gmail.com</p>
                    <p className="text-font-100 text-sm ">(00) 00000-0000</p>
                    <p className="text-font-100 text-sm ">Fortaleza-ce</p>
                    <p className="text-font-100 text-sm ">Rua 20, Jardim Cearense, casa 200</p>
                </div>

                {
                    isComplete?
                    <div className="bg-bg-primary flex flex-col items-center justify-center border-font-600 border-1 rounded-xl h-full px-3" >
                        <h2 className="text-lg text-font-100 font-semibold">Encerrado Em</h2>
                        <p className=" text-font-100 font-medium" >11/02/2024</p>
                    </div>
                    : 
                    <div className="bg-bg-primary flex flex-col items-center justify-evenly border-font-700 border-1 rounded-xl h-full px-3" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-lg text-font-100 font-semibold">Encerrado Em</h2>
                            <p className=" text-font-100 font-medium" >11/02/2024</p>
                        </div>
                        <SmallButton text="Finalizar" isSave={true}/>
                    </div>

                }
                    
            </div>  
        </div>
    )
}