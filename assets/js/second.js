var secondTitle = document.querySelector("#secondTitle");
var testContainer = document.querySelector("#testContainer");
var bookContainer = document.querySelector("#bookContainer");
var googleBooksApiKey = "AIzaSyAQLZKoVW6Z2r8WwtXPTSdVZB-Qgp9n32o";
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

function getBooks(searchString) {
	var booksUrl =
		"https://www.googleapis.com/books/v1/volumes?q=" +
		searchString +
		"&key=" +
		googleBooksApiKey;
	var getBookCard = function (bookData) {
		console.log(bookData);
		var bookCard = document.createElement("div");
		var title = bookData.volumeInfo.title;
		var link = bookData.volumeInfo.infoLink;
		var authors = bookData.volumeInfo.authors;
		var categories = bookData.volumeInfo.categories;
		var imgsrc = bookData.volumeInfo.imageLinks.smallThumbnail;
		var publisher = "";
		var publishedDate = "";
		if (typeof bookData.volumeInfo.publisher !== "undefined") {
			publisher = bookData.volumeInfo.publisher;
		}
		console.log(typeof bookData.volumeInfo.publisher);
		if (typeof bookData.volumeInfo.publishedDate !== "undefined") {
			publishedDate = bookData.volumeInfo.publishedDate;
		}

		var publication = "";
		if (publisher != "" || publishedDate != "")
			publication = publisher + "[ " + publishedDate + "]";

		bookCard.classList.add("column");
		var html1 = "";
		html1 += "<img class='thumbnail1' src='" + imgsrc + "' />";
		html1 += "<h5>" + title + " <small>" + authors + "</small></h5>";
		if (typeof categories !== "undefined") html1 += "<p>" + categories + "</p>";
		html1 += "<p>" + publication + "</p>";
		html1 +=
			"<p> <a href='" +
			link +
			"' class='button hollow tiny expanded' target='_blank'>Buy Now</a></p>"; //<a href="#" class="button hollow tiny expanded">Buy Now</a>
		bookCard.innerHTML = html1;
		return bookCard;
	};
	fetch(booksUrl)
		.then(function (response) {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(
					" Unable to connect to https://www.googleapis.com/books"
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
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		});
}

var getmoredetails = function (searchTerm) {
	// format the github api url
	var omdbURL = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=a6a19b04";
	var bookURL = "http://openlibrary.org/search.json?q=" + searchTerm;

	var getMovieCard = function (movieData) {
		console.log(movieData);
		var m_imdbID = movieData.imdbID;
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
		html1 += "	<div class='media-object-section'>";
		html1 += "	<h5>" + m_Title + "</h5> " + "<span >";
		html1 += "						<p> ";
		html1 += m_Year + " " + m_Type.charAt(0).toUpperCase() + m_Type.slice(1);
		//	"							I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus,resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.";
		html1 += "						</p>";
		html1 +=
			"<p><a href='https://www.imdb.com/title/'" +
			m_imdbID +
			">IMDB Page</a></p>";
		html1 += "					</div>";
		divElem.html(html1);

		return divElem;
	};
	fetch(omdbURL).then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
				testContainer.innerHTML = "";
				console.log(data);
				console.log(Object.keys(data));
				for (var i = 0; i < data.Search.length; i++) {
					var nextCard = getMovieCard(data.Search[i]);
					$("#panel1").append(nextCard);
				}
				//	$("#panel1").append(tabsContentDiv);
			});
		} else {
			alert("Error: " + response.statusText);
		}
	});
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
