import type React from "react"

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    label: string
    type: string
    widthDiv: string
}

export function InputText({placeholder, label, type, widthDiv, ...props}: InputType){
    return (
        <div className={`flex flex-col gap-2 ${widthDiv}`}>
            <label className="text-font-100 text-lg" htmlFor={label}>{label}</label>

            <input {...props} type={type} className="bg-amber-50 w-full py-2 px-4 focus:outline-2 focus:outline-but-100 rounded-md text-sm" placeholder={placeholder} id={label}/>
        </div> 
    )
}