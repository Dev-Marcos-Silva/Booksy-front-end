import { PencilLine, Camera } from "lucide-react"
import { InputText } from "../components/inputText"
import { InputPassword } from "../components/inputPassword"
import { Button } from "../components/button"
import image from '../assets/img/house.webp'

export function RegisterLibrary(){
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
                   <form className="flex">

                        <div className="flex-1/2 px-8 py-6 flex flex-col gap-3" > 
                            <div className="w-full flex justify-center">
                                <div className="relative max-h-30 max-w-40" >
                                    <img className="h-30 w-40 border-1 border-but-200 rounded-lg" src={image} alt="" />
                                    <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-20 -right-5 rounded-xl border-1 border-but-200 " >
                                        <Camera color="#FA7248" size={32}/>
                                    </button>
                                    <input className="absolute w-10 h-10 pt-11 top-19 -right-5 rounded-xl cursor-pointer" type="file" name="" id="" />
                                </div>
                            </div>

                            <InputText widthDiv="w-full" type="text" placeholder="Digite o nome da biblioteca" label="Nome da biblioteca"/>
                            <InputText widthDiv="w-full" type="email" placeholder="Digite o email da biblioteca" label="Email"/>
                            <InputPassword widthDiv="w-full" isTrue placeholder="Digite sua senha" label="Criar senha"/>
                            <InputPassword widthDiv="w-full" isTrue={false} placeholder="Digite sua senha" label="Confirmar senha"/>

                        </div>

                        <div className="flex-1/2 px-8 py-6 w-full flex flex-col gap-3" >
                             <div className="flex gap-4 justify-center">
                                    <InputText widthDiv="max-w-26" type="text"  placeholder="00" label="DDD"/>
                                    <InputText widthDiv="w-full" type="text"  placeholder="000000000" label="Telefone de contato"/>
                            </div>

                            <InputText widthDiv="w-full" type="text"  placeholder="Digite seu cnpj" label="CNPJ"/>
                            <InputText widthDiv="w-full" type="text"  placeholder="00000-000" label="CEP"/>

                            <div className="flex gap-4 justify-center" >
                                <InputText widthDiv="w-full" type="text"  placeholder="Digite o nome da rua" label="Nome da rua"/>
                                <InputText widthDiv="" type="text"  placeholder="000" label="Número"/>  
                            </div>

                             <div className="flex gap-4 justify-center" >
                                <InputText widthDiv="w-full" type="text"  placeholder="Digite o nome do Bairro" label="Bairro"/>
                                <InputText widthDiv="w-full" type="text"  placeholder="Cidade" label="Cidade"/>  
                            </div>

                            <Button type="submit" text="Enviar" margin="mt-4" />
                        </div>

                    </form> 
                </section>
            </main>
        </section>
    )
}