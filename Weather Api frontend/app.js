


let button = document.getElementById("btnCity")
let input = document.getElementById('getCity')
let weatherData = document.getElementById('btnData')
let fetchUrlBool = false
let cityTitle = document.getElementById("city");
let row = document.querySelector(".weather.row");


button.addEventListener("click", () => {
  fetchWeather()
});

weatherData.addEventListener("click", (event) => {
  console.log(event)

  fetchUrlBool = true
  fetchWeather()
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log(event.value)
    fetchWeather()
  }
});




function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function fetchWeather() {


  let city = document.getElementById("getCity").value.split(' ').map(capitalize).join(' ')
  let lang = document.getElementById(`lang`).value
  let date = document.getElementById(`date`).value

  let url = `http://localhost:11469/api/weather/${city}?language=${lang}&date=${date}`;

  if (city === "") {
    url = `http://localhost:11469/api/weather/`;
  }
  if (fetchUrlBool) {
    url = `http://localhost:11469/api/weather/all`
  }
  fetchUrlBool = false

  //fetch the weather
  fetch(url)
    .then((resp) => {

      if (!resp.ok) throw new Error(resp.status);
      return resp.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        showWeather(data);
      } else {
        showCurrentWeather(data);
      }
    })
    .catch((error) => {

      row.innerHTML = "";
      console.log(error);
      if(error.message === "404")cityTitle.innerHTML = `<h2 id ="city">There is no city by the name of "${city}", please check your input</h2>`;
      if(error.message === "400")cityTitle.innerHTML = `<h2 id ="city">There is no record for the given date, please try again with a different date</h2>`;
    });


};


function showWeather(resp) {
  try {

    cityTitle.innerHTML = `<h2 id ="city">Weather in ${resp[0].city.name}</h2>`;
    

    //clear out the old weather and add the new
    row.innerHTML = "";

    row.innerHTML = resp
      .map((day) => {
        {
          let dt = new Date(Date.parse(day.date));
          let sr = new Date(day.sunrise * 1000).toTimeString();
          let ss = new Date(day.sunset * 1000).toTimeString();

          var date =
            dt.getFullYear() +
            "/" +
            (dt.getMonth() + 1) +
            "/" +
            dt.getUTCDate();
          city.innerHTML = " ";


          return `
              <div class="col">          
              <div class="card">
              <h2 id ="city">${day.city.name}</h2>
              <h5 class="card-title p-2">${day.weekDay.mkName}</h5>
              <p class="card-title p-2">${date}<p>
              
                <img
                  src="http://openweathermap.org/img/wn/${day.icon}@4x.png"
                  class="card-img-top" alt="${day.weatherDescription}"
                />
                <div class="card-body">
                  <h3 class="card-title">${day.weatherDescription}</h3>                 
                  <p class="card-text">Temperature ${day.temperatureC}&deg;C</p>
                  </br>
                  <p class="card-text">High ${day.temperatureMaxC}&deg C</p>
                  <p> Low ${day.temperatureMinC}&deg;C</p>
                  <p class="card-text">Precipitation ${day.precipitation}%</p>
                  <p class="card-text">Wind ${day.windSpeed}m/s </p>
                  <p class="card-text">City Long: ${day.city.long}&deg;</p>
                  <p class="card-text">City Lat: ${day.city.lat}&deg;</p>
                </div>
              </div>
            </div>
          </div>`;
        }
      })
      .join(" ");
  }
  catch (error) {
    console.log('caught it! 2', err);
  }

};
function showCurrentWeather(resp) {
  try {


    cityTitle.innerHTML = `<h2 id ="city">Weather in ${resp.city.name}</h2>`;

    // let row = document.querySelector(".weather.row");

    let dt = new Date(Date.parse(resp.date));
    var date =
      dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getUTCDate();

    //clear out the old weather and add the new
    row.innerHTML = "";

    row.innerHTML = `
            <div class="col">
              <div  class="card" >
              <h2 id ="city">${resp.city.name}</h2>
              <h5 class="card-title p-2">${resp.weekDay.mkName}</h5>
              <p class="card-title p-2">${date}<p>
               <img
                  src="http://openweathermap.org/img/wn/${resp.icon}@4x.png"
                  class="card-img-top" alt="${resp.weatherDescription}"
                />
                <div class="card-body">
                  <h3 class="card-title">${resp.weatherDescription}</h3>   
                  <p class="card-text">Temperature ${resp.temperatureC}&deg; C</p>
                  </br>
                  <p class="card-text">High ${resp.temperatureMaxC}&deg; C</p>
                  <p> Low ${resp.temperatureMinC}&deg; C</p>               
                  <p class="card-text">City Long: ${resp.city.long}&deg;</p>
                  <p class="card-text">City Lat: ${resp.city.lat}&deg;</p>
                </div>
              </div>
            </div>
          </div>`;
  } catch (err) {
    console.log('caught it! 3', err);
  }

};



window.onload = (event) => {
  if(fetchUrlBool)return fetchUrlBool=false
console.log('page is fully loaded');
fetchWeather()
};

