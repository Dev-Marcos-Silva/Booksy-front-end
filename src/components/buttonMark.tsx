import { Bookmark } from "lucide-react"
import { useState } from "react"

export function ButtonMark(){

    const [favority, setFovority] = useState(false)

    function favorityBook(){
        setFovority(!favority) 
    }

    return(
        <button
            onClick={favorityBook} 
            className="bg-bg-primary p-1 rounded-4xl cursor-pointer" 
        >
            {favority == true ? <Bookmark fill="#FF815B" />: <Bookmark /> } 
        </button>
    )
}