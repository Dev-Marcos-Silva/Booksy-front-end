import { Rating } from "../../components/ui/rating";
import { ButtonRating } from "../../components/buttons/buttonRating";
import { authContex } from "../../hook/authContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAssessment, type getAssessmentTypeResponse } from "../../http/getAssessment";
import { Loading } from "../../components/ui/loading";

type ParamBook = {
    id: string
}

export function Assessments(){

    const { account } = authContex()

    const param = useParams<ParamBook>()

    if(!account){
        return
    }

    const { data: dataAssessment, isLoading, error} = useQuery<getAssessmentTypeResponse[] | null>({
        queryKey: ["keyGetStarAssessment", param.id],
        queryFn: async () => 
            await getAssessment({
               bookId: param.id!,
               token: account.token
        })
    })

    if(error){
        alert("Error ao buscar avaliações...")
    }

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div> 
               { account?.type === "USER" && <ButtonRating bookId={param.id} />}
            </div>

            {
                isLoading && <Loading size={18} />
            }
            {
                dataAssessment && 
                    dataAssessment.map((assessment,  )=> {

                        const { user } = assessment

                        return(
                            <Rating 
                                key={assessment.id}
                                name={user.name}
                                image={user?.avatar}
                                index={assessment.star} 
                                date={assessment.created_at} 
                            />
                        )
                    })
            }
        </section>
    )
}