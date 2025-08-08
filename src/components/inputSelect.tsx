import type React from "react"
import { ChevronDown } from "lucide-react"

interface InputType extends React.SelectHTMLAttributes<HTMLSelectElement>{
    label: string
    options: any[]
}

export function InputSelect({label, options, ...props}: InputType){

    return (
        <div className="flex flex-col gap-2 relative w-full " >
            <label htmlFor={label}>{label}</label>

            <select {...props} className="bg-amber-50 w-full py-2 pl-4 pr-6 focus:outline-2 appearance-none focus:outline-font-200 rounded-md text-sm" id={label}>
                {options.map((item => {
                    return <option key={item} value={item}>
                        {item}
                    </option>
                }))}
            </select>
            <ChevronDown className="absolute right-2 top-10 pointer-events-none" size={20} />  
        </div> 
    )
}