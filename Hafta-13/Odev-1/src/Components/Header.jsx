import React from 'react';

const Header = ({ newTodo, setNewTodo, addTodo }) => (
    <header className="header">
        <h1>todos</h1>
        <form onSubmit={addTodo}>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            />
        </form>
    </header>
);

export default Header;
