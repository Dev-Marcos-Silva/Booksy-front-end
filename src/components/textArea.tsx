interface InputType{
    label: string
   
}


export function TextArea({label}: InputType){
    return (
        <div className="flex flex-col gap-2 h-30 " >
            <label className="text-font-100 text-xl" htmlFor={label}>{label}</label>

            <textarea className="bg-amber-50 w-full h-30 py-2 px-4 focus:outline-2 focus:outline-but-100 rounded-md" name="" id={label}>

            </textarea>   
        </div>
    )
}