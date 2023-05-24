// const weatherAPI= "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={367189446bf220ed3e94d1f7f746deec}";
// const city = document.getElementById("locationSearch").value 
// const searchBtn = document.querySelector("#search");
// const APIkey = "367189446bf220ed3e94d1f7f746deec";
// const forecast = document.querySelectorAll("#forecast");


// const errorMessage = "Unable to find city, try again?"




// const search = document.getElementById("search");
// search.onclick = function(event){
//     console.log(event, "is working")
// }


// //  funcx calling API
// function Weeklyweather() {
//     if ( search === 'clicked') {
//         fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`);//get correct url 
//         console.log("Is working");
        
//     } else {
//        return (errorMessage) 
//     }
   
        
// }



// Weeklyweather(); 



const weatherAPI = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={367189446bf220ed3e94d1f7f746deec}";
const cityInput = document.getElementById("locationSearch");
const searchBtn = document.querySelector("#search");
const APIkey = "367189446bf220ed3e94d1f7f746deec";
const forecast = document.querySelectorAll("#forecast");
const errorMessage = "Unable to find city, try again?"; //needs to display on dom or return? 

searchBtn.addEventListener("click", function() {
  const city = cityInput.value;
  if (city !== '') {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`)
      .then(response => response.json())
      .then(data => {
        // Process the received data
        console.log(data);
      })
      .catch(error => {
        console.log(errorMessage, error);
      });
  } else {
    console.log(errorMessage);
  }
});




//add lat, lon, appid var 
//find lat &  lon for city
//use lat lon funcx to grab weather info for city 


// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// funcx calling api data to display on DOM
// funcx to save session storage 
//need to save session storage 

//Weeklyweather function will handle calling the API to output data to DOM 
//need to add cards
//need to build a function that checks for errors (incorrect spelling) & displays an error message 
//home button taking them back to search form? 


 // if ( searchBtn clicked ){
    //     then display city & forecast for the next 5 days on DOM using info parsed from API in 5 centered, side by side columns{

        // } else {
        //     return //am I returning: return locationSearch? here or is return on its own fine
        //     //this can be an async funcx 
        // }
    


    

   