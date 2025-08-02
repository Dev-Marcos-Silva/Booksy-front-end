import image from "../assets/img/register.webp"
import { InputText } from "../components/inputText"
import { InputPassword } from "../components/inputPassword"
import { Button } from "../components/button"
import { Link } from "react-router-dom"

export function Register(){
    return (
        <section className="bg-bg-primary w-screen h-screen flex justify-between items-center">

            <img className="h-screen w-2/5 object-cover" src={image} alt="imagem de uma mão pegando um livro em uma prateleira de livros" />

            <section className="flex flex-col items-center w-3/5">

                <h1 className=" text-font-100 font-primary text-4xl pb-6 font-normal">BOOKSY</h1>
    
                <div className="bg-bg-100 flex flex-col items-center w-3/5 pt-6 pb-6 px-10 gap-2 relative rounded-md shadow-xl mb-8">

                    <div className="bg-bg-100 w-8 h-full absolute -left-5 top-0 shadow-md"></div>

                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-font-100 font-primary text-3xl">Criar</h2>
                        </div>
                    
                        <form className="flex flex-col gap-5 w-full" action="">

                            <InputText type="text" placeholder="Digite seu nome" label="Nome"/>
                            <InputText type="email" placeholder="Digite seu email" label="Email"/>
                            <InputPassword isTrue placeholder="Digite sua senha" label="Criar senha"/>
                            <InputPassword isTrue={false} placeholder="Digite sua senha" label="Confirmar senha"/>

                            <Button text="Enviar" type="submit" margin="mt-4" />

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