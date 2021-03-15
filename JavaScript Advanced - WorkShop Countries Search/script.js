console.log("Hello G4")



let countryCodeInputWithFetch = document.getElementById("countryCodeFetch");
let getDataBtnWithFetch = document.getElementById("getDataFetch");
const result = document.getElementById("result");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");



const baseUrl = "https://restcountries.eu/rest/v2/name/";

async function getEveryCountryDataFetch() {

    let response = await fetch(`https://restcountries.eu/rest/v2/all`)
    let data = await response.json();
    console.log(`All the Countries in the World using Async/Await:`)
    return data
}


async function getDataFromFetch(countryCode) {
    let response = await fetch(baseUrl + countryCode)
    let data = await response.json();
    console.log(`The Country with the native name or partial name "${countryCodeInputWithFetch.value}" using Async/Await is:`)
    return data
}


async function printCountries(myCountry, countries) {

    for await (const country of countries) {
        let country = currenciesCheckAsync(myCountry, countries)
        console.log(country);
    }
}

const toggleLoader = toggle => {

    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}

const displayCountry = country => {
    if (country !== null) {
        result.innerHTML = '';
        result.innerHTML += `
            <div class="row">
                <div class="col-md-2">Flag</div>
                <div class="col-md-2">Name</div>
                <div class="col-md-2">Population</div>
                <div class="col-md-2">Capital</div>
                <div class="col-md-1">Area</div>
                <div class="col-md-1">Language Name</div>
                <div class="col-md-2">Currencies Name</div>
            </div>
            <hr color="green" />
        `;

        for (const property of country) {

            result.innerHTML += `
                <div class="row">
                    <div class="col-md-2"><img src="${property.flag}" alt="Country Flag" width="100px" ></div>
                    <div class="col-md-2">${property.name}</div>
                    <div class="col-md-2">${property.population}</div>
                    <div class="col-md-2">${property.capital}</div>
                    <div class="col-md-1">${property.area}</div>
                    <div class="col-md-1">${property.languages.map(lang => lang.name)}</div>
                    <div class="col-md-2">${property.currencies.map(cur => cur.name)}</div>
                </div>
                <hr color="yellow" />
            `
        }

    } else {
        result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
    }
}




getDataBtnWithFetch.addEventListener('click', () => {

    let allCountries = [];
    toggleLoader(true);
    try {
        getEveryCountryDataFetch()

        .then(countries => {
                console.log(countries)
                allCountries = countries;
                return getDataFromFetch(countryCodeInputWithFetch.value)
            })
            .then(country => {
                toggleLoader(false);
                console.log(country)
                country.sort((countryOne, countryTwo) => countryOne.name.localeCompare(countryTwo.name));
                return displayCountry(country, allCountries)
            })
    } catch (error) {
        toggleLoader(true);
        console.log(error)

    }

})

previousButton.addEventListener('click', () => {


    let allCountries = [];
    toggleLoader(true);
    try {
        getEveryCountryDataFetch()

        .then(countries => {
                console.log(countries)
                allCountries = countries;
                return getDataFromFetch(countryCodeInputWithFetch.value)
            })
            .then(country => {
                toggleLoader(false);
                console.log(country)
                country.sort((countryOne, countryTwo) => countryOne.area - countryTwo.area);
                return displayCountry(country, allCountries)
            })
    } catch (error) {
        toggleLoader(true);
        console.log(error)

    }


})


nextButton.addEventListener('click', () => {


    let allCountries = [];
    toggleLoader(true);
    try {
        getEveryCountryDataFetch()

        .then(countries => {
                console.log(countries)
                allCountries = countries;
                return getDataFromFetch(countryCodeInputWithFetch.value)
            })
            .then(country => {
                toggleLoader(false);
                console.log(country)
                country.sort((countryOne, countryTwo) => countryOne.population - countryTwo.population);
                return displayCountry(country, allCountries)
            })
    } catch (error) {
        toggleLoader(true);
        console.log(error)

    }


})