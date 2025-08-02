interface ItemType{
    text: string
    description: string
}

export function ItemBook({text, description}: ItemType){
    return(
        <li>
            <h3 className="font-medium" >{text}</h3>
            <p className="text-sm text-font-300">{description}</p>
        </li>
    )
}