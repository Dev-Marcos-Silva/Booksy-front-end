import type React from "react"

interface InputType extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string
    placeholder: string  
}

export function TextArea({label, placeholder, ...props}: InputType){
    return (
        <details className="focus:outline-1" >
            <summary className="text-font-100 text-lg cursor-pointer">{label}</summary>

            <div className="pt-4">
                <textarea {...props} className="bg-amber-50 w-full h-32 py-2 px-4 focus:outline-2 focus:outline-font-200 rounded-md text-sm" placeholder={placeholder} id={label}>

                </textarea>   
            </div>
        </details>
    )
}