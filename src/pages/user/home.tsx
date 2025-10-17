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
        mutationFn: ({userId, category, token}) => {
            return getCategoryBook({
                userId,
                category,
                token
            })
        },
        onSuccess: (data) => {
            setBooks(data)
        },
        onError: () => {
            alert("Error ao buscar os livros!")
        }
    })

    const search = useMutation<getSearchBooksTypeResponse[], Error, getSearchBooksTypeRequest>({
        mutationFn: ({userId, query, token}) => {
            return getSearchBook({
                userId,
                query,
                token
            })
        },
        onSuccess: (data) => {
            setBooks(data)
        },
        onError: () => {
            alert("Error ao buscar os livros!")
        }
    })

    function handleValueCarousel(value: string){

        if(!account){
            return
        }

        category.mutate({
            userId: account.id,
            category: value,
            token: account.token
        })
    }

    function handleValueSearchBook(value: string){

        if(!account){
            return
        }

        search.mutate({
            userId: account.id,
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
                    <section className="flex flex-wrap gap-x-6 gap-y-4 mx-12 my-4"> 
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
                                        bookFavorite={book.bookFavorite} 
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
                        <p className="text-3xl cursor-default text-font-400 font-secund italic">Pesquisa...</p>
                    </div>
            }

        </section>
    )
}