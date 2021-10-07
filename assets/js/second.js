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
	finalString = finalString.replace(/%27/g, "'");
	return finalString;
};

//These will convert replacement url entities, e.g. %27, with html entities that will make the characters appear properly on the page
var conversions = [
	["c4 80", "&#x100;"],
	["c4 81", "&#x101;"],
	["c4 82", "&#x102;"],
	["c4 83", "&#x103;"],
	["c4 84", "&#x104;"],
	["c4 85", "&#x105;"],
	["c4 86", "&#x106;"],
	["c4 87", "&#x107;"],
	["c4 88", "&#x108;"],
	["c4 89", "&#x109;"],
	["c4 8a", "&#x10A;"],
	["c4 8b", "&#x10B;"],
	["c4 8c", "&#x10C;"],
	["c4 8d", "&#x10D;"],
	["c4 8e", "&#x10E;"],
	["c4 8f", "&#x10F;"],
	["c4 90", "&#x110;"],
	["c4 91", "&#x111;"],
	["c4 92", "&#x112;"],
	["c4 93", "&#x113;"],
	["c4 94", "&#x114;"],
	["c4 95", "&#x115;"],
	["c4 96", "&#x116;"],
	["c4 97", "&#x117;"],
	["c4 98", "&#x118;"],
	["c4 99", "&#x119;"],
	["c4 9a", "&#x11A;"],
	["c4 9b", "&#x11B;"],
	["c4 9c", "&#x11C;"],
	["c4 9d", "&#x11D;"],
	["c4 9e", "&#x11E;"],
	["c4 9f", "&#x11F;"],
	["c4 a0", "&#x120;"],
	["c4 a1", "&#x121;"],
	["c4 a2", "&#x122;"],
	["c4 a3", "&#x123;"],
	["c4 a4", "&#x124;"],
	["c4 a5", "&#x125;"],
	["c4 a6", "&#x126;"],
	["c4 a7", "&#x127;"],
	["c4 a8", "&#x128;"],
	["c4 a9", "&#x129;"],
	["c4 aa", "&#x12A;"],
	["c4 ab", "&#x12B;"],
	["c4 ac", "&#x12C;"],
	["c4 ad", "&#x12D;"],
	["c4 ae", "&#x12E;"],
	["c4 af", "&#x12F;"],
	["c4 b0", "&#x130;"],
	["c4 b1", "&#x131;"],
	["c4 b2", "&#x132;"],
	["c4 b3", "&#x133;"],
	["c4 b4", "&#x134;"],
	["c4 b5", "&#x135;"],
	["c4 b6", "&#x136;"],
	["c4 b7", "&#x137;"],
	["c4 b8", "&#x138;"],
	["c4 b9", "&#x139;"],
	["c4 ba", "&#x13A;"],
	["c4 bb", "&#x13B;"],
	["c4 bc", "&#x13C;"],
	["c4 bd", "&#x13D;"],
	["c4 be", "&#x13E;"],
	["c4 bf", "&#x13F;"],
	["c5 80", "&#x140;"],
	["c5 81", "&#x141;"],
	["c5 82", "&#x142;"],
	["c5 83", "&#x143;"],
	["c5 84", "&#x144;"],
	["c5 85", "&#x145;"],
	["c5 86", "&#x146;"],
	["c5 87", "&#x147;"],
	["c5 88", "&#x148;"],
	["c5 89", "&#x149;"],
	["c5 8a", "&#x14A;"],
	["c5 8b", "&#x14B;"],
	["c5 8c", "&#x14C;"],
	["c5 8d", "&#x14D;"],
	["c5 8e", "&#x14E;"],
	["c5 8f", "&#x14F;"],
	["c5 90", "&#x150;"],
	["c5 91", "&#x151;"],
	["c5 92", "&#x152;"],
	["c5 93", "&#x153;"],
	["c5 94", "&#x154;"],
	["c5 95", "&#x155;"],
	["c5 96", "&#x156;"],
	["c5 97", "&#x157;"],
	["c5 98", "&#x158;"],
	["c5 99", "&#x159;"],
	["c5 9a", "&#x15A;"],
	["c5 9b", "&#x15B;"],
	["c5 9c", "&#x15C;"],
	["c5 9d", "&#x15D;"],
	["c5 9e", "&#x15E;"],
	["c5 9f", "&#x15F;"],
	["c5 a0", "&#x160;"],
	["c5 a1", "&#x161;"],
	["c5 a2", "&#x162;"],
	["c5 a3", "&#x163;"],
	["c5 a4", "&#x164;"],
	["c5 a5", "&#x165;"],
	["c5 a6", "&#x166;"],
	["c5 a7", "&#x167;"],
	["c5 a8", "&#x168;"],
	["c5 a9", "&#x169;"],
	["c5 aa", "&#x16A;"],
	["c5 ab", "&#x16B;"],
	["c5 ac", "&#x16C;"],
	["c5 ad", "&#x16D;"],
	["c5 ae", "&#x16E;"],
	["c5 af", "&#x16F;"],
	["c5 b0", "&#x170;"],
	["c5 b1", "&#x171;"],
	["c5 b2", "&#x172;"],
	["c5 b3", "&#x173;"],
	["c5 b4", "&#x174;"],
	["c5 b5", "&#x175;"],
	["c5 b6", "&#x176;"],
	["c5 b7", "&#x177;"],
	["c5 b8", "&#x178;"],
	["c5 b9", "&#x179;"],
	["c5 ba", "&#x17A;"],
	["c5 bb", "&#x17B;"],
	["c5 bc", "&#x17C;"],
	["c5 bd", "&#x17D;"],
	["c5 be", "&#x17E;"],
	["c5 bf", "&#x17F;"],
	["c6 80", "&#x180;"],
	["c6 81", "&#x181;"],
	["c6 82", "&#x182;"],
	["c6 83", "&#x183;"],
	["c6 84", "&#x184;"],
	["c6 85", "&#x185;"],
	["c6 86", "&#x186;"],
	["c6 87", "&#x187;"],
	["c6 88", "&#x188;"],
	["c6 89", "&#x189;"],
	["c6 8a", "&#x18A;"],
	["c6 8b", "&#x18B;"],
	["c6 8c", "&#x18C;"],
	["c6 8d", "&#x18D;"],
	["c6 8e", "&#x18E;"],
	["c6 8f", "&#x18F;"],
	["c6 90", "&#x190;"],
	["c6 91", "&#x191;"],
	["c6 92", "&#x192;"],
	["c6 93", "&#x193;"],
	["c6 94", "&#x194;"],
	["c6 95", "&#x195;"],
	["c6 96", "&#x196;"],
	["c6 97", "&#x197;"],
	["c6 98", "&#x198;"],
	["c6 99", "&#x199;"],
	["c6 9a", "&#x19A;"],
	["c6 9b", "&#x19B;"],
	["c6 9c", "&#x19C;"],
	["c6 9d", "&#x19D;"],
	["c6 9e", "&#x19E;"],
	["c6 9f", "&#x19F;"],
	["c6 a0", "&#x1A0;"],
	["c6 a1", "&#x1A1;"],
	["c6 a2", "&#x1A2;"],
	["c6 a3", "&#x1A3;"],
	["c6 a4", "&#x1A4;"],
	["c6 a5", "&#x1A5;"],
	["c6 a6", "&#x1A6;"],
	["c6 a7", "&#x1A7;"],
	["c6 a8", "&#x1A8;"],
	["c6 a9", "&#x1A9;"],
	["c6 aa", "&#x1AA;"],
	["c6 ab", "&#x1AB;"],
	["c6 ac", "&#x1AC;"],
	["c6 ad", "&#x1AD;"],
	["c6 ae", "&#x1AE;"],
	["c6 af", "&#x1AF;"],
	["c6 b0", "&#x1B0;"],
	["c6 b1", "&#x1B1;"],
	["c6 b2", "&#x1B2;"],
	["c6 b3", "&#x1B3;"],
	["c6 b4", "&#x1B4;"],
	["c6 b5", "&#x1B5;"],
	["c6 b6", "&#x1B6;"],
	["c6 b7", "&#x1B7;"],
	["c6 b8", "&#x1B8;"],
	["c6 b9", "&#x1B9;"],
	["c6 ba", "&#x1BA;"],
	["c6 bb", "&#x1BB;"],
	["c6 bc", "&#x1BC;"],
	["c6 bd", "&#x1BD;"],
	["c6 be", "&#x1BE;"],
	["c6 bf", "&#x1BF;"],
	["c7 80", "&#x1C0;"],
	["c7 81", "&#x1C1;"],
	["c7 82", "&#x1C2;"],
	["c7 83", "&#x1C3;"],
	["c7 84", "&#x1C4;"],
	["c7 85", "&#x1C5;"],
	["c7 86", "&#x1C6;"],
	["c7 87", "&#x1C7;"],
	["c7 88", "&#x1C8;"],
	["c7 89", "&#x1C9;"],
	["c7 8a", "&#x1CA;"],
	["c7 8b", "&#x1CB;"],
	["c7 8c", "&#x1CC;"],
	["c7 8d", "&#x1CD;"],
	["c7 8e", "&#x1CE;"],
	["c7 8f", "&#x1CF;"],
	["c7 90", "&#x1D0;"],
	["c7 91", "&#x1D1;"],
	["c7 92", "&#x1D2;"],
	["c7 93", "&#x1D3;"],
	["c7 94", "&#x1D4;"],
	["c7 95", "&#x1D5;"],
	["c7 96", "&#x1D6;"],
	["c7 97", "&#x1D7;"],
	["c7 98", "&#x1D8;"],
	["c7 99", "&#x1D9;"],
	["c7 9a", "&#x1DA;"],
	["c7 9b", "&#x1DB;"],
	["c7 9c", "&#x1DC;"],
	["c7 9d", "&#x1DD;"],
	["c7 9e", "&#x1DE;"],
	["c7 9f", "&#x1DF;"],
	["c7 a0", "&#x1E0;"],
	["c7 a1", "&#x1E1;"],
	["c7 a2", "&#x1E2;"],
	["c7 a3", "&#x1E3;"],
	["c7 a4", "&#x1E4;"],
	["c7 a5", "&#x1E5;"],
	["c7 a6", "&#x1E6;"],
	["c7 a7", "&#x1E7;"],
	["c7 a8", "&#x1E8;"],
	["c7 a9", "&#x1E9;"],
	["c7 aa", "&#x1EA;"],
	["c7 ab", "&#x1EB;"],
	["c7 ac", "&#x1EC;"],
	["c7 ad", "&#x1ED;"],
	["c7 ae", "&#x1EE;"],
	["c7 af", "&#x1EF;"],
	["c7 b0", "&#x1F0;"],
	["c7 b1", "&#x1F1;"],
	["c7 b2", "&#x1F2;"],
	["c7 b3", "&#x1F3;"],
	["c7 b4", "&#x1F4;"],
	["c7 b5", "&#x1F5;"],
	["c7 b6", "&#x1F6;"],
	["c7 b7", "&#x1F7;"],
	["c7 b8", "&#x1F8;"],
	["c7 b9", "&#x1F9;"],
	["c7 ba", "&#x1FA;"],
	["c7 bb", "&#x1FB;"],
	["c7 bc", "&#x1FC;"],
	["c7 bd", "&#x1FD;"],
	["c7 be", "&#x1FE;"],
	["c7 bf", "&#x1FF;"],
];

