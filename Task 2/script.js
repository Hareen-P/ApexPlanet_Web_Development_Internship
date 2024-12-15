// Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name is required.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Message is required.");
        return;
    }

    alert("Form submitted successfully!");
});

// To-Do List Functionality
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Task cannot be empty!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = task;

    listItem.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = "";
});
