import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <ul className="todo-list">
        {todos.map((todo, index) => (
            <TodoItem
                key={index}
                todo={todo}
                toggleTodo={() => toggleTodo(index)}
                deleteTodo={() => deleteTodo(index)}
            />
        ))}
    </ul>
);

export default TodoList;
