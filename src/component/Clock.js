// src/index.js
import { useState } from 'react';

export default function Clock() {

    let [dates, setDates] = useState(new Date());

    function getFormattedTime(date) {
        let hour = date.getHours();
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hour}:${minutes}:${seconds}`;
    }


    setInterval(() => {
        setDates(new Date())
    }, 1000);


    return (
        <>
            <h1>{getFormattedTime(dates)} </h1>
            <input></input>
        </>
    )

}