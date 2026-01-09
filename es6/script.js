/** @type {HTMLInputElement} */
const input = document.querySelector("#input");
/** @type {HTMLButtonElement} */
const check = document.querySelector("#check");
/** @type {HTMLDivElement} */
const output = document.querySelector("#output");

check.addEventListener("click",() => {
    if (input.value === input.value.split("").reverse().join("")) {
        output.classList.remove("no_match");
        output.classList.add("match");
        output.innerText = "✔";
        return;
    }
    output.classList.remove("match");
    output.classList.add("no_match");
    output.innerText = "X";
});