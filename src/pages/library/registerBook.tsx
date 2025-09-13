import { postBook, type postBookTypeRequest } from "../../http/postBook"
import { useMutation } from "@tanstack/react-query"
import { categories, edition, finish, yearOfPublication } from "../../utils/listsForBooks"
import { useForm } from "react-hook-form"
import { Camera, PencilLine } from "lucide-react"
import { InputText } from "../../components/inputs/inputText"
import { TextArea } from "../../components/inputs/textArea"
import { InputSelect } from "../../components/inputs/inputSelect"
import { SmallButton } from "../../components/buttons/smallButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { authContex } from "../../hook/authContext"
import { useNavigate } from "react-router-dom"
import image from "../../assets/img/book.webp"
import z from "zod"

const schemaForm = z.object({
    author: z.string().min(3),
    title: z.string().min(3),
    description: z.string().min(1),
    category: z.string().min(1),
    edition: z.string().min(1),
    finishing: z.string().min(1),
    year_publi: z.string().min(1),
    isbn: z.string().min(13),
    dimensions: z.string().min(8),
    page: z.string().min(1),           
    amount: z.string().min(1),   
})

type SchemaForm = z.infer<typeof schemaForm>

export function RegisterBook(){

    const {register, handleSubmit} = useForm<SchemaForm>({
        resolver: zodResolver(schemaForm)
    })

    const { account } = authContex()

    const navigate = useNavigate()

    const [ valueCheckBox, setValueCheckBox ] = useState(false)

    const [ imageState, setImageState ] = useState<string | null >(null)

    const book = useMutation<void, Error, postBookTypeRequest>({
        mutationFn: postBook,
        onSuccess: () => {
            alert("Livro registado com sucesso")
            navigate("/library")
        },
        onError: () => {
            alert("Algo deu errado ao registar o livro!") 
        }
    })

    function handleImage(file: FileList | null){
        
        if(file){
            const fileImage = file[0]
            setImageState(URL.createObjectURL(fileImage))
        }
    }

    function handleCheckBox(){
        setValueCheckBox(!valueCheckBox)
    }

    async function formBookPost(data: SchemaForm){

        const {category, edition, finishing, year_publi} = data

        if(imageState === null){
            return alert("Adicionar uma imagem da biblioteca!")
        }

        if(!account?.id){
            return alert("Usuário não encontrado!")
        }

        if(
            category === "default" || 
            edition === "default" || 
            finishing === "default" || 
            year_publi === "default")
        {
            return alert("Preencha corretamente para registrar o livro!")
        }

        const availability = valueCheckBox? "available": "unavailable"

        const dataBook = {
            libraryId: account.id, 
            token: account.token, 
            image: imageState, 
            availability, 
            ...data 
        }

        book.mutate(dataBook)
    }

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <PencilLine size={38} />
                    <h1>Cadastrar livros</h1>
                </div>
            </header>
            <main className="overflow-y-scroll flex items-center justify-center h-full w-full">
                <section className="rounded-md w-full my-2 mx-18" >
                   <form onSubmit={handleSubmit(formBookPost)} className="flex gap-6">
                         <div className="flex-1/5 flex flex-col gap-2" > 

                            <div className="relative h-62" >

                                <img className="border-1 h-full w-full border-font-200 rounded-lg object-cover" src={imageState? imageState: image} alt="" />

                                <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-52 right-0 rounded-lg border-1 border-but-200 " >
                                    <Camera color="#FA7248" size={32}/>
                                </button>
                                <input 
                                    className="absolute w-10 h-10 pt-11 top-51 right-0 rounded-xl cursor-pointer" 
                                    type="file"
                                    onChange={e => handleImage(e.target.files) }
                                />
                            </div>
                        
                            <div className="bg-font-500 p-6 py-6 border-1 border-font-200 rounded-lg flex flex-col gap-2" >
                                <InputSelect valueDefault={null} {...register("category")} label="Categoria/Genero" options={categories} />
                                <InputSelect valueDefault={null} {...register("edition")} label="Edição" options={edition} />
                                <InputSelect valueDefault={null} {...register("year_publi")} label="Ano de publicação" options={yearOfPublication} />
                                <InputSelect valueDefault={null} {...register("finishing")} label="Acabamento" options={finish} />
                            </div>

                        </div>

                        <div className="bg-font-500 flex-2/3 px-8 py-3 w-full flex flex-col gap-3  border-1 border-font-200 rounded-lg" >
    
                            <InputText {...register("author")} isBook widthDiv="w-full" type="text" placeholder="Digite o nome do autor(a)" label="Autor(a) do livro"/>

                            <InputText {...register("title")} isBook widthDiv="w-full" type="text" placeholder="Digite o título do livro" label="Título do livro"/>

                            <TextArea {...register("description")} placeholder="Digite a descrição" label="Descrição, Resumo ou Sinopse"/>

                            <div className="flex gap-4 justify-center">
                                <InputText {...register("page")} isBook widthDiv="w-full" type="number" placeholder="000" label="Páginas"/>
                                <InputText {...register("amount")} isBook widthDiv="w-full" type="number" placeholder="000" label="Quantidade"/>
                            </div>

                            <InputText {...register("isbn")} isBook widthDiv="w-full" type="text" placeholder="0000000000000" label="ISBN"/>

                            <InputText {...register("dimensions")} isBook widthDiv="w-full" type="text" placeholder="00x00x00" label="Dimensões"/>

                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-2" >
                                    <input onChange={handleCheckBox} className="w-5 h-5" type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">Disponivel</label>
                                </div>

                                <SmallButton 
                                    type="submit" 
                                    text="Salva" 
                                    isSave={true}
                                />
                            </div>
                        </div>
                    </form>    
                </section>
            </main>
        </section>
    )
}