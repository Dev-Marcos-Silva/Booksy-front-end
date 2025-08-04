import { PencilLine, Camera } from "lucide-react"
import { InputText } from "../components/inputText"
import { InputPassword } from "../components/inputPassword"
import { BigButton } from "../components/bigButton"
import image from '../assets/img/profile.webp'

export function UserProfile(){

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

                    <form className="flex ">
                        <div className="flex-1/2 px-8 py-6 flex flex-col items-center gap-3" > 

                            <div className="relative max-h-30 max-w-30" >
                                <img className="max-h-30 max-w-30 border-1 border-but-200 rounded-full" src={image} alt="" />
                                <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-20 right-0 rounded-xl border-1 border-but-200 " >
                                    <Camera color="#FA7248" size={32}/>
                                </button>
                                <input className="absolute w-10 h-10 pt-11 top-19 right-0 rounded-xl cursor-pointer" type="file" name="" id="" />
                            </div>
                           

                            <InputText isBook={false} widthDiv="w-full" className="inline" type="text" placeholder="Digite seu nome" label="Nome de usuário"/>
                            <InputText isBook={false} widthDiv="w-full" className="inline" type="email" placeholder="Digite seu email" label="Novo email"/>
                            <InputPassword widthDiv="w-full" className="inline" isTrue placeholder="Digite a nova senha" label="Nova senha"/>
                            <InputPassword widthDiv="w-full" className="inline" isTrue={false} placeholder="Digite a antiga senha" label="Antiga senha"/>

                        </div>

                        <div className="flex-1/2 px-8 py-6 gap-3 flex flex-col" >
                            <div className="flex gap-4 justify-center">
                                <InputText isBook={false} widthDiv="max-w-26" type="text"  placeholder="00" label="DDD"/>
                                <InputText isBook={false} widthDiv="w-full" type="text"  placeholder="000000000" label="Telefone de contato"/>
                            </div>

                            <InputText isBook={false} widthDiv="w-full" type="text"  placeholder="00000-000" label="CEP"/>

                            <div className="flex gap-4 justify-center" >
                                <InputText isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome da rua" label="Nome da rua"/>
                                <InputText isBook={false} widthDiv="" type="text"  placeholder="000" label="Número"/>
                            </div>

                            <div className="flex gap-4 justify-center" >
                                <InputText isBook={false} widthDiv="w-full" type="text"  placeholder="Digite o nome do Bairro" label="Bairro"/>
                                <InputText isBook={false} widthDiv="w-full" type="text"  placeholder="Cidade" label="Cidade"/>  
                            </div>

                            <BigButton  
                                type="button" 
                                text="Enviar" 
                                margin="mt-20"
                                onClick={() => {
                                console.log('update')
                                }} 
                            />
                        </div>
                    </form> 

                </section>
            </main>
        </section>
    )
}