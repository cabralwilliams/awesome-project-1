var dia = moment().format("M/D"); //todays date mm/dd
var DayButtonsEl = document.querySelector("#day-button");
$(document).foundation();   //initialize foundation framework
//load page first time-get history with today data
var loadpage = function () {
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
var getmoredetails = function (searchTerm) {
	// format the github api url
	var omdbURL = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=a6a19b04";
	var bookURL = "http://openlibrary.org/search.json?q=" + searchTerm;
	// make a get request to url
	// function to process the data
	var getMovieCard = function(movieData) {
		var m_imdbID = movieData.imdbID;
		var m_Title = movieData.Title;
		var m_Year = movieData.Year;
		var m_Type = movieData.Type;
		var movieCard = document.createElement("div");
		movieCard.className = "card cell";
		var titleH = document.createElement("h3");
		titleH.className = "card-divider";
		titleH.textContent = m_Title;
		var detailDiv1 = document.createElement("div");
		detailDiv1.className = "card-section";
		detailDiv1.textContent = m_Year + " " + m_Type.charAt(0).toUpperCase() + m_Tipe.slice(1);
		var linkDiv = document.createElement("div");
		linkDiv.className = "card-section";
		var linkAnchor = document.createElement("a");
		linkAnchor.href = "https://www.imdb.com/title/" + m_imdbID;
		linkAnchor.textContent = "IMDB Page";
		movieCard.append(titq,detailDiv1,linkDiv);
		return movieCard;
	};
	fetch(omdbURL).then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
				console.log(data);
				console.log(Object.keys(data));
			});
		} else {
			alert("Error: " + response.statusText);
		}
	});
	/*
	fetch(bookURL).then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
				console.log(data);
			});
		} else {
			alert("Error: " + response.statusText);
		}
	});
	*/
};

//create buttons and save new data on array

//load data from previously saved data

// add event listeners to form and button container

//DayButtonsEl.addEventListener("click", dayClickHandler);

// load for the first time

$(document).ready(function () {
	$("#select-date").datepicker({
		duration: "fast",
		showAnim: "drop",
		showOptions: { direction: "up" },
	});
	loadpage();
});
