import { Star } from "lucide-react"
import imageUser from "../../assets/img/profile.webp"
import { api } from "../../service/api"
import { formatDate } from "../../utils/formatDate"

interface RatingType{
    name: string | undefined
    image: string | null
    date: string
    index: number
}

const ratingStar = [1,2,3,4,5]

export function Rating({image, name, date, index }: RatingType){
    
    return (
        <section className="mt-6 flex gap-2" >
            <img className="max-w-12 max-h-12 rounded-full object-cover" src={image? `${api.defaults.baseURL}/upload/profile/${image}`: imageUser} alt={`Imagem do usuário ${name}`} />
            <div className="" >
                <span className="font-medium text-black">{name} </span>

                <div>
                    {ratingStar.map(star => {
                    return(
                        <button 
                            key={star}
                        >
                            <Star fill={index >= star? "#FC9B1C": "#FFF9F9"} color="#FC9B1C" strokeWidth={index >= star? 0: 1} size={18} />
                        </button>
                        )
                    })}
                </div>

                <p className="text-xs text-font-300" >{formatDate(date)}</p>
            </div>
        </section>
    )

}