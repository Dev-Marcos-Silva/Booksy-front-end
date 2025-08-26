import { Rating } from "../../components/ui/rating";
import { ButtonRating } from "../../components/buttons/buttonRating";
import { authContex } from "../../hook/authContext";
import { useParams } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getAssessment, type getAssessmentTypeResponse } from "../../http/getAssessment";
import { getUser } from "../../http/getUser";

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
        queryKey: ["keyGetStar", param.id],
        queryFn: async () => 
            await getAssessment({
               bookId: param.id!,
               token: account.token
        })
    })

    const userQueries = useQueries({
        queries: ((dataAssessment ?? []).map(assessment =>
            ({
                queryKey: ["keyGetUser", assessment.user_id],
                queryFn: async () => 
                    await getUser({
                        userId: assessment.user_id,
                        token: account.token
                }),
                enabled: !!assessment.user_id
            })
        )
    )})

    if(error){
        alert("Error ao buscar avaliações...")
    }

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div> 
               { account?.type === "USER" && <ButtonRating/>}
            </div>

            {
                isLoading && <p>Carregando...</p>
            }
            {
                dataAssessment && 
                    dataAssessment.map((assessment, index )=> {

                        const dataUser = userQueries[index]?.data

                        return(
                            <Rating 
                                key={assessment.id}
                                name={dataUser?.name}
                                image={dataUser?.image}
                                index={assessment.star} 
                                date={assessment.created_at} 
                            />
                        )
                    })
            }
        </section>
    )
}