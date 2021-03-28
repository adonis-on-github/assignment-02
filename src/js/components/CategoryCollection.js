"use strict";

import Category from './Category';

class CategoryCollection {
    constructor(contentId) {
        this.content = document.querySelector(contentId);

        const deleteCb = this.deleteCategory.bind(this);

        this.categories = [
            new Category("To Do", "bg-gray-200", deleteCb),
            new Category("In progress", "bg-blue-200", deleteCb),
            new Category("Done", "bg-green-200", deleteCb),
        ];

        this.fillContent();
    }

    fillContent() {
        const fragment = document.createDocumentFragment();

        this.categories.forEach(item => fragment.appendChild(item.content));

        this.content.textContent = "";
        this.content.appendChild(fragment);
    }

    deleteCategory(category) {
        this.categories = this.categories.filter(crt => crt != category);
        this.fillContent();
    }
}

export default CategoryCollection;