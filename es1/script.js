/** @type {HTMLInputElement} */
const name_input = document.querySelector("#name");
/** @type {HTMLSelectElement} */
const gender_select = document.querySelector("#gender");
/** @type {HTMLButtonElement} */
const welcome_button = document.querySelector("#welcome_button");
/** @type {HTMLHeadingElement} */
const welcome_message = document.querySelector("#welcome_message");

welcome_button.addEventListener("click",() => {
    if (name_input.value === "") {
        name_input.classList.add("invalid");
        return;
    }
    name_input.classList.remove("invalid");
    welcome_message.innerText = `Benvenut${gender_select.value === "male" ? "o" : "a"}, ${name_input.value}!`
});