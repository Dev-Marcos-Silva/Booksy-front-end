import imageUser from "../assets/img/profile.webp"

interface CommentType{
    //image: string
    name: string
    comment: string
    date: string
}

export function Comment({ name, comment, date}: CommentType){
    return (
        <div>
            <section className="mt-6 flex gap-2" >
                <img className="max-w-12 max-h-12 rounded-full" src={imageUser} alt="" />
                <div>
                    <span className="font-medium text-black">{name} </span>
                    <p className="text-sm text-justify text-font-300" >
                            {comment}
                    </p>
                    <p className="text-xs text-font-300" >{date}</p>
                </div>
            </section>
            
        </div>
    )
}