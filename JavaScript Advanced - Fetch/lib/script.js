console.log(`JavaScript says: Ola Que Pasa?`);


console.log(jQuery.fn.jquery);


$(document).ready(function() {


    function printUsers(response, storeResult) {

        if (response !== undefined && response.length > 0) {
            for (const user of response) {

                storeResult.innerHTML += `<li>Id: ${user.id},<br/> Name: ${user.name},<br/> Email: ${user.email},<br/> Adress:<br/>&nbsp; Street: ${user.address.street},<br/>&nbsp; Suite: ${user.address.suite},<br/>&nbsp; City: ${user.address.city},<br/>&nbsp; Zipcode: ${user.address.zipcode},<br/> Geo:<br/>&nbsp; Lat ${user.address.geo.lat},<br/>&nbsp; Lng: ${user.address.geo.lng},<br/>
                    Phone: ${user.phone},<br/> Website: ${user.website},<br/> Company:<br/>&nbsp Company Name: ${user.company.name},<br/>&nbsp CatchPhrase: ${user.company.catchPhrase},<br/>&nbsp bs: ${user.company.bs}, </li><br/>`;
            }
            console.log(response);
        }

    }

    document.getElementById("fetch").addEventListener("click", function() {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => {
                let fetchResult = document.getElementById("fetchResult");
                printUsers(result, fetchResult);
            })
            .catch(error => console.error(error));
    });






    function printAlbums(response, storeResult) {

        word = "omnis";

        //(album.title.match(/omnis/g))

        if (response !== undefined && response.length > 0) {
            for (const album of response) {

                if (album.title.indexOf(word) == -1) {

                } else {
                    storeResult.innerHTML += `<li>UserId: ${album.userId},<br/> id: ${album.id},<br/> Title: ${album.title},<br/></li>`;
                }
            }

        }
    };

    document.getElementById("omnis").addEventListener("click", function() {

        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(result => {

                let omnisResult = document.getElementById("omnisResult");
                printAlbums(result, omnisResult);
                console.log(`Successfully fetched ${omnisResult.childElementCount} albums`)

            })
            .catch(error => console.error(error));
    });



    function createPost(newUserId, newName, newEmail, newStreet, newSuite, newCity, newZipcode, newLat, newLng, newPhone, newWebsite, newCompanyName, newCatchPhrase, newBs) {
        if (newUserId > 0 && newName !== "" && newStreet !== "" && newSuite !== "" && newCity !== "" && newZipcode > 0 && newLat !== "" && newLng !== "" && newPhone !== "" &&
            newWebsite !== "" && newCompanyName !== "" && newCatchPhrase !== "" && newBs !== "") {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",

                    body: JSON.stringify({
                        userId: newUserId,
                        name: newName,
                        email: newEmail,
                        address: {
                            street: newStreet,
                            suite: newSuite,
                            city: newCity,
                            zipcode: newZipcode,
                            geo: {
                                lat: newLat,
                                lng: newLng,
                            }
                        },
                        phone: newPhone,
                        website: newWebsite,
                        company: {
                            name: newCompanyName,
                            catchPhrase: newCatchPhrase,
                            bs: newBs
                        }

                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                })
                .then(response => response.json())
                .then(function(convertedJson) {
                    console.log("Successfully created post", convertedJson);
                    createUser.innerHTML += `<li>Id: ${convertedJson.id},<br/> Name: ${convertedJson.name},<br/> Email: ${convertedJson.email},<br/> Adress:<br/>&nbsp; Street: ${convertedJson.address.street},<br/>&nbsp; Suite: ${convertedJson.address.suite},<br/>&nbsp; City: ${convertedJson.address.city},<br/>&nbsp; Zipcode: ${convertedJson.address.zipcode},<br/> Geo:<br/>&nbsp; Lat ${convertedJson.address.geo.lat},<br/>&nbsp; Lng: ${convertedJson.address.geo.lng},<br/>
                    Phone: ${convertedJson.phone},<br/> Website: ${convertedJson.website},<br/> Company:<br/>&nbsp Company Name: ${convertedJson.company.name},<br/>&nbsp CatchPhrase: ${convertedJson.company.catchPhrase},<br/>&nbsp bs: ${convertedJson.company.bs}, </li><br/>`;
                })
                .catch(function(error) { console.error(error) });
        };
    };

    document.getElementById("post").addEventListener('click', function() {

        createPost("11", "Darko", "darko_b23@hotmail.com", "Radovan Kovacevic", "Apt. 23", "Skopje", "1000", "41.9981° N", "21.4254° E", "075 070 070", "https://github.com/darko-boskovski/JavaScript-Advanced", "SEDC", "Catch me if you can!", "web development");
    });

    document.getElementById("delete").addEventListener('click', function() {

        let randomNumber = Math.floor(Math.random() * 201);

        fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(deletedPost => {
                console.log(deletedPost)
                document.getElementById("deleteToDo").innerHTML += `Successfully deleted Todo number: ${randomNumber}`
                console.log(`https://jsonplaceholder.typicode.com/todos/${randomNumber-1}`);
            })
            .catch(error => console.error(error));
    });

});