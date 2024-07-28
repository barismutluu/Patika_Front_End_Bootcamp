document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    document.getElementById('liveToastBtn').addEventListener('click', newElement);
});

function newElement() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    if (!taskValue) {
        showToast('errorToast');
    } else {
        addTask(taskValue);
        taskInput.value = '';
        showToast('successToast');
    }
}

function addTask(task) {
    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.textContent = task;
    li.appendChild(createCloseButton());

    list.appendChild(li);
    setTimeout(() => li.classList.add('visible'), 10);

    li.addEventListener('click', toggleTask);
    saveTask(task);
}

function toggleTask(event) {
    const element = event.target;
    if (element.tagName === 'LI') {
        element.classList.toggle('checked');
        updateTaskStatus(element.textContent.trim(), element.classList.contains('checked'));
    }
}

function createCloseButton() {
    const span = document.createElement('span');
    span.className = 'close';
    span.textContent = '\u00D7';
    span.onclick = removeTask;
    return span;
}

function removeTask(event) {
    const taskElement = event.target.parentElement;
    taskElement.classList.add('removing');
    const taskText = taskElement.textContent.trim();
    setTimeout(() => {
        taskElement.remove();
        deleteTask(taskText);
    }, 300); // Wait for animation to complete
}

function clearAllTasks() {
    const list = document.getElementById('list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    localStorage.removeItem('tasks');
}

function showToast(toastId) {
    const toast = new bootstrap.Toast(document.getElementById(toastId));
    toast.show();
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: task, done: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t.text !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskStatus(task, done) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(t => t.text === task ? { ...t, done: done } : t);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTask(task.text);
        if (task.done) {
            const lastTask = document.querySelector('ul li:last-child');
            lastTask.classList.add('checked');
        }
    });
}
