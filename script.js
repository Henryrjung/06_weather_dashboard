$(document).ready(function() {
    //make ajax call
    function getCurrentWeather() {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=95a75eb2f939d75d42d48e190d39f8c3&units=imperial&q=" + city;
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(res) {
            showCurrentWeather()
        })
    }

    function showCurrentWeather() {
        var time = info.dt;
        var city = info.name; 
        $("#humidity").html("Humidity: " + info.main.humidity + "%");
        $("#Temp").html("temperature: " + info.main.temp + "");
        $("#Wind").html("Wind Speed: " + info.main.wind.speed + "MPH");
    }
})