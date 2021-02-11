console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(function() {


    let word = "Hello";
    let sentence = "Hello with arrow function";


    function reverseWord(string) {

        if (string.length === 0) {
            return "";
        }
        return reverseWord(string.slice(1)) + string[0]
    };

    console.log(`The word "${word}" reversed is "${reverseWord(word)}" `);



    let reverseWordArrow = string => string.length === 0 ? "" : reverseWordArrow(string.slice(1)) + string[0];

    console.log(`The sentence "${sentence}" reversed is: "${reverseWordArrow(sentence)}"`);



});