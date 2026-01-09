/** @type {HTMLInputElement} */
const input = document.querySelector("#input");
/** @type {HTMLButtonElement} */
const add = document.querySelector("#add");
/** @type {HTMLDivElement} */
const balls_container = document.querySelector("#balls_container");

add.addEventListener("click",() => {
    if (Number(input.value) % 2 != 0) {
        return;
    }
    const ball = document.createElement("div");
    ball.innerText = input.value
    balls_container.appendChild(ball)
})