function convertString(inputStr) {
	var output = "%" + inputStr.replace(" ", "%");
	return output;
}

function eliminateUrlEntities(searchTerm) {
	var output = searchTerm;
	if (output.indexOf("%") === -1) {
		return searchTerm;
	}
	var index = 0;
	while (index < output.length) {
		if (output.charAt(index) === "%") {
			for (var i = 0; i < conversions.length; i++) {
				var testStr = convertString(conversions[i][0]);
				if (output.indexOf(testStr) === index) {
					output = output.replace(testStr, conversions[i][1]);
					break;
				} else if (output.indexOf(testStr.toLowerCase()) === index) {
					output = output.replace(testStr.toLowerCase(), conversions[i][1]);
					break;
				} else if (output.indexOf(testStr.toUpperCase()) === index) {
					output = output.replace(testStr.toUpperCase(), conversions[i][1]);
					break;
				}
			}
		}
		index++;
	}
	return output;
}

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
		//console.log(bookData);
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
		if (authors !== "")
			html1 += " <small>&nbsp; - &nbsp;" + authors + "</small></h5>";

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
			//api response returned errors, so call modal window to display errors
			dispError("Error: There has been a problem with your fetch operation");
		});
}

var getmoredetails = function (searchTerm) {
	// format the github api url
	var omdbURL = "https://www.omdbapi.com/?s=" + searchTerm + "&apikey=a6a19b04";

	var getMovieCard = function (movieData) {
		//console.log(movieData);
		var m_imdbID = movieData.imdbID.trim();
		var m_Title = movieData.Title;
		var m_Year = movieData.Year;
		var m_Type = movieData.Type;
		var m_author = movieData.author;
		var m_poster = movieData.Poster;
		var divElem = $("<div>");
		divElem.addClass("column book-result");

		var html1 = "";
		if (m_poster == "N/A")
			html1 += "<img class='thumbnail1' src='./assets/images/nomovie.jpg' />";
		else html1 += "	<img class='thumbnail1' src='" + m_poster + "' />";
		//console.log(html1);

		html1 += "	<h5 class ='media-title'>" + m_Title + "</h5> " + "<span >";
		html1 += "						<p class='media-desc'> ";
		html1 += m_Year + " " + m_Type.charAt(0).toUpperCase() + m_Type.slice(1);
		html1 += "						</p>";
		html1 +=
			"<p ><a class='button   media-link' href='https://www.imdb.com/title/" +
			m_imdbID +
			"' target = '_blank'>IMDB Page</a></p>";
		divElem.html(html1);

		return divElem;
	};

	fetch(omdbURL)
		.then(function (response) {
			// request was successful
			if (response.ok) {
				//console.log("movies response" + omdbURL);
				//console.log(response);
				return response.json();
			} else {
				//call modal window to display conectivity error
				dispError("Error: Unable to connect to http://www.omdbapi.com/");
			}
		})
		.then(function (data) {
			//console.log("movies data");
			//console.log(data);
			if (data.Response !== "False") {
				for (var i = 0; i < data.Search.length; i++) {
					var nextCard = getMovieCard(data.Search[i]);
					$(".videoContainer").append(nextCard);
				}
			} else {
				var noticeDiv = $("<div>");
				var noticeHeader = $("<h3>");
				noticeHeader.text(
					"Sorry.  There were no visual media hits for your search."
				);
				noticeDiv.append(noticeHeader);
				$(".videoContainer").append(noticeDiv);
			}
			//	$("#panel1").append(tabsContentDiv);
		})
		.catch(function (error) {
			//api response returned errors, so call modal window to display errors
			dispError(
				"Error: There has been a problem with your movie fetch operation"
			);
		});
};

var getSearchData = function () {
	//This will return the query substring that we will then use for the next search
	var queryString = document.location.search.split("=")[1];
	if (queryString) {
		queryString = replacePluses(queryString);
		secondTitle.innerHTML = "";
		secondTitle.innerHTML = titlize(eliminateUrlEntities(queryString));
		//var details = getTabContainer();

		getmoredetails(queryString);
		getBooks(queryString);
	} else {
		document.location.replace("./index.html");
	}
};

getSearchData();
