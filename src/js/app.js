"use strict";

import Category from './components/Category';

const categories = [
    new Category('To do'),
    new Category('In progress'),
    new Category('Done')
];

console.log(categories);

let v1 = Symbol("abc");
let v2 = Symbol("abc");

let v3 = v1;

if (v1 == v3) {
    console.log("bingo!")
}

if (v2 == v1) {
    console.log("never");
}