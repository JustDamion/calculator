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
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "x":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        case "%":
            return modulo(num1, num2);
            break;
    }
}

function updateInput(value) {
    if (+value || +value === 0) {
        currentInput.textContent += value;
    } else if (OPERATORS.includes(value)) {
        if (num1 === null) {
            num1 = +currentInput.textContent;
            operator = value;
            currentInput.textContent = '';
        } else {
            num2 = +currentInput.textContent;
            num1 = operate(num1, num2, operator)
            currentInput.textContent = num1;
            num2 = null;
            operator = value;
        }
    }
}

function clear() {
    num1 = null;
    num2 = null;
    currentInput.textContent = '';
}

const currentInput = document.querySelector(".current-input");
const inputsContainer = document.querySelector(".inputs");

let num1 = null;
let num2 = null;
let operator = null;
let inputValue = null;

inputsContainer.addEventListener("click", (event) => {
    inputValue = event.target.textContent;
    updateInput(inputValue);

    if (inputValue === "Clear") {
        clear();
    } else if (inputValue === "=") {
        num2 = +currentInput.textContent;
        num1 = operate(num1, num2, operator)
        currentInput.textContent = num1;
        num2 = null;
    }
});