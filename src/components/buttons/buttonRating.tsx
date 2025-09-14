import { postAssessment, type postAssessmentTypeRequest } from "../../http/postAssessment"
import { ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { authContex } from "../../hook/authContext"
import { queryClient } from "../../service/queryClient"

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bookId: string | undefined | null
}

const ratingStar = [1,2,3,4,5]

export function ButtonRating({bookId}: ButtonType){  

    const [ index, setIndex ] = useState(0)
    const [ text, setText ] = useState(0)

    const { account } = authContex()

    const assessment = useMutation<number, Error, postAssessmentTypeRequest>({
        mutationFn: postAssessment,
        onSuccess: (data) => {
            
            if(data === 208){
                return alert("Avaliação já foi registrada!")
            }
            alert("Avaliação registrada com sucesso")

            queryClient.refetchQueries({
                queryKey: ["keyGetStarAssessment", bookId]
            })
             
            queryClient.refetchQueries({
                queryKey: ["keyGetBook", bookId]
            })
        },
        onError: () => {
            alert("Error ao registrar avaliação!")
        }
    })

    function handleStar(star: number){
        setIndex(star)
        setText(star)
    }

    async function assessmentPost( star : number ){

        if(!account){
            return 
        }

        if(!bookId){
            return
        }

        assessment.mutate({
            bookId,
            userId: account.id,
            star,
            token: account.token
        })
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

                <button 
                    className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer hover:text-font-300 ml-4"
                    type="button"
                    onClick={() => assessmentPost(index)} 
                >
                    <ChevronRight/>
                </button> 
            </div>
        </div>
    )
}