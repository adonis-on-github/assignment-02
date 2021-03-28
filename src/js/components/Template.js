"use strict";

class Template  {
    constructor(templateId) {
        this.content = document.querySelector(templateId).content;
    }

    clone() {
        const result = this.content.cloneNode(true);
        return result.firstElementChild;
    }
}

export default Template;