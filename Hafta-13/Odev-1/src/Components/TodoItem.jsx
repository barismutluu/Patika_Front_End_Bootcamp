import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
    <li className={todo.done ? 'completed' : ''}>
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onChange={toggleTodo}
            />
            <label>{todo.text}</label>
            <button className="destroy" onClick={deleteTodo}></button>
        </div>
    </li>
);

export default TodoItem;
