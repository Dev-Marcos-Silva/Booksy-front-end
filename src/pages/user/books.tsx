import { getRendBookUser, type getRendBookUserTypeResponse } from "../../http/getRendBookUser"
import { BookOpenCheck } from "lucide-react"
import { CardOrder } from "../../components/cards/cardOrder"
import { authContex } from "../../hook/authContext"
import { useQuery } from "@tanstack/react-query"

export function Books(){

    const { account } = authContex()

    if(!account){
        return
    }

    const { data, error, isLoading } = useQuery<getRendBookUserTypeResponse[]>({
        queryKey: [ "keyGetRendBookUser", account.id ],
        queryFn: async () => 
            await getRendBookUser({
                userId: account.id,
                token: account.token
            })
    })

    if(error){
        alert("Error ao buscar pedidos...")
    }

    const newData = data?.filter(book => book.isComplete === "undefine").reverse()

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
            {
                isLoading && <p>Carregando...</p>
            }
            {
                newData &&
                    <main className="overflow-y-scroll h-full">
                        <section className="flex flex-col gap-x-6 gap-y-8 mx-2 my-4 px-6">
                            {
                                newData.map(rendBook => {
                                    return(
                                        <CardOrder
                                            key={rendBook.id}
                                            {...rendBook}
                                        />
                                    )
                                })
                            }
                        </section>
                    </main>
            }
        </section>
    )
}