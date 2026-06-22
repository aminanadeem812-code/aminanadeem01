function addTask() {
    let input = document.querySelector(".task-input input");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskContainer = document.querySelector(".task");

    let taskBox = document.createElement("div");
    taskBox.classList.add("task-box");

    taskBox.innerHTML = `
        <input type="checkbox" class="task-check">
        <input type="text" value="${taskText}" readonly>
        <button class="taskbtn">Delete</button>
    `;

    // DELETE
    taskBox.querySelector(".taskbtn").addEventListener("click", function () {
        taskBox.remove();
    });

    // SINGLE CHECKBOX LOGIC
    taskBox.querySelector(".task-check").addEventListener("change", function () {
        if (this.checked) {
            document.querySelectorAll(".task-check").forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
        }
    });

    taskContainer.appendChild(taskBox);
    input.value = "";
}