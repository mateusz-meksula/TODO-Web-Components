import { TodoItem } from "./components/ToDo.js";
customElements.define("todo-item", TodoItem);

let todoInput = document.getElementById("todo-input");
let addTodoButton = document.getElementById("add-todo-btn");
let todosContainer = document.getElementById("todos");

addTodoButton.addEventListener("click", () => {
    let todoText = todoInput.value;
    if (!todoText) return;

    let todo = document.createElement("todo-item");
    todo.innerText = todoText;
    todosContainer.appendChild(todo);
});
