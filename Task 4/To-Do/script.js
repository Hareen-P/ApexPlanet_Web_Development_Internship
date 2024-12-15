const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        text: taskText,
        completed: false,
    };

    saveTask(task);
    displayTask(task);
    todoInput.value = "";
}

function saveTask(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function displayTask(task) {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
        li.classList.add("completed");
    }

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.style.color = "green";
    completeBtn.onclick = () => toggleComplete(task.text);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => deleteTask(task.text);

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}

function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(displayTask);
}

function toggleComplete(taskText) {
    const tasks = getTasksFromLocalStorage();
    const task = tasks.find(t => t.text === taskText);
    if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        refreshTasks();
    }
}

function deleteTask(taskText) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(t => t.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    refreshTasks();
}

function refreshTasks() {
    todoList.innerHTML = "";
    loadTasks();
}