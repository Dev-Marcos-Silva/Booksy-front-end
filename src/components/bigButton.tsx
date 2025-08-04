import React from "react"

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    type: "submit" | "reset" | "button" | undefined
    margin: string
}

export function BigButton({type, text, margin, ...props}: ButtonType){
    return (
    <button 
        className={`bg-but-100 text-amber-50 py-2 text-xl ${margin} rounded-md cursor-pointer duration-600 hover:bg-but-200 shadow-md`} 
        type={type}
        {...props}
        >
        {text}
    </button>
    )
}