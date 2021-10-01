
//Movie Search - searches using the key are limited to 1000 per day

var omdbKey = "a6a19b04";
var omdbURL = "http://www.omdbapi.com/?";
//Search by either i or t
//Required parameters: one of i = imdb ID or t = movie title must be included in search
//Optional parameters: type=[movie,series,episode], y = year of release as number, plot=[short (default),full]

//Search by s
//Required parameter: s = title to search for -> this seems similar to the t option above
//Same optional parameters as above

//Example search result using http://www.omdbapi.com/?t=tom+sawyer&apikey=a6a19b04
var tomSawyer = {"Title":"Tom Sawyer","Year":"1973","Rated":"G","Released":"15 Mar 1973","Runtime":"103 min","Genre":"Adventure, Musical, Family","Director":"Don Taylor","Writer":"Mark Twain, Robert B. Sherman, Richard M. Sherman","Actors":"Johnny Whitaker, Celeste Holm, Warren Oates","Plot":"Tom Sawyer and Huckleberry Finn investigate a suspicious graveyard murder and more in this musical version of Mark Twain's novel.","Language":"English","Country":"United States","Awards":"Nominated for 3 Oscars. 5 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BY2E1MWIyMTMtNzQ3MS00YWEyLWE3YWUtNmRlNDU0MDEyNGEzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"}],"Metascore":"N/A","imdbRating":"6.5","imdbVotes":"2,158","imdbID":"tt0070814","Type":"movie","DVD":"02 Sep 2003","BoxOffice":"N/A","Production":"APJAC Productions","Website":"N/A","Response":"True"};


//Literature Search

var authorURL = "https://openlibrary.org/search/authors.json?q="; // + author name
var searchURL = "http://openlibrary.org/search.json?q="; // + topic search string

//Example search result using https://openlibrary.org/search/authors.json?q=mark+twain
var markTwain = {"numFound": 16, "start": 0, "numFoundExact": true, "docs": [{"key": "OL18319A", "text": ["/authors/OL18319A", "Mark Twain", "M. Twain", "Twain", "Twain, Mark (pseud)", "Twain, Mark, 1835-1910", "Mark (Samuel L. Clemens) Twain", "Samuel Langhorne Clemens (Mark Twain)", "Samuel Langhorne Clemens", "Ma\u0304ku Tuein", "Samuel Clemens", "Samuel Langhorne CLEMENS", "Sameul Langhorne Clemens", "Twain                        M", "M Twain", "Marc Twain", "mark Twain", "mark-twain", "Samuel L. Clemens", "Mark twain", "Louis Conte", "Louis de Conte", "Tu wen (Twain, Mark)", "TWAIN,MARK", "(mei) Ma, ke tu wen (Mark Twain", "Twain Mark", "Mark TWAIN", "Twain - Mark Twain", "Tuwen Make", "Clemens Samuel", "Samuel  L Clemens", "Ma ke tu wen", "Make Tuwen", "(mei) Tuwen, Make", "Ma ke \u2117\u02ba tu wen", "MakeTuwen", "Ma ke \u00b7 tu wen", "Make.Tuwen", "twain mark", "MARK TWAIN"], "type": "author", "name": "Mark Twain", "alternate_names": ["M. Twain", "Twain", "Twain, Mark (pseud)", "Twain, Mark, 1835-1910", "Mark (Samuel L. Clemens) Twain", "Samuel Langhorne Clemens (Mark Twain)", "Samuel Langhorne Clemens", "Ma\u0304ku Tuein", "Samuel Clemens", "Samuel Langhorne CLEMENS", "Sameul Langhorne Clemens", "Twain                        M", "M Twain", "Marc Twain", "mark Twain", "mark-twain", "Samuel L. Clemens", "Mark twain", "Louis Conte", "Louis de Conte", "Tu wen (Twain, Mark)", "TWAIN,MARK", "(mei) Ma, ke tu wen (Mark Twain", "Twain Mark", "Mark TWAIN", "Twain - Mark Twain", "Tuwen Make", "Clemens Samuel", "Samuel  L Clemens", "Ma ke tu wen", "Make Tuwen", "(mei) Tuwen, Make", "Ma ke \u2117\u02ba tu wen", "MakeTuwen", "Ma ke \u00b7 tu wen", "Make.Tuwen", "twain mark", "MARK TWAIN"], "birth_date": "30 November 1835", "death_date": "21 April 1910", "date": "1835~1910", "top_work": "Adventures of Huckleberry Finn", "work_count": 1328, "top_subjects": ["Accessible book", "Protected DAISY", "Fiction", "19th century", "Mark Twain (1835-1910)", "Social life and customs", "American Humorous stories", "United States", "Twain, mark, 1835-1910", "History"], "_version_": 1712084163035660307}, {"key": "OL8131880A", "text": ["/authors/OL8131880A", "Mark Twain Media Staff"], "type": "author", "name": "Mark Twain Media Staff", "top_work": "Easy Science Experiments, Grades 4 - 6+", "work_count": 12, "top_subjects": ["Science, study and teaching", "Mathematics, study and teaching"], "_version_": 1700778068010860548}, {"key": "OL3093616A", "text": ["/authors/OL3093616A", "Mark Twain Media"], "type": "author", "name": "Mark Twain Media", "top_work": "Periodic Table of the Elements Bulletin Board Set", "work_count": 8, "_version_": 1700756794729562117}, {"key": "OL7080326A", "text": ["/authors/OL7080326A", "Mark Twain House & Museum"], "type": "author", "name": "Mark Twain House & Museum", "top_work": "A. L. Coburn's men of mark", "work_count": 2, "top_subjects": ["Mark Twain (1835-1910)", "Exhibitions", "Portraits", "Portrait photography", "History", "Costume", "Clothing and dress in literature", "Clothing", "Authors", "Artists"], "_version_": 1700774022485114886}, {"key": "OL5989278A", "text": ["/authors/OL5989278A", "Roy J. Friedman Mark Twain Collection (Library of Congress)"], "type": "author", "name": "Roy J. Friedman Mark Twain Collection (Library of Congress)", "top_work": "Mark Twain's 70th birthday", "work_count": 2, "top_subjects": ["Women", "United States", "Massachusetts", "Mark Twain (1835-1910)", "Intellectual life", "Friendship", "Friends and associates", "Diaries", "Charles Dickens (1812-1870)", "Boston (Mass.)"], "_version_": 1700769352628830216}, {"key": "OL2417275A", "text": ["/authors/OL2417275A", "Mark Twain Davis"], "type": "author", "name": "Mark Twain Davis", "top_work": "Michigan procedure and practice before Circut court commissioners", "work_count": 1, "top_subjects": ["Summary proceedings", "Michigan. Circuit Court Commissioners", "Michigan", "Michigan", "Landlord and tenant", "Forms (Law)", "Building laws"], "_version_": 1700754135343693828}, {"key": "OL2936079A", "text": ["/authors/OL2936079A", "Mark Not Twain"], "type": "author", "name": "Mark Not Twain", "top_work": "Totally Outrageous Bumper-Snickers", "work_count": 1, "top_subjects": ["Humor", "General"], "_version_": 1700756064538984449}, {"key": "OL2165581A", "text": ["/authors/OL2165581A", "Mark Twain Library and Memorial Commission, Hartford."], "type": "author", "name": "Mark Twain Library and Memorial Commission, Hartford.", "top_work": "Mark Twain in Hartford", "work_count": 1, "top_subjects": ["Mark Twain (1835-1910)", "Intellectual life", "Homes and haunts", "Hartford (Conn.)", "Hartford", "Connecticut"], "_version_": 1700753060327849984}, {"key": "OL2261144A", "text": ["/authors/OL2261144A", "Mark Twain Nadir"], "type": "author", "name": "Mark Twain Nadir", "birth_date": "1913", "top_work": "A compilation of analog transducers", "work_count": 1, "top_subjects": ["Transducers"], "_version_": 1700753502557437958}, {"key": "OL2313131A", "text": ["/authors/OL2313131A", "International Mark Twain Society."], "type": "author", "name": "International Mark Twain Society.", "top_work": "The International Mark Twain society", "work_count": 1, "_version_": 1700753762126135308}, {"key": "OL8328366A", "text": ["/authors/OL8328366A", "Mark Twain Media Editors"], "type": "author", "name": "Mark Twain Media Editors", "top_work": "100+ Science Experiments for School and Home, Grades 5 - 8", "work_count": 1, "_version_": 1700778703569551365}, {"key": "OL7631501A", "text": ["/authors/OL7631501A", "Mark Twain National Forest (Agency : U.S.)"], "type": "author", "name": "Mark Twain National Forest (Agency : U.S.)", "top_work": "News bulletin", "work_count": 1, "top_subjects": ["Society of American Foresters. Ozark Section", "Society of American Foresters", "Mark Twain National Forest (Mo.)", "Accessible book"], "_version_": 1700775948586057728}, {"key": "OL3635456A", "text": ["/authors/OL3635456A", "Libretto by Jean Karsavina; After story by Mark Twain; Lucas Foss"], "type": "author", "name": "Libretto by Jean Karsavina; After story by Mark Twain; Lucas Foss", "top_work": "The Jumping Frog of Calaveras County - Vocal Score", "work_count": 1, "_version_": 1700759215690219527}, {"key": "OL9099698A", "text": ["/authors/OL9099698A", "Roy J Friedman Mark Twain Collection"], "type": "author", "name": "Roy J Friedman Mark Twain Collection", "top_work": "Extracts from Adam's Diary", "work_count": 1, "_version_": 1700781894712426505}, {"key": "OL7772060A", "text": ["/authors/OL7772060A", "Bubba His X Mark Twain"], "type": "author", "name": "Bubba His X Mark Twain", "top_work": "The Story of Our Life, based on a True Life.", "work_count": 1, "_version_": 1700776683632590848}, {"key": "OL9158406A", "text": ["/authors/OL9158406A", "Mark Twain, Hulya Ulusan Kecel, Emine Seda Caglayan, Kemal Yargici, Julia Goggin"], "type": "author", "name": "Mark Twain, Hulya Ulusan Kecel, Emine Seda Caglayan, Kemal Yargici, Julia Goggin", "top_work": "Robinson Crusoe - Stage 3", "work_count": 1, "_version_": 1700782410130522115}]};

