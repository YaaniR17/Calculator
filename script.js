document.addEventListener("DOMContentLoaded", function() {
    let currentNum = "";
    let previousNum = "";
    let operator = "";

    const clear = document.querySelector("#clear-btn");
    const equal = document.querySelector(".equal");
    const decimal = document.querySelector(".decimal");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const previousScreen = document.querySelector(".previous");
    const currentScreen = document.querySelector(".current");

    numbers.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentNum.length <= 12) {
                currentNum += btn.textContent;
                currentScreen.textContent = currentNum;
            }
        });
    });

    operators.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentNum === "") return;
            operator = btn.textContent;
            previousNum = currentNum;
            previousScreen.textContent = previousNum + " " + operator;
            currentNum = "";
            currentScreen.textContent = "";
        });
    });

    equal.addEventListener("click", () => {
        if (currentNum !== "" && previousNum !== "") {
            calculate();
        }
    });

    decimal.addEventListener("click", () => {
        if (!currentNum.includes(".")) {
            currentNum += ".";
            currentScreen.textContent = currentNum;
        }
    });

    clear.addEventListener("click", () => {
        currentNum = "";
        previousNum = "";
        operator = "";
        currentScreen.textContent = "0";
        previousScreen.textContent = "";
    });

    function calculate() {
        let a = parseFloat(previousNum);
        let b = parseFloat(currentNum);
        let result;

        if (operator === "+") result = a + b;
        else if (operator === "-") result = a - b;
        else if (operator === "x") result = a * b;
        else if (operator === "/") result = b === 0 ? "Error" : a / b;

        currentScreen.textContent = result;
        previousScreen.textContent = "";
        currentNum = result.toString();
    }
});