import React, { useState } from "react";



export function MyNameF(props) {
    const [name, setName] = useState('');
    function handleChange(evt) {
        setName(evt.target.value)
    }
    return (<div>
        <h2>MyNameF</h2>
        my name is : {name}
        <input type="text" value={name} onChange={handleChange} />
    </div>)
}