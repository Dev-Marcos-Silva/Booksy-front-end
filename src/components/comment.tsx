import imageUser from "../assets/img/profile.webp"
import imageLibrary from "../assets/img/house.webp"
import { ChevronRight } from "lucide-react"

interface CommentType{
    //image: string
    name: string
    comment: string
    date: string
}

export function Comment({ name, comment, date}: CommentType){

    const isUser = false

    return (
        <section className="mt-6 flex gap-2" >
            <img className="max-w-12 max-h-12 rounded-full object-cover" src={imageUser} alt="" />
            <div>
                <div>
                    <span className="font-medium text-black">{name} </span>
                        <p className="text-sm text-justify text-font-300" >
                                {comment}
                        </p>
                    <p className="text-xs text-font-300" >{date}</p>

                <details className="mt-2" >
                     <summary className="text-sm text-font-300 cursor-pointer">Ver resposta</summary>

                     <div className="mt-2 flex gap-2 flex-col ">
                       {
                        isUser?
                            <div>
                                
                            </div>  
                        :
                            <div className="flex pr-2 items-center mb-4 gap-2" >              
                                <input className="w-full text-sm outline-0 border-b-1 border-font-400 pb-2" type="text" placeholder="Responde o comentário..." />
                                
                                <button type="button" className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer  hover:text-font-300" >
                                    <ChevronRight size={20}/>
                                </button> 
                            </div>
                       }

                        <div className="flex gap-2">
                            <img className="max-w-12 max-h-12 rounded-full object-cover" src={imageLibrary} alt="" />
                        
                                <div>
                                    <span className="font-medium text-black">{"Digital Library"} </span>
                                        <p className="text-sm text-justify text-font-300">
                                                {comment}
                                        </p>
                                    <p className="text-xs text-font-300" >{date}</p>
                                </div> 
                        </div>
                    </div>
                </details>
                    
                </div>
            </div>
        </section>
    
    )
}