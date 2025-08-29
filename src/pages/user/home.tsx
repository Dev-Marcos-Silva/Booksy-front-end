import { Carousel } from "../../components/lists/carousel"
import { SearchBook } from "../../components/ui/search"
import { CardBookUser } from "../../components/cards/cardBookUser"
import { authContex } from "../../hook/authContext"
import { getCategoryBook, type getCategoryBooksTypeRequest, type getCategoryBooksTypeResponse } from "../../http/getCategoryBook"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

export function Home(){

    const { account } = authContex()

    if(!account){
        return
    }

    const [ books, setBooks ] = useState<getCategoryBooksTypeResponse[] | null >(null)

    const category = useMutation<getCategoryBooksTypeResponse[], Error, getCategoryBooksTypeRequest>({
        mutationFn: getCategoryBook,
        onSuccess: (data) => { 
            setBooks(data) 
        },
        onError: () => {
            alert("Algo deu errado ao buscar livros! tente novamente")  
        }
    })

    const search = useMutation<getCategoryBooksTypeResponse[], Error, getCategoryBooksTypeRequest>({
        mutationFn: getCategoryBook,
        onSuccess: (data) => { 
            console.log(data)   
        },
        onError: () => {
            alert("Algo deu errado ao buscar livros! tente novamente")  
        }
    })

    function handleValueCarousel(value: string){

        if(!account){
            return
        }

        category.mutate({
            category: value,
            token: account.token
        })
    }

    function handleValueSearchBook(value: string){

        if(!account){
            return
        }
        
        search.mutate({
            category: value,
            token: account.token
        })
    }

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
              books && 
                <main className="overflow-y-scroll h-full " >
                    <section className="flex flex-wrap gap-x-5 gap-y-4 mx-1 my-4 pr-3 pl-6"> 
                        {
                            books.map(book => {
                                return(
                                    <CardBookUser 
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