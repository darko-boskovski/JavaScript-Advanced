console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(() => {

    let button1 = document.getElementById("button1");
    console.log(button1);
    let button2 = document.getElementById("button2");
    console.log(button2);
    let button3 = document.getElementById("button3");
    console.log(button3);
    let button4 = document.getElementById("button4");
    console.log(button4);
    let button5 = document.getElementById("button5");
    console.log(button5);
    let button6 = document.getElementById("button6");
    console.log(button6);
    let button7 = document.getElementById("button7");
    console.log(button7);
    let button8 = document.getElementById("button8");
    console.log(button8);
    let button9 = document.getElementById("button9");
    console.log(button9);
    let button0 = document.getElementById("button0");
    console.log(button0);

    let button_CE = document.getElementById("ce");
    console.log(button_CE);
    let button_C = document.getElementById("c");
    console.log(button_C);
    let buttonDel = document.getElementById("del");
    console.log(buttonDel);
    let divide = document.getElementById("divide");
    console.log(divide);
    let multiply = document.getElementById("multiply");
    console.log(multiply);
    let minus = document.getElementById("minus");
    console.log(minus);
    let plus = document.getElementById("plus");
    console.log(plus);
    let minusValue = document.getElementById("minusValue");
    console.log(minusValue);
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


    button1.addEventListener("click", () => {
        if (
            button1.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button1.value === "-" &&
            displayOne.textContent.includes("-")
        )
            return;

        if (result) {
            num1 = button1.value;
            result = "";
        } else {
            num1 += button1.value;
        }
        displayOne.textContent = num1;
    });

    button2.addEventListener("click", () => {
        if (
            button2.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button2.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button2.value;
            result = "";
        } else {
            num1 += button2.value;
        }
        displayOne.textContent = num1;
    });

    button3.addEventListener("click", () => {
        if (
            button3.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button3.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button3.value;
            result = "";
        } else {
            num1 += button3.value;
        }
        displayOne.textContent = num1;
    });

    button4.addEventListener("click", () => {
        if (
            button4.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button4.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button4.value;
            result = "";
        } else {
            num1 += button4.value;
        }
        displayOne.textContent = num1;
    });

    button5.addEventListener("click", () => {
        if (
            button5.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button5.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button5.value;
            result = "";
        } else {
            num1 += button5.value;
        }
        displayOne.textContent = num1;
    });

    button6.addEventListener("click", () => {
        if (
            button6.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button6.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button6.value;
            result = "";
        } else {
            num1 += button6.value;
        }
        displayOne.textContent = num1;
    });

    button7.addEventListener("click", () => {
        if (
            button7.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button7.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button7.value;
            result = "";
        } else {
            num1 += button7.value;
        }
        displayOne.textContent = num1;
    });

    button8.addEventListener("click", () => {
        if (
            button8.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button8.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button8.value;
            result = "";
        } else {
            num1 += button8.value;
        }
        displayOne.textContent = num1;
    });

    button9.addEventListener("click", () => {
        if (
            button9.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button9.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button9.value;
            result = "";
        } else {
            num1 += button9.value;
        }
        displayOne.textContent = num1;
    });

    button0.addEventListener("click", () => {
        if (
            button0.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            button0.value === "-" &&
            displayOne.textContent.includes("-")

        )
            return;

        if (result) {
            num1 = button0.value;
            result = "";
        } else {
            num1 += button0.value;
        }
        displayOne.textContent = num1;
    });

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

    minusValue.addEventListener("click", () => {
        if (
            minusValue.value === "." &&
            displayOne.textContent.includes(".")
        )
            return;
        if (
            minusValue.value === "-" &&
            displayOne.textContent.includes("-")
        )
            return;

        if (result) {
            num1 = minusValue.value;
            result = "";
        } else {
            num1 += minusValue.value;

        }
        displayOne.textContent = num1;
    });


    plus.addEventListener("click", () => {

        displayTwo.textContent += operator + num1;

        if (displayOne.textContent === "") {
            return
        };
        console.log(displayOne.textContent);


        if (num2 && num1) {
            calculate()
        };
        operator = plus.value;
        console.log(plus.value)
        num2 = num1;
        displayOne.textContent = "";
        num1 = "";
    });

    minus.addEventListener("click", () => {

        displayTwo.textContent += operator + num1;

        if (displayOne.textContent === "") {
            return
        };
        console.log(displayOne.textContent);



        if (num2 && num1) {
            calculate()
        };
        operator = minus.value;
        console.log(minus.value)
        num2 = num1;
        displayOne.textContent = "";
        num1 = "";

    });

    multiply.addEventListener("click", () => {

        displayTwo.textContent += operator + num1;

        if (displayOne.textContent === "") {
            return
        };
        console.log(displayOne.textContent);

        if (num2 && num1) {
            calculate()
        };
        operator = multiply.value;
        console.log(multiply.value)
        num2 = num1;
        displayOne.textContent = "";
        num1 = "";

    });

    divide.addEventListener("click", () => {

        displayTwo.textContent += operator + num1;

        if (displayOne.textContent === "") {
            return
        };
        console.log(displayOne.textContent);



        if (num2 && num1) {
            calculate()
        };
        operator = divide.value;
        console.log(divide.value);
        num2 = num1;
        displayOne.textContent = "";
        num1 = "";

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