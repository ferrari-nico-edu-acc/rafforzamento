/** @type {HTMLInputElement} */
const prices = document.querySelector("#prices");
/** @type {HTMLButtonElement} */
const calculate = document.querySelector("#calculate");
/** @type {HTMLHeadingElement} */
const result = document.querySelector("#result");

calculate.addEventListener("click",() => {
    const total = prices.value.replaceAll(/\s/g,"").split(",").map(val => Number(val)).filter(val => isFinite(val)).reduce((acc,cur) => acc + cur,0);
    result.innerText = `Totale: ${total}`;
})