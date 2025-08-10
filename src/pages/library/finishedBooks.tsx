import { CircleCheck } from "lucide-react"
import { CardFinishedBook } from "../../components/cards/cardFinishedBook"


export function FinishedBooks(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <CircleCheck size={38} />
                    <h1>Livros concluídos</h1>
                </div>
                <div className="px-17 flex items-center gap-2" >
                    <span className="border-1 border-font-600 rounded-full w-10 h-10 flex items-center justify-center text-font-600 text-xl" >7</span>
                    <p className="text-font-300 text-lg" >total de livros</p>
                </div>
            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4"  >
                    <CardFinishedBook isComplete={true} />
                    <CardFinishedBook isComplete={true} />
                    <CardFinishedBook isComplete={true} />
                </section>
            </main>
        </section>
    )
}