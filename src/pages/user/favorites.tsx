import { CircleCheck } from "lucide-react"
import { CardBookUser  } from "../../components/cards/cardBookUser"

export function Favorites(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <CircleCheck size={38} />
                    <h1>Livros salvos</h1>
                </div>

            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex flex-wrap gap-x-6 gap-y-5 mx-2 my-4 px-6" >

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