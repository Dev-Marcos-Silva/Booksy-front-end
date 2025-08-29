import { ArrowDownFromLine, Star, ArrowBigDownDash } from "lucide-react"
import { Link, Navigate, Outlet, useParams } from "react-router-dom"
import imageBook from "../../assets/img/book.webp"
import imageLibrary from "../../assets/img/logo.webp"
import { ButtonMark } from "../../components/buttons/buttonMark"
import { ItemBook } from "../../components/lists/itemBook"
import { ButtonCard } from "../../components/buttons/buttonCard"
import { authContex } from "../../hook/authContext"
import { useQuery } from "@tanstack/react-query"
import { getBook, type getBooksTypeResponse } from "../../http/getbook"
import { getLibrary, type getLibraryTypeResponse } from "../../http/getLibrary"
import { getAssessment, type getAssessmentTypeResponse } from "../../http/getAssessment"
import { api } from "../../service/api"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import { numberOfStars } from "../../utils/numberOfStars"

type ParamBook = {
    id: string
}

let path: string = ''

export function Details(){

    const { account } = authContex()

    const param = useParams<ParamBook>()

    if(account){
       const { type } = account

       path = type.toLocaleLowerCase()
    }
    else if(!account ){
        return <Navigate to={'/'} />
    }

    const { data: dataBook, isLoading, error } = useQuery<getBooksTypeResponse>({
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

    const { data: dataLibrary} = useQuery<getLibraryTypeResponse>({
        queryKey: ["keyGetLibrary", param.id],
        queryFn: async () => 
            await getLibrary({
               libraryId: dataBook?.library_id!,
               token: account.token
        }),
        enabled: !!dataBook?.library_id
    })

    const { data: dataAssessment} = useQuery<getAssessmentTypeResponse[] | null>({
        queryKey: ["keyGetStar", param.id],
        queryFn: async () => 
            await getAssessment({
               bookId: param.id!,
               token: account.token
        }),
        enabled: !!dataBook?.library_id,
    })

    const star = dataAssessment?.map(assessment => {
        return assessment.star
    })

    const average = numberOfStars(star)

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center">
                    <ArrowDownFromLine size={38} />
                    <h1>Mais detalhe</h1>
                </div>
            </header>
            {
                isLoading && <p>Carregando...</p>
            }
            {
                dataBook && dataLibrary &&
                <main className="overflow-y-scroll h-full" >
                    <section className="flex mt-4 mx-10 gap-6">
                        <div className="relative">
                            <img className="w-88 h-74 object-cover rounded-md" src={dataBook.image? `${api.defaults.baseURL}/upload/book/${dataBook.image}`: imageBook} alt={`Imagem do livro ${dataBook.title}`}/>
                            {
                                account?.type === "USER" &&
                                <div className="absolute flex justify-end items-start p-4 w-full h-full top-0 opacity-0 hover:opacity-100 duration-500">
                                    <ButtonMark/>
                                </div>
                            }
                        </div>
                        <section className="flex flex-col gap-2 h-full w-full" >
                            <div className="bg-bg-300 pl-4 py-3 pr-3 flex gap-6 w-full h-full rounded-md">
                                <img className="w-40 max-h-32 rounded-md border-1 border-but-100 object-cover" src={dataLibrary.image? `${api.defaults.baseURL}/upload/library/${dataLibrary.image}`: imageLibrary} alt={`Imagem da biblioteca ${dataLibrary.name}`}/>

                                <div className="flex flex-col gap-4 ">
                                    <div>
                                        <h1 className="text-xl">{capitalizeFirstLetter(dataLibrary.name)}</h1>
                                        <p className="text-font-300">
                                            {
                                                `
                                                ${capitalizeFirstLetter(dataLibrary.street)},
                                                ${capitalizeFirstLetter(dataLibrary.city)},
                                                ${capitalizeFirstLetter(dataLibrary.neighborhood)},
                                                ${capitalizeFirstLetter(dataLibrary.number)}    
                                                `
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-font-300">{dataLibrary.email}</p>
                                        <p className="text-font-300">
                                            {
                                                `
                                                (${dataLibrary.ddd})
                                                ${dataLibrary.phone}
                                                `
                                            }
                                        </p>
                                    </div> 
                                </div>
                            </div>
                            <aside className="bg-bg-300 py-2 px-6 flex w-full h-full justify-between rounded-md">
                                <div className="flex flex-col justify-between gap-6 pb-4">
                                    <h2 className="text-xl max-w-full">
                                        {capitalizeFirstLetter(dataBook.title)}
                                    </h2>
                                    <span>
                                        <p className="text-lg">Autor(a)</p>
                                        <p className="text-font-300">{dataBook.author.toUpperCase()}</p>
                                    </span>
                                </div>
                                <div className="flex flex-col justify-between gap-6 pb-4">
                                    <h2 className="text-xl text-right">
                                        {dataBook.availability === "available"? "Disponível": "Indisponível"}
                                    </h2>
                                    {
                                        account?.type === "USER"?
                                        <form className="flex justify-between gap-6 relative" >
                                            <button className="bg-bg-primary px-5 py-1 rounded-2xl border-1 cursor-pointer duration-500 border-but-100 text-but-100 hover:bg-but-100 hover:text-amber-50 ">
                                                Fazer pedido
                                            </button>
                                            <select id="days" className="bg-bg-primary appearance-none py-1 pl-6 pr-8 rounded-2xl border-1 border-but-100 text-but-100 cursor-pointer outline-0">
                                                <option value={30} >Dias 30</option>
                                                <option value={60} >Dias 60</option>
                                            </select>
                                            <ArrowBigDownDash className="absolute right-2 top-2 pointer-events-none" size={20} color="#FF815B" strokeWidth={1.8} />
                                        </form>
                                        : 
                                        <div className="flex w-full justify-end">
                                            <ButtonCard text="Editar" link={`/library/update/${param.id}`} size="" />
                                        </div>
                                    }
                                </div>
                            </aside>           
                        </section>
                    </section>

                    <section className="flex flex-col items-start my-4 mx-10">
                        <span className="bg-bg-300 p-2 max-w-62  w-full rounded-md flex justify-around text-xl items-center">
                            <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                            <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                            <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                            <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                            <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                            {average.toFixed(1)}
                        </span>
                        <aside className="w-full" >
                            <h2 className="py-4 font-medium">DESCRIÇÃO</h2>
                            <div className="bg-bg-300 p-4  rounded-md">
                                <p className="text-justify text-sm" >
                                   {dataBook.description}
                                </p>
                            </div>
                        </aside>
                    </section>

                    <section className="flex mb-26 mx-10 gap-20">
                        <aside className="w-full max-w-63" >
                            <h2 className="py-4 font-medium" >INFORMAÇÕES</h2>
                            <div className="bg-bg-300 p-4 rounded-md" >
                                <ul className="flex flex-col gap-3" >
                                    <ItemBook text="Categoria" description={dataBook.category} />
                                    <ItemBook text="Páginas" description={dataBook.page} />
                                    <ItemBook text="Ano de Publicação" description={dataBook.year_publi} />
                                    <ItemBook text="Dimensões" description={dataBook.dimensions} />
                                    <ItemBook text="Acabamento" description={dataBook.finishing} />
                                    <ItemBook text="Edição" description={dataBook.edition} />                    
                                </ul>
                            </div>
                        </aside>
                        <section className="w-full h-23" >
                            <div className="py-4 flex">
                                <Link className="border-r-1 border-font-400 pr-8 text-lg hover:text-font-200" to={`/${path}/book/${param.id}`}>Comentários</Link>
                        
                                <Link className="border-l-1 border-font-400 pl-8 text-lg hover:text-font-200" to={`/${path}/book/${param.id}/assessments`}>Avaliações</Link>
                            </div>
                            <section>
                                <Outlet/>
                            </section>  
                        </section>
                    </section>
                </main>
            }        
        </section>
    )
}