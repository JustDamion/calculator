const OPERATORS = ["+", "-", "x", "/", "%"];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "x":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        case "%":
            modulo(num1, num2);
            break;
    }
}

function updateInput(value) {
    if (+value || +value === 0 || value === ".") {
        currentInput.textContent += value;
    }
}

function clear() {
    num1 = null;
    num2 = null;
    currentInput.textContent = '';
    history.textContent = '';
}

function calculate(operator) {
    if (num1 === null) {
        num1 = +currentInput.textContent;
    } else {
        num2 = +currentInput.textContent;
        let num1 = operate(num1, num2, operator);
    }

    history.textContent += ` ${currentInput.textContent} ${operator} `;
    currentInput.textContent = '';
}

const currentInput = document.querySelector(".current-input");
const history = document.querySelector(".history");
const inputsContainer = document.querySelector(".inputs");

let num1 = null;
let num2 = null;

inputsContainer.addEventListener("click", (event) => {
    const inputValue = event.target.textContent;
    updateInput(inputValue);

    if (inputValue === "Clear") {
        clear();
    } else if (OPERATORS.includes(inputValue)) {
        calculate(inputValue);
    }
});