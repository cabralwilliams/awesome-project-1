var dia = moment().format("M/D"); //todays date mm/dd
var DayButtonsEl = document.querySelector("#day-button");
$(document).foundation();
//load page first time-get history with today data
var loadpage = function () {
	$("#select-date").datepicker({
		minDate: 1,
	});
	gethistory(dia);
};

//capture click on any buttons for any hiostory events
var formSubmitHandler = function (event) {
	// prevent page from refreshing
	event.preventDefault();
	// get value from input element and load another page with movies, books etc.
};

//load history for a specific day of the year
var gethistory = function (dateEl) {
	// format the weather api url by city
	var apiUrl = "https://history.muffinlabs.com/date/" + dateEl;
	// make a get request to url
	fetch(apiUrl)
		.then(function (response) {
			// request was successful
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data);
					//call function to display data on screen
				});
			} else {
				//api response returned errors
				alert("Error: " + response.statusText);
			}
		})
		.catch(function (error) {
			alert("Unable to connect to Weather Web site");
		});
};

//launch date picker---sonali

//save array to local storage

//using for second search
var getmoredetails = function () {
	// format the github api url
	var apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
	// make a get request to url
	fetch(apiUrl).then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
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

//DayButtonsEl.addEventListener("click", dayClickHandler);

// load for the first time
loadpage();
