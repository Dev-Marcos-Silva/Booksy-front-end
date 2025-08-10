import { Search } from "lucide-react";

export function SearchBook(){
    return(
        <div className='pl-8 pr-14 pt-4 relative'>
            <button className='text-font-300 absolute top-6 left-12 pr-4 cursor-pointer'><Search/></button>
            <input className='text-font-300 bg-font-400 rounded-3xl w-full py-2 px-14 focus:outline-1 focus:outline-font-200 placeholder-font-300' type="text" placeholder="Livro ou Autor" />
        </div>
    )
}