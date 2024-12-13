
import { useState } from "react"



export default function MyButton({ buttonTitle, className, cc }) {

    // let [count, setCount] = useState(0);


    function handleClick() {
        // setCount(count => count + 1);
        cc((prevNum) => {
            // prevNum++;
            return prevNum + 1;
        });
        // alert("I am a button! " + count);

    }


    // function handleClick() {
    //     setCount((prevCount) => {
    //         alert("I am a button! " + (prevCount + 1));
    //         return prevCount + 1;
    //     });
    // }


    return (
        <button onClick={handleClick} className={className} >{buttonTitle} </button>
    )
}
