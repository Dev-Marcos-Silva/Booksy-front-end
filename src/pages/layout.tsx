import { Outlet } from "react-router-dom"
import { UserSideBar } from "../components/userSideBar"
import { LibrarySideBar } from "../components/librarySideBar"

export function Layout(){

    const isUser = true

    return(
        <section className="w-screen h-screen grid grid-cols-4 grid-rows-5">

            <aside className= "w-full row-span-5 border-r-1 border-but-100">
                {
                    isUser?
                        <UserSideBar/>
                    :
                        <LibrarySideBar/>
                }
            </aside>
            <main className="col-span-3 row-span-5" >
                <Outlet/>
            </main>
            
        </section>
    )
}