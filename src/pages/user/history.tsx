import { Clock } from "lucide-react"
import { CardHistory } from "../../components/cards/cardHistory"

export function History(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <Clock size={38} />
                    <h1>Histórico de livro</h1>
                </div>
                <div className="px-17 flex items-center gap-2" >
                    <span className="border-1 border-but-200 rounded-full w-10 h-10 flex items-center justify-center text-but-200 text-xl" >7</span>
                    <p className="text-font-300 text-lg" >total de livros</p>
                </div>

            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4"  >
                    
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                    <CardHistory/>
                   
                </section>
            </main>
        </section>
    )
}