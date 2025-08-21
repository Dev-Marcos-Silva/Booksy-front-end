import { Outlet } from "react-router-dom"
import { UserSideBar } from "../../components/sidebars/userSideBar"
import { LibrarySideBar } from "../../components/sidebars/librarySideBar"
import { authContex } from "../../hook/authContext"

export function Layout(){

    const { account } = authContex()

    return(
        <section className="w-screen h-screen grid grid-cols-4 grid-rows-5">

            <aside className= "w-full row-span-5 border-r-1 border-but-100">
                {
                    account?.type === "USER"?(
                        <UserSideBar/>
                    ):
                    account?.type === "LIBRARY"?(
                        <LibrarySideBar/>
                    ):
                    <div/>
                }
            </aside>
            <main className="col-span-3 row-span-5" >
                <Outlet/>
            </main>
            
        </section>
    )
}