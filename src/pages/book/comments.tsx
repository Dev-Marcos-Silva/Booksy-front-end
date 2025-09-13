import { Comment } from "../../components/ui/comment"
import { ButtonComment } from "../../components/buttons/buttonComment"
import { authContex } from "../../hook/authContext"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getComment, type getCommentTypeResponse } from "../../http/getComment"

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

    if(error){
        alert("Error ao buscar comentários!")
    }

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div>
                {account?.type === "USER" && <ButtonComment bookId={param.id} />}
            </div>

            {
                isLoading &&
                    <section className="w-full flex justify-center pt-10" >
                        <p>Carregando...</p>
                    </section>
            }
            {
                dataComments && 
                    dataComments.map((comment)=> {

                        const { user } = comment

                        return(
                            <Comment
                                key={comment.id} 
                                commentId={comment.id}
                                name={user.name}
                                image={user?.avatar}
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