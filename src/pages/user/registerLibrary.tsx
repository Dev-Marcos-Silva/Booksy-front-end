import { postLibrary, type postLibraryTypeRequest } from "../../http/postLibrary"
import { useMutation } from "@tanstack/react-query"
import { authContex } from "../../hook/authContext"
import { useNavigate } from "react-router-dom"
import { PencilLine, Camera } from "lucide-react"
import { InputText } from "../../components/inputs/inputText"
import { InputPassword } from "../../components/inputs/inputPassword"
import { BigButton } from "../../components/buttons/bigButton"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import z from "zod"
import image from '../../assets/img/house.webp'

const schemaForm = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    ddd: z.string().min(2),
    phone: z.string().min(9),
    cnpj: z.string().min(14),
    cep: z.string().min(8),
    street: z.string().min(3),
    number: z.string().min(1),
    neighborhood: z.string().min(3),
    city: z.string().min(3)
})

type SchemaForm = z.infer<typeof schemaForm>

export function RegisterLibrary(){

    const { register, reset, handleSubmit } = useForm<SchemaForm>({
        resolver: zodResolver(schemaForm)
    })

    const { account, logout } = authContex()

    const navigate = useNavigate()

    const [ imageState, setImageState ] = useState<string | null >(null) 

    const library = useMutation<void, Error, postLibraryTypeRequest>({
        mutationFn: postLibrary,
        onSuccess: () => {
            alert("Conta criada com sucesso, faça login novamente para entra como biblioteca")
            reset()
            logout()
            navigate("/login")
        },
        onError: () => {
            alert("Algo deu errado ao criar a contar!") 
        }
    })

    function handleImage(file: FileList | null){
        
        if(file){
            const fileImage = file[0]
            setImageState(URL.createObjectURL(fileImage))
        }
    }

    async function formLibraryPost(data: SchemaForm){

        const { password, confirmPassword } = data

        if(!account?.id){
            return alert("Usuário não encontrado!")
        }

        if( password !== confirmPassword ){
            return alert("Senha invalidas!")
        }

        if(imageState === null){
            return alert("Adicionar uma imagem da biblioteca!")
        }

        const dataLibrary = {
            userId: account.id, 
            token: account.token, 
            image: imageState, 
            ...data 
        }

        library.mutate(dataLibrary)
    }

    return(
        <section className='bg-bg-primary h-full flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <PencilLine size={38} />
                    <h1>Cadastrar sua biblioteca</h1>
                </div>
            </header>
            <main className="flex items-center justify-between h-full" >
                <section className="bg-bg-100 rounded-md w-full my-2 mx-10 pb-2" >

                   <form onSubmit={handleSubmit(formLibraryPost)} className="flex">

                        <div className="flex-1/2 px-8 py-6 flex flex-col items-center gap-3" > 
                           
                            <div className="relative max-h-30 max-w-40" >
                                <img className="h-30 w-40 border-1 border-but-200 rounded-lg object-cover" src={imageState? imageState: image } alt="" />
                                <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-20 -right-5 rounded-xl border-1 border-but-200 " >
                                    <Camera color="#FA7248" size={32}/>
                                </button>
                                <input 
                                    className="absolute w-10 h-10 pt-11 top-19 -right-5 rounded-xl cursor-pointer" 
                                    type="file" 
                                    onChange={e => handleImage(e.target.files)}
                                />
                            </div>
                          

                            <InputText {...register('name')} isBook={false} widthDiv="w-full" type="text" placeholder="Digite o nome da biblioteca" label="Nome da biblioteca"/>
                            <InputText {...register('email')} isBook={false} widthDiv="w-full" type="email" placeholder="Digite o email da biblioteca" label="Email"/>
                            <InputPassword {...register('password')} widthDiv="w-full" isTrue placeholder="Digite sua senha" label="Criar senha"/>
                            <InputPassword {...register('confirmPassword')} widthDiv="w-full" isTrue={false} placeholder="Digite sua senha" label="Confirmar senha"/>

                        </div>

                        <div className="flex-1/2 px-8 py-6 w-full flex flex-col gap-3" >
                             <div className="flex gap-4 justify-center">
                                <InputText {...register('ddd')} isBook={false} widthDiv="max-w-26" type="number"  placeholder="00" label="DDD"/>
                                <InputText {...register('phone')} isBook={false} widthDiv="w-full" type="number"  placeholder="000000000" label="Telefone de contato"/>
                            </div>

                            <InputText {...register('cnpj')} isBook={false} widthDiv="w-full" type="number"  placeholder="00000000000000" label="CNPJ"/>
                            <InputText {...register('cep')} isBook={false} widthDiv="w-full" type="number"  placeholder="00000000" label="CEP"/>

                            <div className="flex gap-4 justify-center" >
                                <InputText {...register('street')} isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome da rua" label="Nome da rua"/>
                                <InputText {...register('number')} isBook={false} widthDiv="" type="text"  placeholder="000" label="Número"/>  
                            </div>

                             <div className="flex gap-4 justify-center" >
                                <InputText {...register('neighborhood')} isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome do Bairro" label="Bairro"/>
                                <InputText {...register('city')} isBook={false} widthDiv="w-full" type="text"  placeholder="Cidade" label="Cidade"/>  
                            </div>

                            <BigButton type="submit" text="Enviar" margin="mt-4" />
                        </div>

                    </form> 
                </section>
            </main>
        </section>
    )
}