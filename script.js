const OPERATORS = ["+", "-", "x", "/", "%"];

const currentInput = document.getElementById("currentInput");
const inputContainer = document.getElementById("inputContainer");
const errorMessage = document.getElementById("errorMessage");

let firstNumber = null;
let secondNumber = null;
let operator = null;
let lastInput = null;
let inputValue = null;

inputContainer.addEventListener("click", (event) => {
    if (validateInput(event.target.textContent) === 0) {
        return 0;
    }
    inputValue = event.target.textContent;
    updateInput(inputValue);

    if (inputValue === "Clear") {
        clear();
    } else if (inputValue === "=") {
        secondNumber = +currentInput.textContent;
        firstNumber = operate(firstNumber, secondNumber, operator)
        currentInput.textContent = firstNumber;
        secondNumber = null;
    }

    lastInput = inputValue;
});

function updateInput(value) {
    if (+value || +value === 0) {
        if (OPERATORS.includes(lastInput)) {
            currentInput.textContent = '';
        }
        currentInput.textContent += value;
    } else if (OPERATORS.includes(value)) {
        if (firstNumber === null) {
            firstNumber = +currentInput.textContent;
            operator = value;
            currentInput.textContent = '';
        } else {
            secondNumber = +currentInput.textContent;
            firstNumber = operate(firstNumber, secondNumber, operator)
            currentInput.textContent = firstNumber;
            secondNumber = null;
            operator = value;
        }
    }
}

function validateInput(input) {
    errorMessage.textContent = '';
    if (OPERATORS.includes(inputValue) && OPERATORS.includes(input)) {
        errorMessage.textContent = "Please enter a number";
        return 0;
    }
    if (currentInput.textContent === '' && (OPERATORS.includes(input) || input === "=")) {
        errorMessage.textContent = "Please enter a number";
        return 0;
    }
}

function clear() {
    firstNumber = null;
    secondNumber = null;
    currentInput.textContent = '';
    errorMessage.textContent = '';
}

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

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "x":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        case "%":
            return modulo(a, b);
            break;
    }
}
