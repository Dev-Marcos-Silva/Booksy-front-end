import { getRendBookLibrary, type getRendBookLibraryTypeResponse } from "../../http/getRendBookLibrary"
import { ArrowBigDownDash } from "lucide-react"
import { CardCustomerRequest } from "../../components/cards/cardCustomerRequest"
import { authContex } from "../../hook/authContext"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "../../components/ui/loading"

export function OrdersReceived(){

    const { account } = authContex()

    if(!account){
        return
    }

    const { data, error, isLoading } = useQuery<getRendBookLibraryTypeResponse[]>({
        queryKey: [ "keyGetRendBookLibrary", account.id ],
        queryFn: async () => 
            await getRendBookLibrary({
                libraryId: account.id,
                token: account.token
            })
    })

    if(error){
        alert("Error ao buscar pedidos...")
    }

    const newData = data?.filter(book => book.isAccept === "undefine")

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center" >
                    <ArrowBigDownDash size={38} />
                    <h1>Pedidos recebidos</h1>
                </div>
                 <div className="px-17 flex items-center gap-2" >
                    <span className="border-1 border-but-200 rounded-full w-10 h-10 flex items-center justify-center text-but-200 text-xl">{newData?.length}</span>
                    <p className="text-font-300 text-lg">Pedidos</p>
                </div>
            </header>
            {
                isLoading && <Loading/>
            }
            { 
                newData &&
                    <main className="overflow-y-scroll h-full" >
                        <section className="flex flex-wrap gap-x-4 gap-y-4 mx-1 my-4 pr-3 pl-4" >
                            {
                                newData.map(rendBook => {
                                    return(
                                        <CardCustomerRequest 
                                            key={rendBook.id}
                                            isDelivered={true}
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