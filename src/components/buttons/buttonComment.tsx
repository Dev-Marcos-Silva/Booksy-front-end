import { postComment, type postCommentTypeRequest } from "../../http/postComment";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { authContex } from "../../hook/authContext";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bookId: string | undefined | null
}

const schemaComment = z.object({
    text: z.string().min(1)
})

type SchemaComment = z.infer<typeof schemaComment>

export function ButtonComment({bookId}: ButtonType){

    const { account } = authContex()

    const {register, handleSubmit, reset} = useForm<SchemaComment>({
        resolver: zodResolver(schemaComment)
    })

    const comment = useMutation<void, Error, postCommentTypeRequest>({
        mutationFn: postComment,
        onSuccess: () => {
            alert("Comentário registrado com sucesso")
            reset()
        },
        onError: () => {
            alert("Error ao registrar comentário")
        }
    })

    async function commentPost({ text }: SchemaComment ){

        if(!account){
            return 
        }
        if(!bookId){
            return
        }

        comment.mutate({
            bookId,
            userId: account.id,
            text,
            token: account.token
        })

    }

    return(
         <form onSubmit={handleSubmit(commentPost)} className="flex pr-2 items-center m-b-4 gap-2" >              
            <input {...register("text")} className="w-full outline-0 border-b-1 border-font-400 pb-2" type="text" placeholder="Adicione um comentário..." />
             
            <button type="submit" className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer  hover:text-font-300" >
                <ChevronRight/>
            </button> 
        </form>
    )
}