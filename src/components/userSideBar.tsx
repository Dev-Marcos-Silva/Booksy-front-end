import image from '../assets/img/profile.webp'
import { Link } from 'react-router-dom'
import { House } from 'lucide-react'
import { Book } from 'lucide-react'
import { History } from 'lucide-react'
import { LibraryBig } from 'lucide-react'
import { Bookmark } from 'lucide-react'
import { CirclePlus } from 'lucide-react'
import { Power } from 'lucide-react'

export function UserSideBar(){

    return(
        <section className='bg-bg-primary h-screen flex flex-col items-center justify-evenly font-primary' >

           <section className='flex flex-col items-center my-6 '>

                <Link className='w-2/6' to={'/user/profile'}>
                    <img className='rounded-full border-1 border-but-100 object-cover' src={image} alt="imagem de perfil do usuário" />
                </Link>
                <p className='py-2 text-2xl' >marcos</p>

           </section>

           <nav className='w-full pl-12 pb-14 ' >
                <ul className='flex flex-col items-start gap-4 text-lg' >
                    
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user'}><House/> Início</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/book'}><Book/> Livros</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/history'}><History/>Histórico</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/suggestions'}><LibraryBig/>Sugestões</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/favorites'}><Bookmark/>Salvos</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/user/register'}><CirclePlus/>Biblioteca</Link></li>
                  
                    <button className='mt-14 flex gap-2 text-black text-xl font-normal cursor-pointer hover:text-but-100 duration-600'><Power/>Sair</button>
                
                </ul>
           </nav>

           <footer className='w-full pt-2 pb-6 text-center' >
                @booksy.com
           </footer>

        </section>
    )
}