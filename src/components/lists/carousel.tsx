import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { categories } from '../../utils/listsForBooks'

export function Carousel(){

    const [ sliderRef, slider ] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            spacing: 12,
            perView: 6
        },
        mode: 'free' 
    })

    const handlePrev = () => slider.current?.prev()
    const handleNext = () => slider.current?.next()


    return(
        <div className='max-w-full pl-6 pr-9 flex' >

            <button
                onClick={handlePrev}
            >
                <ChevronLeft/>
            </button>

            <div ref={sliderRef} className="keen-slider py-4" >

                {categories.map(category => {
                    return(
                        <button 
                            key={category} 
                            className="keen-slider__slide bg-font-400 whitespace-nowrap py-0.5 rounded-lg text-font-300 focus:bg-but-100 focus:text-bg-primary" 
                        >
                            {category}
                        </button>  
                    )
                })}

            </div>
            
            <button
                onClick={handleNext}
            >
                <ChevronRight/>
            </button>

         </div>
    )
}