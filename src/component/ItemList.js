
import Item from "./Item"
import { people } from "../data/data";
import getImageUrl from "../util/util";
export default function ItemList() {
    let ulList = people.map(person => {
        return (
            <li key={person.id}>
                <img src={getImageUrl(person)}></img>
                <div>
                <p>{person.name}</p>
                <p> {person.profession} </p>
                <p>{person.accomplishment} </p>
                </div>
            </li>
        )
    });


    return (
        <div>
            <h1>Scientist</h1>
            <article>
                {ulList}
            </article>
        </div>
    );

}   