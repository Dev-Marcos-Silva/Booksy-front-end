import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { categories } from '../../utils/listsForBooks'
import type React from 'react'

interface CarouselType extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

export function Carousel({...props}: CarouselType){

    const [ sliderRef, slider ] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            spacing: 12,
            perView: 5
        },
        mode: 'free' 
    })

    const handlePrev = () => slider.current?.prev()
    const handleNext = () => slider.current?.next()

    return(
        <div className='max-w-full pl-6 pr-9 flex' >

            <button
                onClick={handlePrev}
                className="cursor-pointer"
            >
                <ChevronLeft/>
            </button>

            <div ref={sliderRef} className="keen-slider py-4" >

                {categories.map(category => {
                    return(
                        <button 
                            {...props}
                            type='button'
                            value={category}
                            key={category} 
                            className="keen-slider__slide bg-font-400 whitespace-nowrap px-1 py-0.5 rounded-lg text-font-300 focus:bg-but-100 focus:text-bg-primary" 
                        >
                            {category}
                        </button>   
                    )
                })}

            </div>
            
            <button
                onClick={handleNext}
                className="cursor-pointer"
            >
                <ChevronRight/>
            </button>

         </div>
    )
}