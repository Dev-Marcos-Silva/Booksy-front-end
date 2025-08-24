import { Camera, PencilLine } from "lucide-react"
import { InputText } from "../../components/inputs/inputText"
import { TextArea } from "../../components/inputs/textArea"
import { InputSelect } from "../../components/inputs/inputSelect"
import { SmallButton } from "../../components/buttons/smallButton"
import image from "../../assets/img/book.webp"
import { categories, edition, finish, yearOfPublication } from "../../utils/listsForBooks"

export function UpdateBook(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <PencilLine size={38} />
                    <h1>Editar informações do livro</h1>
                </div>
            </header>
            <main className="flex items-center justify-center h-full w-full">
                <section className="rounded-md w-full my-2 mx-18" >
                   <form className="flex gap-6">
                         <div className="flex-1/5 flex flex-col gap-2" > 

                            <div className="relative h-60" >

                                <img className="border-1 h-full w-full border-font-200 rounded-lg object-cover" src={image} alt="" />

                                <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-50 right-0 rounded-lg border-1 border-but-200 " >
                                    <Camera color="#FA7248" size={32}/>
                                </button>
                                <input className="absolute w-10 h-10 pt-11 top-49 right-0 rounded-xl cursor-pointer" type="file" name="" id="" />
                            </div>
                        
                            <div className="bg-font-500 p-6 py-6 border-1 border-font-200 rounded-lg flex flex-col gap-2" >
                                <InputSelect label="Categoria/Genero" options={categories} />
                                <InputSelect label="Edição" options={edition} />
                                <InputSelect label="Ano de publicação" options={yearOfPublication} />
                                <InputSelect label="Acabamento" options={finish} />
                               
                            </div>

                        </div>

                        <div className="bg-font-500 flex-2/3 px-8 py-3 w-full flex flex-col gap-3  border-1 border-font-200 rounded-lg" >
    
                            <InputText isBook widthDiv="w-full" type="text"  placeholder="Digite o nome do autor(a)" label="Autor(a) do livro"/>

                            <InputText isBook widthDiv="w-full" type="text"  placeholder="Digite o título do livro" label="Título do livro"/>

                            <TextArea placeholder="Digite a descrição" label="Descrição, Resumo ou Sinopse"/>

                            <div className="flex gap-4 justify-center">
                                <InputText isBook widthDiv="w-full" type="text"  placeholder="000" label="Páginas"/>
                                <InputText isBook widthDiv="w-full" type="text"  placeholder="000" label="Quantidade"/>
                            </div>

                            <InputText isBook widthDiv="w-full" type="text"  placeholder="0000000000000" label="ISBN"/>

                            <InputText isBook widthDiv="w-full" type="text"  placeholder="00x00x00" label="Dimensões"/>

                            <div className="flex justify-between items-center mt-2">
                                <span className="flex items-center gap-2" >
                                    <input className="w-5 h-5" type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">Disponivel</label>
                                </span>

                                <div className="flex gap-8">
                                     <SmallButton text="Excluir" isSave={false} />
                                     <SmallButton text="Salva" isSave={true} />
                                </div>
                            </div>
                
                        </div>
                    </form>    
                </section>
            </main>
        </section>
    )
}