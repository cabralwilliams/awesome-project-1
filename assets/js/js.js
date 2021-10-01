var dia = moment().format("M/D"); //todays date mm/dd
searches=[];  //array to save user searches


$(document).foundation();   //initialize foundation framework
//load page first time-get history with today data
var loadpage = function () {
	searches = [];  //initialize array
	gethistory(dia); //use to display data for today's date
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
					//0 will be replace with random # for the array
					intro.textContent="On "+data.date+","+data.data.Events[0].year+": "+data.data.Events[0].links[0].title;
					description.textContent=data.data.Events[0].text;
					//Needed to activate accordion on Jquery
					$( function() {
						var icons = {
						header: "ui-icon-circle-arrow-e",
						activeHeader: "ui-icon-circle-arrow-s"
						};
						$( "#accordion" ).accordion({
						icons: icons
						});
						$( "#accordion" ).accordion({
							collapsible: true
						});
					})
					//display data as buttons
					var allSearches = data.data.Events;
					//loop over array to recreate search for that day on the webpage
					$.each(allSearches, function(index,allSearches){
						//recreate buttons for each city
						var sectionEl = document.createElement('h3');
						sectionEl.textContent =" Year: "+data.data.Events[index].year+": "+data.data.Events[index].links[0].title ;
						//button.className = 'button cell small-12 rounded-button';
						sectionEl.setAttribute("data-title", data.data.Events[index].links[0].title);
						sectionEl.setAttribute("data-year", data.data.Events[index].year);
						sectionEl.setAttribute("data-descr", data.data.Events[index].text);
						var DivEl=document.createElement('div');
						var pEl=document.createElement('p');
						pEl.textContent=data.data.Events[index].text;
						DivEl.appendChild(pEl);
						var container = document.getElementById("accordion");
						container.appendChild(sectionEl);
						container.appendChild(DivEl);
					});
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
var savesearches = function() {
	localStorage.setItem("cities", JSON.stringify(searches));
};

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

// load for the first time
$(document).ready(function () {
		$("#select-date").datepicker({
			duration: "fast",
			showAnim: "drop",
			showOptions: { direction: "up" },
		});
	
	  
	loadpage();
});

