import { LibraryBig } from "lucide-react"
import { CardBookLibrary } from "../../components/cards/cardBookLibrary"
import { useQuery } from "@tanstack/react-query"
import { getAllBooks, type getAllBooksTypeResponse } from "../../http/getAllBooks"
import { authContex } from "../../hook/authContext"
import { Loading } from "../../components/ui/loading"

export function AllBooks(){

    const { account } = authContex()

    if(!account){
        return
    }

    const { data, isLoading, error } = useQuery<getAllBooksTypeResponse[]>({
        queryKey: ["keyGetAllBook", account.id],
        queryFn: async () => 
            await getAllBooks({
                libraryId: account.id, 
                token: account.token
        })
    })

    if(error){
        alert("Error ao buscar livros...")
    }

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <LibraryBig size={38} />
                    <h1>Livros cadastrados</h1>
                </div>
                <div className="px-17 flex items-center gap-2" >
                    <span className="border-1 border-but-200 rounded-full w-10 h-10 flex items-center justify-center text-but-200 text-xl">{data?.length}</span>
                    <p className="text-font-300 text-lg" >total de livros</p>
                </div>

            </header>
            {
                isLoading && <Loading size={24}/>
            }
            {
                data && 
                <main className="overflow-y-scroll h-full" >
                    <section className="flex flex-wrap gap-x-5 gap-y-4 mx-1 my-4 pr-3 pl-6"  >
                        {
                            data.map(book => {
                                return(
                                    <CardBookLibrary 
                                        key={book.id}
                                        id={book.id}
                                        title={book.title}
                                        author={book.author}
                                        image={book.image} 
                                    />
                                ) 
                            })
                        }
                    </section>
                </main>
            }
        </section>
    )
}