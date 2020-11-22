$(document).ready(function(){
console.log('here');

var city = "austin";
var keyAPI = "d5403e377cbeead7c941cd26a95c8c22";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}&units=imperial`;

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
    
    var tRow = $("<tr>");
    
    var city = $("<tr>").text(response.name);
    var temp = $("<tr>").text(response.main.temp);
    var humidity = $("<tr>").text(response.main.humidity);
    var wind = $("<tr>").text(response.wind.speed);
    
    tRow.append(city, temp, humidity, wind);

    $("tbody").append(tRow);
});
});
    // // UVI API => pass coordinates from weather API to UVI API
    // $.ajax({}).then(function(response){

    // });

    // // 5 day forcast 
    // $.ajax({}).then(function(response){

    // });
