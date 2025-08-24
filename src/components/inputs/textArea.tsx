import type React from "react"

interface InputType extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string
    placeholder: string  
}

export function TextArea({label, placeholder, ...props}: InputType){
    return (
        <div className="flex flex-col gap-2 h-24 " >
            <label className="text-font-100 text-xl" htmlFor={label}>{label}</label>

            <textarea {...props} className="bg-amber-50 w-full h-20 py-2 px-4 focus:outline-2 focus:outline-font-200 rounded-md text-sm" placeholder={placeholder} id={label}>

            </textarea>   
        </div>
    )
}