/** @type {HTMLInputElement} */
const input = document.querySelector("#input");
/** @type {HTMLButtonElement} */
const generate = document.querySelector("#generate");
/** @type {HTMLUListElement} */
const list = document.querySelector("#list");

generate.addEventListener("click",() => {
    if (input.value === "") {
        return;
    }
    const num = Number(input.value);
    if (!isFinite(num)) {
        return;
    }
    list.replaceChildren([]);
    for (let i = 0; i < 20; i++) {
        const item = document.createElement("li");
        item.innerText = String(num*(i + 1));
        if (i % 2 !== 0) {
            item.style.backgroundColor = "#f0f0f0"
        }
        list.appendChild(item)
    }
});