var dia=moment().format('l');

//load page first time
var loadpage=function(){
}

//submit botton 
var formSubmitHandler = function(event) {
      // prevent page from refreshing
      event.preventDefault();
      // get value from input element
         
};

//load city to get latitud and longitud to be able to display 5 days 
var getcity = function(city) {
  // format the weather api url by city
  var apiUrl=  "https://api.openweathermap.org/data/2.5/weather?"
  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
          response.json().then(function(data) {
          
          
        });
      } else { //api response returned errors
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to connect to Weather Web site");
    });
};

//save array to local storage


//using lat and lon, get all info for current day and next 5 days
var getmoredetails = function() {
  // format the github api url
  var apiUrl= "https://api.openweathermap.org/data/2.5/onecall";
  // make a get request to url
  fetch(apiUrl).then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        console.log(data);
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

//create buttons and save new data on array 

//load data from previously saved data

// add event listeners to form and button container


// load for the first time

