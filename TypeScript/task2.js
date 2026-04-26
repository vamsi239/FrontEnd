"use strict";
function task2(a, b, c) {
    if (typeof a === "number" && typeof b === "number") {
        return a;
    }
    if (typeof a === "string" && typeof b === "string" && typeof c === "string") {
        return b;
    }
}
console.log(task2(10, 11));
console.log(task2("Vamsi", "Ajay", "Krishna"));
