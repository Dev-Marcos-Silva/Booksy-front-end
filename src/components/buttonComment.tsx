import { ChevronRight } from "lucide-react";

export function ButtonComment(){
    return(
         <div className="flex pr-2 items-center m-b-4 gap-2" >              
            <input className="w-full outline-0 border-b-1 border-font-400 pb-2" type="text" placeholder="Adicione um comentário..." />
             
            <button type="button" className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer  hover:text-font-300" >
                <ChevronRight/>
            </button> 
        </div>
    )
}