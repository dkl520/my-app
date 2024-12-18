import { useState } from 'react';

export default function SyncedInputs() {

    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }
    

    return (
        <>
            <Input label="第一个输入框" v={text} handleChange={handleChange} />
            <Input label="第二个输入框" v={text} handleChange={handleChange} />
        </>
    );
}

function Input({ label, v, handleChange }) {


    return (
        <label>
            {label}
            {' '}
            <input
                value={v}
                onChange={handleChange}
            />
        </label>
    );
}