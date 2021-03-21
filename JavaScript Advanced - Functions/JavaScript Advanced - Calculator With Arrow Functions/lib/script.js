console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(() => {


    let numberButtons = document.getElementsByClassName("numButton")
    console.log(numberButtons)

    let operatorButtons = document.getElementsByClassName("opp")
    console.log(operatorButtons)


    let button_CE = document.getElementById("ce");
    console.log(button_CE);
    let button_C = document.getElementById("c");
    console.log(button_C);
    let buttonDel = document.getElementById("del");
    console.log(buttonDel);
    let dot = document.getElementById("dot");
    console.log(dot);
    let equal = document.getElementById("equal");
    console.log(equal);

    let displayOne = document.getElementsByTagName("p")[1]
    console.log(displayOne)
    let displayTwo = document.getElementsByTagName("p")[0]
    console.log(displayTwo)


    let num1 = "";
    let num2 = "";
    let result;
    let operator = "";


    let calculate = () => {

        if (displayOne.textContent === "") return;

        if (num2.length > 0 || num1.length > 0) {
            num2 = parseFloat(num2);
            num1 = parseFloat(num1);
        }

        switch (operator) {
            case "+":
                result = num2 + num1;
                break;
            case "-":
                result = num2 - num1;
                break;
            case "/":
                result = num2 / num1;
                if (num1 === 0) {
                    result = "Cannot divide by zero"
                    displayOne.style.fontSize = "30px";
                }
                break;
            case "*":
                result = num2 * num1;
                break;
            default:
                return;
        }
        console.log(typeof result)
        num1 = result;
        num2 = "";

        checkNumber(result) ?
            displayOne.textContent = result :
            displayOne.textContent = "The number is too large"
        displayOne.style.fontSize = "30px";


    };


    let checkNumber = input => {

        if (typeof input == "number") {
            if (input > Math.pow(10, 16)) {
                return false
            }

        } else {
            console.log(typeof input)
        }
        return true
    }


    for (let button of numberButtons) {

        displayTwo.textContent += operator + num1
        button.addEventListener("click", () => {
            if (
                button.value === "." &&
                displayOne.textContent.includes(".")
            )
                return;
            if (
                button.value === "-" &&
                displayOne.textContent.includes("-")
            )
                return;

            if (result) {
                num1 = button.value;
                result = "";
            } else {
                num1 += button.value;
            }
            displayOne.textContent = num1;
        });
    }


    for (let button of operatorButtons) {

        button.addEventListener("click", () => {

            displayTwo.textContent += operator + num1

            if (
                button.value === "." &&
                displayOne.textContent.includes(".")
            )
                return;
            if (
                button.value === "-" &&
                displayOne.textContent.includes("-")
            )
                if (num2 && num1) {
                    calculate()
                };
            operator = button.value;
            num2 = num1;
            displayOne.textContent = "";
            num1 = "";
        });
    }


    dot.addEventListener("click", () => {
        if (
            dot.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            dot.value === "-" &&
            displayOne.textContent.includes("-")
        )
            return;

        if (result) {
            num1 = dot.value;
            result = "";
        } else {
            num1 += dot.value;
        }
        displayOne.textContent = num1;
    });


    button_CE.addEventListener("click", () => {

        displayOne.textContent = "";
        num1 = "";
        operator = "";
    });

    button_C.addEventListener("click", () => {

        displayOne.textContent = "";
        displayTwo.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
        result = "";
    });

    buttonDel.addEventListener("click", () => {

        let displayToString = displayOne.textContent;
        let deleteLastNumber = displayToString.slice(0, -1);
        displayOne.textContent = deleteLastNumber;
        num1 = deleteLastNumber;

    });

    equal.addEventListener("click", () => { num2 && num1 ? calculate() : displayTwo.textContent = "" })






})