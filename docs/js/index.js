/*jshint esversion: 6 */

const container = document.querySelector(".container");
const url = 'https://randomuser.me/api/?results=10';
const url2 = 'http://127.0.0.1:8000/getdata';
//got location
var x = document.getElementById("demo");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(weatherdata);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}
//fetch openweather map url with api key
function weatherdata(position) {
    //put corrdinates to get weather data of that location
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=b2c336bb5abf01acc0bbb8947211fbc6')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("demo").innerHTML =
                '<br>wind speed:-' + data.wind.speed +
                '<br>humidity :-' + data.main.humidity +
                '<br>temprature :-' + data.main.temp
        });
}