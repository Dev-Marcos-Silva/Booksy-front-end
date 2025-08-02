import { ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const ratingStar = [1,2,3,4,5]

export function ButtonRating(){
    const [ index, setIndex ] = useState(0)
    const [ text, setText ] = useState(0)

    function handleStar(star: number){
        setIndex(star)
        setText(star)
    }

    return(
        <div className="flex flex-col gap-2">

            <p className="text-xl font-medium relative pl-7" ><span className="text-2xl absolute left-2 -top-1" >{text} </span>de 5</p>

            <div className="flex items-center gap-1">
                {ratingStar.map(star => {
                    return(
                        <button 
                            key={star}
                            onClick={() => handleStar(star)}
                        >
                            <Star fill={index >= star? "#FC9B1C": "#FFF9F9"} color="#FC9B1C" strokeWidth={index >= star? 0: 1} size={28} />
                        </button>
                    )
                })}

                <button type="button" className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer hover:text-font-300 ml-4" >
                    <ChevronRight/>
                </button> 
            </div>
        </div>
    )
}