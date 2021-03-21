// function firstFunction(input) {
//     if (input === "something") {

//     } else {

//     }
//     console.log(input)
// }



// console.log("Hellloooo")

// const object1 = {

//     a: 1,

//     b: 2,

//     c: 3

// };

// const object2 = Object.assign({ c: 4, d: 5 }, object1);

// console.log(object2.c, object2.d);

// let names = ["bob", "jill", "greg", "john", "anne"];

// let result = names

//     .filter(x => x[0] === x[x.length - 1])

// .reduce((res, cur) => res + " " + cur, "[") + " ]";

// console.log(typeof(result))

// document.getElementById("button").addEventListener("click", () => {

//     console.log(this);

// });
// async function getDocuments() {

//     console.log("Getting documents");

//     let result = await fetch("https://restcountries.eu/rest/v2/all");

//     console.log("Got the documents");

// }

// console.log("Hello");

// getDocuments();

console.log("Goodbye");
let numbers = [1, 2, 3, 6, 10];

let result = numbers.filter(x => x % 2 === 0).map(m => m * 2);

console.log(result);

function first() { let number = 5; return second(number) }

function second(number) {
    if (true) {
        let number = 6
    }
    return number
};

let number = first();

let falsy = "0"

if (falsy) {
    console.log(falsy)
}






































// let regionalBlockInput = document.getElementById("regionalBlock");
// let getDataBtn = document.getElementById("getData")


// let regionalBlockInputWithFetch = document.getElementById("regionalBlockFetch");
// let getDataBtnWithFetch = document.getElementById("getDataFetch")



// const baseUrl = "https://restcountries.eu/rest/v2/regionalbloc/";



// function getCountryData(regionalBlock) {

//     return new Promise((resolved, rejected) => {
//         $.ajax({
//             url: `${baseUrl + regionalBlock}`,
//             success: (response) => {
//                 resolved(response);
//             },
//             error: (error) => {
//                 rejected(error);
//             }
//         })
//     })
// }


// function altSpellingsCheck(countries) {

//     altSpelling = countries.filter(country => country.altSpellings.length > 1 && country.altSpellings.length < 4);

//     return new Promise((resolved, rejected) => {
//         if (altSpelling.length === 0) {
//             rejected("There are no such countries")
//         } else {
//             resolved(altSpelling)
//         }
//     })
// }


// getDataBtn.addEventListener('click', () => {
//     getCountryData(regionalBlockInput.value)
//         .then(response => {
//             console.log(`All countries with the RegionalBlock "${regionalBlockInput.value}" are:`)
//             console.log(response)
//             console.log(`Every country in RegionalBlock "${regionalBlockInput.value}" that has more than one and less than four alternative spellings:`)
//             return altSpellingsCheck(response)
//         })
//         .then(response => console.log(response))
//         .catch(err => console.error(err))
//         .finally(() => console.log(`Everything ended on: ${new Date()}`))
// })





// ///////////// USING ASYNC/AWAIT WITH FETCH /////////////////




// async function getDataFromFetch(regionalBlock) {
//     let response = await fetch(baseUrl + regionalBlock)
//     let data = await response.json();
//     console.log(`All countries with the RegionalBlock "${regionalBlockInputWithFetch.value}" using Async/Await are:`)
//     return data
// }


// async function altSpellingsCheckAsync(countries) {

//     let altSpelling = await countries.filter(country => country.altSpellings.length > 1 && country.altSpellings.length < 4);

//     if (altSpelling.length === 0) {
//         console.log("There are no such countries")
//     } else {
//         console.log(`Every country in RegionalBlock "${regionalBlockInputWithFetch.value}" that has more than one and less than four alternative spellings using Async/Await:`)
//         return altSpelling
//     }

// }


// getDataBtnWithFetch.addEventListener('click', () => {

//     try {
//         getDataFromFetch(regionalBlockInputWithFetch.value)
//             .then(response => {
//                 console.log(response)
//                 return altSpellingsCheckAsync(response)
//             })
//             .then(countries => {
//                 console.log(countries)
//             })

//     } catch (error) {
//         console.log(error)

//     }

// })