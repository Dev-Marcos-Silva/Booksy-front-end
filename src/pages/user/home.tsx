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

            <main className="overflow-y-scroll h-full" >
              <section className="flex flex-wrap gap-x-6 gap-y-5 mx-2 my-4 px-6"> 
                
                    <CardBookUser />
                    <CardBookUser />
                    <CardBookUser />
                    <CardBookUser />
                    <CardBookUser />
                    <CardBookUser />
                    <CardBookUser />
                    <CardBookUser />
                     
              </section>
            </main>
        </section>
    )
}