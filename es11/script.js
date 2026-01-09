/** @type {HTMLParagraphElement} */
const text = document.querySelector("#text");
/** @type {HTMLButtonElement} */
const increase = document.querySelector("#increase");
/** @type {HTMLButtonElement} */
const decrease = document.querySelector("#decrease");

let text_size = 16;

increase.addEventListener("click",() => {
    text_size++;
    text.style.fontSize = `${text_size}px`;
});

decrease.addEventListener("click",() => {
    text_size = Math.max(text_size - 1,10);
    text.style.fontSize = `${text_size}px`;
})