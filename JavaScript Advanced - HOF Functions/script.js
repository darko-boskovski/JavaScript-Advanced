console.log(`JavaScript says: Ola Que Pasa?`);



$(document).ready(function() {



    //Callback function that will return result of multiplication of two numbers:

    function calculate(callback, num1, num2) {

        return callback(num1, num2)

    };


    let multiply = function(a, b) { return a * b };
    console.log("The Result from multiplication of two numbers with callback function is:", calculate(multiply, 3, 5));


    // Callback function that will print the result of every user from "https://jsonplaceholder.typicode.com/users"

    function makeCall(url, callbackFunction) {
        fetch(url)
            .then(response => response.json())
            .then(responseResult => {
                console.log('Callback function that will print the result of every user from "https://jsonplaceholder.typicode.com/users"!');
                if (callbackFunction) {
                    callbackFunction(responseResult)
                };
            })
            .catch(error => {
                console.log('The request failed!');
                if (callbackFunction) {
                    callbackFunction(error)
                };
            })
    }

    function print1(result) {
        console.log(result);
    }

    makeCall("https://jsonplaceholder.typicode.com/users", print1);


    // List of All 200 Students 


    let studentsArray = []

    function studentsMakeCall(url, callbackFunction, callbackFunction2, callbackFunction3, callbackFunction4, callbackFunction5, callbackFunction6, callbackFunction7, callbackFunction8) {

        fetch(url)
            .then(response => response.json())
            .then(responseResult => {

                if (callbackFunction) {
                    callbackFunction(responseResult)
                    callbackFunction2(responseResult)
                    callbackFunction3(responseResult)
                    callbackFunction4(responseResult)
                    callbackFunction5(responseResult)
                    callbackFunction6(responseResult)
                    callbackFunction7(responseResult)
                    callbackFunction8(responseResult)


                };
            })
            .catch(error => {
                console.log('The request failed!');
                if (callbackFunction) {
                    callbackFunction(error)
                    callbackFunction2(error)
                    callbackFunction3(error)
                    callbackFunction4(error)
                    callbackFunction5(error)
                    callbackFunction6(error)
                    callbackFunction7(error)
                    callbackFunction8(error)

                };
            })
    }

    function saveArray(results) {
        console.log("List of all students:", results);
        return studentsArray = [results]

    }

    studentsMakeCall("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json", saveArray, higherThan3, studentsFrom2to5, female5, skopjeMales, malesWith2, femaleGrades, femaleOver16Grades);

    //     All students with an average grade higher than 3 *

    let gradeHigherThan3 = [];

    function higherThan3(result) {
        result
            .filter(element => element.averageGrade > 3)
            .map(element => gradeHigherThan3.push(element));
        console.log("All students with an average grade higher than 3", gradeHigherThan3)
    }


    let gradeBetween2and5 = [];

    // //     All students with an average grade between 2 and 5 *


    function studentsFrom2to5(result) {
        result
            .filter(element => element.averageGrade > 2 && element.averageGrade < 5)
            .map(element => gradeBetween2and5.push(element));
        console.log("All students with an average grade between 2 and 5", gradeBetween2and5)
    }


    //     All female student names with an average grade of 5 *


    let femaleAverage5 = []

    function female5(array) {
        array
            .filter(element => element.gender === "Female" && element.averageGrade === 5)
            .map(element => femaleAverage5.push(element.firstName));
        console.log("All female student names with an average grade of 5 ", femaleAverage5)
    }

    //     All male students full names who live in Skopje and are over 18 years old *


    let maleAbove18 = []

    function skopjeMales(array) {
        array
            .filter(element => element.gender === "Male" && element.city === "Skopje" && element.age > 18)
            .map(element => maleAbove18.push(element.firstName + " " + element.lastName));
        console.log("All male students full names who live in Skopje and are over 18 years old ", maleAbove18)
    }


    //     The average grades of all female students over the age of 24

    let femalesAbove24 = []

    function femaleGrades(array) {
        array
            .filter(element => element.gender === "Female" && element.age > 24)
            .map(element => femalesAbove24.push(element.firstName + " " + " " + element.age + "years, grade:" + element.averageGrade));
        console.log("The average grades of all female students over the age of 24", femalesAbove24)
    }

    //     All male students with a name starting with B and average grade over 2 *

    let maleNamesStartingWithB = []

    function malesWith2(array) {
        array
            .filter(element => element.firstName.charAt(0) === "B" && element.averageGrade > 2)
            .map(element => maleNamesStartingWithB.push(element));
        console.log(`All male students with a name starting with "B" and average grade over 2`, maleNamesStartingWithB)
    }

    //   The average grades of all female students over the age of 16 and who lives in Skopje and has "L" or "l" in their last name 


    let femalesAbove16 = []

    function femaleOver16Grades(array) {
        array
            .filter(element => element.gender === "Female" && element.age > 16 && element.city === "Skopje" && element.lastName.toLowerCase().includes("l"))
            .map(element => femalesAbove16.push(element.firstName + " " + element.lastName + " " + "has an averageGrade of:" + " " + element.averageGrade));
        console.log(`The average grades of all female students over the age of 16 and who live in Skopje and has "L" or "l" in their last name`, femalesAbove16)
    }



});