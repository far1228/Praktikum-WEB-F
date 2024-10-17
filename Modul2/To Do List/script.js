function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Check if the input field is empty
    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskInput.value} 
        <div>
            <button class="edit-button" onclick="editTask(this)">Edit</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        </div>`;

    // Append the new task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

function deleteTask(button) {
    // Remove the task from the list
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    // Prompt user to edit the task
    const taskItem = button.parentElement.parentElement;
    const newTask = prompt("Edit your task:", taskItem.childNodes[0].nodeValue.trim());

    // Update the task if a new value is provided
    if (newTask !== null && newTask.trim() !== "") {
        taskItem.childNodes[0].nodeValue = newTask;
    }
}
