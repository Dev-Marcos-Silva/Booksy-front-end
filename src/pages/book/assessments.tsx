import { Rating } from "../../components/ui/rating";
import { ButtonRating } from "../../components/buttons/buttonRating";
import { authContex } from "../../hook/authContext";

export function Assessments(){

    const { account } = authContex()

    return(
        <section className="overflow-auto no-scrollbar max-h-100">
            <div> 
               { account?.type === "USER" && <ButtonRating/>}
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