"use strict";

import Template from './Template';
const template = new Template("#category");

class Category {

    constructor(title, bgColor, deleteCb) {
        this.title = title;
        this.bgColor = bgColor;
        this.deleteCb = deleteCb;

        this.content = template.clone();
        this.content.classList.add(this.bgColor);
        this.content.querySelector(".title").textContent = title;

        this.tasks = this.content.querySelector(".items");

        this.btn = this.content.querySelector(".action");
        this.btn.addEventListener("click", this.onAddTask.bind(this));
    }

    onAddTask() {
        console.log(`add task to ${this.title}`);
    };

    onDelete() {
        this.btn.removeEventListener("click", this.onAddTask);
        this.btn = null;
        this.deleteCb && this.deleteCb(this);
    }
}


export default Category;