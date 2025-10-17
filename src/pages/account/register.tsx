import { postUser, type postUserTypeRequest} from "../../http/postUser"
import { useMutation } from "@tanstack/react-query"
import { InputText } from "../../components/inputs/inputText"
import { InputPassword } from "../../components/inputs/inputPassword"
import { BigButton } from "../../components/buttons/bigButton"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import image from "../../assets/img/register.webp"

const schemaRegister = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
})

type SchemaRegister = z.infer<typeof schemaRegister>

export function Register(){

    const {register, reset, handleSubmit} = useForm<SchemaRegister>({
        resolver: zodResolver(schemaRegister)
    })
    
    const navigate = useNavigate()

    const user = useMutation<void, Error, postUserTypeRequest >({
        mutationFn: postUser,
        onSuccess: () => {
            alert("Conta criada com sucesso")
            reset()
            navigate("/login")
        },
        onError: () => {
            alert("Algo deu errado ao criar a conta! tente novamente")
            reset()
        }
    })

    async function registerPost({name, email, password, confirmPassword}: SchemaRegister) {

        if(password !== confirmPassword || password.length < 6){
           return alert("Senhas invalidas")
        }

        user.mutate({
            name,
            email,
            password
        })  
    }

    return (
        <section className="bg-bg-primary w-screen h-screen flex justify-between items-center">

            <img className="h-screen w-2/5 object-cover" src={image} alt="imagem de uma mão pegando um livro em uma prateleira de livros" />

            <section className="flex flex-col items-center w-3/5">

                <h1 className=" text-font-100 font-primary text-4xl pb-6 font-normal">BOOKSY</h1>
    
                <div className="bg-bg-100 flex flex-col items-center w-3/5 pt-6 pb-6 px-10 gap-2 relative rounded-md shadow-xl mb-8">

                    <div className="bg-bg-100 w-8 h-full absolute -left-5 top-0 shadow-md"></div>

                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-font-100 font-primary text-3xl">Conta</h2>
                        </div>
                    
                        <form onSubmit={handleSubmit(registerPost)} className="flex flex-col gap-5 w-full" action="">

                            <InputText 
                                isBook={false} 
                                widthDiv="w-full" 
                                type="text"
                                placeholder="Digite seu nome" 
                                label="Nome"
                                {...register('name')}
                            />

                            <InputText 
                                isBook={false} 
                                widthDiv="w-full" 
                                type="email" 
                                placeholder="Digite seu email" 
                                label="Email"
                                {...register('email')}
                            />

                            <InputPassword 
                                widthDiv="w-full" 
                                isTrue 
                                placeholder="Digite sua senha" 
                                label="Criar senha"
                                {...register('password')}
                            />

                            <InputPassword 
                                widthDiv="w-full" 
                                isTrue={false} 
                                placeholder="Digite sua senha" 
                                label="Confirmar senha"
                                {...register('confirmPassword')}
                            />

                            <BigButton text="Enviar" type="submit" margin="mt-4" />
 
                        </form>

                        <div className="flex w-full pt-2 justify-end" >
                            <Link className="text-font-100 text-lg border-b-1 border-bg-100 hover:border-b-font-100 duration-600" to={'/login'}>Voltar</Link>
                        </div>

                        <div className="w-3 h-8 bg-bg-200 absolute left-6 -bottom-8"></div>
                </div>

            </section>

  
        </section>
    )
}