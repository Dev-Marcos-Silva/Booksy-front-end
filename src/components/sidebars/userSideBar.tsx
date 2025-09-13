import image from '../../assets/img/profile.webp'
import { Link, useNavigate } from 'react-router-dom'
import { House, Book, History, LibraryBig, Bookmark, CirclePlus, Power } from 'lucide-react'
import { authContex } from '../../hook/authContext'
import { api } from '../../service/api'
import { useQuery } from '@tanstack/react-query'
import { getUser, type getUserTypeResponse } from '../../http/getUser'

export function UserSideBar(){

    const { account, logout } = authContex()

    const navigate = useNavigate()

    function handleExit(){
        logout()
        navigate('/login')
    }

    if(!account){
        return
    }

    const { data: user, error } = useQuery<getUserTypeResponse>({
        queryKey: [ "keyGetUserAccount", account.id ],
        queryFn: async () => 
            await getUser({
                userId: account.id,
                token: account.token
        })
    })

    if(error){
        return
    }

    return(
        <section className='bg-bg-primary h-screen flex flex-col items-center justify-evenly font-primary' >

           <section className='flex flex-col items-center my-6 '>

                <Link to={'/user/profile'}>
                    <img className='h-30 w-30 rounded-full border-1 border-but-100 object-cover' src={user?.image? `${api.defaults.baseURL}/upload/profile/${user.image}?v=${user.updateAt}`: image} alt={`imagem do usuário/a ${user?.name}`} />
                </Link>
                <p className='py-2 text-2xl'>{user?.name}</p>

           </section>

           <nav className='w-full pl-12 pb-14 ' >
                <ul className='flex flex-col items-start gap-4 text-lg' >
                    
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user'}><House/> Início</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/orders'}><Book/> Livros</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/history'}><History/>Histórico</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/suggestions'}><LibraryBig/>Sugestões</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/favorites'}><Bookmark/>Salvos</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/register'}><CirclePlus/>Biblioteca</Link></li>
                  
                    <button 
                        onClick={handleExit}
                        className='mt-14 flex gap-2 text-black text-xl font-normal cursor-pointer hover:text-but-100 duration-600'
                    >
                        <Power/>Sair
                    </button>
                
                </ul>
           </nav>

           <footer className='w-full pt-2 pb-6 text-center' >
                @booksy.com
           </footer>

        </section>
    )
}