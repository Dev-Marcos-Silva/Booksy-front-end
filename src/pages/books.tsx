import { BookOpenCheck } from "lucide-react"
import { CardOrder } from "../components/cardOrder"

export function Books(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <BookOpenCheck size={38} />
                    <h1>Continue sua leitura</h1>
                </div>
                <div className="px-17" >
                    <p className="text-font-300 text-lg" >tempo para a entrega</p>
                </div>

            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex flex-col gap-x-6 gap-y-8 mx-2 my-4 px-6" >
                    <CardOrder/>
                    
                   
                </section>
            </main>
        </section>
    )
}