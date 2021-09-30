# Discover History

## User Story
- AS A History Buff
- I WANT to know what notable events occurred on a given day AND
- I WANT to be able to be provided with media titles (movies/television series/books) that provide more information on a given topic AND
- I WANT to be able to revisit previous topics searched without having to know their specific dates

## Application Functionality
The application will show on initial load a featured event for that day and then also a clickable list of other events that took place.  Lower down on the page will be a list of saved events that the user had searched for in the past.  A button will be present to launch a modal that allows the user to select a day other than the current day to search.

User Story

AS a Historian I WANT to see the history events that happened for specific date as well movies related for the event SO THAT I can learn more about history

Acceptance Criteria

When the customer opens the app, it would automatically perform a search for the current day and list a few random events for that particular day with link options to perform further searches (the further searches would then perform searches for books/movies/television shows etc.).  But then we would also give the person the ability to search for other days, and the manual searches would be the ones that would be stored.

The website is published at 

Built With HTML, CSS, Foundation, Java Script, Moment.js and Jquery.

We use the https://history.muffinlabs.com/date/ API to retrieve history events  for specific day. We also use localStorage to store user manual searches.

©️2021 Made with ❤️ by Sonali, Cabral and Ivonne
