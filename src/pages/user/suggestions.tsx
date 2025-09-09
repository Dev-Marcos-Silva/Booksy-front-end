import { getRatedsBook, type getRatedsBookTypeResponse } from "../../http/getRatedsBook"
import { getRecentsBook, type getRecentsBookTypeResponse } from "../../http/getRecentsBook"
import { Lightbulb, ArrowUpNarrowWide, SquarePlus } from "lucide-react"
import { Suggestion } from "../../components/lists/suggestion"
import { useQuery } from "@tanstack/react-query"
import { authContex } from "../../hook/authContext"

export function Suggestions(){

    const { account } = authContex()

    if(!account){
        return
    }

    const { data: recentsBooks } = useQuery<getRecentsBookTypeResponse[]>({
        queryKey: ["keyGetRecentsBook", account.id],
        queryFn: async () => 
            await getRecentsBook({
                userId: account.id,
                token: account.token
        }),
    })

    const { data: ratedsBooks } = useQuery<getRatedsBookTypeResponse[]>({
        queryKey: ["keyGetRatedsBook", account.id],
        queryFn: async () => 
            await getRatedsBook({
                userId: account.id,
                token: account.token
        }),
    })


    return(
        <section className='bg-bg-primary h-full flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <Lightbulb size={38} />
                    <h1>Sugestões de livro</h1>
                </div>
                
            </header>
            <main className="h-full" >
                <section className="h-full flex flex-col justify-evenly mx-2 px-6 pb-4" >
                    <div>
                        <span className="flex gap-2 items-center">
                            <h1 className="text-xl py-2">Mais bem avaliado</h1>
                            <ArrowUpNarrowWide size={20} />
                        </span>
                        {
                            ratedsBooks && 
                                <Suggestion
                                    suggetionBook={ratedsBooks}
                                />
                        }
                    </div>
                    <div>

                        <span className="flex gap-2 items-center">
                            <h1 className="text-xl py-2">Recém adicionado</h1>
                            <SquarePlus size={20} />
                        </span> 
                        {
                            recentsBooks && 
                                <Suggestion
                                    suggetionBook={recentsBooks}
                                />
                        }     
                    </div>
                </section>
            </main>
        </section>
    )
}