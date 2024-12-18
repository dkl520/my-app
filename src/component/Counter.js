import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(number + 1);
                setNumber(number + 2);
                setNumber(number + 3);
                setNumber(number + 4);
                setNumber(number => number + 1);
            }}>增加数字</button>
        </>
    )
}