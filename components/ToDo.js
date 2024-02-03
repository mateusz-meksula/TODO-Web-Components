const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="./components/ToDo.css" />
    <div class="todo-item">
        <p>
            <slot></slot>
        </p>
        <div class="buttons">
            <button class="done-btn">Done!</button>
            <button class="del-btn">Delete</button>
        </div>
    </div>
`;

export class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.todoText = this.shadowRoot.querySelector("p");
        this.doneButton = this.shadowRoot.querySelector(".done-btn");
        this.delButton = this.shadowRoot.querySelector(".del-btn");

        this.done = false;
    }

    connectedCallback() {
        this.doneButton.addEventListener("click", () => {
            this.done = !this.done;
            if (this.done) this.handleDoneTrue();
            else this.handleDoneFalse();
        });

        this.delButton.addEventListener("click", () => {
            let element = this.shadowRoot.querySelector(".todo-item");
            element.classList.add("remove");
            element.addEventListener("animationend", () => {
                this.remove();
            });
        });
    }

    handleDoneTrue() {
        this.doneButton.innerText = "Undone";
        this.todoText.classList.add("todo-done");
    }
    handleDoneFalse() {
        this.doneButton.innerText = "Done";
        this.todoText.classList.remove("todo-done");
    }
}
