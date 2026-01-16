/** @type {HTMLInputElement} */
const input_1 = document.querySelector("#input_1");
/** @type {HTMLInputElement} */
const input_2 = document.querySelector("#input_2");
/** @type {HTMLButtonElement} */
const compare = document.querySelector("#compare");
/** @type {HTMLDivElement} */
const square_1 = document.querySelector("#square_1");
/** @type {HTMLDivElement} */
const square_2 = document.querySelector("#square_2");

compare.addEventListener("click",() => {
    const num_1 = Number(input_1.value);
    if (isNaN(num_1)) {
        return;
    }
    const num_2 = Number(input_2.value);
    if (isNaN(num_2)) {
        return;
    }
    if (num_1 > num_2) {
        square_1.classList.add("higher");
        square_1.classList.remove("lower");
        square_2.classList.add("lower");
        square_2.classList.remove("higher");
    } else if (num_1 < num_2) {
        square_1.classList.add("lower");
        square_1.classList.remove("higher");
        square_2.classList.add("higher");
        square_2.classList.remove("lower");
    } else {
        square_1.classList.remove("higher");
        square_1.classList.remove("lower");
        square_2.classList.remove("lower");
        square_2.classList.remove("higher");
    }
});