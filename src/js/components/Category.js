"use strict";

class Category {
    constructor(name) {
        this.name = name;
        this.key = Symbol(name);
    }
}


export default Category;