import getImageUrl from "../util/util";
import Card from "./Card";

const person = {
    name: 'Gregorio Y. Zara',
    imageId:"yXOvdOS",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name} </h1>
            <img
                src={getImageUrl(person)}
                alt="Hedy Lamarr"
                className="photo"
            />


          

            <ul>
                <li>Invent new traffic lights </li>
                <li>Rehearse a movie scene      </li>
                <li>Improve spectrum technology </li>
            </ul>
        </div>

    );
}