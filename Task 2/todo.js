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
