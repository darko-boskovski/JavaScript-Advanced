console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(function() {

    let numberOne = 8

    let numberTwo = 12


    function fibonacci(number) {

        if (number < 2) {
            return number;
        }
        if (number < 3) {
            return [1, 1];
        }

        let result = fibonacci(number - 1);

        result.push(result[number - 2] + result[number - 3]);

        return result;

    };


    console.log(`The fibonacci sequence of the number: "${numberOne}" is "${fibonacci(numberOne)}"`);

    let fibonacciArrow = number => {

        number < 2 ? number : number < 3 ? [1, 1] : resultArrow = fibonacci(number - 1);
        resultArrow.push(resultArrow[number - 2] + resultArrow[number - 3]);
        return resultArrow;

    }

    console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ")


    console.log(`The fibonacci sequence of the number: "${numberTwo}" is "${fibonacciArrow(numberTwo)}"`)


});