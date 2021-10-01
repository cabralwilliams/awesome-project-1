var dia = moment().format("M/D"); //todays date mm/dd
var searches=[];  //array to save user searches
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
					//display data as buttons
					var allSearches = data.data.Events; //get only array events
					var l= Math.floor(Math.random() * ((allSearches.length-1) - 0 + 1)) + 0;
					line.textContent="It Happened on "+data.date;
					intro.textContent="On "+data.date+","+data.data.Events[l].year+": "+data.data.Events[l].links[0].title;
					description.textContent=data.data.Events[l].text;
					//Needed to activate accordion on Jquery
					$( function() {
						var icons = {
						header: "ui-icon-circle-arrow-e",
						activeHeader: "ui-icon-circle-arrow-s"
						};
						$( "#accordion" ).accordion({
							collapsible: true,
							heightStyle: "fill",
							icons: icons
						});
					})
					//loop over array to recreate search for that day on the webpage
					$.each(allSearches, function(index,allSearches){
						if (index !== l){ 
							//create entries for each event
							var sectionEl = document.createElement('h3');
							sectionEl.textContent =" Year: "+data.data.Events[index].year+": "+data.data.Events[index].links[0].title ;
							sectionEl.setAttribute("data-title", data.data.Events[index].links[0].title);
							sectionEl.setAttribute("data-year", data.data.Events[index].year);
							sectionEl.setAttribute("data-descr", data.data.Events[index].text);
							var DivEl=document.createElement('div');
							var pEl=document.createElement('p');
							var buttonEl=document.createElement('button')
							buttonEl.className = 'button alert card-section rounded-button';
							buttonEl.setAttribute("btn-type","save");
							buttonEl.textContent="Save Search";
							var LbuttonEl=document.createElement('button')
							LbuttonEl.className = 'button alert card-section rounded-button';
							LbuttonEl.setAttribute("btn-type","learn");
							LbuttonEl.textContent="Learn More";
							pEl.textContent=data.data.Events[index].text;
							DivEl.appendChild(pEl);
							DivEl.appendChild(buttonEl);
							DivEl.appendChild(LbuttonEl);
							var container = document.getElementById("accordion");
							container.appendChild(sectionEl);
							container.appendChild(DivEl);
						}
     				});
				});
			} else {
				//api response returned errors
				alert("Error: " + response.statusText);
			}
		})
		.catch(function (error) {
			alert("Unable to connect to history.muffinlabs.com/date/ API");
		});
};


//save array to local storage
var savesearches = function() {
	localStorage.setItem("searches", JSON.stringify(searches));
};

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

// load for the first time
$(document).ready(function () {
	$("#select-date").datepicker({
		duration: "fast",
		showAnim: "slideDown",
		showOptions: { direction: "up" },
	});
	$(".view-history-button").on("click", function (event) {
		event.preventDefault();
		var selectedDate = $("#select-date").val();
		var selectedDateM = moment(selectedDate, "M/D/YYYY");
		var cday = selectedDateM.format("M/D");
		//remove elements from accordion so next date would be properly display
		$( ".accordion" ).accordion( "destroy" );
		$( ".ui-accordion-header" ).remove();
		$( ".ui-accordion-content" ).remove();
		gethistory(cday);
	});
	//Let's load todays events
	loadpage();
});


