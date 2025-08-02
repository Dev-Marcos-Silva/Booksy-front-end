import { Comment } from "../components/comment"
import { ButtonComment } from "../components/buttonComment"

export function Comments(){

    const isUser = false

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div>
                {isUser && <ButtonComment/>}
            </div>

            <Comment name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
            <Comment name="marcos silva" comment="Lorem ipsum dolor sit amet consectetur adipisicing elit daa fafa gfgga" date="17/02/2019"/>
         
        </section>
    )
}