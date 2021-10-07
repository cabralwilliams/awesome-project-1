var dia = moment().format("M/D"); //todays date mm/dd
var searches = []; //array to save user searches
var googleBooksApiKey = "AIzaSyAQLZKoVW6Z2r8WwtXPTSdVZB-Qgp9n32o";
//var for event listerner
SButtonsEl = document.querySelector("#clicker");
bookmarksEL = document.querySelector("#bookmarks");
clearEL = document.querySelector("#clearHistory");

//initialize foundation framework
$(document).foundation();

//open second html page to display books and movies
var redirectPage = function (searchTerm) {
	document.location.replace("./learn_more.html?q=" + searchTerm);
};

//load page first time-get history with today's data
var loadpage = function () {
	searches = []; //initialize array
	// read from local storage
	searches = JSON.parse(localStorage.getItem("searches"));
	if (searches) {
		//if a search has been saved on local storage then
		//loop over array to recreate saved searches buttons on the webpage
		$.each(searches, function (index, searches) {
			//display a li element for each saved search
			createButtons(searches.title, searches.year);
		});
	}
	gethistory(dia); //use to display data for today's date
};

//create buttons for saved searches
var createButtons = function (ttitle, tyear) {
	var bElem = document.createElement("button");
	bElem.setAttribute("data-title", ttitle);
	bElem.setAttribute("data-year", tyear);
	bElem.setAttribute("btn-type", "learn");
	bElem.classList.add("btn");
	bElem.textContent = tyear + "-" + ttitle;
	var container = document.getElementById("bookmarks");
	container.appendChild(bElem);
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
			//if it is first search that is going to be added
			searches = [];
			//prepare to save on local storage
			var eventDataObj = {
				title: targetEl.getAttribute("data-title"),
				year: targetEl.getAttribute("data-year"),
				description: targetEl.getAttribute("data-descr"),
			};
			//save obj on array
			searches.push(eventDataObj);
			//go to save on local storage
			saveSearches();
			//display a li element for each saved search
			createButtons(eventDataObj.title, eventDataObj.year);
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
				//go to save on local storage
				saveSearches();
				//display a li element for each saved search
				createButtons(eventDataObj.title, eventDataObj.year);
			}
		}
	}
	if (targetEl.getAttribute("btn-type") === "learn") {
		//user click on learn more
		var title = targetEl.getAttribute("data-title");
		redirectPage(title);
	}
};

//load history for a specific day of the year
var gethistory = function (dateEl) {
	// format the weather api url by city
	//var apiUrl = "https://history.muffinlabs.com/date/" + dateEl;
	var apiUrl =
		"https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/" + dateEl;
	// make a get request to url
	fetch(apiUrl)
		.then(function (response) {
			// request was successful
			if (response.ok) {
				response.json().then(function (data) {
					//console.log(data.events);
					//display data as buttons
					//var allSearches = data.data.Events; //get only array events
					var allSearches = data.events; //get only array events
					line.textContent = "It Happened on " + dateEl;
					intro.innerHTML =
						"On " +
						dateEl +
						", " +
						data.events[0].year +
						": " +
						data.events[0].pages[0].displaytitle;
					description.textContent = data.events[0].pages[0].extract;
					//event listener to learn more - redirect page
					document
						.querySelector("#featuredLearn")
						.setAttribute(
							"onclick",
							'redirectPage("' + data.events[0].pages[0].normalizedtitle + '")'
						);
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
						
							//create entries for each event
							var sectionEl = document.createElement("h3");
							var extract = data.events[index].pages[0].extract;
							sectionEl.setAttribute("data-extract", extract);
							sectionEl.setAttribute("data-year", data.events[index].year);
							sectionEl.setAttribute(
								"data-normTitle",
								data.events[index].pages[0].normalizedtitle
							);
							sectionEl.innerHTML =
								" Year: " +
								data.events[index].year +
								": " +
								data.events[index].pages[0].displaytitle;
							var DivEl = document.createElement("div");
							//DivEl.className = "cell small-12";
							var pEl = document.createElement("p");
							var buttonDiv = document.createElement("div");
							buttonDiv.className = "grid-x grid-margin-x";
							var buttonEl = document.createElement("button");
							buttonEl.className =
								"button  card-section rounded-button cell small-6";
							buttonEl.setAttribute("btn-type", "save");
							buttonEl.setAttribute(
								"data-title",
								data.events[index].pages[0].normalizedtitle
							);
							buttonEl.setAttribute("data-year", data.events[index].year);
							buttonEl.setAttribute("data-descr", data.events[index].text);
							buttonEl.textContent = "Save Search";
							var LbuttonEl = document.createElement("button");
							LbuttonEl.className =
								"button  card-section rounded-button cell small-6";
							LbuttonEl.setAttribute("btn-type", "learn");
							LbuttonEl.setAttribute(
								"data-title",
								data.events[index].pages[0].normalizedtitle
							);
							LbuttonEl.textContent = "Learn More";
							buttonDiv.append(buttonEl, LbuttonEl);
							pEl.textContent = data.events[index].text;
							DivEl.appendChild(pEl);
							DivEl.appendChild(buttonDiv);
							var container = document.getElementById("accordion");
							container.appendChild(sectionEl);
							container.appendChild(DivEl);

							sectionEl.addEventListener("click", function (event) {
							displayExtract(this, dateEl);
							});						
					});
				});
			} else {
				//api response returned errors, so call modal window to display errors
				dispError("Error: " + response.status + " " + response.statusText);
			}
		})
		.catch(function (error) {
			// call modal window to display conectivity error
			dispError("Error: Unable to connect to en.wikipedia.org/api/rest_v1/feed/onthisday/events/ API");
		});
};
//Display errors using modal
var dispError = function (etext) {
	msgerror.textContent = etext;
	$(function () {
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				},
			},
		});
	});
};
//save array to local storage
var saveSearches = function () {
	localStorage.setItem("searches", JSON.stringify(searches));
};
//clear saved searches
var clearSearches = function () {
	searches = []; //clear array
	localStorage.setItem("searches", JSON.stringify(searches)); //empty local storage
	$(".btn").remove(); //remove buttons
};

// add event listeners to save and learn buttons
SButtonsEl.addEventListener("click", buttonClickHandler);
// add event listeners to saved search buttons
bookmarksEL.addEventListener("click", buttonClickHandler);
//delete saved searches
clearEL.addEventListener("click", clearSearches);

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
		if (!selectedDate) {
			//user did not select a day
			dispError("please Select a day. Try it again");
			return;
		}
		//remove elements from accordion so next date would be properly display
		$(".accordion").accordion("destroy");
		$(".ui-accordion-header").remove();
		$(".ui-accordion-content").remove();
		gethistory(cday);
	});
	//Let's load todays events
	loadpage();
});

function displayExtract(t, dateEl) {
	console.log(t);
	console.log(t.getAttribute("data-extract"));
	console.log(t.getAttribute("data-year"));
	console.log(t.getAttribute("data-normTitle"));
	//var dateEl = t.getAttribute("data-year");
	var extract = t.getAttribute("data-extract");
	var normTitle = t.getAttribute("data-normTitle");
	var year = t.getAttribute("data-year");
	line.textContent = "It Happened on " + dateEl;
	intro.innerHTML = "On " + dateEl + ", " + year + ": " + normTitle;
	description.textContent = extract;
}
