import { Lightbulb, ArrowUpNarrowWide, SquarePlus } from "lucide-react"
import { Suggestion } from "../components/suggestion"

export function Suggestions(){

    return(
        <section className='bg-bg-primary h-full flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <Lightbulb size={38} />
                    <h1>Sugestões de livro</h1>
                </div>
                
            </header>
            <main className="h-full" >
                <section className="h-full flex flex-col justify-center mx-2 px-6 pb-4" >
                    <div>
                        <span className="flex gap-2 items-center">
                            <h1 className="text-2xl py-2">Mais bem avaliado</h1>
                            <ArrowUpNarrowWide/>
                        </span>
                        <Suggestion/>

                    </div>
                    <div>

                        <span className="flex gap-2 items-center">
                            <h1 className="text-2xl py-2">Recém adicionado</h1>
                            <SquarePlus/>
                        </span>      
                       <Suggestion/>

                    </div>
                </section>
            </main>
        </section>
    )
}