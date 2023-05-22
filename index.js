const weatherAPI= "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={367189446bf220ed3e94d1f7f746deec}";
const city = document.querySelector("#locationSearch").value 
const searchBtn = document.querySelector("#search");
const APIkey = "367189446bf220ed3e94d1f7f746deec";
const forecast = document.querySelectorAll("#forecast");








function Weeklyweather() {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

searchBtn.addEventListener('click', Weeklyweather);


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
    


    Weeklyweather(); 

    funcx calling API
    funcx calling api data to display on DOM
    funcx to save session storage 