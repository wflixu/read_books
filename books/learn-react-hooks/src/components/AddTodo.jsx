import React, { Component, useState } from 'react';

import { inject, observer } from 'mobx-react'

function AddTodo({ todoStore }) {

    const [input, setInput] = useState('');

    function handleInput(e) {
        setInput(e.target.value);
    }
    function handleAdd() {
        if (input) {
            todoStore.addTodo(input)
            setInput('');
        }
    }



    return (
        <div >
            <form onSubmit={e => { e.preventDefault(); handleAdd() }}>
                <input type="text" value={input} onChange={handleInput} placeholder="enter new task" style={{ width: 350, height: 35 }} />
                <input type="submit" value="add" style={{ float: 'right', marginTop: '2' }} disabled={!input} />

            </form>
        </div>
    )

}
export default inject('todoStore')(AddTodo);