"use strict";

class Popup {
    constructor () {
        this.content = document.querySelector("#popup");

        this.categoryName = this.content.querySelector(".category");
        this.close = this.content.querySelector(".close");
        this.ok = this.content.querySelector(".confirm");
        this.name = this.content.querySelector(".name");

        this.close.addEventListener("click", () => {
            this.display(false);
        });

        this.ok.addEventListener("click", () => {
            const result = this.name.value.trim();

            if (!result) {
                this.name.focus();
                return;
            }

            this.name.value = "";

            this.display(false);
            this.cb(result);
        });
    }

    display (status){
        if (status) {
            this.content.classList.remove("hidden");
            this.name.focus();
        } else {
            this.content.classList.add("hidden");
        }
    };

    init(category, cb) {
        this.category = category;
        this.cb = cb;
        this.display(true);
    }
}

// the object must be created outside function to avoid closure
const popup = new Popup();

const dialog = (category, callBack) => popup.init(category, callBack);

export default dialog;