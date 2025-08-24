import { Camera, PencilLine } from "lucide-react"
import { InputText } from "../../components/inputs/inputText"
import { InputPassword } from "../../components/inputs/inputPassword"
import { BigButton } from "../../components/buttons/bigButton"
import { authContex } from "../../hook/authContext"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../service/api"
import z from "zod"
import image from "../../assets/img/house.webp"

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

export function LibraryProfile(){

    const { register, handleSubmit } = useForm<SchemaForm>({
        resolver: zodResolver(schemaForm)
    })

    const { account } = authContex()

    const avatar = account?.image? `${api.defaults.baseURL}/upload/library/${account.image}` : image

    const [ imageState, setImageState ] = useState<string>(avatar)

    function handleImage(file: FileList | null){

        if(file){
            const fileImage = file[0]
            setImageState(URL.createObjectURL(fileImage))
        }
    }

    async function formLibraryPut(data: SchemaForm){
        console.log(data, imageState)  
    }

    return(
        <section className='bg-bg-primary h-full flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <PencilLine size={38} />
                    <h1>Atualização de informações</h1>
                </div>
            </header>
            <main className="flex items-center justify-center h-full w-full">
                <section className="bg-bg-100 rounded-md w-full my-2 mx-10 pb-2" >
                   <form onSubmit={handleSubmit(formLibraryPut)}  className="flex">
                         <div className="flex-1/2 px-8 py-6 flex flex-col items-center gap-3" > 
                         
                            <div className="relative max-h-30 max-w-40" >
                                <img className="h-30 w-40 border-1 border-but-200 rounded-lg object-cover" src={imageState} alt="" />
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
                            <InputText {...register('email')} isBook={false} widthDiv="w-full" type="email" placeholder="Digite o email da biblioteca" label="Novo email"/>
                            <InputPassword {...register('newPassword')} widthDiv="w-full" isTrue placeholder="Digite a nova senha" label="Nova senha"/>
                            <InputPassword {...register('oldPassword')} widthDiv="w-full" isTrue={false} placeholder="Digite a antiga senha" label="Antiga senha"/>

                        </div>

                        <div className="flex-1/2 px-8 py-6 w-full flex flex-col gap-3" >
                             <div className="flex gap-4 justify-center">
                                <InputText {...register('ddd')} isBook={false} widthDiv="max-w-26" type="number"  placeholder="00" label="DDD"/>
                                <InputText {...register('phone')} isBook={false} widthDiv="w-full" type="number"  placeholder="000000000" label="Telefone de contato"/>
                            </div>

                            <InputText {...register('cep')} isBook={false} widthDiv="w-full" type="number"  placeholder="00000-000" label="CEP"/>

                            <div className="flex gap-4 justify-center" >
                                <InputText {...register('street')} isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome da rua" label="Nome da rua"/>
                                <InputText {...register('number')} isBook={false} widthDiv="" type="text"  placeholder="000" label="Número"/>  
                            </div>

                             <div className="flex gap-4 justify-center" >
                                <InputText {...register('neighborhood')} isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome do Bairro" label="Bairro"/>
                                <InputText {...register('city')} isBook={false} widthDiv="w-full" type="text"  placeholder="Cidade" label="Cidade"/>  
                            </div>

                            <BigButton 
                                type="submit" 
                                text="Enviar" 
                                margin="mt-20" 
                            />
                        </div>
                    </form> 

                </section>
            </main>
        </section>
    )
}