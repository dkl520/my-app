import { useState } from 'react';

export default function FeedbackForm() {
    const [name, setName] = useState('');

    function handleClick() {
        let name = prompt('What is your name?')
        setName(name);
        debugger
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}
