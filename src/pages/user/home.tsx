import { Carousel } from "../../components/lists/carousel"
import { SearchBook } from "../../components/ui/search"
import { CardBookUser } from "../../components/cards/cardBookUser"

export function Home(){
    
    return (
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden'>

            <search className='border-b border-but-100'>
                <SearchBook />
                <Carousel />
            </search>

            <main className="overflow-y-scroll h-full " >
                <section className="flex justify-center my-5"> 
                    <div className="max-w-223 flex flex-wrap gap-x-5 gap-y-5" >
                        <CardBookUser />
                        <CardBookUser />
                        <CardBookUser />
                        <CardBookUser />
                        <CardBookUser />
                        <CardBookUser />
                    </div>            
                </section>
            </main>
        </section>
    )
}