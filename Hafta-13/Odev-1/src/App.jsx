import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;
        setTodos([...todos, { text: newTodo, done: false }]);
        setNewTodo('');
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const clearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.done);
        setTodos(newTodos);
    };

    const itemsLeft = todos.filter(todo => !todo.done).length;

    return (
        <section className="todoapp">
            <Header newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
            <MainSection todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} itemsLeft={itemsLeft} setTodos={setTodos} />
            <Footer itemsLeft={itemsLeft} clearCompleted={clearCompleted} />
        </section>
    );
};

export default App;
