import React, { useState } from "react";
import ReactDOM from 'react-dom'




export function MyNameF(props) {
    const [name, setName] = useState('');
    function handleChange(evt) {
        setName(evt.target.value)
    }
    let [count,setCount] = useState(0)
    // setInterval(() => {
    //     setCount(count++)
    //     console.log(count);
    // }, 1000);
    return (<div>
        <h2>MyNameF</h2>
        my name is : {name}
        <input type="text" value={name} onChange={handleChange} />
        <hr />
        <div>
            start {count}
        </div>
    </div>)
}