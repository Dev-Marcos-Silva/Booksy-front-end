import { Bookmark } from "lucide-react"
import { useState } from "react"
import { authContex } from "../../hook/authContext"
import { useMutation } from "@tanstack/react-query"
import { postFavoriteBook, type postFavoriteBookTypeRequest } from "../../http/postFavoriteBook"
import { deleteFavoriteBook, type deleteFavoriteBookTypeRequest } from "../../http/deleteFavoriteBook"
import { queryClient } from "../../service/queryClient"

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bookId: string
    bookFavorite: boolean
}

export function ButtonMark({bookId, bookFavorite}: ButtonType){

    const { account } = authContex()

    if(!account){
        return
    }

    const [markButton, setMarkButton] = useState(bookFavorite)
    
    const [favorite, setFavorite] = useState<boolean | null>(null)

    function favorityBook(){
        setMarkButton(!markButton)
        setFavorite(!markButton) 
    }

    const postFavorite = useMutation<void, Error, postFavoriteBookTypeRequest>({
        mutationFn: postFavoriteBook,
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ["keyGetBook", bookId]
            })
        },
        onError: () => {
            alert("Erro ao favoritar livro!")
        }
    })

    if(favorite === true){

        if(!account){
            return
        }

        postFavorite.mutate({
            userId: account.id,
            bookId,
            token: account.token
        })

        setFavorite(null)
    }

    const deleteFavorite = useMutation<void, Error, deleteFavoriteBookTypeRequest>({
        mutationFn: deleteFavoriteBook,
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ["keyGetBook", bookId]
            })
            queryClient.refetchQueries({
                queryKey: [ "keyGetRendBookUser", account.id ]
            })
        },
        onError: () => {
            alert("Erro ao desfavoritar livro!")
        }
    })

    if(favorite === false){

         if(!account){
            return
        }

        deleteFavorite.mutate({
            userId: account.id,
            bookId,
            token: account.token
        })

        setFavorite(null) 
    }

    return(
        <button
            onClick={favorityBook} 
            className="bg-bg-primary p-1 rounded-4xl cursor-pointer" 
        >
            {markButton == true ? <Bookmark fill="#FF815B" />: <Bookmark /> } 
        </button>
    )
}