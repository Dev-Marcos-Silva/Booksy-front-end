import { getCategoryBook, type getCategoryBooksTypeRequest, type getCategoryBooksTypeResponse } from "../../http/getCategoryBook"
import { getSearchBook, type getSearchBooksTypeRequest, type getSearchBooksTypeResponse } from "../../http/getSearchBook"
import { Carousel } from "../../components/lists/carousel"
import { SearchBook } from "../../components/ui/search"
import { CardBookUser } from "../../components/cards/cardBookUser"
import { authContex } from "../../hook/authContext"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { numberOfStars } from "../../utils/numberOfStars"

export function Home(){

    const { account } = authContex()

    if(!account){
        return
    }

    const [books, setBooks] = useState<getCategoryBooksTypeResponse[] | []>([])

    const category = useMutation<getCategoryBooksTypeResponse[], Error, getCategoryBooksTypeRequest>({
        mutationFn: ({category, token}) => {
            return getCategoryBook({
                category,
                token
            })
        },
        onSuccess: (data) => {
            setBooks(data)
        },
        onError: () => {
            alert("Error ao buscar os livros")
        }
    })

    const search = useMutation<getSearchBooksTypeResponse[], Error, getSearchBooksTypeRequest>({
        mutationFn: ({query, token}) => {
            return getSearchBook({
                query,
                token
            })
        },
        onSuccess: (data) => {
            setBooks(data)
        },
        onError: () => {
            alert("Error ao buscar os livros")
        }
    })

    function handleValueCarousel(value: string){

        category.mutate({
            category: value,
            token: account?.token!
        })
    }

    function handleValueSearchBook(value: string){

        search.mutate({
            query: value,
            token: account?.token!
        })  
    }

    const averages = (books?? []).map(book => {
        const { stars } = book

        const star = stars.map(star => {
            return star.star
        })
        return numberOfStars(star)
    })

    return (
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden'>

            <search className='border-b border-but-100'>
                <SearchBook 
                    onChange={e => handleValueSearchBook(e.target.value)}
                />
                <Carousel
                    onClick={e => handleValueCarousel(e.currentTarget.value)}
                />
            </search>
            {
               books && books.length > 0 && 
                <main className="overflow-y-scroll h-full " >
                    <section className="flex flex-wrap gap-x-5 gap-y-4 mx-1 my-4 pr-3 pl-6"> 
                        {
                            books.map((book, index) => {
                                return(
                                    <CardBookUser 
                                        key={book.id}
                                        id={book.id}
                                        title={book.title}
                                        author={book.author}
                                        image={book.image!}
                                        star={averages[index]} 
                                    />
                                )
                            })
                        }           
                    </section>
                    
                </main>
            }
            {
                books?.length < 1 &&
                    <div className="w-full h-full flex justify-center items-center">
                        <p className="text-3xl text-font-400 font-secund italic">Pesquisa...</p>
                    </div>
            }

        </section>
    )
}