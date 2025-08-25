import image from '../../assets/img/house.webp'
import { Link, useNavigate } from 'react-router-dom'
import { Book, Power, BookUp, BookCopy, BookCheck, BookX, BookDown, BookPlus } from 'lucide-react'
import { authContex } from '../../hook/authContext'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
 
export function LibrarySideBar(){

    const { account, logout } = authContex()

    const navigate = useNavigate()

    function handleExit(){
        logout()
        navigate('/login')
    }

    return(
        <section className='bg-bg-primary h-screen flex flex-col items-center justify-evenly font-primary' >

           <section className='flex flex-col items-center my-6 '>

                <Link to={'/library/profile'}>
                    <img className='h-30 w-40 rounded-lg border-1 border-but-100 object-cover' src={account?.image? `http://localhost:3333/upload/library/${account.image}`: image} alt={`imagem da biblioteca ${account?.name}`} />
                </Link>
                <p className='py-2 text-2xl'>{capitalizeFirstLetter(account?.name)}</p>

           </section>

           <nav className='w-full pl-12 pb-14 ' >
                <ul className='flex flex-col items-start gap-4 text-lg' >
                    
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library'}><BookCopy/>Todos os livros</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library/register'}><BookPlus/>Cadastrar um livro</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library/orders'}><BookDown/>Pedidos de clientes</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library/delivered'}><BookUp/>Livros para entregar</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library/borrowed'}><Book/>Livros emprestados</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library/finished'}><BookCheck/>Livros concluídos</Link></li>
                    <li className='text-black text-xl font-normal hover:text-but-100 duration-600'> <Link className='flex gap-2' to={'/library/unfinished'}><BookX/>Livros não concluídos</Link></li>

                    <button
                        onClick={handleExit} 
                        className='flex gap-2 text-black text-xl font-normal cursor-pointer hover:text-but-100 duration-600'
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