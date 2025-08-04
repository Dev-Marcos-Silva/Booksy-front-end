interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    color: string 
}

export function SmallButton({text, color, ...props}: ButtonType ){
    return(
         <button {...props} type="button" className={`bg-bg-primary px-5 py-1 rounded-2xl border-1 border-${color} text-${color} cursor-pointer duration-500 hover:bg-${color} hover:text-amber-50`}>
            {text}
        </button>
    )
}