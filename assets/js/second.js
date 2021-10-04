
var secondTitle = document.querySelector("#secondTitle");
var testContainer = document.querySelector("#testContainer");
var titlize = function(inputString) {
    //This function will return the input string with capital letters at all first letter locations
    var outputString = "";
    var stringArray = inputString.split(" "); //Splits the string into a word array
    //Iterate over the array and replace each word with a capitalized version
    console.log(stringArray);
    for(var i = 0; i < stringArray.length; i++) {
        var nextWord = stringArray[i];
        nextWord = nextWord.charAt(0).toUpperCase() + nextWord.slice(1);
        stringArray[i] = nextWord;
    }
    //Join and return the words
    return stringArray.join(" ");
};

var replacePluses = function(inputString) {
    //Will replace + and %20 with spaces for string formatting
    var newString = inputString.replace(/%20/g, " ");
    var finalString = newString.replace(/\+/g, " ");
    return finalString;
};

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
		movieCard.className = "card cell small-12 medium-4 large-3";
		var titleH = document.createElement("h3");
		titleH.className = "card-divider";
		titleH.textContent = m_Title;
		var detailDiv1 = document.createElement("div");
		detailDiv1.className = "card-section";
		detailDiv1.textContent = m_Year + " " + m_Type.charAt(0).toUpperCase() + m_Type.slice(1);
		var linkDiv = document.createElement("div");
		linkDiv.className = "card-section";
		var linkAnchor = document.createElement("a");
		linkAnchor.href = "https://www.imdb.com/title/" + m_imdbID;
		linkAnchor.textContent = "IMDB Page";
        linkDiv.appendChild(linkAnchor);
		movieCard.append(titleH,detailDiv1,linkDiv);
		return movieCard;
	};
	fetch(omdbURL).then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
                testContainer.innerHTML = "";
				console.log(data);
				console.log(Object.keys(data));
                for(var i = 0; i < data.Search.length; i++) {
                    var nextCard = getMovieCard(data.Search[i]);
                    testContainer.appendChild(nextCard);
                }
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

var getSearchData = function() {
    //This will return the query substring that we will then use for the next search
    var queryString = document.location.search.split("=")[1];
    if(queryString) {
        queryString = replacePluses(queryString);
        secondTitle.innerHTML = "";
        secondTitle.textContent = titlize(queryString);
        getmoredetails(queryString);
    } else {
        document.location.replace("./index.html");
    }
};

getSearchData();