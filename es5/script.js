/** @type {HTMLTextAreaElement} */
const input = document.querySelector("#input");
/** @type {HTMLButtonElement} */
const check = document.querySelector("#check");
/** @type {HTMLDivElement} */
const output = document.querySelector("#output");

const vowels = ["a","e","i","o","u","A","E","I","O","U"];

check.addEventListener("click",() => {
    const result = input.value.split("").reduce((acc,cur) => vowels.includes(cur) ? acc + 1 : acc,0);
    output.style.display = "block";
    output.innerText = String(result);
    if (result > 10) {
        output.style.fontSize = "24px";
    } else {
        output.style.removeProperty("font-size");
    }
})