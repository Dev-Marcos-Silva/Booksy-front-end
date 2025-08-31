import { Comment } from "../../components/ui/comment"
import { ButtonComment } from "../../components/buttons/buttonComment"
import { authContex } from "../../hook/authContext"
import { useParams } from "react-router-dom"
import { useQueries, useQuery } from "@tanstack/react-query"
import { getComment, type getCommentTypeResponse } from "../../http/getComment"
import { getUser } from "../../http/getUser"

type paramBook = {
    id: string
}

export function Comments(){

    const { account } = authContex()

    const param = useParams<paramBook>()

    if(!account){
        return
    }

    const { data: dataComments, isLoading, error } = useQuery<getCommentTypeResponse[] | null>({
        queryKey: ["keyGetComment", param.id],
        queryFn: async () =>
            await getComment({
                bookId: param.id!,
                token: account.token
        })   
    })

    const userQueries = useQueries({
        queries: ((dataComments ?? []).map(comment =>
            ({
                queryKey: ["keyGetUserComment", comment.user_id],
                queryFn: async () => 
                    await getUser({
                        userId: comment.user_id,
                        token: account.token
                }),
                enabled: !!comment.user_id
            })
        )
    )})

    if(error){
        alert("Error ao buscar comentários")
    }

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div>
                {account?.type === "USER" && <ButtonComment bookId={param.id} />}
            </div>

            {
                isLoading && <p>Carregando...</p>
            }
            {
                dataComments && 
                    dataComments.map((comment, index )=> {

                        const dataUser = userQueries[index]?.data

                        return(
                            <Comment
                                key={comment.id} 
                                commentId={comment.id}
                                name={dataUser?.name}
                                image={dataUser?.image}
                                comment={comment.comment}
                                date={comment.created_at}
                                isLibrary={account?.type === "LIBRARY"} 
                            />
                        )
                    })
            }
        </section>
    )
}