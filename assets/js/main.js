let tasks = [];


const taskInputEl = document.getElementById("addtask-input");
const submitTaskEl = document.getElementById("addtask-btn");
const clearTaskEl = document.getElementById("clear-tasks-btn");
const todoListUl = document.querySelector(".todo-tasks");


const verifyTaskInputField = (field) => {
    if (field.value === "") {
        field.nextElementSibling.classList.add('empty-field-error__showError');
    } else {
        tasks.push(taskInputEl.value)
        field.nextElementSibling.classList.remove('empty-field-error__showError');
    }
}

submitTaskEl.addEventListener("click", (e) => {
    verifyTaskInputField(taskInputEl)
    e.preventDefault();
    renderTasks()
    taskInputEl.value = "";
});

function renderTasks() {

    todoListUl.innerHTML = "";
    
    for (let i = 0; i < tasks.length; i++) {
        const liTaskEl = document.createElement("li")
        liTaskEl.className = "task"
        liTaskEl.textContent = tasks[i]
        todoListUl.append(liTaskEl)
    }
}

clearTaskEl.addEventListener("click", () => {
    tasks = []
    renderTasks()
})