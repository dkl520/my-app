import { use, useState } from "react";

export default function EditProfile() {
    let [inputN1, setInputN1] = useState("Jane");
    let [inputN2, setInputN2] = useState("Jacobs");
    let [isActive, setActive] = useState(false)

    function changeN1(e) {
        setInputN1(e.target.value)
    }

    function changeN2(e) {
        setInputN2(e.target.value)
    }

    return (
        <form>
            <label>
                First name:{' '}
                <b>{inputN1}</b>
                <input style={{ display: isActive ? 'inline' : 'none' }} value={inputN1} onChange={changeN1} />
            </label>
            <label>
                Last name:{' '}
                <b>{inputN2}</b>
                <input style={{ display: isActive ? 'inline' : 'none' }} value={inputN2} onChange={changeN2} />
            </label>
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                setActive(!isActive)
            }}  >
                Edit Profile
            </button>
            <p><i>Hello, {inputN1} {inputN2}</i></p>
        </form>
    );
}
