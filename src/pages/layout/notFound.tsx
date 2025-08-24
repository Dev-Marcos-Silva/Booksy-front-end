import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <section className="bg-bg-primary flex items-center justify-center h-screen w-screen" >
            <div className="flex flex-col gap-2 pb-20" >
                <div className="mb-10 p-2 " >
                    <h1 className="text-7xl text-but-100 font-medium mb-4" >Página Não Encontrada!</h1>
                    <p className="text-4xl text-font-100 pl-1 font-medium" >Error: 404 Not Found!</p>
                </div>
                <div className="p-3" >
                    <Link className="text-2xl text-font-100 border-b-1 border-bg-primary hover:border-b-font-100 duration-600" to={'/'} >
                        volta
                    </Link>
                </div>
            </div>

        </section>
    )
}