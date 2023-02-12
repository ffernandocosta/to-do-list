let tasks = [];


const taskInputEl = document.getElementById("addtask-input");
const submitTaskEl = document.getElementById("addtask-btn");
const todoListUl = document.querySelector(".todo-tasks");


submitTaskEl.addEventListener("click", (e) => {
    e.preventDefault();
    tasks.push(taskInputEl.value)
})