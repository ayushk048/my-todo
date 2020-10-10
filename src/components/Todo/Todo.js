import React from 'react';
import Button from '../Button/Button';
import './Todo.css'

const Todo = ({ todo, completed, completeClicked, removeClicked }) => {

    return (
        <div className='Todo'>
            <p style={{ textDecoration: completed ? 'line-through' : '', display: 'inline-block' }}>{todo}</p>
            <div style={{ display: 'inline-block', float: 'right' }}>
                <Button btnType='Success' clicked={completeClicked} >completed</Button>
                <Button btnType='Danger' clicked={removeClicked} >x</Button>
            </div>
        </div >
    )
}

export default Todo;