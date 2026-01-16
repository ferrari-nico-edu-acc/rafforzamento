/** @type {HTMLHeadingElement} */
const counter = document.querySelector("#counter")
/** @type {HTMLButtonElement} */
const increment = document.querySelector("#increment")
/** @type {HTMLButtonElement} */
const decrement = document.querySelector("#decrement")

let count = 0;

function handle_counter() {
    counter.innerText = String(count);
    if (count > 0) {
        counter.classList.add("positive");
        counter.classList.remove("negative");
    } else if (count < 0) {
        counter.classList.add("negative");
        counter.classList.remove("positive");
    } else {
        counter.classList.remove("positive");
        counter.classList.remove("negative");
    }
    if (count > 10) {
        counter.classList.add("bold");
    } else {
        counter.classList.remove("bold");
    }
}

increment.addEventListener("click",() => {
    count++;
    handle_counter()
});

decrement.addEventListener("click",() => {
    count--;
    handle_counter()
});