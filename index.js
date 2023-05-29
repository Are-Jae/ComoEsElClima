

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}";
const cityInput = document.getElementById("locationSearch");
const searchBtn = document.querySelector("#search");
const APIkey = "367189446bf220ed3e94d1f7f746deec";
const forecast = document.querySelectorAll("#forecast");
const errorMessage = "Unable to find city, try again?"; //needs to display on dom or return? 
const buttonHistory = document.querySelector(".searchHistorycontainer") 


let searchHistory = []


if (localStorage.getItem("cityName")) {
  searchHistory = JSON.parse(localStorage.getItem("cityName"))
}
console.log(searchHistory)
searchBtn.addEventListener("click", function (event) {
  event.preventDefault()
  const city = cityInput.value;
  if (city !== '') {
    getForecast(city);
    getFivedayForecast(city);

    let btn = document.createElement("button")
    btn.textContent = city ('')
    buttonHistory.appendChild(btn)
  } else {
    console.log(errorMessage);
  }
});


function displayHistory (){

  for (let i = 0; i < searchHistory.length; i++){
    let btn = document.createElement("button")
    
    btn.textContent = searchHistory[i]
    buttonHistory.appendChild(btn)
    btn.addEventListener('click', function(){
      getForecast(btn.textContent);
      getFivedayForecast(btn.textContent); 
    })

  }

}





function getForecast(city) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      // Process the received data
      console.log(data);

      if (data.name && searchHistory.includes(data.name) === false) {
        searchHistory.push(data.name)

        localStorage.setItem("cityName", JSON.stringify(searchHistory))

      }

      var cardTemp = `<div class="card-group"
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${data.name}
        
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="...">
            </h5>
            <p class="card-text">temperature:${data.main.temp}</p>
            <p class="card-text">humidity:${data.main.humidity}</p>
            <p class="card-text">wind speed:${data.wind.speed}</p>
            <p class="card-text"> conditions${data.weather[0].description}</p>
          </div></div></div>`
      document.getElementById("forecast").innerHTML = cardTemp
    })
    .catch(error => {
      console.log(errorMessage, error);
    });

}
function getFivedayForecast(city) {

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
      // Process the received data
      console.log(data);
      var cardTemp = ``;
      for (let i = 3; i < data.list.length; i = i + 8) {
        cardTemp += `        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${data.list[i].dt_txt.city}
        <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" class="card-img-top" alt="...">
            </h5>
            <p class="card-text">temperature:${data.list[i].main.temp}</p>
            <p class="card-text">humidity:${data.list[i].main.humidity}</p>
            <p class="card-text">wind speed:${data.list[i].wind.speed}</p>
            <p class="card-text"> conditions:${data.list[i].weather[0].description}</p> 
          </div></div>`
      }


      document.getElementById("FivedayForecast").innerHTML = cardTemp
    })
    .catch(error => {
      console.log(errorMessage, error);
    });

}


function retrieveCities (){
  let localArray = localStorage.getItem("cityName")

  if (localArray !== null){
    searchHistory = localArray
  }
}

displayHistory(); 

retrieveCities(); 

