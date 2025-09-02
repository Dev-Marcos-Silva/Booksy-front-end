import { ChevronRight } from "lucide-react"
import imageUser from "../../assets/img/profile.webp"
import imageLibrary from "../../assets/img/house.webp"
import { api } from "../../service/api"
import { formatDate } from "../../utils/formatDate"
import { useQuery } from "@tanstack/react-query"
import { getResponse, type getResponseTypeResponse } from "../../http/getResponse"
import { authContex } from "../../hook/authContext"
import { getLibrary, type getLibraryTypeResponse } from "../../http/getLibrary"

interface CommentType{
    commentId: number
    name: string | undefined
    image: string | null
    comment: string
    date: string
    isLibrary: boolean
}

export function Comment({commentId, image, name, comment, date, isLibrary}: CommentType){

    const { account } = authContex()

    if(!account){
        return
    }

    const { data: dataResponse, isLoading, error } = useQuery<getResponseTypeResponse | null>({
        queryKey: ["keyGetResponse", commentId],
        queryFn: async () =>
            await getResponse({
                commentId: commentId,
                token: account.token
        })   
    })

    if(error){
        alert("Error ao buscar respotas")
    }

    const { data: dataLibrary} = useQuery<getLibraryTypeResponse>({
        queryKey: ["keyGetLibrary", commentId],
        queryFn: async () => 
            await getLibrary({
                libraryId: dataResponse?.library_id!,
                token: account.token
        }),
        enabled: !!dataResponse?.library_id
    })

    return (
        <section className="w-full mt-6 flex gap-2" >
            <img className="max-w-12 max-h-12 rounded-full object-cover" src={image? `${api.defaults.baseURL}/upload/profile/${image}`: imageUser} alt={`Imagem do usuário ${name}`} />
            <div className="w-full" > 
                <div>
                    <span className="font-medium text-black">{name} </span>
                        <p className="text-sm text-justify text-font-300" >
                                {comment}
                        </p>
                    <p className="text-xs text-font-300" >{formatDate(date)}</p>

                <details className="mt-2" >
                     <summary className="text-sm text-font-300 cursor-pointer">Ver resposta</summary>

                     <div className="w-full mt-2 flex gap-2 flex-col ">
                        {
                            isLibrary && dataResponse?.response === undefined ?
                                <div className="flex pr-2 items-center mb-4 gap-2" >              
                                    <input className="w-full text-sm outline-0 border-b-1 border-font-400 pb-2" type="text" placeholder="Responde o comentário..." />
                                        
                                    <button type="button" className="bg-font-400 rounded-xl p-0.5 font-medium cursor-pointer  hover:text-font-300" >
                                        <ChevronRight size={20}/>
                                    </button> 
                                </div>    
                            :   
                                <div></div>   
                        }
                        {
                            isLoading && <p>Carregando...</p>
                        }
                        {
                            dataResponse && dataLibrary &&
                                <div className="flex gap-2">
                                    <img className="max-w-12 max-h-12 rounded-full object-cover" src={dataLibrary.image? `${api.defaults.baseURL}/upload/library/${dataLibrary.image}`: imageLibrary} alt={`Imagem da biblioteca ${dataLibrary.name}`}/>
                                
                                        <div>
                                            <span className="font-medium text-black">{dataLibrary.name}</span>
                                                <p className="text-sm text-justify text-font-300">
                                                    {dataResponse.response}
                                                </p>
                                                <p className="text-xs text-font-300">
                                                    {formatDate(dataResponse.created_at)}
                                                </p>
                                        </div> 
                                </div>
                        }
                    </div>
                </details>
                    
                </div>
            </div>
        </section>
    
    )
}