import { CircleX } from "lucide-react"

export function UnfinishedBook(){
    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <CircleX size={38} />
                    <h1>Livros não concluídos</h1>
                </div>
            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4"  >
                    
                    
                   
                </section>
            </main>
        </section>
    )
}