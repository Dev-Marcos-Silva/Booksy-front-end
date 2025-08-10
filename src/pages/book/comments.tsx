import { Comment } from "../../components/ui/comment"
import { ButtonComment } from "../../components/buttons/buttonComment"

export function Comments(){

    const isUser = true

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div>
                {isUser && <ButtonComment/>}
            </div>

            <Comment isUser={isUser} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={isUser} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={isUser} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={isUser} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment isUser={isUser} name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
         
        </section>
    )
}