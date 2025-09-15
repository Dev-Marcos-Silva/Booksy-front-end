import { postSession, type PostSessionTypeResponse, type PostSessionTypeRequest } from "../../http/postSession"
import { useMutation } from "@tanstack/react-query"
import { InputText } from "../../components/inputs/inputText"
import { InputPassword } from "../../components/inputs/inputPassword"
import { BigButton } from "../../components/buttons/bigButton"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { authContex } from "../../hook/authContext"
import image from "../../assets/img/login.webp"

const schemaLogin = z.object({
    email: z.email(),
    password: z.string().min(6)
})

type SchemaLogin = z.infer<typeof schemaLogin>

export function Login(){

    const { register, reset, handleSubmit } = useForm<SchemaLogin>({
        resolver: zodResolver(schemaLogin)
    })

    const { login } = authContex()

    const navigate = useNavigate()

    const session = useMutation<PostSessionTypeResponse, Error, PostSessionTypeRequest>({
        mutationFn: postSession,
        onSuccess: (data) => {
            login(data)

            if(data.type == "USER"){
                navigate('/user')
            }
            else if(data.type == "LIBRARY"){
                navigate('/library')
            }
            
            reset()  
        },
        onError: () => {
            alert("Email ou senha incorreto!!")
            reset()  
        }
    })

    async function loginPost({email, password }: SchemaLogin) {
        session.mutate({
            email,
            password
        })
    }

    return (
        <section className="bg-bg-primary w-screen h-screen flex justify-between items-center">

            <section className="flex flex-col items-center w-3/5">

                <h1 className=" text-font-100 font-primary text-4xl pb-6 font-normal">BOOKSY</h1>
    
                <div className="bg-bg-100 flex flex-col items-center w-3/5 pt-10 pb-16 px-10 gap-6 relative rounded-md shadow-xl mb-8">

                    <div className="bg-bg-100 w-8 h-full absolute -left-5 top-0 shadow-md"></div>

                        <div className="flex flex-col items-center w-full gap-2">
                            <h2 className="text-font-100 font-primary text-3xl">Login</h2>
                            <p className="text-font-100 font-primary text-lg">Digite os dados corretament</p>
                        </div>
                    
                        <form onSubmit={handleSubmit(loginPost)}  className="flex flex-col gap-8 w-full">

                            <InputText 
                                isBook={false} 
                                widthDiv="w-full" 
                                type="email" 
                                placeholder="Digite seu email" 
                                label="Email"
                                {...register('email')}
                            />

                            <InputPassword 
                                isTrue={false} 
                                widthDiv="w-full" 
                                placeholder="Digite sua senha" 
                                label="Senha"
                                {...register('password')}
                            />

                            <BigButton text="Enviar" type="submit" margin="mt-4" />

                        </form>

                        <div className="flex justify-between w-full pt-2 gap-4" >
                            <Link className="text-font-100 text-lg border-b-1 border-bg-100 hover:border-b-font-100 duration-600" to={'/register'}>Crie uma conta aqui</Link>
                        </div>

                        <div className="w-3 h-8 bg-bg-200 absolute left-6 -bottom-8"></div>
                </div>

            </section>

            <img className="h-screen w-2/5 object-cover" src={image} alt="imagem de uma mão pegando um livro em uma prateleira de livros" />
               
        </section>
    )
}