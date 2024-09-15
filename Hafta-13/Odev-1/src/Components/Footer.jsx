import React from 'react';

const Footer = ({ itemsLeft, clearCompleted }) => (
    <footer className="footer">
        <span className="todo-count">{itemsLeft} {itemsLeft === 1 ? 'item' : 'items'} left</span>
        <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
        </button>
    </footer>
);

export default Footer;
