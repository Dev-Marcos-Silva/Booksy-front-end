import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { CardBookUser } from '../cards/cardBookUser'

const arrow = [1,2,3,4,5,6,7,8,9,10]

export function Suggestion(){

    const [ sliderRef, slider ] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 4.2
        },
        mode: 'free' 
    })

    const handlePrev = () => slider.current?.prev()
    const handleNext = () => slider.current?.next()


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
                    arrow.map((item) =>{
                        return(
                            <div className="keen-slider__slide" >
                                <CardBookUser  key={item} />
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