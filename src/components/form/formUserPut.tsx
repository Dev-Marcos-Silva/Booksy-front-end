import { postAddressPhone, type postAddressPhoneTypeRequest } from "../../http/postAddressPhone";
import { BigButton } from "../buttons/bigButton";
import { InputText } from "../inputs/inputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authContex } from "../../hook/authContext";
import { useForm } from "react-hook-form";
import z from "zod";

const schemaForm = z.object({
    ddd: z.string().min(2),
    phone: z.string().min(9),
    cep: z.string().min(8),
    street: z.string().min(3),
    number: z.string().min(1),
    neighborhood: z.string().min(3),
    city: z.string().min(3)
})

type SchemaForm = z.infer<typeof schemaForm>

export function FormUserPut(){

    const { account } = authContex()

    if(!account){
        return account
    }

    const { register, handleSubmit } = useForm<SchemaForm>({
        resolver: zodResolver(schemaForm)
    })

    const userUpdate = useMutation<void, Error, postAddressPhoneTypeRequest>({
        mutationFn: postAddressPhone,
        onSuccess: () => {
            alert("Cadastro completo com sucesso")
        },
        onError: () => {
            alert("Algo deu errado ao finalizar cadastro") 
        },
    })

    async function formUserPut(data: SchemaForm){

        if(!account){
            return account
        }

        userUpdate.mutate({
            userId: account.id,
            token: account.token,
            ...data
        })
    }

    return(
         <section className="bg-bg-100 rounded-md my-2 mx-10 pb-2" >                       
            <form onSubmit={handleSubmit(formUserPut)} >
                <div className="flex-1/2 px-8 py-6 gap-3 flex flex-col" >
                    <div className="flex gap-4 justify-center">
                        <InputText {...register('ddd')} isBook={false} widthDiv="max-w-26" type="number" className="" placeholder="00" label="DDD"/>
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
    )
}