/** @type {HTMLInputElement} */
const input = document.querySelector("#bg_color_input");
/** @type {HTMLButtonElement} */
const button = document.querySelector("#bg_color_button");

button.addEventListener("click",() => {
    if (input.value == "random") {
        document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        return
    }
    document.body.style.backgroundColor = input.value
})