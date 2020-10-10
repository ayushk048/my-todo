import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ placeholder, addTodo }) => {
    const [value, setValue] = useState('');

    const submitHandler = e => {
        if (e.key === 'Enter') {
            if (!value) return;
            addTodo(value)
            setValue('');
        }
    }
    return (
        <input className="TodoForm" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} onKeyPress={submitHandler} />
    )
}

export default TodoForm;
