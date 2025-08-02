import { Rating } from "../components/rating";
import { ButtonRating } from "../components/buttonRating";

export function Assessments(){

    const isUser = false

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div> 
               {isUser && <ButtonRating/>}
            </div>

            <Rating name="marcos silva" date="10/04/2023" index={4} />
            <Rating name="bruna felix" date="10/04/2023" index={5} />
            <Rating name="jeremias" date="10/04/2023" index={3} />
            <Rating name="marcos silva" date="10/04/2023" index={4} />
            <Rating name="bruna felix" date="10/04/2023" index={5} />
            <Rating name="jeremias" date="10/04/2023" index={3} />
            <Rating name="marcos silva" date="10/04/2023" index={4} />
            <Rating name="bruna felix" date="10/04/2023" index={5} />
            <Rating name="jeremias" date="10/04/2023" index={3} />

        </section>
    )
}