var dia = moment().format("M/D"); //todays date mm/dd
var searches = []; //array to save user searches
var googleBooksApiKey = "AIzaSyAQLZKoVW6Z2r8WwtXPTSdVZB-Qgp9n32o";
//var for event listerner
SButtonsEl = document.querySelector("#accordion");
//initialize foundation framework
$(document).foundation();

//load page first time-get history with today's data
var loadpage = function () {
	searches = []; //initialize array
	// read from local storage
	searches = JSON.parse(localStorage.getItem("searches"));
	if (searches) {
		//if a search has been saved on local storage then
		//loop over array to recreate saved searches buttons on the webpage
		$.each(searches, function (index, searches) {
			//recreate buttons for each event
			// var button = document.createElement("button");
			// button.type = "button";
			// button.textContent = searches.title;
			// button.className = "button success cell small-12 rounded-button";
			// button.setAttribute("data-title", searches.title);
			// button.setAttribute("data-year", searches.year);
			// var container = document.getElementById("save-btns");
			// container.appendChild(button);
			//bookmarks
			var liElem = document.createElement("li");
			liElem.setAttribute("data-title", searches.title);
			liElem.setAttribute("data-year", searches.year);
			liElem.classList.add("secondary", "rounded-corners");
			liElem.innerHTML = "<a href='#'>" + searches.title + "</a>";
			var container = document.getElementById("bookmarks");
			container.appendChild(liElem);
		});
	}
	gethistory(dia); //use to display data for today's date
};

var appendClass = function (element, classToAdd) {
	element.classList.add(classToAdd);
};

//waiting to capture answer for save buttons
var buttonClickHandler = function (event) {
	event.preventDefault();
	// get target element from event
	var targetEl = event.target;
	if (targetEl.getAttribute("btn-type") === "save") {
		//user wants to save event
		if (!searches) {
			//if it is first city that is going to be added
			searches = [];
			//prepare to save on local storage
			var eventDataObj = {
				title: targetEl.getAttribute("data-title"),
				year: targetEl.getAttribute("data-year"),
				description: targetEl.getAttribute("data-descr"),
			};
			//save obj on array
			searches.push(eventDataObj);
			saveSearches(); //go to save on local storage
			//missing to create buttons
		} else {
			//search on array if event already exist
			var index = -1;
			for (let y = 0; y < searches.length; y++) {
				if (searches[y].title === targetEl.getAttribute("data-title")) {
					index = y;
				}
			}
			if (index < 0) {
				//the task does not previously exist. adding new task
				var eventDataObj = {
					title: targetEl.getAttribute("data-title"),
					year: targetEl.getAttribute("data-year"),
					description: targetEl.getAttribute("data-descr"),
				};
				//save obj on array
				searches.push(eventDataObj);
				saveSearches(); //go to save on local storage
				//missing to create buttons
			}
		}
	}
	if (targetEl.getAttribute("btn-type") === "learn") {
		//user click on learn more
		var title = targetEl.getAttribute(data - title);
		getmoredetails(title); //Cabral calls to second page
	}
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
					//display data as buttons
					var allSearches = data.data.Events; //get only array events
					var l =
						Math.floor(Math.random() * (allSearches.length - 1 - 0 + 1)) + 0;
					line.textContent = "It Happened on " + data.date;
					intro.textContent =
						"On " +
						data.date +
						"," +
						data.data.Events[l].year +
						": " +
						data.data.Events[l].links[0].title;
					description.textContent = data.data.Events[l].text;
					document.querySelector("#accordion").innerHTML = "";
					//Needed to activate accordion on Jquery
					$(function () {
						var icons = {
							header: "ui-icon-circle-arrow-e",
							activeHeader: "ui-icon-circle-arrow-s",
						};
						$("#accordion").accordion({
							collapsible: true,
							heightStyle: "fill",
							icons: icons,
						});
					});
					//loop over array to recreate search for that day on the webpage
					$.each(allSearches, function (index, allSearches) {
						if (index !== l) {
							//create entries for each event
							var sectionEl = document.createElement("h3");
							sectionEl.textContent =
								" Year: " +
								data.data.Events[index].year +
								": " +
								data.data.Events[index].links[0].title;
							var DivEl = document.createElement("div");
							//DivEl.className = "cell small-12";
							var pEl = document.createElement("p");
							var buttonDiv = document.createElement("div");
							buttonDiv.className = "grid-x grid-margin-x";
							var buttonEl = document.createElement("button");
							buttonEl.className =
								"button alert card-section rounded-button cell small-6";
							buttonEl.setAttribute("btn-type", "save");
							buttonEl.setAttribute(
								"data-title",
								data.data.Events[index].links[0].title
							);
							buttonEl.setAttribute("data-year", data.data.Events[index].year);
							buttonEl.setAttribute("data-descr", data.data.Events[index].text);
							buttonEl.textContent = "Save Search";
							var LbuttonEl = document.createElement("button");
							LbuttonEl.className =
								"button alert card-section rounded-button cell small-6";
							LbuttonEl.setAttribute("btn-type", "learn");
							LbuttonEl.setAttribute(
								"data-title",
								data.data.Events[index].links[0].title
							);
							LbuttonEl.textContent = "Learn More";
							buttonDiv.append(buttonEl, LbuttonEl);
							pEl.textContent = data.data.Events[index].text;
							DivEl.appendChild(pEl);
							//DivEl.appendChild(buttonEl);
							//DivEl.appendChild(LbuttonEl);
							DivEl.appendChild(buttonDiv);
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
var saveSearches = function () {
	localStorage.setItem("searches", JSON.stringify(searches));
};

//using for second search
var getmoredetails = function (searchTerm) {
	// format the github api url
	var omdbURL = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=a6a19b04";
	var bookURL = "http://openlibrary.org/search.json?q=" + searchTerm;
	// make a get request to url
	// function to process the data
	var getMovieCard = function (movieData) {
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
		detailDiv1.textContent =
			m_Year + " " + m_Type.charAt(0).toUpperCase() + m_Tipe.slice(1);
		var linkDiv = document.createElement("div");
		linkDiv.className = "card-section";
		var linkAnchor = document.createElement("a");
		linkAnchor.href = "https://www.imdb.com/title/" + m_imdbID;
		linkAnchor.textContent = "IMDB Page";
		movieCard.append(titq, detailDiv1, linkDiv);
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

// add event listeners to form and button container
SButtonsEl.addEventListener("click", buttonClickHandler);

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
		$(".accordion").accordion("destroy");
		$(".ui-accordion-header").remove();
		$(".ui-accordion-content").remove();
		gethistory(cday);
	});
	//Let's load todays events
	loadpage();
	getBooks("");
});

function getBooks(searchString) {
	var booksUrl =
		"https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" +
		googleBooksApiKey;
	fetch(booksUrl)
		.then(function (response) {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(
					" Unable to connect to https://api.openweathermap.org/data/2.5/onecall"
				);
			}
		})
		.then(function (data) {
			console.log(data);  //need to call function to display books.
		})
		.catch(function (error) {
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		});
}
