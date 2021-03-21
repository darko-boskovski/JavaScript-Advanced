console.log("Hello G4")


let countryCodeInputWithFetch = document.getElementById("countryCodeFetch");
let getDataBtnWithFetch = document.getElementById("getDataFetch");
let result = document.getElementById("result");
let sortByArea = document.getElementById("sortByArea");
let sortByPopulation = document.getElementById("sortByPopulation");
let sortByName = document.getElementById("sort");



let baseUrl = "https://restcountries.eu/rest/v2/name/";
let fetchedCountries = null;
let nameAscending = 1
let areaAscending = 1
let populationAscending = 1

async function getDataFromFetch(countryCode) {
    let response = await fetch(baseUrl + countryCode)
    let data = await response.json();
    console.log(`The Countries with the native name or partial name "${countryCodeInputWithFetch.value}" are:`)
    return data
}


let toggleLoader = toggle => {

    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}

let displayCountry = country => {

    if (country !== null) {
        result.innerHTML = '';
        result.innerHTML += `
            <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Population</th>
                <th>Capital</th>
                <th>Area</th>
                <th>Language Name</th>
                <th>Currencies Name</th>
            </tr>
        `;

        for (let property of country) {

            result.innerHTML += `
                <tr>
                    <td><img src="${property.flag}" alt="Country Flag" width="100px" ></td>
                    <td>${property.name}</td>
                    <td>${property.population}</td>
                    <td>${property.capital}</td>
                    <td>${property.area}</td>
                    <td>${property.languages.map(lang => lang.name)}</td>
                    <td>${property.currencies.map(cur => cur.name)}</td>
                </tr>
              
            `
        }
    } else {
        result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
    }
}

getDataBtnWithFetch.addEventListener('click', () => {
    toggleLoader(true);
    try {
        getDataFromFetch(countryCodeInputWithFetch.value)
            .then(country => {
                toggleLoader(false);
                console.log(country)
                fetchedCountries = country
                return displayCountry(country)
            })
    } catch (error) {
        toggleLoader(true);
        console.log(error)
    }

})

sortByName.addEventListener('click', () => {


    if (nameAscending === 1) {
        fetchedCountries.sort((countryOne, countryTwo) => countryOne.name.localeCompare(countryTwo.name));
        nameAscending = -1
        return displayCountry(fetchedCountries)

    } else if (nameAscending === -1) {
        fetchedCountries.sort((countryOne, countryTwo) => countryTwo.name.localeCompare(countryOne.name))
        nameAscending = 1
        return displayCountry(fetchedCountries)
    }

})

sortByArea.addEventListener('click', () => {


    if (areaAscending === 1) {
        fetchedCountries.sort((countryOne, countryTwo) => countryTwo.area - countryOne.area);
        areaAscending = -1
        return displayCountry(fetchedCountries)
    } else if (areaAscending === -1) {
        fetchedCountries.sort((countryOne, countryTwo) => countryOne.area - countryTwo.area);
        areaAscending = 1
        return displayCountry(fetchedCountries)
    }
})


sortByPopulation.addEventListener('click', () => {

    if (populationAscending === 1) {
        fetchedCountries.sort((countryOne, countryTwo) => countryTwo.population - countryOne.population);
        populationAscending = -1
        return displayCountry(fetchedCountries)
    } else if (populationAscending === -1) {
        fetchedCountries.sort((countryOne, countryTwo) => countryOne.population - countryTwo.population);
        populationAscending = 1
        return displayCountry(fetchedCountries)
    }
})