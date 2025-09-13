import { putUserImage, type putUserImageTypeRequest } from "../../http/putUserImage"
import { getUser, type getUserTypeResponse } from "../../http/getUser"
import { putUser, type putUserTypeRequest } from "../../http/putUser"
import { PencilLine, Camera } from "lucide-react"
import { InputText } from "../../components/inputs/inputText"
import { InputPassword } from "../../components/inputs/inputPassword"
import { BigButton } from "../../components/buttons/bigButton"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authContex } from "../../hook/authContext"
import { useEffect, useState } from "react"
import { api } from "../../service/api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { FormUserPut } from "../../components/form/formUserPut"
import { queryClient } from "../../service/queryClient"
import image from '../../assets/img/profile.webp'
import z from "zod"

const schemaForm = z.object({
    name: z.string(),
    email: z.string(),
    newPassword: z.string(),
    oldPassword: z.string().min(6),
    ddd: z.string(),
    phone: z.string(),
    cep: z.string(),
    street: z.string(),
    number: z.string(),
    neighborhood: z.string(),
    city: z.string()
})

type SchemaForm = z.infer<typeof schemaForm>

export function UserProfile(){

    const { register, handleSubmit } = useForm<SchemaForm>({
        resolver: zodResolver(schemaForm)
    })

    const { account } = authContex()

    if(!account){
        return
    }

    const { data: user, error } = useQuery<getUserTypeResponse>({
        queryKey: [ "keyGetUser", account.id ],
        queryFn: async () => 
            await getUser({
                userId: account.id,
                token: account.token
        })
    })

    if(error){
        return
    }
 
    function handleImage(file: FileList | null){

        if(file){
            const fileImage = file[0]
            setImageState(URL.createObjectURL(fileImage))
        }
    }

    const userUpdate = useMutation<void, Error, putUserTypeRequest>({
        mutationFn: putUser,
        onSuccess:  () => {
            alert("Informações atualizada com sucesso")

            queryClient.refetchQueries({
                queryKey: [ "keyGetUserAccount", account.id ],
            })
        },
        onError: () => {
            alert("Algo deu errado ao atualizar as informações!") 
        },
    })

    const userImage = useMutation<void, Error, putUserImageTypeRequest>({
        mutationFn: putUserImage,
        onSuccess: () => {
            alert("Imagem atualizada com sucessso")
        },
        onError: () => {
            alert("Algo deu errado ao atualizar a imagem!") 
        }
    })
 
    async function formUserPut(data: SchemaForm){

        if(!account){
            return
        }
        
        userUpdate.mutate({
            userId: account.id,
            token: account.token,
            ...data
        })

        if(imageState.includes("blob")){
            userImage.mutate({
                image: imageState,
                userId: account.id,
                token: account.token
            })
        }
    }

    const [ imageState, setImageState ] = useState<string>(image)

    useEffect(() => {

        const avatar = user?.image? `${api.defaults.baseURL}/upload/profile/${user.image}` : image

        setImageState(avatar)

    }, [user])

    return(
        <section className='bg-bg-primary h-full flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <PencilLine size={38} />
                    {
                        user &&
                            user.cep?
                            <h1>Atualização de informações</h1>
                            :
                            <h1>Adicionar um endereço e telefone</h1>
                    }
                </div>
            </header>
            <main className="flex items-center justify-center h-full w-full">
                {   
                    user &&
                        user.cep?
                            <section className="bg-bg-100 rounded-md w-full my-2 mx-10 pb-2" >
                                <form onSubmit={handleSubmit(formUserPut)}  className="flex ">
                                    <div className="flex-1/2 px-8 py-6 flex flex-col items-center gap-3" > 

                                        <div className="relative max-h-30 max-w-30" >
                                            <img className="h-30 w-30 border-1 border-but-200 rounded-full object-cover" src={imageState} alt={`Imagem do usuário ${user.name}`} />
                                            <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-20 right-0 rounded-xl border-1 border-but-200 " >
                                                <Camera color="#FA7248" size={32}/>
                                            </button>
                                            <input  
                                                className="absolute w-10 h-10 pt-11 top-19 right-0 rounded-xl cursor-pointer" 
                                                type="file"
                                                onChange={e => handleImage(e.target.files)} 
                                            />
                                        </div>
                                        
                                        <InputText defaultValue={user?.name} {...register('name')} isBook={false} widthDiv="w-full" className="inline" type="text" placeholder="Digite seu nome" label="Nome de usuário"/>
                                        <InputText defaultValue={user?.email} {...register('email')} isBook={false} widthDiv="w-full" className="inline" type="email" placeholder="Digite seu email" label="Novo email"/>
                                        <InputPassword {...register('newPassword')} widthDiv="w-full" className="inline" isTrue placeholder="Digite a nova senha" label="Nova senha"/>
                                        <InputPassword {...register('oldPassword')} widthDiv="w-full" className="inline" isTrue={false} placeholder="Digite a antiga senha" label="Antiga senha"/>

                                    </div>

                                    <div className="flex-1/2 px-8 py-6 gap-3 flex flex-col" >
                                        <div className="flex gap-4 justify-center">
                                            <InputText defaultValue={user?.ddd} {...register('ddd')} isBook={false} widthDiv="max-w-26" type="number" className="" placeholder="00" label="DDD"/>
                                            <InputText defaultValue={user?.phone} {...register('phone')} isBook={false} widthDiv="w-full" type="number"  placeholder="000000000" label="Telefone de contato"/>
                                        </div>

                                        <InputText defaultValue={user?.cep} {...register('cep')} isBook={false} widthDiv="w-full" type="number"  placeholder="00000000" label="CEP"/>

                                        <div className="flex gap-4 justify-center" >
                                            <InputText defaultValue={user?.street} {...register('street')} isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome da rua" label="Nome da rua"/>
                                            <InputText defaultValue={user?.number} {...register('number')} isBook={false} widthDiv="" type="text"  placeholder="000" label="Número"/>
                                        </div>

                                        <div className="flex gap-4 justify-center" >
                                            <InputText defaultValue={user?.neighborhood} {...register('neighborhood')} isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome do Bairro" label="Bairro"/>
                                            <InputText defaultValue={user?.city} {...register('city')} isBook={false} widthDiv="w-full" type="text"  placeholder="Cidade" label="Cidade"/>  
                                        </div>

                                        <BigButton  
                                            type="submit" 
                                            text="Enviar" 
                                            margin="mt-20"
                                        />
                                    </div>
                                </form>
                            </section> 
                            : 
                            <FormUserPut/>
                }
            </main>
        </section>
    )
}