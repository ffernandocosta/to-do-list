let tasks = [];


const taskInputEl = document.getElementById("addtask-input");
const submitTaskEl = document.getElementById("addtask-btn");
const todoListUl = document.querySelector(".todo-tasks");


submitTaskEl.addEventListener("click", (e) => {
    
    e.preventDefault();
    tasks.push(taskInputEl.value)
    renderTasks()
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
