# Discover History

## User Story
- AS A History Buff
- I WANT to know what notable events occurred on a given day AND
- I WANT to be able to be provided with media titles (movies/television series/books) that provide more information on a given topic AND
- I WANT to be able to revisit previous topics searched without having to know their specific dates

## Application Functionality
The application will show on initial load a featured event for that day and then also a clickable list of other events that took place.  Lower down on the page will be a list of saved events that the user had searched for in the past.  A button will allow the user to select a day other than the current day to search.

The website is published at https://cabralwilliams.github.io/awesome-project-1/

![image](https://user-images.githubusercontent.com/88918693/136124651-e00044e2-3dad-4127-b886-dad124029785.png)

See a demo
https://watch.screencastify.com/v/nggWdgaB6746QUG1NspP

Built With HTML, CSS, Foundation, Java Script, Moment.js and Jquery.

We use the https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/ API to retrieve history events  for specific day. Then  https://www.googleapis.com/books API to search for books related to a specific event, and finally, http://www.omdbapi.com API to look for movies related to same event. 

We also use localStorage to store user manual searches.

©️2021 Made with ❤️ by Sonali, Cabral and Ivonne
