import React, { useState } from 'react';


export function StopWatch({ milliscend, onStart, onStop, onReset }) {
    return (
        <div>
            <h2>{ms2Time(milliscend)}</h2>
            <button onClick={onStart}>start</button>
            <button onClick={onStop}>stop</button>
            <button onClick={onReset}>reset</button>
        </div>
    )
}

function ms2Time(milliscend) {
    let ms = parseInt(milliscend % 1000, 10);
    let second = parseInt((milliscend/1000)%60,10);

    let minute = parseInt(milliscend/(1000*60)%60,10);
    let hour = parseInt(milliscend/(1000*60*60),10);
    return `${hour}:${minute}:${second}.${ms}`;
}