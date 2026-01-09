/** @type {HTMLDivElement} */
const lamp = document.querySelector("#lamp");
/** @type {HTMLButtonElement} */
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click",() => {
    lamp.classList.toggle("on");
    toggle.innerText = toggle.innerText === "Accendi" ? "Spegni" : "Accendi";
})