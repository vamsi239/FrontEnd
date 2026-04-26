let value = 0;

let count = document.getElementById("num");

document.getElementById("increase").addEventListener("click", () => {
    value++;
    count.innerText = value;
});

document.getElementById("decrease").addEventListener("click", () => {
    value--;
    count.innerText = value;
});