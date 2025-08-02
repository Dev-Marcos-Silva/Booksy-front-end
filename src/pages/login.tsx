import image from "../assets/img/login.webp"
import { InputText } from "../components/inputText"
import { InputPassword } from "../components/inputPassword"
import { Button } from "../components/button"
import { Link } from "react-router-dom"

export function Login(){
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
                    
                        <form className="flex flex-col gap-8 w-full">

                            <InputText type="email" placeholder="Digite seu email" label="Email"/>
                            <InputPassword isTrue={false} placeholder="Digite sua senha" label="Senha"/>

                            <Button text="Enviar" type="submit" margin="mt-4" />

                        </form>

                        <div className="flex justify-between w-full pt-2 gap-4" >
                            <Link className="text-font-100 text-lg border-b-1 border-bg-100 hover:border-b-font-100 duration-600" to={'/register'}>Crie uma conta aqui</Link>
                            <a className="text-font-100 text-lg border-b-1 border-bg-100 hover:border-b-font-100 duration-600" href="">Esqueci senha</a>
                        </div>

                        <div className="w-3 h-8 bg-bg-200 absolute left-6 -bottom-8"></div>
                </div>

            </section>

            <img className="h-screen w-2/5 object-cover" src={image} alt="imagem de uma mão pegando um livro em uma prateleira de livros" />
               
        </section>
    )
}