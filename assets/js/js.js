var dia = moment().format("M/D"); //todays date mm/dd
var searches = []; //array to save user searches
var googleBooksApiKey = "AIzaSyAQLZKoVW6Z2r8WwtXPTSdVZB-Qgp9n32o";
//var for event listerner
SButtonsEl = document.querySelector("#clicker");
bookmarksEL = document.querySelector("#bookmarks");

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
			createButtons(searches.title,searches.year);
		});
	}
	gethistory(dia); //use to display data for today's date
};

//create buttons for saved searches
var createButtons= function(ttitle, tyear){
	var bElem = document.createElement("button");
	bElem.setAttribute("data-title", ttitle);
	bElem.setAttribute("data-year", tyear);
	bElem.setAttribute("btn-type", "learn");
	bElem.classList.add("btn");
	bElem.textContent= ttitle;
	var container = document.getElementById("bookmarks");
	container.appendChild(bElem);
}

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
				//display button with saved search
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
	var apiUrl = "https://history.muffinlabs.com/date/" + dateEl;
	// make a get request to url
	fetch(apiUrl)
		.then(function (response) {
			// request was successful
			if (response.ok) {
				response.json().then(function (data) {
					console.log(data.data);
					//display data as buttons
					var allSearches = data.data.Events; //get only array events
					var l =
						Math.floor(Math.random() * (allSearches.length - 1 - 0 + 1)) + 0;
					line.textContent = "It Happened on " + data.date;
					intro.textContent =
						"On " +
						data.date +
						", " +
						data.data.Events[l].year +
						": " +
						data.data.Events[l].links[0].title;
					description.textContent = data.data.Events[l].text;
					//document.querySelector("#featuredLearn").setAttribute("data-title", data.data.Events[l].links[0].title);
					document
						.querySelector("#featuredLearn")
						.setAttribute(
							"onclick",
							'redirectPage("' + data.data.Events[l].links[0].title + '")'
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
								"button  card-section rounded-button cell small-6";
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
								"button  card-section rounded-button cell small-6";
							LbuttonEl.setAttribute("btn-type", "learn");
							LbuttonEl.setAttribute(
								"data-title",
								data.data.Events[index].links[0].title
							);
							LbuttonEl.textContent = "Learn More";
							buttonDiv.append(buttonEl, LbuttonEl);
							pEl.textContent = data.data.Events[index].text;
							DivEl.appendChild(pEl);
							DivEl.appendChild(buttonDiv);
							var container = document.getElementById("accordion");
							container.appendChild(sectionEl);
							container.appendChild(DivEl);
						}
					});
				});
			} else {
				//api response returned errors
				// call modal window to display errors
				msgerror.textContent="Error: " + response.status+" "+response.statusText;
				$( function() {
				  $( "#dialog-message" ).dialog({
					  modal: true,
					  buttons: {
						Ok: function() {
						  $( this ).dialog( "close" );
						}
					  }
				  });
				}); //end modal
			}
		})
		.catch(function (error) {
			// call modal window to display errors
			msgerror.textContent="Error: Unable to connect to history.muffinlabs.com/date/ API";
			$( function() {
			  $( "#dialog-message" ).dialog({
				  modal: true,
				  buttons: {
					Ok: function() {
					  $( this ).dialog( "close" );
					}
				  }
			  });
			});
		});
};

//save array to local storage
var saveSearches = function () {
	localStorage.setItem("searches", JSON.stringify(searches));
};

// add event listeners to save and learn buttons
SButtonsEl.addEventListener("click", buttonClickHandler);
// add event listeners to saved search buttons
bookmarksEL.addEventListener("click",buttonClickHandler);

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
});


