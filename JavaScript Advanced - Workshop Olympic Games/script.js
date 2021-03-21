console.log("Helllo")

class OlympicGames {

    constructor(location, numberOfSportGames, listOfCountries = {}, durationFrom, durationTo, numberOfPeople, listOfSports = []) {
        this.location = location
        this.numberOfSportGames = numberOfSportGames
        this.listOfCountries = listOfCountries
        this.durationFrom = durationFrom
        this.durationTo = durationTo
        this.numberOfPeople = numberOfPeople
        this.listOfSports = listOfSports
    }
    changeSportsList(changeSports = []) {
        this.listOfSports = changeSports
    }
    changeDuration(changeDurationFrom, changeDurationTo) {
        this.durationFrom = changeDurationFrom
        this.durationTo = changeDurationTo
    }
    static changeNumberOfSportsGames(newNumberOfSportsGames) {
        this.numberOfSportsGames = newNumberOfSportsGames
    }
    static changeListOfCounties(newListOfCountries) {
        this.listOfCountries = newListOfCountries
    }
    static changeNumberOfPeople() {

    }

}


class Country {

    constructor(countryName, totalNumberOfPeople, numberOfMedals, medalRank) {

        this.countryName = countryName
        this.totalNumberOfPeople = totalNumberOfPeople
        this.numberOfMedals = numberOfMedals
        this.medalRank = medalRank
    }
    set countryName(countryName) {
        countryName.length > 1 ? this._countryName = countryName : (() => { throw new Error("Country name too short") })();
    }
    get countryName() {
        return "The Country Name is: " + this._countryName;
    }

    set totalNumberOfPeople(totalNumberOfPeople) {
        totalNumberOfPeople > 0 ? this._totalNumberOfPeople = totalNumberOfPeople : (() => { throw new Error("Number of People too small") })();
    }
    get totalNumberOfPeople() {
        return "The Number of People are: " + this._totalNumberOfPeople;
    }

    set numberOfMedals(numberOfMedals) {
        numberOfMedals > 0 ? this._numberOfMedals = numberOfMedals : (() => { throw new Error("Number of Medals too small") })();
    }
    get numberOfMedals() {
        return "Number of Medals are: " + this._numberOfMedals;
    }

    set medalRank(medalRank) {
        medalRank > 0 ? this._medalRank = medalRank : (() => { throw new Error("Medal Rank too short") })();
    }
    get medalRank() {
        return "The Country Medal Rank is: " + this._medalRank;
    }
    addMedals(achievedMedals, newMedal) {

        if (newMedal === "GOLD") {
            this._medalRank += 2
            this._numberOfMedals += achievedMedals
            return
        } else if (newMedal === "SILVER") {
            this._medalRank += 1
            this._numberOfMedals += achievedMedals
            return
        } else if (newMedal === "BRONZE") {
            this._medalRank += 0.5
            this._numberOfMedals += achievedMedals
            return
        } else {
            console.log("You did not won any medals.")
        }
        return
    }


}

class Sport {
    constructor(name, rating, description = "", typeOfSport, numberOfGames) {

        this.name = name
        this.rating = rating
        this.description = description
        this.typeOfSport = typeOfSport
        this.numberOfGames = numberOfGames
    }
}

class CountryTotalResult {

    constructor(countryName) {
        this.countryName = countryName
        this.totalResult = 0
    }
    addPoints(points) {
        this.totalResult += points
    }
}



class TeamSports extends Sport {

