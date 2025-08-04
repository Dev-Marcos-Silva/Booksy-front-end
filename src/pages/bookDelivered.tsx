import { ArrowBigUpDash } from "lucide-react"
import { CardClient } from "../components/cardClient"

export function BookDelivered(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <ArrowBigUpDash size={38} />
                    <h1>Entregar livros</h1>
                </div>
            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4"  > 
                    <CardClient isDelivered={false}/>
                    <CardClient isDelivered={false}/>
                    <CardClient isDelivered={false}/>
                </section>
            </main>
        </section>
    )
}