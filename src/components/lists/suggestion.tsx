import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { CardBookUser } from '../cards/cardBookUser'
import { numberOfStars } from '../../utils/numberOfStars'

type bookWithStar = {
    id: string
    title: string
    author: string
    image: string | null
    stars: {
        id: number
        created_at: string
        star: number
        book_id: string
        user_id: string
    }[]
    bookFavorite: boolean
}

interface SuggestionType{
    suggetionBook: bookWithStar[]
}

export function Suggestion({ suggetionBook }: SuggestionType){

    const [ sliderRef, slider ] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 4.2
        },
        mode: 'free' 
    })

    const handlePrev = () => slider.current?.prev()
    const handleNext = () => slider.current?.next()

    const averages = suggetionBook.map(book => {
        const { stars } = book

        const star = stars.map(star => {
            return star.star
        })
        return numberOfStars(star)
    })
    
    return(
        <div className='max-w-full flex justify-center relative' >

            <button
                onClick={handlePrev}
                className='absolute left-0 top-28 z-2'
            >
                <ChevronLeft size={33}/>
            </button>

            <div ref={sliderRef} className="keen-slider" >

                {
                    suggetionBook.map((book, index) =>{
                        return(
                            <div key={book.id} className="keen-slider__slide" >
                                <CardBookUser  
                                    key={book.id}
                                    id={book.id}
                                    title={book.title}
                                    author={book.author}
                                    image={book.image!}
                                    star={averages[index]}
                                    bookFavorite={book.bookFavorite}
                                />
                            </div>
                        )
                    })
                }

            </div>
            
            <button
                onClick={handleNext}
                className='absolute right-0 top-28'
            >
                <ChevronRight size={33}/>
            </button>

         </div>
    )
}