import React from 'react';
import TodoList from './TodoList';

const MainSection = ({ todos, toggleTodo, deleteTodo, itemsLeft, setTodos }) => (
    <section className="main">
        <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={itemsLeft === 0}
            onChange={() => setTodos(todos.map(todo => ({ ...todo, done: itemsLeft !== 0 })))}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </section>
);

export default MainSection;
