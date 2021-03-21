let countryCodeInput = document.getElementById("countryCode");
let getDataBtn = document.getElementById("getData")


let countryCodeInputWithFetch = document.getElementById("countryCodeFetch");
let getDataBtnWithFetch = document.getElementById("getDataFetch")



const baseUrl = "https://restcountries.eu/rest/v2/alpha/";



function getCountryData(countryCode) {

    return new Promise((resolved, rejected) => {
        $.ajax({
            url: `${baseUrl + countryCode}`,
            success: (response) => {
                resolved(response);
            },
            error: (error) => {
                rejected(error);
            }
        })
    })
}


function getEveryCountryData() {

    return new Promise((resolved, rejected) => {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/all`,
            success: (response) => {
                resolved(response);
            },
            error: (error) => {
                rejected(error);
            }
        })
    })
}


function currenciesCheck(myCountry, countries) {
    currencies = []
    console.log(`The Country currency is ${myCountry.currencies[0].name}`)

    countries
        .filter(country => myCountry.currencies[0].name === country.currencies[0].name)
        .map(country => currencies.push(country));

    return new Promise((resolved, rejected) => {
        if (currencies.length === 0) {
            rejected("There are no such countries")
        } else {
            console.log(`The countries that have the same currency are:`)
            resolved(currencies)
        }
    })
}




getDataBtn.addEventListener('click', function() {
    console.log(this)

})





///////////// USING ASYNC/AWAIT WITH FETCH /////////////////









async function getEveryCountryDataFetch() {

    let response = await fetch(`https://restcountries.eu/rest/v2/all`)
    let data = await response.json();
    console.log(`All the Countries in the World using Async/Await:`)
    return data
}


async function getDataFromFetch(countryCode) {
    let response = await fetch(baseUrl + countryCode)
    let data = await response.json();
    console.log(`The Country with the 2-Letter Code "${countryCodeInputWithFetch.value}" using Async/Await is:`)
    return data
}


function currenciesCheckAsync(myCountry, countries) {
    let currencies = []

    console.log(`The Country currency using Async/Await is:${myCountry.currencies[0].name}`)

    countries
        .filter(country => myCountry.currencies[0].name === country.currencies[0].name)
        .map(country => currencies.push(country));

    if (currencies.length === 0) {
        console.log("There are no such countries")
    } else {
        console.log(`The countries that have the same currency using Async/Await are:`)
        return currencies
    }

}

async function printCountries(myCountry, countries) {

    for await (const country of countries) {
        let country = currenciesCheckAsync(myCountry, countries)
        console.log(country);
    }
}


getDataBtnWithFetch.addEventListener('click', () => {
    let allCountries = [];
    try {
        getEveryCountryDataFetch()
            .then(countries => {
                console.log(countries)
                allCountries = countries;
                return getDataFromFetch(countryCodeInputWithFetch.value)
            })
            .then(country => {
                console.log(country)
                return currenciesCheckAsync(country, allCountries)
            })
            .then(result => {
                console.log(result)
            })

    } catch (error) {
        console.log(error)

    }

})