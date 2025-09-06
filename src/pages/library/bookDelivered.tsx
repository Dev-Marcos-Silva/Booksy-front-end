import { getRendBookLibrary, type getRendBookLibraryTypeResponse } from "../../http/getRendBookLibrary"
import { ArrowBigUpDash } from "lucide-react"
import { CardCustomerRequest } from "../../components/cards/cardCustomerRequest"
import { authContex } from "../../hook/authContext"
import { useQuery } from "@tanstack/react-query"

export function BookDelivered(){

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

    const newDate = data?.filter(book => book.isAccept === "true" && book.deliveryDate === null)

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <ArrowBigUpDash size={38} />
                    <h1>Entregar livros</h1>
                </div>
            </header>
            {
                isLoading && <p>Carregando...</p>
            }
            { 
                newDate &&
                    <main className="overflow-y-scroll h-full">
                        <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4">
                            {
                                newDate.map(ordersReceived => {
                                    return(
                                        <CardCustomerRequest 
                                            key={ordersReceived.id}
                                            isDelivered={false}
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