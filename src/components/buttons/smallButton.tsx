interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    isSave: boolean
}

export function SmallButton({text, isSave, ...props}: ButtonType ){
    return(
         <button {...props} className={`bg-bg-primary px-5 py-1 rounded-2xl border-1 cursor-pointer duration-500 ${isSave? "border-font-600 text-font-600 hover:bg-font-600":"border-font-700 text-font-700 hover:bg-font-700"} hover:text-amber-50 `}>
            {text}
        </button>
    )
}