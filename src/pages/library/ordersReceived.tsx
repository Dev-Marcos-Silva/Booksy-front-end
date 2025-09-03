import { getRendBookLibrary, type getRendBookLibraryTypeResponse } from "../../http/getRendBookLibrary"
import { ArrowBigDownDash } from "lucide-react"
import { CardCustomerRequest } from "../../components/cards/cardCustomerRequest"
import { useQuery } from "@tanstack/react-query"
import { authContex } from "../../hook/authContext"

export function OrdersReceived(){

    const { account } = authContex()

    if(!account){
        return
    }

    const { data, error, isLoading } = useQuery<getRendBookLibraryTypeResponse[]>({
        queryKey: [ "keyGetRendBook", account.id ],
        queryFn: async () => 
            await getRendBookLibrary({
                libraryId: account.id,
                token: account.token
            })
    })

    if(error){
        alert("Error ao buscar pedidos...")
    }

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <ArrowBigDownDash size={38} />
                    <h1>Pedidos recebidos</h1>
                </div>
            </header>
            {
                isLoading && <p>Carregando...</p>
            }
            { 
                data &&
                <main className="overflow-y-scroll h-full" >
                    <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4" >
                        {
                            data.map(ordersReceived => {
                                return(
                                    <CardCustomerRequest 
                                        key={ordersReceived.id}
                                        isDelivered={true}
                                        {...ordersReceived}
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