import { Rating } from "../../components/ui/rating";
import { ButtonRating } from "../../components/buttons/buttonRating";
import { authContex } from "../../hook/authContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStar, type getStarTypeResponse } from "../../http/getStar";
import { getUser, type getUserTypeResponse } from "../../http/getUser";

type ParamBook = {
    id: string
}

export function Assessments(){

    const { account } = authContex()

    const param = useParams<ParamBook>()

    if(!account){
        return
    }

    const { data: dataAssessment, isLoading, error} = useQuery<getStarTypeResponse[] | null>({
        queryKey: ["keyGetStar", param.id],
        queryFn: async () => 
            await getStar({
               bookId: param.id!,
               token: account.token
        }),

    })

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
                    dataAssessment.map(assessment => {

                        const { data: dataUser} = useQuery<getUserTypeResponse>({
                            queryKey: ["keyGetUser", assessment.id],
                            queryFn: async () => 
                                await getUser({
                                userId: assessment.user_id,
                                token: account.token
                            }),

                        })

                        return(
                            <Rating 
                                key={assessment.id}
                                name={dataUser?.name}
                                image={dataUser?.image}
                                date={assessment.created_at} 
                                index={assessment.star} 
                            />
                        )
                    })
            }
        </section>
    )
}