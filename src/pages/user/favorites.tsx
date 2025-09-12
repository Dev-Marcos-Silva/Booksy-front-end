import { getFavoriteBook, type getFavoriteBookTypeResponse } from "../../http/getFavoriteBook"
import { CircleCheck } from "lucide-react"
import { CardBookUser  } from "../../components/cards/cardBookUser"
import { authContex } from "../../hook/authContext"
import { useQuery } from "@tanstack/react-query"
import { numberOfStars } from "../../utils/numberOfStars"
import { Loading } from "../../components/ui/loading"

export function Favorites(){

    const { account } = authContex()
    
    if(!account){
         return
    }
    
    const { data, error, isLoading } = useQuery<getFavoriteBookTypeResponse[]>({
        queryKey: [ "keyGetRendBookUser", account.id ],
        queryFn: async () => 
            await getFavoriteBook({
                userId: account.id,
                token: account.token
        })
    })
    
    if(error){
        alert("Error ao buscar pedidos...")
    }

    const averages = (data?? []).map(book => {
        const { stars } = book
    
        const star = stars.map(star => {
            return star.star
        })
        return numberOfStars(star)
    })

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <CircleCheck size={38} />
                    <h1>Livros salvos</h1>
                </div>

            </header>
            {
                isLoading && <Loading/>
            }
            {
                data && 
                    <main className="overflow-y-scroll h-full" >
                        <section className="flex flex-wrap gap-x-6 gap-y-5 mx-2 my-4 px-6">
                            {
                                data.map((book, index) => {
                                    return(
                                        <CardBookUser 
                                            key={book.id}
                                            id={book.id}
                                            title={book.title}
                                            author={book.author}
                                            image={book.image!}
                                            star={averages[index]}
                                            bookFavorite={book.bookFavorite} 
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