//Example search result using https://openlibrary.org/search.json?q=y2k%20bug -> I input y2k bug and the program automatically replaced the spaces with %20.  If we wanted to replace spaces with %20 or +, both would work.  The search appears to work whether we do so or not
var y2k = {
    "numFound": 39,
    "start": 0,
    "numFoundExact": true,
    "docs": [
        {
            "key": "/works/OL9889282W",
            "text": [
                "/works/OL9889282W",
                "Y2K Bug",
                "The Prelude",
                "OL12314116M",
                "1585001767",
                "9781585001767",
                "1st Books Library",
                "OL3871529A",
                "Robert D. Buss"
            ],
            "type": "work",
            "seed": [
                "/books/OL12314116M",
                "/works/OL9889282W",
                "/authors/OL3871529A"
            ],
            "title": "Y2K Bug",
            "title_suggest": "Y2K Bug",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL12314116M"
            ],
            "publish_date": [
                "October 19, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "1585001767",
                "9781585001767"
            ],
            "last_modified_i": 1272449576,
            "ebook_count_i": 0,
            "cover_edition_key": "OL12314116M",
            "cover_i": 2940186,
            "publisher": [
                "1st Books Library"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3871529A"
            ],
            "author_name": [
                "Robert D. Buss"
            ],
            "publisher_facet": [
                "1st Books Library"
            ],
            "_version_": 1700721964225658880,
            "author_facet": [
                "OL3871529A Robert D. Buss"
            ]
        },
        {
            "key": "/works/OL8661315W",
            "text": [
                "/works/OL8661315W",
                "Compuware's Y2K bug",
                "Compuware's Y2K bug.",
                "OL18427228M",
                "OL2922534A",
                "Miller Miller"
            ],
            "type": "work",
            "seed": [
                "/books/OL18427228M",
                "/works/OL8661315W",
                "/authors/OL2922534A"
            ],
            "title": "Compuware's Y2K bug",
            "title_suggest": "Compuware's Y2K bug",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL18427228M"
            ],
            "last_modified_i": 1260855471,
            "ebook_count_i": 0,
            "language": [
                "eng"
            ],
            "author_key": [
                "OL2922534A"
            ],
            "author_name": [
                "Miller Miller"
            ],
            "_version_": 1700720430433697795,
            "author_facet": [
                "OL2922534A Miller Miller"
            ]
        },
        {
            "key": "/works/OL15165029W",
            "text": [
                "/works/OL15165029W",
                "The Y2K bug",
                "a novel",
                "Year two thousand bug",
                "OL385050M",
                "Frank Simon.",
                "98047666",
                "40142990",
                "9780805418958",
                "0805418954",
                "y2kbugnovel00simo",
                "Broadman & Holman",
                "OL28774A",
                "Simon, Frank",
                "Year 2000 date conversion (Computer systems)",
                "Fiction",
                "Accessible book",
                "Protected DAISY"
            ],
            "type": "work",
            "seed": [
                "/books/OL385050M",
                "/works/OL15165029W",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/fiction",
                "/authors/OL28774A"
            ],
            "title": "The Y2K bug",
            "title_suggest": "The Y2K bug",
            "subtitle": "a novel",
            "has_fulltext": true,
            "edition_count": 1,
            "edition_key": [
                "OL385050M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "lccn": [
                "98047666"
            ],
            "publish_place": [
                "Nashville, Tenn"
            ],
            "oclc": [
                "40142990"
            ],
            "lcc": [
                "PS-3569.00000000.I4816 Y3 1999"
            ],
            "ddc": [
                "813.54"
            ],
            "isbn": [
                "9780805418958",
                "0805418954"
            ],
            "last_modified_i": 1606591902,
            "ebook_count_i": 1,
            "ia": [
                "y2kbugnovel00simo"
            ],
            "public_scan_b": false,
            "ia_collection_s": "americana;internetarchivebooks;inlibrary;printdisabled;fav-clickheredownloadnow",
            "lending_edition_s": "OL385050M",
            "lending_identifier_s": "y2kbugnovel00simo",
            "printdisabled_s": "OL385050M",
            "cover_edition_key": "OL385050M",
            "cover_i": 582456,
            "publisher": [
                "Broadman & Holman"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL28774A"
            ],
            "author_name": [
                "Simon, Frank"
            ],
            "subject": [
                "Year 2000 date conversion (Computer systems)",
                "Fiction",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "1112507"
            ],
            "id_librarything": [
                "2427459"
            ],
            "ia_box_id": [
                "IA111501"
            ],
            "publisher_facet": [
                "Broadman & Holman"
            ],
            "subject_facet": [
                "Accessible book",
                "Fiction",
                "Protected DAISY",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700699547258322946,
            "lcc_sort": "PS-3569.00000000.I4816 Y3 1999",
            "author_facet": [
                "OL28774A Simon, Frank"
            ],
            "subject_key": [
                "accessible_book",
                "fiction",
                "protected_daisy",
                "year_2000_date_conversion_(computer_systems)"
            ],
            "ddc_sort": "813.54"
        },
        {
            "key": "/works/OL9455285W",
            "text": [
                "/works/OL9455285W",
                "Y2k-the Millennium Bug",
                "OL10658567M",
                "9780739401989",
                "073940198X",
                "Multnomah Pub",
                "OL3481772A",
                "shaunti feldhahn"
            ],
            "type": "work",
            "seed": [
                "/books/OL10658567M",
                "/works/OL9455285W",
                "/authors/OL3481772A"
            ],
            "title": "Y2k-the Millennium Bug",
            "title_suggest": "Y2k-the Millennium Bug",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL10658567M"
            ],
            "publish_date": [
                "1998"
            ],
            "publish_year": [
                1998
            ],
            "first_publish_year": 1998,
            "isbn": [
                "9780739401989",
                "073940198X"
            ],
            "last_modified_i": 1282015880,
            "ebook_count_i": 0,
            "publisher": [
                "Multnomah Pub"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3481772A"
            ],
            "author_name": [
                "shaunti feldhahn"
            ],
            "id_goodreads": [
                "1965060"
            ],
            "id_librarything": [
                "725112"
            ],
            "publisher_facet": [
                "Multnomah Pub"
            ],
            "_version_": 1700721491910328320,
            "author_facet": [
                "OL3481772A shaunti feldhahn"
            ]
        },
        {
            "key": "/works/OL9736798W",
            "text": [
                "/works/OL9736798W",
                "Bust the Y2k Bug",
                "OL11745691M",
                "0967030803",
                "9780967030807",
                "Life Expressions",
                "OL3728071A",
                "Russell Sydney"
            ],
            "type": "work",
            "seed": [
                "/books/OL11745691M",
                "/works/OL9736798W",
                "/authors/OL3728071A"
            ],
            "title": "Bust the Y2k Bug",
            "title_suggest": "Bust the Y2k Bug",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11745691M"
            ],
            "publish_date": [
                "February 20, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "0967030803",
                "9780967030807"
            ],
            "last_modified_i": 1272449277,
            "ebook_count_i": 0,
            "cover_edition_key": "OL11745691M",
            "cover_i": 2705005,
            "publisher": [
                "Life Expressions"
            ],
            "author_key": [
                "OL3728071A"
            ],
            "author_name": [
                "Russell Sydney"
            ],
            "publisher_facet": [
                "Life Expressions"
            ],
            "_version_": 1700721816513806338,
            "author_facet": [
                "OL3728071A Russell Sydney"
            ]
        },
        {
            "key": "/works/OL11521410M",
            "text": [
                "/works/OL11521410M",
                "The Y2k Bug Shelftalker Set",
                "OL11521410M",
                "0840037791",
                "9780840037794",
                "B&H Publishing Group",
                "Promotional Items"
            ],
            "type": "work",
            "seed": [
                "/books/OL11521410M",
                "/works/OL11521410M",
                "/subjects/promotional_items"
            ],
            "title": "The Y2k Bug Shelftalker Set",
            "title_suggest": "The Y2k Bug Shelftalker Set",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11521410M"
            ],
            "publish_date": [
                "January 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "0840037791",
                "9780840037794"
            ],
            "last_modified_i": 1621432885,
            "ebook_count_i": 0,
            "publisher": [
                "B&H Publishing Group"
            ],
            "language": [
                "eng"
            ],
            "subject": [
                "Promotional Items"
            ],
            "publisher_facet": [
                "B&H Publishing Group"
            ],
            "subject_facet": [
                "Promotional Items"
            ],
            "_version_": 1700195611107655680,
            "subject_key": [
                "promotional_items"
            ]
        },
        {
            "key": "/works/OL15035499W",
            "text": [
                "/works/OL15035499W",
                "Y2K and medical devices: Screening for the Y2K bug",
                "joint hearing before the Subcommittees on Health and Environment and Oversight and Investigations ... Sixth Congress, first session, May 25, 1999",
                "Y2K and medical devices: Screening for the Y2K bug ",
                "OL7378503M",
                "0160586984",
                "9780160586989",
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "OL18485A",
                "United States",
                "US Government",
                "United States.",
                "Us Government",
                "US",
                "U.S. Government",
                "America",
                "USA",
                "United States",
                "US GOVERNMENT"
            ],
            "type": "work",
            "seed": [
                "/books/OL7378503M",
                "/works/OL15035499W",
                "/authors/OL18485A"
            ],
            "title": "Y2K and medical devices: Screening for the Y2K bug",
            "title_suggest": "Y2K and medical devices: Screening for the Y2K bug",
            "subtitle": "joint hearing before the Subcommittees on Health and Environment and Oversight and Investigations ... Sixth Congress, first session, May 25, 1999",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL7378503M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "0160586984",
                "9780160586989"
            ],
            "last_modified_i": 1280854809,
            "ebook_count_i": 0,
            "cover_edition_key": "OL7378503M",
            "cover_i": 5380074,
            "publisher": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL18485A"
            ],
            "author_name": [
                "United States"
            ],
            "author_alternative_name": [
                "US Government",
                "United States.",
                "Us Government",
                "US",
                "U.S. Government",
                "America",
                "USA",
                "United States",
                "US GOVERNMENT"
            ],
            "publisher_facet": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office"
            ],
            "_version_": 1700699368000061442,
            "author_facet": [
                "OL18485A United States"
            ]
        },
        {
            "key": "/works/OL15035500W",
            "text": [
                "/works/OL15035500W",
                "Y2K and medical devices: Testing for the Y2K bug",
                "joint hearing before the Subcommittee on Health and Environment and the Subcommittee on Oversight and ... Congress, first session, October 21, 1999",
                "Y2K and medical devices: Testing for the Y2K bug ",
                "OL7378900M",
                "0160597951",
                "9780160597954",
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "OL18485A",
                "United States",
                "US Government",
                "United States.",
                "Us Government",
                "US",
                "U.S. Government",
                "America",
                "USA",
                "United States",
                "US GOVERNMENT"
            ],
            "type": "work",
            "seed": [
                "/books/OL7378900M",
                "/works/OL15035500W",
                "/authors/OL18485A"
            ],
            "title": "Y2K and medical devices: Testing for the Y2K bug",
            "title_suggest": "Y2K and medical devices: Testing for the Y2K bug",
            "subtitle": "joint hearing before the Subcommittee on Health and Environment and the Subcommittee on Oversight and ... Congress, first session, October 21, 1999",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL7378900M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "0160597951",
                "9780160597954"
            ],
            "last_modified_i": 1280854810,
            "ebook_count_i": 0,
            "cover_edition_key": "OL7378900M",
            "cover_i": 4597725,
            "publisher": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL18485A"
            ],
            "author_name": [
                "United States"
            ],
            "author_alternative_name": [
                "US Government",
                "United States.",
                "Us Government",
                "US",
                "U.S. Government",
                "America",
                "USA",
                "United States",
                "US GOVERNMENT"
            ],
            "publisher_facet": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office"
            ],
            "_version_": 1700699368097579010,
            "author_facet": [
                "OL18485A United States"
            ]
        },
        {
            "key": "/works/OL8579018W",
            "text": [
                "/works/OL8579018W",
                "Y2K",
                "The Millenium Bug",
                "The Millennium Bug-Resource Guide",
                "The Millennium Bug-Youth Edition",
                "The Millennium Bug-A Balanced Christian Response",
                "OL8748167M",
                "OL8748204M",
                "OL8748205M",
                "OL8748203M",
                "99017578",
                "99017569",
                "39746763",
                "41884075",
                "40862060",
                "40783872",
                "1576735869",
                "9781576735855",
                "1576734706",
                "1576735850",
                "9781576734704",
                "1576735826",
                "9781576735824",
                "9781576735862",
                "y2kmillenniumbug00feldrich",
                "Multnomah",
                "OL2879919A",
                "Shaunti Feldhahn",
                "United States",
                "Year 2000 date conversion (Computer systems)",
                "Juvenile fiction",
                "Christian life",
                "Christianity",
                "Computers",
                "Fiction",
                "Miscellanea",
                "Crisis management",
                "Accessible book",
                "Protected DAISY"
            ],
            "type": "work",
            "seed": [
                "/books/OL8748167M",
                "/books/OL8748204M",
                "/books/OL8748205M",
                "/books/OL8748203M",
                "/works/OL8579018W",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/juvenile_fiction",
                "/subjects/christian_life",
                "/subjects/christianity",
                "/subjects/computers",
                "/subjects/fiction",
                "/subjects/miscellanea",
                "/subjects/crisis_management",
                "/subjects/place:united_states",
                "/authors/OL2879919A"
            ],
            "title": "Y2K",
            "title_suggest": "Y2K",
            "has_fulltext": true,
            "edition_count": 4,
            "edition_key": [
                "OL8748167M",
                "OL8748204M",
                "OL8748205M",
                "OL8748203M"
            ],
            "publish_date": [
                "March 1, 1999",
                "November 1, 1998",
                "January 1, 1999"
            ],
            "publish_year": [
                1999,
                1998
            ],
            "first_publish_year": 1998,
            "lccn": [
                "99017578",
                "99017569"
            ],
            "oclc": [
                "39746763",
                "41884075",
                "40862060",
                "40783872"
            ],
            "lcc": [
                "BR-0115.00000000.Y43 F45 1999",
                "PZ-0007.00000000.F33573 Yt 1999"
            ],
            "isbn": [
                "1576735869",
                "9781576735855",
                "1576734706",
                "1576735850",
                "9781576734704",
                "1576735826",
                "9781576735824",
                "9781576735862"
            ],
            "last_modified_i": 1606735082,
            "ebook_count_i": 1,
            "ia": [
                "y2kmillenniumbug00feldrich"
            ],
            "public_scan_b": false,
            "ia_collection_s": "americana;inlibrary;fav-witchesdiner;printdisabled;internetarchivebooks",
            "lending_edition_s": "OL8748167M",
            "lending_identifier_s": "y2kmillenniumbug00feldrich",
            "printdisabled_s": "OL8748167M",
            "cover_edition_key": "OL8748203M",
            "cover_i": 830851,
            "publisher": [
                "Multnomah"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL2879919A"
            ],
            "author_name": [
                "Shaunti Feldhahn"
            ],
            "place": [
                "United States"
            ],
            "subject": [
                "Year 2000 date conversion (Computer systems)",
                "Juvenile fiction",
                "Christian life",
                "Christianity",
                "Computers",
                "Fiction",
                "Miscellanea",
                "Crisis management",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "2800830",
                "1753885",
                "1965061",
                "2800832"
            ],
            "id_librarything": [
                "3377884",
                "725112"
            ],
            "ia_box_id": [
                "IA105506"
            ],
            "publisher_facet": [
                "Multnomah"
            ],
            "place_key": [
                "united_states"
            ],
            "subject_facet": [
                "Accessible book",
                "Christian life",
                "Christianity",
                "Computers",
                "Crisis management",
                "Fiction",
                "Juvenile fiction",
                "Miscellanea",
                "Protected DAISY",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700720302093238274,
            "place_facet": [
                "United States"
            ],
            "lcc_sort": "PZ-0007.00000000.F33573 Yt 1999",
            "author_facet": [
                "OL2879919A Shaunti Feldhahn"
            ],
            "subject_key": [
                "accessible_book",
                "christian_life",
                "christianity",
                "computers",
                "crisis_management",
                "fiction",
                "juvenile_fiction",
                "miscellanea",
                "protected_daisy",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL2039455W",
            "text": [
                "/works/OL2039455W",
                "Y2K",
                "The Millennium Bug",
                "the millenium bug",
                "OL7911768M",
                "OL398599M",
                "Don L. Tiggre.",
                "98087822",
                "41131300",
                "0738801178",
                "9780738801179",
                "9780738801186",
                "0738801186",
                "Xlibris Corp.",
                "Xlibris Corporation",
                "OL246946A",
                "OL2811127A",
                "Don L. Tiggre",
                "Don Tiggre",
                "Modern fiction",
                "Thrillers",
                "Fiction - General",
                "Fiction",
                "General",
                "Thriller",
                "Adventure"
            ],
            "type": "work",
            "seed": [
                "/books/OL7911768M",
                "/books/OL398599M",
                "/works/OL2039455W",
                "/subjects/modern_fiction",
                "/subjects/thrillers",
                "/subjects/fiction_-_general",
                "/subjects/fiction",
                "/subjects/general",
                "/subjects/thriller",
                "/subjects/adventure",
                "/authors/OL246946A",
                "/authors/OL2811127A"
            ],
            "title": "Y2K",
            "title_suggest": "Y2K",
            "has_fulltext": false,
            "edition_count": 2,
            "edition_key": [
                "OL7911768M",
                "OL398599M"
            ],
            "publish_date": [
                "August 1998",
                "1998"
            ],
            "publish_year": [
                1998
            ],
            "first_publish_year": 1998,
            "lccn": [
                "98087822"
            ],
            "publish_place": [
                "Princeton, NJ"
            ],
            "oclc": [
                "41131300"
            ],
            "lcc": [
                "PS-3570.00000000.I338 Y15 1998"
            ],
            "ddc": [
                "813.54"
            ],
            "isbn": [
                "0738801178",
                "9780738801179",
                "9780738801186",
                "0738801186"
            ],
            "last_modified_i": 1606602511,
            "ebook_count_i": 0,
            "cover_edition_key": "OL398599M",
            "cover_i": 1373918,
            "publisher": [
                "Xlibris Corp.",
                "Xlibris Corporation"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL246946A",
                "OL2811127A"
            ],
            "author_name": [
                "Don L. Tiggre",
                "Don Tiggre"
            ],
            "subject": [
                "Modern fiction",
                "Thrillers",
                "Fiction - General",
                "Fiction",
                "General",
                "Thriller",
                "Adventure"
            ],
            "id_goodreads": [
                "3519518"
            ],
            "id_librarything": [
                "5295571"
            ],
            "publisher_facet": [
                "Xlibris Corp.",
                "Xlibris Corporation"
            ],
            "subject_facet": [
                "Adventure",
                "Fiction",
                "Fiction - General",
                "General",
                "Modern fiction",
                "Thriller",
                "Thrillers"
            ],
            "_version_": 1700707073264713729,
            "lcc_sort": "PS-3570.00000000.I338 Y15 1998",
            "author_facet": [
                "OL246946A Don L. Tiggre",
                "OL2811127A Don Tiggre"
            ],
            "subject_key": [
                "adventure",
                "fiction",
                "fiction_-_general",
                "general",
                "modern_fiction",
                "thriller",
                "thrillers"
            ],
            "ddc_sort": "813.54"
        },
        {
            "key": "/works/OL15035505W",
            "text": [
                "/works/OL15035505W",
                "Y2K and the Medicare providers: Innoculating [sic] against the Y2K bug",
                "joint hearing before the Subcommittee on Health and Environment and the Subcommittee ... Congress, first session, April 27, 1999",
                "Y2K and the Medicare providers: Innoculating [sic] against the Y2K bug ",
                "OL7378477M",
                "0160586607",
                "9780160586606",
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "OL18485A",
                "United States",
                "US Government",
                "United States.",
                "Us Government",
                "US",
                "U.S. Government",
                "America",
                "USA",
                "United States",
                "US GOVERNMENT"
            ],
            "type": "work",
            "seed": [
                "/books/OL7378477M",
                "/works/OL15035505W",
                "/authors/OL18485A"
            ],
            "title": "Y2K and the Medicare providers: Innoculating [sic] against the Y2K bug",
            "title_suggest": "Y2K and the Medicare providers: Innoculating [sic] against the Y2K bug",
            "subtitle": "joint hearing before the Subcommittee on Health and Environment and the Subcommittee ... Congress, first session, April 27, 1999",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL7378477M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "0160586607",
                "9780160586606"
            ],
            "last_modified_i": 1280854812,
            "ebook_count_i": 0,
            "cover_edition_key": "OL7378477M",
            "cover_i": 4600172,
            "publisher": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL18485A"
            ],
            "author_name": [
                "United States"
            ],
            "author_alternative_name": [
                "US Government",
                "United States.",
                "Us Government",
                "US",
                "U.S. Government",
                "America",
                "USA",
                "United States",
                "US GOVERNMENT"
            ],
            "publisher_facet": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office"
            ],
            "_version_": 1700699368061927424,
            "author_facet": [
                "OL18485A United States"
            ]
        },
        {
            "key": "/works/OL8420807W",
            "text": [
                "/works/OL8420807W",
                "Y2K",
                "The Millennium Bug",
                "OL7911769M",
                "41131300",
                "9780738801186",
                "0738801186",
                "Xlibris Corporation",
                "OL2811127A",
                "Don Tiggre"
            ],
            "type": "work",
            "seed": [
                "/books/OL7911769M",
                "/works/OL8420807W",
                "/authors/OL2811127A"
            ],
            "title": "Y2K",
            "title_suggest": "Y2K",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL7911769M"
            ],
            "publish_date": [
                "August 1998"
            ],
            "publish_year": [
                1998
            ],
            "first_publish_year": 1998,
            "oclc": [
                "41131300"
            ],
            "isbn": [
                "9780738801186",
                "0738801186"
            ],
            "last_modified_i": 1303869130,
            "ebook_count_i": 0,
            "cover_edition_key": "OL7911769M",
            "cover_i": 1373917,
            "publisher": [
                "Xlibris Corporation"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL2811127A"
            ],
            "author_name": [
                "Don Tiggre"
            ],
            "id_librarything": [
                "7618203"
            ],
            "publisher_facet": [
                "Xlibris Corporation"
            ],
            "_version_": 1700720189212983298,
            "author_facet": [
                "OL2811127A Don Tiggre"
            ]
        },
        {
            "key": "/works/OL459051W",
            "text": [
                "/works/OL459051W",
                "Y2K",
                "The Millennium Bug",
                "OL41231M",
                "OL10951371M",
                "by Jeff Savage.",
                "99032849",
                "9780739813775",
                "9780613226615",
                "0613226615",
                "0739813773",
                "y2k0000sava",
                "Raintree Steck-Vaughn",
                "Tandem Library",
                "OL26859A",
                "Jeff Savage",
                "Year 2000 date conversion (Computer systems)",
                "Juvenile literature",
                "Accessible book",
                "Protected DAISY"
            ],
            "type": "work",
            "seed": [
                "/books/OL41231M",
                "/books/OL10951371M",
                "/works/OL459051W",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/juvenile_literature",
                "/authors/OL26859A"
            ],
            "title": "Y2K",
            "title_suggest": "Y2K",
            "subtitle": "The Millennium Bug",
            "has_fulltext": true,
            "edition_count": 2,
            "edition_key": [
                "OL41231M",
                "OL10951371M"
            ],
            "publish_date": [
                "1999",
                "March 2001"
            ],
            "publish_year": [
                1999,
                2001
            ],
            "first_publish_year": 1999,
            "lccn": [
                "99032849"
            ],
            "publish_place": [
                "Austin, Tex"
            ],
            "lcc": [
                "QA-0076.76000000.S64 S28 1999"
            ],
            "ddc": [
                "005.16"
            ],
            "isbn": [
                "9780739813775",
                "9780613226615",
                "0613226615",
                "0739813773"
            ],
            "last_modified_i": 1573846470,
            "ebook_count_i": 1,
            "ia": [
                "y2k0000sava"
            ],
            "public_scan_b": false,
            "ia_collection_s": "inlibrary;bpljordan-ol;internetarchivebooks;fav-eskro;printdisabled",
            "lending_edition_s": "OL41231M",
            "lending_identifier_s": "y2k0000sava",
            "printdisabled_s": "OL41231M",
            "cover_edition_key": "OL41231M",
            "cover_i": 3698050,
            "publisher": [
                "Raintree Steck-Vaughn",
                "Tandem Library"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL26859A"
            ],
            "author_name": [
                "Jeff Savage"
            ],
            "subject": [
                "Year 2000 date conversion (Computer systems)",
                "Juvenile literature",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "3274067",
                "3185918"
            ],
            "ia_box_id": [
                "IA1694115"
            ],
            "publisher_facet": [
                "Raintree Steck-Vaughn",
                "Tandem Library"
            ],
            "subject_facet": [
                "Accessible book",
                "Juvenile literature",
                "Protected DAISY",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700746745468682240,
            "lcc_sort": "QA-0076.76000000.S64 S28 1999",
            "author_facet": [
                "OL26859A Jeff Savage"
            ],
            "subject_key": [
                "accessible_book",
                "juvenile_literature",
                "protected_daisy",
                "year_2000_date_conversion_(computer_systems)"
            ],
            "ddc_sort": "005.16"
        },
        {
            "key": "/works/OL1929432W",
            "text": [
                "/works/OL1929432W",
                "Y2K",
                "Year two thousand",
                "the millennium bug : a balanced Christian response",
                "El Error Fatal",
                "OL370156M",
                "OL11146181M",
                "Shaunti Christine Feldhahn.",
                "98030853",
                "41740848",
                "39746763",
                "9780789906205",
                "1576734706",
                "0789906201",
                "9781576734704",
                "y2kmillenniumbug00feldrich",
                "Multnomah Publishers",
                "Spanish House",
                "OL231382A",
                "Shaunti Christine Feldhahn",
                "United States",
                "Year 2000 date conversion (Computer systems)",
                "Accessible book",
                "Protected DAISY"
            ],
            "type": "work",
            "seed": [
                "/books/OL370156M",
                "/books/OL11146181M",
                "/works/OL1929432W",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/place:united_states",
                "/authors/OL231382A"
            ],
            "title": "Y2K",
            "title_suggest": "Y2K",
            "has_fulltext": true,
            "edition_count": 2,
            "edition_key": [
                "OL370156M",
                "OL11146181M"
            ],
            "publish_date": [
                "March 2000",
                "1998"
            ],
            "publish_year": [
                2000,
                1998
            ],
            "first_publish_year": 1998,
            "lccn": [
                "98030853"
            ],
            "publish_place": [
                "Sisters, Or"
            ],
            "oclc": [
                "41740848",
                "39746763"
            ],
            "lcc": [
                "QA-0076.76000000.S64 F46 1998"
            ],
            "ddc": [
                "005.16"
            ],
            "isbn": [
                "9780789906205",
                "1576734706",
                "0789906201",
                "9781576734704"
            ],
            "last_modified_i": 1606579995,
            "ebook_count_i": 1,
            "ia": [
                "y2kmillenniumbug00feldrich"
            ],
            "public_scan_b": false,
            "ia_collection_s": "americana;printdisabled;inlibrary;internetarchivebooks;fav-witchesdiner",
            "lending_edition_s": "OL370156M",
            "lending_identifier_s": "y2kmillenniumbug00feldrich",
            "printdisabled_s": "OL370156M",
            "cover_edition_key": "OL370156M",
            "cover_i": 830799,
            "publisher": [
                "Multnomah Publishers",
                "Spanish House"
            ],
            "language": [
                "spa",
                "eng"
            ],
            "author_key": [
                "OL231382A"
            ],
            "author_name": [
                "Shaunti Christine Feldhahn"
            ],
            "place": [
                "United States"
            ],
            "subject": [
                "Year 2000 date conversion (Computer systems)",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "2800832",
                "1169142"
            ],
            "id_librarything": [
                "725112"
            ],
            "ia_box_id": [
                "IA105506"
            ],
            "publisher_facet": [
                "Multnomah Publishers",
                "Spanish House"
            ],
            "place_key": [
                "united_states"
            ],
            "subject_facet": [
                "Accessible book",
                "Protected DAISY",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700705222424264706,
            "place_facet": [
                "United States"
            ],
            "lcc_sort": "QA-0076.76000000.S64 F46 1998",
            "author_facet": [
                "OL231382A Shaunti Christine Feldhahn"
            ],
            "subject_key": [
                "accessible_book",
                "protected_daisy",
                "year_2000_date_conversion_(computer_systems)"
            ],
            "ddc_sort": "005.16"
        },
        {
            "key": "/works/OL18282779M",
            "text": [
                "/works/OL18282779M",
                "Y2K",
                "Year two thousand.",
                "the morning after the Millenium before : a strategy for restarting operations safely if you've been bitten by the Millenium Bug.",
                "OL18282779M",
                "Great Britain. Health and Safety Executive.",
                "Health & Safety Executive"
            ],
            "type": "work",
            "seed": [
                "/books/OL18282779M",
                "/works/OL18282779M"
            ],
            "title": "Y2K",
            "title_suggest": "Y2K",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL18282779M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "publish_place": [
                "Sudbury"
            ],
            "contributor": [
                "Great Britain. Health and Safety Executive."
            ],
            "last_modified_i": 1621433777,
            "ebook_count_i": 0,
            "publisher": [
                "Health & Safety Executive"
            ],
            "language": [
                "eng"
            ],
            "publisher_facet": [
                "Health & Safety Executive"
            ],
            "_version_": 1700196545179156481
        },
        {
            "key": "/works/OL926949W",
            "text": [
                "/works/OL926949W",
                "Whitewash Y2K",
                "the millennium bug bible",
                "OL122670M",
                "J. Burton Anderson.",
                "99489977",
                "60826011",
                "1893257991",
                "9781893257993",
                "G.E.M. International",
                "Lion's Pride Pub.",
                "OL81790A",
                "J. Burton Anderson"
            ],
            "type": "work",
            "seed": [
                "/books/OL122670M",
                "/works/OL926949W",
                "/authors/OL81790A"
            ],
            "title": "Whitewash Y2K",
            "title_suggest": "Whitewash Y2K",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL122670M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "lccn": [
                "99489977"
            ],
            "publish_place": [
                "Amado, Ariz",
                "Tueson, Ariz"
            ],
            "oclc": [
                "60826011"
            ],
            "isbn": [
                "1893257991",
                "9781893257993"
            ],
            "last_modified_i": 1606921687,
            "ebook_count_i": 0,
            "publisher": [
                "G.E.M. International",
                "Lion's Pride Pub."
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL81790A"
            ],
            "author_name": [
                "J. Burton Anderson"
            ],
            "id_goodreads": [
                "2540192"
            ],
            "publisher_facet": [
                "G.E.M. International",
                "Lion's Pride Pub."
            ],
            "_version_": 1700721337846202370,
            "author_facet": [
                "OL81790A J. Burton Anderson"
            ]
        },
        {
            "key": "/works/OL9735293W",
            "text": [
                "/works/OL9735293W",
                "Panic Now!  The Y2K Millennium Bug Will Effect You!",
                "OL11742655M",
                "40772210",
                "Charles Bethancourt (Editor)",
                "9780966586800",
                "0966586808",
                "Wisdom Pub Inc",
                "OL3726460A",
                "Philip Steinman"
            ],
            "type": "work",
            "seed": [
                "/books/OL11742655M",
                "/works/OL9735293W",
                "/authors/OL3726460A"
            ],
            "title": "Panic Now!  The Y2K Millennium Bug Will Effect You!",
            "title_suggest": "Panic Now!  The Y2K Millennium Bug Will Effect You!",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11742655M"
            ],
            "publish_date": [
                "December 6, 1998"
            ],
            "publish_year": [
                1998
            ],
            "first_publish_year": 1998,
            "oclc": [
                "40772210"
            ],
            "contributor": [
                "Charles Bethancourt (Editor)"
            ],
            "isbn": [
                "9780966586800",
                "0966586808"
            ],
            "last_modified_i": 1304065520,
            "ebook_count_i": 0,
            "cover_edition_key": "OL11742655M",
            "cover_i": 5157778,
            "publisher": [
                "Wisdom Pub Inc"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3726460A"
            ],
            "author_name": [
                "Philip Steinman"
            ],
            "publisher_facet": [
                "Wisdom Pub Inc"
            ],
            "_version_": 1700721792934477825,
            "author_facet": [
                "OL3726460A Philip Steinman"
            ]
        },
        {
            "key": "/works/OL9206565W",
            "text": [
                "/works/OL9206565W",
                "How To Tame the Y2K Bug Before It Bites You",
                "OL11549156M",
                "42440935",
                "9780943973210",
                "094397321X",
                "Good Advice Press",
                "OL3270647A",
                "Marcy Ross"
            ],
            "type": "work",
            "seed": [
                "/books/OL11549156M",
                "/works/OL9206565W",
                "/authors/OL3270647A"
            ],
            "title": "How To Tame the Y2K Bug Before It Bites You",
            "title_suggest": "How To Tame the Y2K Bug Before It Bites You",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11549156M"
            ],
            "publish_date": [
                "May 20, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "42440935"
            ],
            "isbn": [
                "9780943973210",
                "094397321X"
            ],
            "last_modified_i": 1303830742,
            "ebook_count_i": 0,
            "publisher": [
                "Good Advice Press"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3270647A"
            ],
            "author_name": [
                "Marcy Ross"
            ],
            "id_goodreads": [
                "3394799"
            ],
            "publisher_facet": [
                "Good Advice Press"
            ],
            "_version_": 1700721260198100994,
            "author_facet": [
                "OL3270647A Marcy Ross"
            ]
        },
        {
            "key": "/works/OL626603W",
            "text": [
                "/works/OL626603W",
                "Y2K and medical devices",
                "testing for the Y2K bug : joint hearing before the Subcommittee on Health and Environment and the Subcommittee on Oversight and Investigations of the Committee on Commerce, House of Representatives, One Hundred Sixth Congress, first session, October 21, 1999.",
                "screening for the Y2K bug : joint hearing before the Subcommittees on Health and Environment and Oversight and Investigations of the Committee on Commerce, House of Representatives, One Hundred Sixth Congress, first session, May 25, 1999.",
                "OL6821162M",
                "OL17583860M",
                "OL17701621M",
                "OL122171M",
                "00300924",
                "99489088",
                "43272093",
                "42199790",
                "United States. Congress. House. Committee on Commerce. Subcommittee on Oversight and Investigations.",
                "0160586984",
                "0160597951",
                "9780160586989",
                "9780160597954",
                "y2kmedicaldevice00unit",
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O.",
                "OL48123A",
                "United States. Congress. House. Committee on Commerce. Subcommittee on Health and the Environment.",
                "United States",
                "Medical instruments and apparatus",
                "Year 2000 date conversion (Computer systems)",
                "Data processing",
                "Automation",
                "Accessible book"
            ],
            "type": "work",
            "seed": [
                "/books/OL6821162M",
                "/books/OL17583860M",
                "/books/OL17701621M",
                "/books/OL122171M",
                "/works/OL626603W",
                "/subjects/medical_instruments_and_apparatus",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/data_processing",
                "/subjects/automation",
                "/subjects/place:united_states",
                "/authors/OL48123A"
            ],
            "title": "Y2K and medical devices",
            "title_suggest": "Y2K and medical devices",
            "has_fulltext": true,
            "edition_count": 4,
            "edition_key": [
                "OL6821162M",
                "OL17583860M",
                "OL17701621M",
                "OL122171M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "lccn": [
                "00300924",
                "99489088"
            ],
            "publish_place": [
                "Washington"
            ],
            "oclc": [
                "43272093",
                "42199790"
            ],
            "contributor": [
                "United States. Congress. House. Committee on Commerce. Subcommittee on Oversight and Investigations."
            ],
            "lcc": [
                "KF-0027.00000000.E553 1999k",
                "KF-0027.00000000.E553 1999s"
            ],
            "isbn": [
                "0160586984",
                "0160597951",
                "9780160586989",
                "9780160597954"
            ],
            "last_modified_i": 1606921261,
            "ebook_count_i": 1,
            "ia": [
                "y2kmedicaldevice00unit"
            ],
            "public_scan_b": true,
            "ia_collection_s": "us-congress;americana;cmslibrary;medicalheritagelibrary;fedlink",
            "cover_edition_key": "OL17701621M",
            "cover_i": 5380076,
            "publisher": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O."
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL48123A"
            ],
            "author_name": [
                "United States. Congress. House. Committee on Commerce. Subcommittee on Health and the Environment."
            ],
            "place": [
                "United States"
            ],
            "subject": [
                "Medical instruments and apparatus",
                "Year 2000 date conversion (Computer systems)",
                "Data processing",
                "Automation",
                "Accessible book"
            ],
            "ia_box_id": [
                "38095000067914"
            ],
            "publisher_facet": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O."
            ],
            "place_key": [
                "united_states"
            ],
            "subject_facet": [
                "Accessible book",
                "Automation",
                "Data processing",
                "Medical instruments and apparatus",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700717271038558208,
            "place_facet": [
                "United States"
            ],
            "lcc_sort": "KF-0027.00000000.E553 1999k",
            "author_facet": [
                "OL48123A United States. Congress. House. Committee on Commerce. Subcommittee on Health and the Environment."
            ],
            "subject_key": [
                "accessible_book",
                "automation",
                "data_processing",
                "medical_instruments_and_apparatus",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL8942823W",
            "text": [
                "/works/OL8942823W",
                "WHY 2K? A Chronological Study of the (Y2K) Millennium Bug",
                "Why, when and how did Y2K become a critical issue for businesses?",
                "OL8782176M",
                "2001277265",
                "49001721",
                "1581127707",
                "9781581127706",
                "The Year 2000 (Y2K) computer problem is globally considered as one of this century's most critical issues so much so that the world community has joined forces to resolve the problem.",
                "Universal Publishers",
                "OL3094821A",
                "Edna Ferguson Reid",
                "Year 2000 date conversion (Computer systems)"
            ],
            "type": "work",
            "seed": [
                "/books/OL8782176M",
                "/works/OL8942823W",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/authors/OL3094821A"
            ],
            "title": "WHY 2K? A Chronological Study of the (Y2K) Millennium Bug",
            "title_suggest": "WHY 2K? A Chronological Study of the (Y2K) Millennium Bug",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL8782176M"
            ],
            "publish_date": [
                "December 30, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "lccn": [
                "2001277265"
            ],
            "oclc": [
                "49001721"
            ],
            "lcc": [
                "QA-0076.76000000.S64 R433 1999"
            ],
            "isbn": [
                "1581127707",
                "9781581127706"
            ],
            "last_modified_i": 1607086264,
            "ebook_count_i": 0,
            "cover_edition_key": "OL8782176M",
            "cover_i": 1941167,
            "first_sentence": [
                "The Year 2000 (Y2K) computer problem is globally considered as one of this century's most critical issues so much so that the world community has joined forces to resolve the problem."
            ],
            "publisher": [
                "Universal Publishers"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3094821A"
            ],
            "author_name": [
                "Edna Ferguson Reid"
            ],
            "subject": [
                "Year 2000 date conversion (Computer systems)"
            ],
            "publisher_facet": [
                "Universal Publishers"
            ],
            "subject_facet": [
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700720937345744896,
            "lcc_sort": "QA-0076.76000000.S64 R433 1999",
            "author_facet": [
                "OL3094821A Edna Ferguson Reid"
            ],
            "subject_key": [
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL11539682M",
            "text": [
                "/works/OL11539682M",
                "Stop the Y2K Madness",
                "OL11539682M",
                "Nancy M. Murray (Editor)",
                "9780940917040",
                "0940917041",
                "M F M Publishing",
                "OL2583591A",
                "OL656072A",
                "Robert Armstrong",
                "William J. Murray",
                "Christianity",
                "Current Affairs",
                "Millennium bug (Computer systems)",
                "Relgious aspects",
                "Self-fulfilling prophecy",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Religion / Christianity"
            ],
            "type": "work",
            "seed": [
                "/books/OL11539682M",
                "/works/OL11539682M",
                "/subjects/christianity",
                "/subjects/current_affairs",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/relgious_aspects",
                "/subjects/self-fulfilling_prophecy",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/religion_/_christianity",
                "/authors/OL2583591A",
                "/authors/OL656072A"
            ],
            "title": "Stop the Y2K Madness",
            "title_suggest": "Stop the Y2K Madness",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11539682M"
            ],
            "publish_date": [
                "June 1, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "contributor": [
                "Nancy M. Murray (Editor)"
            ],
            "isbn": [
                "9780940917040",
                "0940917041"
            ],
            "last_modified_i": 1621432882,
            "ebook_count_i": 0,
            "cover_edition_key": "OL11539682M",
            "cover_i": 2691020,
            "publisher": [
                "M F M Publishing"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL2583591A",
                "OL656072A"
            ],
            "author_name": [
                "Robert Armstrong",
                "William J. Murray"
            ],
            "subject": [
                "Christianity",
                "Current Affairs",
                "Millennium bug (Computer systems)",
                "Relgious aspects",
                "Self-fulfilling prophecy",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Religion / Christianity"
            ],
            "id_goodreads": [
                "2385205"
            ],
            "publisher_facet": [
                "M F M Publishing"
            ],
            "subject_facet": [
                "Christianity",
                "Current Affairs",
                "Millennium bug (Computer systems)",
                "Relgious aspects",
                "Religion / Christianity",
                "Self-fulfilling prophecy",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700195607405133825,
            "author_facet": [
                "OL2583591A Robert Armstrong",
                "OL656072A William J. Murray"
            ],
            "subject_key": [
                "christianity",
                "current_affairs",
                "millennium_bug_(computer_systems)",
                "relgious_aspects",
                "religion__christianity",
                "self-fulfilling_prophecy",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL11745346M",
            "text": [
                "/works/OL11745346M",
                "Y2K Security Guide and Checklist",
                "Avoid the hazards of the millenial computer bug",
                "OL11745346M",
                "42430325",
                "9780966981605",
                "096698160X",
                "Tj Books of Arizona",
                "General",
                "Handbooks & Manuals",
                "Self-Help"
            ],
            "type": "work",
            "seed": [
                "/books/OL11745346M",
                "/works/OL11745346M",
                "/subjects/general",
                "/subjects/handbooks_&_manuals",
                "/subjects/self-help"
            ],
            "title": "Y2K Security Guide and Checklist",
            "title_suggest": "Y2K Security Guide and Checklist",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11745346M"
            ],
            "publish_date": [
                "January 27, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "42430325"
            ],
            "isbn": [
                "9780966981605",
                "096698160X"
            ],
            "last_modified_i": 1621432924,
            "ebook_count_i": 0,
            "publisher": [
                "Tj Books of Arizona"
            ],
            "language": [
                "eng"
            ],
            "subject": [
                "General",
                "Handbooks & Manuals",
                "Self-Help"
            ],
            "publisher_facet": [
                "Tj Books of Arizona"
            ],
            "subject_facet": [
                "General",
                "Handbooks & Manuals",
                "Self-Help"
            ],
            "_version_": 1700195651311108096,
            "subject_key": [
                "general",
                "handbooks__manuals",
                "self-help"
            ]
        },
        {
            "key": "/works/OL8556316M",
            "text": [
                "/works/OL8556316M",
                "Noontide Night - A Y2K Novel",
                "OL8556316M",
                "43535320",
                "0967298407",
                "9780967298405",
                "Techsoft",
                "Fiction / Thrillers",
                "Fiction - General",
                "Fiction",
                "General",
                "Millennium bug (Computer systems)",
                "Science Fiction - High Tech",
                "Thrillers",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Fiction / Science Fiction / High Tech"
            ],
            "type": "work",
            "seed": [
                "/books/OL8556316M",
                "/works/OL8556316M",
                "/subjects/fiction_/_thrillers",
                "/subjects/fiction_-_general",
                "/subjects/fiction",
                "/subjects/general",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/science_fiction_-_high_tech",
                "/subjects/thrillers",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/fiction_/_science_fiction_/_high_tech"
            ],
            "title": "Noontide Night - A Y2K Novel",
            "title_suggest": "Noontide Night - A Y2K Novel",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL8556316M"
            ],
            "publish_date": [
                "June 15, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "43535320"
            ],
            "isbn": [
                "0967298407",
                "9780967298405"
            ],
            "last_modified_i": 1621434403,
            "ebook_count_i": 0,
            "cover_edition_key": "OL8556316M",
            "cover_i": 732790,
            "publisher": [
                "Techsoft"
            ],
            "language": [
                "eng"
            ],
            "subject": [
                "Fiction / Thrillers",
                "Fiction - General",
                "Fiction",
                "General",
                "Millennium bug (Computer systems)",
                "Science Fiction - High Tech",
                "Thrillers",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Fiction / Science Fiction / High Tech"
            ],
            "id_goodreads": [
                "2546086"
            ],
            "id_librarything": [
                "2294990"
            ],
            "publisher_facet": [
                "Techsoft"
            ],
            "subject_facet": [
                "Fiction",
                "Fiction - General",
                "Fiction / Science Fiction / High Tech",
                "Fiction / Thrillers",
                "General",
                "Millennium bug (Computer systems)",
                "Science Fiction - High Tech",
                "Thrillers",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700197201862459392,
            "subject_key": [
                "fiction",
                "fiction_-_general",
                "fiction__science_fiction__high_tech",
                "fiction__thrillers",
                "general",
                "millennium_bug_(computer_systems)",
                "science_fiction_-_high_tech",
                "thrillers",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL626589W",
            "text": [
                "/works/OL626589W",
                "Y2K and the Medicare providers",
                "innoculating [sic] against the Y2K bug : joint hearing before the Subcommittee on Health and Environment and the Subcommittee on Oversight and Investigations of the House of Representatives, One Hundred Sixth Congress, first session, April 27, 1999.",
                "OL122169M",
                "99489086",
                "42377701",
                "United States. Congress. House. Committee on Commerce. Subcommittee on Oversight and Investigations.",
                "9780160586606",
                "0160586607",
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O.",
                "OL48123A",
                "United States. Congress. House. Committee on Commerce. Subcommittee on Health and the Environment.",
                "United States",
                "Claims administration",
                "Year 2000 date conversion (Computer systems)",
                "Medicare",
                "Data processing",
                "Older people",
                "Medical care"
            ],
            "type": "work",
            "seed": [
                "/books/OL122169M",
                "/works/OL626589W",
                "/subjects/claims_administration",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/medicare",
                "/subjects/data_processing",
                "/subjects/older_people",
                "/subjects/medical_care",
                "/subjects/place:united_states",
                "/authors/OL48123A"
            ],
            "title": "Y2K and the Medicare providers",
            "title_suggest": "Y2K and the Medicare providers",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL122169M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "lccn": [
                "99489086"
            ],
            "publish_place": [
                "Washington"
            ],
            "oclc": [
                "42377701"
            ],
            "contributor": [
                "United States. Congress. House. Committee on Commerce. Subcommittee on Oversight and Investigations."
            ],
            "lcc": [
                "KF-0027.00000000.E553 1999g"
            ],
            "isbn": [
                "9780160586606",
                "0160586607"
            ],
            "last_modified_i": 1606921260,
            "ebook_count_i": 0,
            "cover_edition_key": "OL122169M",
            "cover_i": 4600171,
            "publisher": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O."
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL48123A"
            ],
            "author_name": [
                "United States. Congress. House. Committee on Commerce. Subcommittee on Health and the Environment."
            ],
            "place": [
                "United States"
            ],
            "subject": [
                "Claims administration",
                "Year 2000 date conversion (Computer systems)",
                "Medicare",
                "Data processing",
                "Older people",
                "Medical care"
            ],
            "publisher_facet": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O."
            ],
            "place_key": [
                "united_states"
            ],
            "subject_facet": [
                "Claims administration",
                "Data processing",
                "Medical care",
                "Medicare",
                "Older people",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700717266595741696,
            "place_facet": [
                "United States"
            ],
            "lcc_sort": "KF-0027.00000000.E553 1999g",
            "author_facet": [
                "OL48123A United States. Congress. House. Committee on Commerce. Subcommittee on Health and the Environment."
            ],
            "subject_key": [
                "claims_administration",
                "data_processing",
                "medical_care",
                "medicare",
                "older_people",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL5370985W",
            "text": [
                "/works/OL5370985W",
                "Y2K Run to Save Your PC from the Year 2000 Bug [3-1/2 Disk, HTML]",
                "OL12282652M",
                "9781582000701",
                "1582000700",
                "Hard Shell Word Factory",
                "OL1239467A",
                "Eileen Buckholtz",
                "Rebecca York",
                "Amanda Lee",
                "Eileen Buckholtz",
                "Alyssa Howard",
                "Eileen Garber Buckholtz"
            ],
            "type": "work",
            "seed": [
                "/books/OL12282652M",
                "/works/OL5370985W",
                "/authors/OL1239467A"
            ],
            "title": "Y2K Run to Save Your PC from the Year 2000 Bug [3-1/2 Disk, HTML]",
            "title_suggest": "Y2K Run to Save Your PC from the Year 2000 Bug [3-1/2 Disk, HTML]",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL12282652M"
            ],
            "publish_date": [
                "March 16, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "9781582000701",
                "1582000700"
            ],
            "last_modified_i": 1320462368,
            "ebook_count_i": 0,
            "cover_edition_key": "OL12282652M",
            "cover_i": 2935933,
            "publisher": [
                "Hard Shell Word Factory"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL1239467A"
            ],
            "author_name": [
                "Eileen Buckholtz"
            ],
            "author_alternative_name": [
                "Rebecca York",
                "Amanda Lee",
                "Eileen Buckholtz",
                "Alyssa Howard",
                "Eileen Garber Buckholtz"
            ],
            "id_goodreads": [
                "6455170"
            ],
            "publisher_facet": [
                "Hard Shell Word Factory"
            ],
            "_version_": 1700716078834909187,
            "author_facet": [
                "OL1239467A Eileen Buckholtz"
            ]
        },
        {
            "key": "/works/OL1971132W",
            "text": [
                "/works/OL1971132W",
                "The bug stops here!!!",
                "a collection of both humor and hubris relating to the biggest, dumbest, and most idiotic blunder in the history of technology ... known to one and all as the Y2K millennium bug : a parody",
                "OL6806111M",
                "Peter de Jager.",
                "00269316",
                "9780967174501",
                "0967174503",
                "P. De Jager",
                "OL236863A",
                "Peter De Jager",
                "American wit and humor, Pictorial",
                "Caricatures and cartoons",
                "Pictorial American wit and humor",
                "Year 2000 date conversion (Computer systems)"
            ],
            "type": "work",
            "seed": [
                "/books/OL6806111M",
                "/works/OL1971132W",
                "/subjects/american_wit_and_humor_pictorial",
                "/subjects/caricatures_and_cartoons",
                "/subjects/pictorial_american_wit_and_humor",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/authors/OL236863A"
            ],
            "title": "The bug stops here!!!",
            "title_suggest": "The bug stops here!!!",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL6806111M"
            ],
            "publish_date": [
                "1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "lccn": [
                "00269316"
            ],
            "publish_place": [
                "[S.l.]"
            ],
            "lcc": [
                "NC-1429.00000000.D322 A4 1999"
            ],
            "isbn": [
                "9780967174501",
                "0967174503"
            ],
            "last_modified_i": 1599700538,
            "ebook_count_i": 0,
            "cover_edition_key": "OL6806111M",
            "cover_i": 732547,
            "publisher": [
                "P. De Jager"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL236863A"
            ],
            "author_name": [
                "Peter De Jager"
            ],
            "subject": [
                "American wit and humor, Pictorial",
                "Caricatures and cartoons",
                "Pictorial American wit and humor",
                "Year 2000 date conversion (Computer systems)"
            ],
            "id_goodreads": [
                "4371954"
            ],
            "id_librarything": [
                "1715917"
            ],
            "publisher_facet": [
                "P. De Jager"
            ],
            "subject_facet": [
                "American wit and humor, Pictorial",
                "Caricatures and cartoons",
                "Pictorial American wit and humor",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700705870287994880,
            "lcc_sort": "NC-1429.00000000.D322 A4 1999",
            "author_facet": [
                "OL236863A Peter De Jager"
            ],
            "subject_key": [
                "american_wit_and_humor_pictorial",
                "caricatures_and_cartoons",
                "pictorial_american_wit_and_humor",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL12982683M",
            "text": [
                "/works/OL12982683M",
                "Cai Guo-Qiang",
                "I Am the Y2K Bug",
                "OL12982683M",
                "43873381",
                "3883754137",
                "9783883754130",
                "Verlag Der Buchhandlung Walther Konig"
            ],
            "type": "work",
            "seed": [
                "/books/OL12982683M",
                "/works/OL12982683M"
            ],
            "title": "Cai Guo-Qiang",
            "title_suggest": "Cai Guo-Qiang",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL12982683M"
            ],
            "publish_date": [
                "May 2000"
            ],
            "publish_year": [
                2000
            ],
            "first_publish_year": 2000,
            "oclc": [
                "43873381"
            ],
            "isbn": [
                "3883754137",
                "9783883754130"
            ],
            "last_modified_i": 1621433138,
            "ebook_count_i": 0,
            "publisher": [
                "Verlag Der Buchhandlung Walther Konig"
            ],
            "id_goodreads": [
                "2819361"
            ],
            "publisher_facet": [
                "Verlag Der Buchhandlung Walther Konig"
            ],
            "_version_": 1700195875693789186
        },
        {
            "key": "/works/OL11308597M",
            "text": [
                "/works/OL11308597M",
                "Year 2000 Survival Checklists and Workbook ",
                "A Y2K Millennium Bug Resource Guide",
                "OL11308597M",
                "40850665",
                "9780895404176",
                "0895404176",
                "Sun Publishing (NM)",
                "OL3595892A",
                "OL3595892A",
                "Millennium Info Group",
                "Millennium Info Group",
                "Programming - General",
                "General",
                "Computers",
                "Computers - Languages / Programming",
                "Computer Books: General"
            ],
            "type": "work",
            "seed": [
                "/books/OL11308597M",
                "/works/OL11308597M",
                "/subjects/programming_-_general",
                "/subjects/general",
                "/subjects/computers",
                "/subjects/computers_-_languages_/_programming",
                "/subjects/computer_books:_general",
                "/authors/OL3595892A",
                "/authors/OL3595892A"
            ],
            "title": "Year 2000 Survival Checklists and Workbook ",
            "title_suggest": "Year 2000 Survival Checklists and Workbook ",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11308597M"
            ],
            "publish_date": [
                "March 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "40850665"
            ],
            "isbn": [
                "9780895404176",
                "0895404176"
            ],
            "last_modified_i": 1621432840,
            "ebook_count_i": 0,
            "cover_edition_key": "OL11308597M",
            "cover_i": 2681543,
            "publisher": [
                "Sun Publishing (NM)"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3595892A",
                "OL3595892A"
            ],
            "author_name": [
                "Millennium Info Group",
                "Millennium Info Group"
            ],
            "subject": [
                "Programming - General",
                "General",
                "Computers",
                "Computers - Languages / Programming",
                "Computer Books: General"
            ],
            "publisher_facet": [
                "Sun Publishing (NM)"
            ],
            "subject_facet": [
                "Computer Books: General",
                "Computers",
                "Computers - Languages / Programming",
                "General",
                "Programming - General"
            ],
            "_version_": 1700195563135303681,
            "author_facet": [
                "OL3595892A Millennium Info Group"
            ],
            "subject_key": [
                "computer_books_general",
                "computers",
                "computers_-_languages__programming",
                "general",
                "programming_-_general"
            ]
        },
        {
            "key": "/works/OL8554254M",
            "text": [
                "/works/OL8554254M",
                "Suburbageddon",
                "OL8554254M",
                "45013846",
                "9780966604412",
                "0966604415",
                "Toadspittle Hill Productions",
                "OL3016152A",
                "OL246510A",
                "Jonathan Follett",
                "Matthew Holm",
                "General",
                "Social Science",
                "Humor",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Survival skills",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Americana"
            ],
            "type": "work",
            "seed": [
                "/books/OL8554254M",
                "/works/OL8554254M",
                "/subjects/general",
                "/subjects/social_science",
                "/subjects/humor",
                "/subjects/emergency_preparedness",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/survival_skills",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/americana",
                "/authors/OL3016152A",
                "/authors/OL246510A"
            ],
            "title": "Suburbageddon",
            "title_suggest": "Suburbageddon",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL8554254M"
            ],
            "publish_date": [
                "September 9, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "45013846"
            ],
            "isbn": [
                "9780966604412",
                "0966604415"
            ],
            "last_modified_i": 1621434399,
            "ebook_count_i": 0,
            "cover_edition_key": "OL8554254M",
            "cover_i": 1700455,
            "publisher": [
                "Toadspittle Hill Productions"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3016152A",
                "OL246510A"
            ],
            "author_name": [
                "Jonathan Follett",
                "Matthew Holm"
            ],
            "subject": [
                "General",
                "Social Science",
                "Humor",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Survival skills",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Americana"
            ],
            "id_goodreads": [
                "1645811"
            ],
            "id_librarything": [
                "8287027"
            ],
            "publisher_facet": [
                "Toadspittle Hill Productions"
            ],
            "subject_facet": [
                "Americana",
                "Emergency preparedness",
                "General",
                "Humor",
                "Millennium bug (Computer systems)",
                "Social Science",
                "Survival skills",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700197198628651010,
            "author_facet": [
                "OL246510A Matthew Holm",
                "OL3016152A Jonathan Follett"
            ],
            "subject_key": [
                "americana",
                "emergency_preparedness",
                "general",
                "humor",
                "millennium_bug_(computer_systems)",
                "social_science",
                "survival_skills",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL12223550M",
            "text": [
                "/works/OL12223550M",
                "Do-it-Yourself Crisis Survival",
                "OL12223550M",
                "40735345",
                "1895882273",
                "9781895882278",
                "Eagle-Research",
                "OL3849407A",
                "OL3849408A",
                "Tenaj DaCosta",
                "George Wiseman",
                "Current events",
                "Disaster relief",
                "Emergency management",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Survival skills",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "type": "work",
            "seed": [
                "/books/OL12223550M",
                "/works/OL12223550M",
                "/subjects/current_events",
                "/subjects/disaster_relief",
                "/subjects/emergency_management",
                "/subjects/emergency_preparedness",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/survival_skills",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/authors/OL3849407A",
                "/authors/OL3849408A"
            ],
            "title": "Do-it-Yourself Crisis Survival",
            "title_suggest": "Do-it-Yourself Crisis Survival",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL12223550M"
            ],
            "publish_date": [
                "January 1, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "40735345"
            ],
            "isbn": [
                "1895882273",
                "9781895882278"
            ],
            "last_modified_i": 1621432996,
            "ebook_count_i": 0,
            "cover_edition_key": "OL12223550M",
            "cover_i": 3038158,
            "publisher": [
                "Eagle-Research"
            ],
            "author_key": [
                "OL3849407A",
                "OL3849408A"
            ],
            "author_name": [
                "Tenaj DaCosta",
                "George Wiseman"
            ],
            "subject": [
                "Current events",
                "Disaster relief",
                "Emergency management",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Survival skills",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "id_goodreads": [
                "2369966"
            ],
            "publisher_facet": [
                "Eagle-Research"
            ],
            "subject_facet": [
                "Current events",
                "Disaster relief",
                "Emergency management",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Survival skills",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700195726633467904,
            "author_facet": [
                "OL3849407A Tenaj DaCosta",
                "OL3849408A George Wiseman"
            ],
            "subject_key": [
                "current_events",
                "disaster_relief",
                "emergency_management",
                "emergency_preparedness",
                "millennium_bug_(computer_systems)",
                "survival_skills",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL11747072M",
            "text": [
                "/works/OL11747072M",
                "Duh-2000 ",
                "The Stupidest Things Said About The Year 2000 Problem",
                "OL11747072M",
                "43437796",
                "0967231507",
                "9780967231501",
                "The Ken Orr Institute",
                "OL2073756A",
                "OL1240264A",
                "Dave Higgins",
                "Ken Orr",
                "Humor / General",
                "American wit and humor",
                "Humor",
                "Millennium bug (Computer systems)",
                "Miscellanea",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com"
            ],
            "type": "work",
            "seed": [
                "/books/OL11747072M",
                "/works/OL11747072M",
                "/subjects/humor_/_general",
                "/subjects/american_wit_and_humor",
                "/subjects/humor",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/miscellanea",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(com",
                "/authors/OL2073756A",
                "/authors/OL1240264A"
            ],
            "title": "Duh-2000 ",
            "title_suggest": "Duh-2000 ",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11747072M"
            ],
            "publish_date": [
                "March 1, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "oclc": [
                "43437796"
            ],
            "isbn": [
                "0967231507",
                "9780967231501"
            ],
            "last_modified_i": 1621432912,
            "ebook_count_i": 0,
            "cover_edition_key": "OL11747072M",
            "cover_i": 2705689,
            "publisher": [
                "The Ken Orr Institute"
            ],
            "author_key": [
                "OL2073756A",
                "OL1240264A"
            ],
            "author_name": [
                "Dave Higgins",
                "Ken Orr"
            ],
            "subject": [
                "Humor / General",
                "American wit and humor",
                "Humor",
                "Millennium bug (Computer systems)",
                "Miscellanea",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com"
            ],
            "id_goodreads": [
                "6039112"
            ],
            "publisher_facet": [
                "The Ken Orr Institute"
            ],
            "subject_facet": [
                "American wit and humor",
                "Humor",
                "Humor / General",
                "Millennium bug (Computer systems)",
                "Miscellanea",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com"
            ],
            "_version_": 1700195638563569666,
            "author_facet": [
                "OL1240264A Ken Orr",
                "OL2073756A Dave Higgins"
            ],
            "subject_key": [
                "american_wit_and_humor",
                "humor",
                "humor__general",
                "millennium_bug_(computer_systems)",
                "miscellanea",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(com"
            ]
        },
        {
            "key": "/works/OL21875019W",
            "text": [
                "/works/OL21875019W",
                "Do You Compute?",
                "Selling Tech from the Atomic Age to the Y2K Bug 1950-1999",
                "OL29828455M",
                "099161982X",
                "9780991619825",
                "Boyo Press",
                "OL8153381A",
                "OL8153381A",
                "OL8153381A",
                "OL6860629A",
                "OL8357633A",
                "Ryan Mungia",
                "Ryan Mungia",
                "Ryan Mungia",
                "Steven Heller",
                "John Zabawa",
                "Technology",
                "Art"
            ],
            "type": "work",
            "seed": [
                "/books/OL29828455M",
                "/works/OL21875019W",
                "/subjects/technology",
                "/subjects/art",
                "/authors/OL8153381A",
                "/authors/OL8153381A",
                "/authors/OL8153381A",
                "/authors/OL6860629A",
                "/authors/OL8357633A"
            ],
            "title": "Do You Compute?",
            "title_suggest": "Do You Compute?",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL29828455M"
            ],
            "publish_date": [
                "2019"
            ],
            "publish_year": [
                2019
            ],
            "first_publish_year": 2019,
            "isbn": [
                "099161982X",
                "9780991619825"
            ],
            "last_modified_i": 1598899739,
            "ebook_count_i": 0,
            "publisher": [
                "Boyo Press"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL8153381A",
                "OL8153381A",
                "OL8153381A",
                "OL6860629A",
                "OL8357633A"
            ],
            "author_name": [
                "Ryan Mungia",
                "Ryan Mungia",
                "Ryan Mungia",
                "Steven Heller",
                "John Zabawa"
            ],
            "subject": [
                "Technology",
                "Art"
            ],
            "publisher_facet": [
                "Boyo Press"
            ],
            "subject_facet": [
                "Art",
                "Technology"
            ],
            "_version_": 1700708651010883586,
            "author_facet": [
                "OL6860629A Steven Heller",
                "OL8153381A Ryan Mungia",
                "OL8357633A John Zabawa"
            ],
            "subject_key": [
                "art",
                "technology"
            ]
        },
        {
            "key": "/works/OL277369W",
            "text": [
                "/works/OL277369W",
                "Spaceland",
                "A Novel of the Fourth Dimension",
                "Spaceland.",
                "OL22059238M",
                "OL8053335M",
                "OL3956562M",
                "OL8053336M",
                "Rudy Rucker.",
                "2001059661",
                "53060233",
                "0765303663",
                "9780765303677",
                "0765303671",
                "9780765303660",
                "isbn_9780765303660",
                "spacelandnovelfo00ruck",
                "My idea for handling December 31, 1999, was that Jena and I should fix a nice meal, drink champagne, watch TV, and stay clear of the Y2K bug.",
                "Tor Books",
                "Tom Doherty",
                "Tor",
                "OL19107A",
                "Rudy Rucker",
                "Rudy v .B Rucker",
                "Rudolf von Bitter Rucker",
                "Rudolf v.B Rucker",
                "Rucker",
                "Rudy v. B Rucker",
                "Rucker, Rudy v.B. (Rudy von Bitter), 1946-",
                "Rudy V. B. Rucker",
                "Rucker, Rudolf v. B. (Rudy von Bitter), 1946-",
                "Rudy v. B. Rucker",
                "Rudolf Rucker",
                "Rudolf v. B. Rucker",
                "Computer industry",
                "Fourth dimension",
                "Fiction",
                "Fiction, science fiction, general",
                "Accessible book",
                "Protected DAISY"
            ],
            "type": "work",
            "seed": [
                "/books/OL22059238M",
                "/books/OL8053335M",
                "/books/OL3956562M",
                "/books/OL8053336M",
                "/works/OL277369W",
                "/subjects/computer_industry",
                "/subjects/fourth_dimension",
                "/subjects/fiction",
                "/subjects/fiction_science_fiction_general",
                "/authors/OL19107A"
            ],
            "title": "Spaceland",
            "title_suggest": "Spaceland",
            "subtitle": "A Novel of the Fourth Dimension",
            "has_fulltext": true,
            "edition_count": 4,
            "edition_key": [
                "OL22059238M",
                "OL8053335M",
                "OL3956562M",
                "OL8053336M"
            ],
            "publish_date": [
                "June 1, 2002",
                "July 4, 2003",
                "2002"
            ],
            "publish_year": [
                2003,
                2002
            ],
            "first_publish_year": 2002,
            "lccn": [
                "2001059661"
            ],
            "publish_place": [
                "New York"
            ],
            "oclc": [
                "53060233"
            ],
            "lcc": [
                "PS-3568.00000000.U298 S73 2002"
            ],
            "ddc": [
                "813.54"
            ],
            "isbn": [
                "0765303663",
                "9780765303677",
                "0765303671",
                "9780765303660"
            ],
            "last_modified_i": 1607021293,
            "ebook_count_i": 2,
            "ia": [
                "isbn_9780765303660",
                "spacelandnovelfo00ruck"
            ],
            "public_scan_b": false,
            "ia_collection_s": "fav-hpog;mitlibraries-ol;printdisabled;internetarchivebooks;inlibrary;fav-prime_shader;china;fav-kamil_aleksander_muzyka;librarygenesis;universityofcoloradoboulder-ol;cnusd-ol",
            "lending_edition_s": "OL22059238M",
            "lending_identifier_s": "isbn_9780765303660",
            "printdisabled_s": "OL22059238M;OL8053336M",
            "cover_edition_key": "OL8053336M",
            "cover_i": 524009,
            "first_sentence": [
                "My idea for handling December 31, 1999, was that Jena and I should fix a nice meal, drink champagne, watch TV, and stay clear of the Y2K bug."
            ],
            "publisher": [
                "Tor Books",
                "Tom Doherty",
                "Tor"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL19107A"
            ],
            "author_name": [
                "Rudy Rucker"
            ],
            "author_alternative_name": [
                "Rudy v .B Rucker",
                "Rudolf von Bitter Rucker",
                "Rudolf v.B Rucker",
                "Rucker",
                "Rudy v. B Rucker",
                "Rucker, Rudy v.B. (Rudy von Bitter), 1946-",
                "Rudy V. B. Rucker",
                "Rucker, Rudolf v. B. (Rudy von Bitter), 1946-",
                "Rudy v. B. Rucker",
                "Rudolf Rucker",
                "Rudolf v. B. Rucker"
            ],
            "subject": [
                "Computer industry",
                "Fourth dimension",
                "Fiction",
                "Fiction, science fiction, general",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "2512650",
                "274052"
            ],
            "id_librarything": [
                "52628"
            ],
            "ia_box_id": [
                "IA1144607"
            ],
            "publisher_facet": [
                "Tom Doherty",
                "Tor",
                "Tor Books"
            ],
            "subject_facet": [
                "Accessible book",
                "Computer industry",
                "Fiction",
                "Fiction, science fiction, general",
                "Fourth dimension",
                "Protected DAISY"
            ],
            "_version_": 1700712120589484032,
            "lcc_sort": "PS-3568.00000000.U298 S73 2002",
            "author_facet": [
                "OL19107A Rudy Rucker"
            ],
            "subject_key": [
                "accessible_book",
                "computer_industry",
                "fiction",
                "fiction_science_fiction_general",
                "fourth_dimension",
                "protected_daisy"
            ],
            "ddc_sort": "813.54"
        },
        {
            "key": "/works/OL12297448M",
            "text": [
                "/works/OL12297448M",
                "Year 2000 Crossroads Workbook",
                "OL12297448M",
                "9781928923008",
                "1928923003",
                "Visual Communications Group, Inc.",
                "OL3866829A",
                "OL3245578A",
                "Paloma O'Riley",
                "Shoni Ogier Kahn",
                "Business & Economics / Personal Finance / Money Management",
                "Cooking / Canning & Preserving",
                "Cooking",
                "Emergency preparedness",
                "Food",
                "Millennium bug (Computer systems)",
                "Personal Finance - Money Management",
                "Storage",
                "Water",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "type": "work",
            "seed": [
                "/books/OL12297448M",
                "/works/OL12297448M",
                "/subjects/business_&_economics_/_personal_finance_/_money_management",
                "/subjects/cooking_/_canning_&_preserving",
                "/subjects/cooking",
                "/subjects/emergency_preparedness",
                "/subjects/food",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/personal_finance_-_money_management",
                "/subjects/storage",
                "/subjects/water",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/authors/OL3866829A",
                "/authors/OL3245578A"
            ],
            "title": "Year 2000 Crossroads Workbook",
            "title_suggest": "Year 2000 Crossroads Workbook",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL12297448M"
            ],
            "publish_date": [
                "January 5, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "9781928923008",
                "1928923003"
            ],
            "last_modified_i": 1621433006,
            "ebook_count_i": 0,
            "cover_edition_key": "OL12297448M",
            "cover_i": 3051027,
            "publisher": [
                "Visual Communications Group, Inc."
            ],
            "author_key": [
                "OL3866829A",
                "OL3245578A"
            ],
            "author_name": [
                "Paloma O'Riley",
                "Shoni Ogier Kahn"
            ],
            "subject": [
                "Business & Economics / Personal Finance / Money Management",
                "Cooking / Canning & Preserving",
                "Cooking",
                "Emergency preparedness",
                "Food",
                "Millennium bug (Computer systems)",
                "Personal Finance - Money Management",
                "Storage",
                "Water",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "publisher_facet": [
                "Visual Communications Group, Inc."
            ],
            "subject_facet": [
                "Business & Economics / Personal Finance / Money Management",
                "Cooking",
                "Cooking / Canning & Preserving",
                "Emergency preparedness",
                "Food",
                "Millennium bug (Computer systems)",
                "Personal Finance - Money Management",
                "Storage",
                "Water",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700195736559288321,
            "author_facet": [
                "OL3245578A Shoni Ogier Kahn",
                "OL3866829A Paloma O'Riley"
            ],
            "subject_key": [
                "business__economics__personal_finance__money_management",
                "cooking",
                "cooking__canning__preserving",
                "emergency_preparedness",
                "food",
                "millennium_bug_(computer_systems)",
                "personal_finance_-_money_management",
                "storage",
                "water",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL3461009W",
            "text": [
                "/works/OL3461009W",
                "On time, within budget",
                "On Time Within Budget",
                "On time within budget",
                "Software Project Management Practices and Techniques, 3rd Edition",
                "software project management practices and techniques",
                "OL1712296M",
                "OL7615988M",
                "OL18140374M",
                "E.M. Bennatan.",
                "92014357",
                "00027330",
                "0894354086",
                "9780471376446",
                "0471376442",
                "9780894354083",
                "ontimewithinbudg0000benn_h8t4",
                "One of the most amazing things about the Y2K scare is how readily people accepted the fact that a software bug could bring the world to an unprecedented level of disruption (at least in peace time).",
                "Wiley",
                "John Wiley & Sons",
                "QED Pub. Group",
                "OL576589A",
                "E. M. Bennatan",
                "Development",
                "Management",
                "Computer software",
                "Accessible book",
                "Protected DAISY"
            ],
            "type": "work",
            "seed": [
                "/books/OL1712296M",
                "/books/OL7615988M",
                "/books/OL18140374M",
                "/works/OL3461009W",
                "/subjects/development",
                "/subjects/management",
                "/subjects/computer_software",
                "/authors/OL576589A"
            ],
            "title": "On time, within budget",
            "title_suggest": "On time, within budget",
            "has_fulltext": true,
            "edition_count": 3,
            "edition_key": [
                "OL1712296M",
                "OL7615988M",
                "OL18140374M"
            ],
            "publish_date": [
                "1992",
                "2000",
                "May 24, 2000"
            ],
            "publish_year": [
                1992,
                2000
            ],
            "first_publish_year": 1992,
            "lccn": [
                "92014357",
                "00027330"
            ],
            "publish_place": [
                "New York",
                "Boston"
            ],
            "lcc": [
                "QA-0076.76000000.D47 B454 1992",
                "QA-0076.76000000.D47 B454 2000"
            ],
            "ddc": [
                "005.10684"
            ],
            "isbn": [
                "0894354086",
                "9780471376446",
                "0471376442",
                "9780894354083"
            ],
            "last_modified_i": 1620515778,
            "ebook_count_i": 1,
            "ia": [
                "ontimewithinbudg0000benn_h8t4"
            ],
            "public_scan_b": false,
            "ia_collection_s": "printdisabled;internetarchivebooks;inlibrary",
            "lending_edition_s": "OL1712296M",
            "lending_identifier_s": "ontimewithinbudg0000benn_h8t4",
            "printdisabled_s": "OL1712296M",
            "cover_edition_key": "OL7615988M",
            "cover_i": 303931,
            "first_sentence": [
                "One of the most amazing things about the Y2K scare is how readily people accepted the fact that a software bug could bring the world to an unprecedented level of disruption (at least in peace time)."
            ],
            "publisher": [
                "Wiley",
                "John Wiley & Sons",
                "QED Pub. Group"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL576589A"
            ],
            "author_name": [
                "E. M. Bennatan"
            ],
            "subject": [
                "Development",
                "Management",
                "Computer software",
                "Accessible book",
                "Protected DAISY"
            ],
            "id_goodreads": [
                "1403554",
                "5876784"
            ],
            "id_librarything": [
                "159024"
            ],
            "ia_box_id": [
                "IA40089908"
            ],
            "publisher_facet": [
                "John Wiley & Sons",
                "QED Pub. Group",
                "Wiley"
            ],
            "subject_facet": [
                "Accessible book",
                "Computer software",
                "Development",
                "Management",
                "Protected DAISY"
            ],
            "_version_": 1700713291560517632,
            "lcc_sort": "QA-0076.76000000.D47 B454 1992",
            "author_facet": [
                "OL576589A E. M. Bennatan"
            ],
            "subject_key": [
                "accessible_book",
                "computer_software",
                "development",
                "management",
                "protected_daisy"
            ],
            "ddc_sort": "005.10684"
        },
        {
            "key": "/works/OL11745272M",
            "text": [
                "/works/OL11745272M",
                "The Smaller Business Year 2000 Guide",
                " A Complete Year 2000 Compliance Program for Small and Mid-Size Businesses",
                "OL11745272M",
                "0966971507",
                "9780966971507",
                "Horizon Information Group, Inc.",
                "OL3727862A",
                "OL3727863A",
                "OL3727864A",
                "Marijo McCarthy",
                "Allen B. Falcon",
                "Lawrence S. Nannis",
                "Business",
                "Computer systems",
                "Computers",
                "Currrent Events",
                "Millennium bug (Computer systems)",
                "Technology",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com"
            ],
            "type": "work",
            "seed": [
                "/books/OL11745272M",
                "/works/OL11745272M",
                "/subjects/business",
                "/subjects/computer_systems",
                "/subjects/computers",
                "/subjects/currrent_events",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/technology",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(com",
                "/authors/OL3727862A",
                "/authors/OL3727863A",
                "/authors/OL3727864A"
            ],
            "title": "The Smaller Business Year 2000 Guide",
            "title_suggest": "The Smaller Business Year 2000 Guide",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL11745272M"
            ],
            "publish_date": [
                "January 1, 1999"
            ],
            "publish_year": [
                1999
            ],
            "first_publish_year": 1999,
            "isbn": [
                "0966971507",
                "9780966971507"
            ],
            "last_modified_i": 1621432923,
            "ebook_count_i": 0,
            "cover_edition_key": "OL11745272M",
            "cover_i": 2704789,
            "publisher": [
                "Horizon Information Group, Inc."
            ],
            "author_key": [
                "OL3727862A",
                "OL3727863A",
                "OL3727864A"
            ],
            "author_name": [
                "Marijo McCarthy",
                "Allen B. Falcon",
                "Lawrence S. Nannis"
            ],
            "subject": [
                "Business",
                "Computer systems",
                "Computers",
                "Currrent Events",
                "Millennium bug (Computer systems)",
                "Technology",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com"
            ],
            "id_goodreads": [
                "3325827"
            ],
            "publisher_facet": [
                "Horizon Information Group, Inc."
            ],
            "subject_facet": [
                "Business",
                "Computer systems",
                "Computers",
                "Currrent Events",
                "Millennium bug (Computer systems)",
                "Technology",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com"
            ],
            "_version_": 1700195651097198592,
            "author_facet": [
                "OL3727862A Marijo McCarthy",
                "OL3727863A Allen B. Falcon",
                "OL3727864A Lawrence S. Nannis"
            ],
            "subject_key": [
                "business",
                "computer_systems",
                "computers",
                "currrent_events",
                "millennium_bug_(computer_systems)",
                "technology",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(com"
            ]
        },
        {
            "key": "/works/OL1821914W",
            "text": [
                "/works/OL1821914W",
                "Managing the Year 2000 crisis",
                "Managing the Year 2000 Crisis",
                "strategies and solutions",
                "Strategies and Solutions",
                "OL8667576M",
                "OL347538M",
                "Janet Butler.",
                "98006661",
                "38831966",
                "9781566070560",
                "1566070562",
                "Computer Technology Research Corp.",
                "Computer Technology Research Corporation",
                "OL218418A",
                "OL220966A",
                "Janet G. Butler",
                "Anthony W. Mace",
                "Year 2000 date conversion (Computer systems)",
                "Software maintenance",
                "Business & Management",
                "Systems management",
                "Software Design",
                "Computers",
                "Computers - Languages / Programming",
                "Business/Economics",
                "Programming - General",
                "Business",
                "Business & Economics",
                "Millennium bug (Computer systems)",
                "Strategy",
                "Y2K problem (Computer systems)",
                "Computer Bks - Languages / Programming",
                "Programming - Software Development",
                "Year 2000 date conversion (Com"
            ],
            "type": "work",
            "seed": [
                "/books/OL8667576M",
                "/books/OL347538M",
                "/works/OL1821914W",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/software_maintenance",
                "/subjects/business_&_management",
                "/subjects/systems_management",
                "/subjects/software_design",
                "/subjects/computers",
                "/subjects/computers_-_languages_/_programming",
                "/subjects/business/economics",
                "/subjects/programming_-_general",
                "/subjects/business",
                "/subjects/business_&_economics",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/strategy",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/computer_bks_-_languages_/_programming",
                "/subjects/programming_-_software_development",
                "/subjects/year_2000_date_conversion_(com",
                "/authors/OL218418A",
                "/authors/OL220966A"
            ],
            "title": "Managing the Year 2000 crisis",
            "title_suggest": "Managing the Year 2000 crisis",
            "has_fulltext": false,
            "edition_count": 2,
            "edition_key": [
                "OL8667576M",
                "OL347538M"
            ],
            "publish_date": [
                "1999",
                "August 1, 1998"
            ],
            "publish_year": [
                1998,
                1999
            ],
            "first_publish_year": 1998,
            "lccn": [
                "98006661"
            ],
            "publish_place": [
                "Charleston, SC"
            ],
            "oclc": [
                "38831966"
            ],
            "lcc": [
                "QA-0076.76000000.S64 B85 1999"
            ],
            "ddc": [
                "005.16"
            ],
            "isbn": [
                "9781566070560",
                "1566070562"
            ],
            "last_modified_i": 1606563418,
            "ebook_count_i": 0,
            "cover_edition_key": "OL347538M",
            "cover_i": 1902665,
            "publisher": [
                "Computer Technology Research Corp.",
                "Computer Technology Research Corporation"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL218418A",
                "OL220966A"
            ],
            "author_name": [
                "Janet G. Butler",
                "Anthony W. Mace"
            ],
            "subject": [
                "Year 2000 date conversion (Computer systems)",
                "Software maintenance",
                "Business & Management",
                "Systems management",
                "Software Design",
                "Computers",
                "Computers - Languages / Programming",
                "Business/Economics",
                "Programming - General",
                "Business",
                "Business & Economics",
                "Millennium bug (Computer systems)",
                "Strategy",
                "Y2K problem (Computer systems)",
                "Computer Bks - Languages / Programming",
                "Programming - Software Development",
                "Year 2000 date conversion (Com"
            ],
            "id_goodreads": [
                "4005672"
            ],
            "publisher_facet": [
                "Computer Technology Research Corp.",
                "Computer Technology Research Corporation"
            ],
            "subject_facet": [
                "Business",
                "Business & Economics",
                "Business & Management",
                "Business/Economics",
                "Computer Bks - Languages / Programming",
                "Computers",
                "Computers - Languages / Programming",
                "Millennium bug (Computer systems)",
                "Programming - General",
                "Programming - Software Development",
                "Software Design",
                "Software maintenance",
                "Strategy",
                "Systems management",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Com",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700703798731735040,
            "lcc_sort": "QA-0076.76000000.S64 B85 1999",
            "author_facet": [
                "OL218418A Janet G. Butler",
                "OL220966A Anthony W. Mace"
            ],
            "subject_key": [
                "business",
                "business__economics",
                "business__management",
                "businesseconomics",
                "computer_bks_-_languages__programming",
                "computers",
                "computers_-_languages__programming",
                "millennium_bug_(computer_systems)",
                "programming_-_general",
                "programming_-_software_development",
                "software_design",
                "software_maintenance",
                "strategy",
                "systems_management",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(com",
                "year_2000_date_conversion_(computer_systems)"
            ],
            "ddc_sort": "005.16"
        },
        {
            "key": "/works/OL8682350M",
            "text": [
                "/works/OL8682350M",
                "Don't Get Caught With Your Pantry Down",
                "OL8682350M",
                "Lee Dee Jo Teaque-Stevens (Editor)",
                "9781881825197",
                "1881825191",
                "Historical Publications",
                "OL3062020A",
                "OL3062021A",
                "James T. Stevens",
                "Leedee Teague-Stevens",
                "General",
                "Storage",
                "Emergency food supply",
                "Cooking",
                "United States",
                "Reference",
                "Sociology",
                "Food",
                "Cookery",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Preservation",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Survival and emergency rations",
                "Cooking / Canning & Preserving",
                "Survival and emergency equipment",
                "Consumer Guides",
                "Directories"
            ],
            "type": "work",
            "seed": [
                "/books/OL8682350M",
                "/works/OL8682350M",
                "/subjects/general",
                "/subjects/storage",
                "/subjects/emergency_food_supply",
                "/subjects/cooking",
                "/subjects/united_states",
                "/subjects/reference",
                "/subjects/sociology",
                "/subjects/food",
                "/subjects/cookery",
                "/subjects/emergency_preparedness",
                "/subjects/millennium_bug_(computer_systems)",
                "/subjects/preservation",
                "/subjects/y2k_problem_(computer_systems)",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/survival_and_emergency_rations",
                "/subjects/cooking_/_canning_&_preserving",
                "/subjects/survival_and_emergency_equipment",
                "/subjects/consumer_guides",
                "/subjects/directories",
                "/authors/OL3062020A",
                "/authors/OL3062021A"
            ],
            "title": "Don't Get Caught With Your Pantry Down",
            "title_suggest": "Don't Get Caught With Your Pantry Down",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL8682350M"
            ],
            "publish_date": [
                "August 1, 1998"
            ],
            "publish_year": [
                1998
            ],
            "first_publish_year": 1998,
            "contributor": [
                "Lee Dee Jo Teaque-Stevens (Editor)"
            ],
            "isbn": [
                "9781881825197",
                "1881825191"
            ],
            "last_modified_i": 1621434393,
            "ebook_count_i": 0,
            "cover_edition_key": "OL8682350M",
            "cover_i": 928042,
            "publisher": [
                "Historical Publications"
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL3062020A",
                "OL3062021A"
            ],
            "author_name": [
                "James T. Stevens",
                "Leedee Teague-Stevens"
            ],
            "subject": [
                "General",
                "Storage",
                "Emergency food supply",
                "Cooking",
                "United States",
                "Reference",
                "Sociology",
                "Food",
                "Cookery",
                "Emergency preparedness",
                "Millennium bug (Computer systems)",
                "Preservation",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)",
                "Survival and emergency rations",
                "Cooking / Canning & Preserving",
                "Survival and emergency equipment",
                "Consumer Guides",
                "Directories"
            ],
            "id_goodreads": [
                "1112509"
            ],
            "id_librarything": [
                "391253"
            ],
            "publisher_facet": [
                "Historical Publications"
            ],
            "subject_facet": [
                "Consumer Guides",
                "Cookery",
                "Cooking",
                "Cooking / Canning & Preserving",
                "Directories",
                "Emergency food supply",
                "Emergency preparedness",
                "Food",
                "General",
                "Millennium bug (Computer systems)",
                "Preservation",
                "Reference",
                "Sociology",
                "Storage",
                "Survival and emergency equipment",
                "Survival and emergency rations",
                "United States",
                "Y2K problem (Computer systems)",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700197192971583489,
            "author_facet": [
                "OL3062020A James T. Stevens",
                "OL3062021A Leedee Teague-Stevens"
            ],
            "subject_key": [
                "consumer_guides",
                "cookery",
                "cooking",
                "cooking__canning__preserving",
                "directories",
                "emergency_food_supply",
                "emergency_preparedness",
                "food",
                "general",
                "millennium_bug_(computer_systems)",
                "preservation",
                "reference",
                "sociology",
                "storage",
                "survival_and_emergency_equipment",
                "survival_and_emergency_rations",
                "united_states",
                "y2k_problem_(computer_systems)",
                "year_2000_date_conversion_(computer_systems)"
            ]
        },
        {
            "key": "/works/OL11065281W",
            "text": [
                "/works/OL11065281W",
                "Year 2000 global corporations",
                "will the bug bite big business : hearing before the Special Committee on the Year 2000 Technology Problem, United States Senate, One Hundred Sixth Congress, first session, on Y2K implications and problems internationally, July 22, 1999",
                "OL15471622M",
                "43702760",
                "0160602270",
                "9780160602276",
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O.",
                "OL4615099A",
                "United States. Congress. Senate. Special Committee on the Year 2000 Technology Problem",
                "International business enterprises",
                "Year 2000 date conversion (Computer systems)",
                "Data processing"
            ],
            "type": "work",
            "seed": [
                "/books/OL15471622M",
                "/works/OL11065281W",
                "/subjects/international_business_enterprises",
                "/subjects/year_2000_date_conversion_(computer_systems)",
                "/subjects/data_processing",
                "/authors/OL4615099A"
            ],
            "title": "Year 2000 global corporations",
            "title_suggest": "Year 2000 global corporations",
            "has_fulltext": false,
            "edition_count": 1,
            "edition_key": [
                "OL15471622M"
            ],
            "publish_date": [
                "2000"
            ],
            "publish_year": [
                2000
            ],
            "first_publish_year": 2000,
            "publish_place": [
                "Washington"
            ],
            "oclc": [
                "43702760"
            ],
            "isbn": [
                "0160602270",
                "9780160602276"
            ],
            "last_modified_i": 1272439131,
            "ebook_count_i": 0,
            "cover_edition_key": "OL15471622M",
            "cover_i": 5310105,
            "publisher": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O."
            ],
            "language": [
                "eng"
            ],
            "author_key": [
                "OL4615099A"
            ],
            "author_name": [
                "United States. Congress. Senate. Special Committee on the Year 2000 Technology Problem"
            ],
            "subject": [
                "International business enterprises",
                "Year 2000 date conversion (Computer systems)",
                "Data processing"
            ],
            "id_goodreads": [
                "3089300"
            ],
            "publisher_facet": [
                "For sale by the U.S. G.P.O., Supt. of Docs., Congressional Sales Office",
                "U.S. G.P.O."
            ],
            "subject_facet": [
                "Data processing",
                "International business enterprises",
                "Year 2000 date conversion (Computer systems)"
            ],
            "_version_": 1700695750342606848,
            "author_facet": [
                "OL4615099A United States. Congress. Senate. Special Committee on the Year 2000 Technology Problem"
            ],
            "subject_key": [
                "data_processing",
                "international_business_enterprises",
                "year_2000_date_conversion_(computer_systems)"
            ]
        }
    ],
    "num_found": 39,
    "q": "y2k bug",
    "offset": null
};

var testContainer = document.querySelector("#testContainer");

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
		var titleH = document.createElement("h4");
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


getmoredetails("The Dark Knight");