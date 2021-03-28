"use strict";

import Template from './Template';
import dialog from './Dialog';

const categoryTemplate = new Template("#category");
const taskTemplate = new Template("#task");

class Category {

    constructor(title, bgColor, deleteCb) {
        this.title = title;
        this.bgColor = bgColor;
        this.deleteCb = deleteCb;

        this.content = categoryTemplate.clone();
        this.content.classList.add(this.bgColor);
        this.content.querySelector(".title").textContent = title;

        this.tasks = this.content.querySelector(".items");

        this.btn = this.content.querySelector(".action");
        this.btn.addEventListener("click", () => dialog(this.title, name => this.addTask(name)));
    }

    addTask(name) {
        const task = taskTemplate.clone();
        task.textContent = name;
        this.tasks.appendChild(task);
    }

    onDelete() {
        this.btn.removeEventListener("click", this.onAddTask);
        this.btn = null;
        this.deleteCb && this.deleteCb(this);
    }
}


export default Category;