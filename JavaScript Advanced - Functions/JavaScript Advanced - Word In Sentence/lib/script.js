console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(function() {



    let sentence = "This was a hot summer, and a very dry one"
    let word = "summer"

    let wordsInSentence = function(sentence, word) {

        let counter = 0;
        sentence = sentence.replace(",", "")
        let sentenceToWords = sentence.split(" ");

        sentenceToWords.forEach(element => {
            if (element === word) {
                counter++
            }

        });

        return counter;

    };


    console.log(`The word "${word}" was present ${wordsInSentence(sentence, word)} times in the sentence: "${sentence}"`);



    // with Arrow FUnction // 

    let wordsInSentenceArrow = (sentence, word) => {

        let counter = 0;
        let searchWord = new RegExp('\\b' + word + '\\b');
        let sentenceToWords = sentence.split(" ");

        for (let i = 0; i < sentenceToWords.length; i++) {
            sentenceToWords[i].match(searchWord) ? counter++ : counter
        }

        return counter;

    };

    console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --");
    console.log(`The word "${word}" was present ${wordsInSentenceArrow(sentence, word)} times in the sentence: "${sentence}"`);


});