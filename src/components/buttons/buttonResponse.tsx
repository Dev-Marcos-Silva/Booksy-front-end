import { postResponse, type postResponseTypeRequest } from "../../http/postResponse";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { authContex } from "../../hook/authContext";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    commentId: number | undefined | null
}

const schemaComment = z.object({
    text: z.string().min(1)
})

type SchemaComment = z.infer<typeof schemaComment>

export function ButtonResponse({commentId}: ButtonType){

    const { account } = authContex()

    const {register, handleSubmit, reset} = useForm<SchemaComment>({
        resolver: zodResolver(schemaComment)
    })

    const response = useMutation<void, Error, postResponseTypeRequest>({
        mutationFn: postResponse,
        onSuccess: () => {
            alert("Resposta registrado com sucesso")
            reset()
        },
        onError: () => {
            alert("Error ao registrar resposta")
        }
    })

    async function responsePost({ text }: SchemaComment ){

        if(!account){
            return 
        }
        if(!commentId){
            return
        }

        response.mutate({
            commentId,
            libraryId: account.id,
            text,
            token: account.token
        })
    }

    return(
        <form onSubmit={handleSubmit(responsePost)} className="flex pr-2 items-center mb-4 gap-2" >              
            <input {...register("text")} className="w-full text-sm outline-0 border-b-1 border-font-400 pb-2" type="text" placeholder="Responde o comentário..." />
                                        
            <button type="submit" className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer  hover:text-font-300" >
                <ChevronRight size={20}/>
            </button>
        </form>
    )
}