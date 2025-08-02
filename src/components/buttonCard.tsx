import type React from "react"
import { Link } from "react-router-dom"

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    link: string
    size: string
}

export function ButtonCard({ text, link, size }: ButtonType ){
    return(
        <Link to={`${link}`} className={`bg-bg-primary px-2 py-1 rounded-2xl border-1 border-but-100 text-but-100 cursor-pointer ${size} `} >
            {text}
        </Link>
    )
}