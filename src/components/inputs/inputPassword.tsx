import React, { useState } from "react"
import { Eye } from "lucide-react"
import { EyeOff } from "lucide-react"

interface InputType extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    label: string
    isTrue: boolean 
    widthDiv: string
}

export function InputPassword({placeholder, label, isTrue, widthDiv, ...props}: InputType){

    const [type, setType] = useState('password')

    function viewPassword(){
        setType('text')
    }

    function hiddenPassword(){
        setType('password')
    }

    return (
        <div className={`flex flex-col gap-2 relative ${widthDiv}`} >
            <label className="text-font-100 text-lg" htmlFor={label}>{label} {isTrue && <span className="text-sm" >(mín 6)</span>} </label>

            <input {...props} type={type} className="bg-amber-50 w-full py-2 px-4 focus:outline-2 focus:outline-but-100 rounded-md text-sm" placeholder={placeholder} id={label}/>

            <button 
                className="absolute bottom-2 right-3"
                type="button" 
                onMouseDown={viewPassword}
                onMouseUp={hiddenPassword} 
            >
               { type == 'password'? <Eye size={22}/>: <EyeOff size={22}/> }
            </button>
        </div> 
    )
}