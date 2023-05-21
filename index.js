const weatherAPI= "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
const locationSearch = document.querySelector("#locationSearch"); 
const searchBtn = document.querySelector(".btn");
const APIkey = "367189446bf220ed3e94d1f7f746deec";
const forecast = document.querySelector("#forecast");



function Weeklyweather(){
    console.log("I'm working");
    if ( searchBtn clicked ){
        then display city & forecast for the next 5 days on DOM using info parsed from API in 5 centered, side by side columns{

        } else {
            return //am I returning: return locationSearch? here or is return on its own fine
            //this can be an async funcx 
        }
    }


}

Weeklyweather();

//Weeklyweather function will handle calling the API to output data to DOM 
//need to add cards
//need to build a function that checks for errors (incorrect spelling) & displays an error message 
//home button taking them back to search form? 