    constructor(name, rating, description = "", typeOfSport, numberOfGames, matches = []) {
        super(name, rating, description = "", typeOfSport, numberOfGames)

        this.historyOfMatches = matches

    }
    winner(listOfCountries) {


        if (this.numberOfGames === 2) {
            let totalResults = []

            this.historyOfMatches.forEach(match => {

                let countriesList = match.split(" - ")

                countriesList.forEach(country => {

                    let temp = country.split(" ")
                    let found = totalResults.filter(el => el.countryName === temp[0])

                    if (!found || found.length === 0) {
                        totalResults.push(new CountryTotalResult(temp[0]))
                    }
                    found = totalResults.filter(el => el.countryName === temp[0])
                    found[0].addPoints(parseInt(temp[1].replace(/\D/g, "")))
                })


            });

            totalResults.sort((a, b) => b.totalResult - a.totalResult)
            console.log(totalResults)
            let foundCountry = listOfCountries.findIndex(el => el._countryName === totalResults[0].countryName)

            if (foundCountry > -1) {
                listOfCountries[foundCountry].addMedals(1, "GOLD")
            }
            foundCountry = listOfCountries.findIndex(el => el._countryName === totalResults[1].countryName)
            if (foundCountry > -1) {
                listOfCountries[foundCountry].addMedals(1, "SILVER")
            }
            foundCountry = listOfCountries.findIndex(el => el._countryName === totalResults[2].countryName)
            if (foundCountry > -1) {
                listOfCountries[foundCountry].addMedals(1, "BRONZE")
            }

        } else {
            console.log("Nobody Won any Team medals");
        }
    }
}
class IndividualSports extends Sport {

    constructor(name, rating, description = "", typeOfSport, numberOfGames, matches = []) {

        super(name, rating, description = "", typeOfSport, numberOfGames)
        this.historyOfMatches = matches
    }

    winner(listOfCountries) {


        if (this.numberOfGames === 1) {
            let totalResults = []

            this.historyOfMatches.forEach(match => {

                let countriesList = match.split(", ")

                countriesList.forEach(country => {

                    let temp = country.split(" ")
                    let found = totalResults.filter(el => el.countryName === temp[0])

                    if (!found || found.length === 0) {
                        totalResults.push(new CountryTotalResult(temp[0]))
                    }
                    found = totalResults.filter(el => el.countryName === temp[0])
                    found[0].addPoints(parseInt(temp[1].replace(/\D/g, "")))
                })


            });

            totalResults.sort((a, b) => a.totalResult - b.totalResult)
            console.log(totalResults)
            let foundCountry = listOfCountries.findIndex(el => el._countryName === totalResults[0].countryName)

            if (foundCountry > -1) {
                listOfCountries[foundCountry].addMedals(1, "GOLD")
            }
            foundCountry = listOfCountries.findIndex(el => el._countryName === totalResults[1].countryName)
            if (foundCountry > -1) {
                listOfCountries[foundCountry].addMedals(1, "SILVER")
            }
            foundCountry = listOfCountries.findIndex(el => el._countryName === totalResults[2].countryName)
            if (foundCountry > -1) {
                listOfCountries[foundCountry].addMedals(1, "BRONZE")
            }

        } else {
            console.log("Nobody Won any Team medals");
        }
    }
}



let Macedonia = new Country("Macedonia", 2000000, 1, 1)
let Bulgaria = new Country("Bulgaria", 5000000, 5, 5)
let Greece = new Country("Greece", 10000000, 20, 20)
let Germany = new Country("Germany", 20000000, 50, 50)
let Slovakia = new Country("Slovakia", 15000000, 10, 10)


let olympic = new OlympicGames("Australia", 30, [Macedonia, Bulgaria, Greece, Germany, Slovakia], "20.12.2020", "30.10.2020", 300, ["Golf,Hokey,Football"])


let golf = new IndividualSports("Golf", 3, "This is a boring sport", "individual", 1, ["Macedonia (1) , Bulgaria (3), Greece (8)", "Slovakia (3), Greece (20)", "Germany (7), Bulgaria (10)"])

golf.winner(olympic.listOfCountries)

console.log(olympic)

let handball = new TeamSports("Handball", 5, "This is less boring sport", "team", 2, ["Macedonia (30) - Bulgaria (15)", "Greece (25) - Slovakia (35)", "Greece (20) - Germany (27)", "Bulgaria (10) - Macedonia (30)"])

handball.winner(olympic.listOfCountries)

console.log(olympic)