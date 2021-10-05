var secondTitle = document.querySelector("#secondTitle");
var testContainer = document.querySelector("#testContainer");
var bookContainer = document.querySelector("#bookContainer");
var googleBooksApiKey = "AIzaSyAQLZKoVW6Z2r8WwtXPTSdVZB-Qgp9n32o";

//initialize foundation framework
$(document).foundation();

var titlize = function (inputString) {
	//This function will return the input string with capital letters at all first letter locations
	var outputString = "";
	var stringArray = inputString.split(" "); //Splits the string into a word array
	//Iterate over the array and replace each word with a capitalized version
	console.log(stringArray);
	for (var i = 0; i < stringArray.length; i++) {
		var nextWord = stringArray[i];
		nextWord = nextWord.charAt(0).toUpperCase() + nextWord.slice(1);
		stringArray[i] = nextWord;
	}
	//Join and return the words
	return stringArray.join(" ");
};

var replacePluses = function (inputString) {
	//Will replace + and %20 with spaces for string formatting
	var newString = inputString.replace(/%20/g, " ");
	var finalString = newString.replace(/\+/g, " ");
	return finalString;
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
//Search for books
function validateResponseFields(val) {
	if (typeof val !== "undefined") {
		return val;
	}
	return "";
}

function getBooks(searchString) {
	var booksUrl =
		"https://www.googleapis.com/books/v1/volumes?q=" +
		searchString +
		"&key=" +
		googleBooksApiKey;
	var getBookCard = function (bookData) {
		console.log(bookData);
		var bookCard = document.createElement("div");
		var title = validateResponseFields(bookData.volumeInfo.title);
		var link = validateResponseFields(bookData.volumeInfo.infoLink);
		var authors = validateResponseFields(bookData.volumeInfo.authors);
		var categories = validateResponseFields(bookData.volumeInfo.categories);
		var imgsrc = "";
		var imgsrc;
		if (bookData.volumeInfo.imageLinks) {
			imgsrc = bookData.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail")
				? bookData.volumeInfo.imageLinks.smallThumbnail
				: "";
		} else {
			imgsrc = "";
		}

		var publisher = "";
		var publishedDate = "";

		if (validateResponseFields(bookData.volumeInfo.publisher) !== "") {
			publisher = bookData.volumeInfo.publisher;
		}

		if (validateResponseFields(bookData.volumeInfo.publishedDate) !== "") {
			publishedDate = bookData.volumeInfo.publishedDate;
		}

		var publication = "";
		if (publisher != "" || publishedDate != "")
			publication = publisher + "[ " + publishedDate + "]";

		bookCard.classList.add("column", "book-result");
		var html1 = "";
		if (imgsrc !== "")
			html1 += "<img class='thumbnail1' src='" + imgsrc + "' />";
		if (title !== "") html1 += "<h5 class='media-title'>" + title;
		if (authors !== "") " <small>&nbsp; - &nbsp;" + authors + "</small></h5>";

		if (categories !== "")
			html1 += "<p class='media-desc media-desc-cat' >" + categories + "</p>";

		html1 += "<p class='media-desc'>" + publication + "</p>";
		if (link !== "")
			html1 +=
				"<p> <a href='" +
				link +
				"' class='button   media-link' target='_blank'>Buy Now</a></p>"; //<a href="#" class="button hollow tiny expanded">Buy Now</a>
		bookCard.innerHTML = html1;
		return bookCard;
	};
	fetch(booksUrl)
		.then(function (response) {
			if (response.ok) {
				return response.json();
			} else {
				//call modal window to display conectivity error
				dispError(
					"Error: Unable to connect to https://www.googleapis.com/books API"
				);
			}
		})
		.then(function (data) {
			console.log(data); //need to call function to display books.
			//bookContainer.innerHTML = "";
			for (var i = 0; i < data.items.length; i++) {
				var nextBook = getBookCard(data.items[i]);
				document.querySelector(".bookContainer").appendChild(nextBook);
			}
		})
		.catch(function (error) {
			debugger;
			//dispError("Error: " + error.status+" "+error.statusText);
			//api response returned errors, so call modal window to display errors
			dispError("Error: There has been a problem with your fetch operation");
		});
}

var getmoredetails = function (searchTerm) {
	// format the github api url
	var omdbURL = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=a6a19b04";
	var bookURL = "http://openlibrary.org/search.json?q=" + searchTerm;

	var getMovieCard = function (movieData) {
		console.log(movieData);
		var m_imdbID = movieData.imdbID.trim();
		var m_Title = movieData.Title;
		var m_Year = movieData.Year;
		var m_Type = movieData.Type;
		var m_author = movieData.author;
		var m_poster = movieData.Poster;
		var divElem = $("<div>");
		divElem.addClass("media-object stack-for-small");

		var html1 = "<div class='media-object-section'>";
		if (m_poster == "N/A")
			html1 += "	<img class='thumbnail1' src='../images/nomovie.jpg' />";
		else html1 += "	<img class='thumbnail1' src='" + m_poster + "' />";
		console.log(html1);
		html1 += "					</div> ";
		html1 += "	<div class='media-object-section movie-div'>";
		html1 += "	<h5 class ='media-title'>" + m_Title + "</h5> " + "<span >";
		html1 += "						<p class='media-desc'> ";
		html1 += m_Year + " " + m_Type.charAt(0).toUpperCase() + m_Type.slice(1);
		//	"							I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus,resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.";
		html1 += "						</p>";
		html1 +=
			"<p ><a class='button   media-link' href='https://www.imdb.com/title/" +
			m_imdbID +
			"' target = '_blank'>IMDB Page</a></p>";
		html1 += "					</div>";
		divElem.html(html1);

		return divElem;
	};
	fetch(omdbURL)
		.then(function (response) {
			// request was successful
			if (response.ok) {
				console.log("movies response" + omdbURL);
				console.log(response);
				return response.json();
			} else {
				//call modal window to display conectivity error
				dispError(
					"Error: Unable to connect to https://www.googleapis.com/books API"
				);
			}
		})
		.then(function (data) {
			console.log("movies data");
			console.log(data);
			if (data.Response !== "False") {
				for (var i = 0; i < data.Search.length; i++) {
					var nextCard = getMovieCard(data.Search[i]);
					$("#panel1").append(nextCard);
				}
			}
			//	$("#panel1").append(tabsContentDiv);
		})
		.catch(function (error) {
			debugger;
			//dispError("Error: " + error.status+" "+error.statusText);
			//api response returned errors, so call modal window to display errors
			dispError(
				"Error: There has been a problem with your movie fetch operation"
			);
		});

	// 	if (response.ok) {
	// 		response.json()
	// 		.then(function (data) {
	// 			testContainer.innerHTML = "";
	// 			console.log(data);
	// 			console.log(Object.keys(data));
	// 			for (var i = 0; i < data.Search.length; i++) {
	// 				var nextCard = getMovieCard(data.Search[i]);
	// 				$("#panel1").append(nextCard);
	// 			}
	// 			//	$("#panel1").append(tabsContentDiv);
	// 		});
	// 	} else {
	// 		//api response returned errors, so call modal window to display errors
	// 		dispError("Error: " + response.status+" "+response.statusText);
	// 	}
	// });
};

var getSearchData = function () {
	//This will return the query substring that we will then use for the next search
	var queryString = document.location.search.split("=")[1];
	if (queryString) {
		queryString = replacePluses(queryString);
		secondTitle.innerHTML = "";
		secondTitle.textContent = titlize(queryString);
		//var details = getTabContainer();

		getmoredetails(queryString);
		getBooks(queryString);
	} else {
		document.location.replace("./index.html");
	}
};

getSearchData();
