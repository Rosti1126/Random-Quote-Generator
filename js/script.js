/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
    {
       quote: 'Be the change that you wish to see in the world.',
       source: 'Mahatma Gandhi',
       citation:'',
       year:1908
    },
    {
       quote: 'If you tell the truth, you do not have to remember anything.',
       source: 'Mark Twain',
       citation:'The Adventures of Tom Sawyer',
       year:1876
    },
    {
       quote: 'Always forgive your enemies; nothing annoys them so much.',
       source: 'Oscar Wilde',
       citation:'',
       year:1876
    },
    {
       quote: 'You miss 100 percent of the shots you never take',
       source: 'Wayne Gretzky',
       citation:'',
       year:1997
    },
    {
       quote: 'Life is what happens when you’re busy making other plans.',
       source: 'John Lennon',
       citation:'Beautiful boy',
       year:1980
    }
    
];



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);