import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './../actions';
function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')


    function handleInput(e) {
        setInput(e.target.value);
    }
    function handleAdd() {
        if (input) {
            dispatch(addTodo(input));
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
export default AddTodo;