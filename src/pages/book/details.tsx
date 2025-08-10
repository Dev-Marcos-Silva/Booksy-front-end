import { ArrowDownFromLine, Star, ArrowBigDownDash } from "lucide-react"
import { Link, Outlet } from "react-router-dom"
import imagenBook from "../../assets/img/book.webp"
import imagenLibrary from "../../assets/img/logo.webp"
import { ButtonMark } from "../../components/buttons/buttonMark"
import { ItemBook } from "../../components/lists/itemBook"
import { ButtonCard } from "../../components/buttons/buttonCard"

export function Details(){

    const isUser = true

    return(
        <section className='bg-bg-primary h-screen flex flex-col overflow-hidden' >
            <header className='border-b border-but-100 flex justify-between items-center' >
                <div className="flex py-3 px-4 gap-4 text-2xl font-medium items-center">
                    <ArrowDownFromLine size={38} />
                    <h1>Mais detalhe</h1>
                </div>
            </header>
            <main className="overflow-y-scroll h-full" >
                <section className="flex mt-4 mx-10 gap-6">
                    <div className="relative">
                        <img className="w-full max-w-88 h-full object-cover rounded-md" src={imagenBook} alt=""/>
                        {
                            isUser &&
                            <div className="absolute flex justify-end items-start p-4 w-full h-full top-0 opacity-0 hover:opacity-100 duration-500">
                                <ButtonMark/>
                            </div>
                        }
                    </div>
                   
                    <section className="flex flex-col gap-2 h-full w-full" >

                        <div className="bg-bg-300 pl-4 py-3 pr-3 flex gap-6 w-full h-full rounded-md">
                            <img className="w-40 max-h-32 rounded-md border-1 border-but-100 object-cover" src={imagenLibrary} alt="" />

                            <div className="flex flex-col gap-4 ">
                                <div>
                                    <h1 className="text-xl" >Digital Library</h1>
                                    <p className="text-font-300">Rua 20, Jardim cearense, 200</p>
                                </div>
                                <div>
                                    <p className="text-font-300">digital.library@gmail.com</p>
                                    <p className="text-font-300">(85) 91234-5678 </p>
                                </div> 
                            </div>
                        </div>

                        <aside className="bg-bg-300 py-2 px-6 flex w-full h-full justify-between rounded-md">
                            <div className="flex flex-col justify-between gap-6 pb-4">
                                <h2 className="text-xl max-w-2xs">
                                    Mockup Your Design Here
                                </h2>

                                <span>
                                    <p className="text-lg">Autor(a)</p>
                                    <p className="text-font-300">Agatha Christie</p>
                                </span>
                            </div>
                            <div className="flex flex-col justify-between gap-6 pb-4">
                                <h2 className="text-xl text-right">Disponível</h2>

                                {
                                    isUser?
                                    <form className="flex justify-between gap-6 relative" >
                                        <button className="bg-bg-primary px-5 py-1 rounded-2xl border-1 cursor-pointer duration-500 border-but-100 text-but-100 hover:bg-but-100 hover:text-amber-50 ">
                                            Fazer pedido
                                        </button>
                                        <select id="days" className="bg-bg-primary appearance-none py-1 pl-6 pr-8 rounded-2xl border-1 border-but-100 text-but-100 cursor-pointer outline-0">
                                            <option value={30} >Dias 30</option>
                                            <option value={60} >Dias 60</option>
                                        </select>
                                        <ArrowBigDownDash className="absolute right-2 top-2 pointer-events-none" size={20} color="#FF815B" strokeWidth={1.8} />
                                    </form>
                                    : 
                                    <div className="flex w-full justify-end">
                                        <ButtonCard text="Editar" link="/library/update" size="" />
                                    </div>
                                }
                            </div>

                        </aside>
                        
                    </section>
                </section>

                <section className="flex flex-col items-start my-4 mx-10">
                    <span className="bg-bg-300 p-2 max-w-62  w-full rounded-md flex justify-around text-xl items-center">
                        <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                        <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                        <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                        <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                        <Star color="#FC9B1C" fill="#FC9B1C" strokeWidth={0} size={28}/>
                        4.8
                    </span>
                    <aside>
                        <h2 className="py-4 font-medium">DESCRIÇÃO</h2>
                        <div className="bg-bg-300 p-4 rounded-md">
                            <p className="text-justify text-sm" >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora provident facere 
                                hic suscipit sunt asperiores ab laboriosam pariatur, inventore odio praesentium iusto 
                                modi, laborum tempore eveniet quisquam? Sequi, perferendis. Lorem ipsum dolor sit, amet 
                                consectetur adipisicing elit. Inventore odit, unde voluptatum aliquid fuga quia? Nostrum, 
                                iusto necessitatibus labore quia ad veritatis ipsum eius, voluptatum fuga explicabo maxime 
                                deleniti laborum.
                            </p>
                        </div>
                    </aside>
                </section>

                <section className="flex mb-26 mx-10 gap-20">
                    <aside className="w-full max-w-63" >
                        <h2 className="py-4 font-medium" >INFORMAÇÕES</h2>
                        <div className="bg-bg-300 p-4 rounded-md" >
                            <ul className="flex flex-col gap-3" >
                                <ItemBook text="Categoria" description="Drama" />
                                <ItemBook text="Páginas" description="400" />
                                <ItemBook text="Ano de Publicação" description="2016" />
                                <ItemBook text="Dimensões" description="23x16x2.8" />
                                <ItemBook text="Acabamento" description="Brochura" />
                                <ItemBook text="Peso" description="860g" />                    
                            </ul>
                        </div>
                    </aside>
                    <section className="w-full h-23" >
                        <div className="py-4 flex">
                            <Link className="border-r-1 border-font-400 pr-8 text-lg hover:text-font-200" to={'/book'}>Comentários</Link>
                    
                            <Link className="border-l-1 border-font-400 pl-8 text-lg hover:text-font-200" to={'/book/assessments'}>Avaliações</Link>
                        </div>
                        <section>
                            <Outlet/>
                        </section>  
                    </section>
                </section>

            </main>
            
        </section>
    )
}