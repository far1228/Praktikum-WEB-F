const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let displayValue = "";


const calculate = (btnValue) => {
    if (btnValue === "AC") {
        displayValue = "";
    } else if (btnValue === "DEL") {
        displayValue = displayValue.slice(0, -1);
    } else if (btnValue === "=") {
        try {
           
            if (displayValue.includes("^")) {
                const [base, exponent] = displayValue.split("^");
                displayValue = Math.pow(base, exponent);
            } else {
                displayValue = eval(displayValue);
            }
        } catch (error) {
            displayValue = "Error";
        }
    } else {
        displayValue += btnValue;
    }
    display.value = displayValue;
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calculate(button.getAttribute("data-value"));
    });
});
