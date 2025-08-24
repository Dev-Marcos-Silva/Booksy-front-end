import { Comment } from "../../components/ui/comment"
import { ButtonComment } from "../../components/buttons/buttonComment"
import { authContex } from "../../hook/authContext"

export function Comments(){

    const { account } = authContex()

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div>
                {account?.type === "USER" && <ButtonComment/>}
            </div>

            <Comment isUser={account?.type === "USER"} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={account?.type === "USER"} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={account?.type === "USER"} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={account?.type === "USER"} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            
         
        </section>
    )
}