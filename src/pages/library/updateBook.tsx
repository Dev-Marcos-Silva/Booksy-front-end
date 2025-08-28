import { getBook, type getBooksTypeResponse } from "../../http/getbook"
import { putBook, type putBookTypeRequest } from "../../http/putBook"
import { Camera, PencilLine } from "lucide-react"
import { InputText } from "../../components/inputs/inputText"
import { TextArea } from "../../components/inputs/textArea"
import { InputSelect } from "../../components/inputs/inputSelect"
import { SmallButton } from "../../components/buttons/smallButton"
import { categories, edition, finish, yearOfPublication } from "../../utils/listsForBooks"
import { useParams } from "react-router-dom"
import { authContex } from "../../hook/authContext"
import { useQuery, useMutation } from "@tanstack/react-query"
import { api } from "../../service/api"
import { useState } from "react"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const schemaForm = z.object({
    author: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    edition: z.string(),
    finishing: z.string(),
    year_publi: z.string(),
    isbn: z.string(),
    dimensions: z.string(),
    page: z.string(),           
    amount: z.string(),   
})

type SchemaForm = z.infer<typeof schemaForm>

type ParamBook = {
    id: string
}

export function UpdateBook(){

    const {register, handleSubmit} = useForm<SchemaForm>({
        resolver: zodResolver(schemaForm)
    })

    const { account } = authContex()

    const param = useParams<ParamBook>()

    if(!account){
        return
    }

    const { data: dataBook, isLoading, error} = useQuery<getBooksTypeResponse>({
        queryKey: ["keyGetBook", param.id],
        queryFn: async () => 
            await getBook({
               bookId: param.id!,
               token: account.token
        }),    
    })

    if(error){
        alert("Error ao buscar livro...")
    }

    const [ imageState, setImageState ] = useState<string>("")

    const [ valueCheckBox, setValueCheckBox ] = useState<boolean>(false)

    function handleImage(file: FileList | null){
        
        if(file){
            const fileImage = file[0]
            setImageState(URL.createObjectURL(fileImage))
        }
    }

    function handleCheckBox(){
        setValueCheckBox(!valueCheckBox)
    }

    const book = useMutation<void, Error, putBookTypeRequest>({
        mutationFn: putBook,
        onSuccess: () => {
            alert("Livro atualizado com sucesso")
        },
        onError: () => {
            alert("Algo deu errado ao atualizar as informações do livro!") 
        }
    })

    async function formBookPut(data: SchemaForm){
    
        if(!account?.id){
            return alert("Usuário não encontrado")
        }
    
        const availability = valueCheckBox? "available": "unavailable"
       
        const dataBook = {
            bookId: param.id!,
            token: account.token,  
            availability, 
            ...data 
        }

        book.mutate(dataBook)

        if(imageState.length > 1){
            return alert("vou atualizar a imagem")
        }
    }

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <PencilLine size={38} />
                    <h1>Editar informações do livro</h1>
                </div>
            </header>
            { 
                isLoading && <p>Carregando...</p>
            }
            {
                dataBook && 
                    <main className="flex items-center justify-center h-full w-full">
                        <section className="rounded-md w-full my-2 mx-18" >
                            <form onSubmit={handleSubmit(formBookPut)} className="flex gap-6">
                                <div className="flex-1/5 flex flex-col gap-2" > 

                                    <div className="relative h-60" >

                                        <img className="border-1 h-full w-full border-font-200 rounded-lg object-cover" src={imageState? imageState: `${api.defaults.baseURL}/upload/book/${dataBook.image}`} alt={`Imagem do livro ${dataBook.title}`}  />

                                        <button className="absolute flex justify-center items-center bg-bg-primary w-10 h-10 top-50 right-0 rounded-lg border-1 border-but-200 " >
                                            <Camera color="#FA7248" size={32}/>
                                        </button>
                                        <input 
                                            className="absolute w-10 h-10 pt-11 top-49 right-0 rounded-xl cursor-pointer" 
                                            type="file"
                                            onChange={e => handleImage(e.target.files)} 
                                        />
                                    </div>
                                
                                    <div className="bg-font-500 p-6 py-6 border-1 border-font-200 rounded-lg flex flex-col gap-2" >
                                        <InputSelect defaultValue={dataBook.category} {...register("category")} label="Categoria/Genero" options={categories} />
                                        <InputSelect defaultValue={dataBook.edition} {...register("edition")} label="Edição" options={edition} />
                                        <InputSelect defaultValue={dataBook.year_publi} {...register("year_publi")} label="Ano de publicação" options={yearOfPublication} />
                                        <InputSelect defaultValue={dataBook.finishing} {...register("finishing")} label="Acabamento" options={finish} />
                                    
                                    </div>

                                </div>

                                <div className="bg-font-500 flex-2/3 px-8 py-3 w-full flex flex-col gap-3  border-1 border-font-200 rounded-lg" >
            
                                    <InputText defaultValue={dataBook.author} {...register("author")} isBook widthDiv="w-full" type="text" placeholder="Digite o nome do autor(a)" label="Autor(a) do livro"/>

                                    <InputText defaultValue={dataBook.title} {...register("title")} isBook widthDiv="w-full" type="text" placeholder="Digite o título do livro" label="Título do livro"/>

                                    <TextArea defaultValue={dataBook.description} {...register("description")} placeholder="Digite a descrição" label="Descrição, Resumo ou Sinopse"/>

                                    <div className="flex gap-4 justify-center">
                                        <InputText defaultValue={dataBook.page} {...register("page")} isBook widthDiv="w-full" type="number" placeholder="000" label="Páginas"/>
                                        <InputText defaultValue={dataBook.amount} {...register("amount")} isBook widthDiv="w-full" type="number" placeholder="000" label="Quantidade"/>
                                    </div>

                                    <InputText defaultValue={dataBook.isbn} {...register("isbn")} isBook widthDiv="w-full" type="text" placeholder="0000000000000" label="ISBN"/>

                                    <InputText defaultValue={dataBook.dimensions} {...register("dimensions")} isBook widthDiv="w-full" type="text" placeholder="00x00x00" label="Dimensões"/>

                                    <div className="flex justify-between items-center mt-2">
                                        <span className="flex items-center gap-2">
                                            <input onChange={handleCheckBox} className="w-5 h-5" type="checkbox" id="checkbox" />
                                            <label htmlFor="checkbox">Disponivel</label>
                                        </span>

                                        <div className="flex gap-8">
                                            <SmallButton type="button" text="Excluir" isSave={false} />
                                            <SmallButton type="submit" text="Salva" isSave={true} />
                                        </div>
                                    </div>
                        
                                </div>
                            </form>    
                        </section>
                    </main>
            }
        </section>
    )
}