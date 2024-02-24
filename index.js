const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius" }
];

const quotation = document.querySelector(".quotation");
const Quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const nextBtn = document.querySelector(".style-btn");


function getRandomQuoteWithAuthor() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}



function nextQuote() {

    const randomQuote = getRandomQuoteWithAuthor();
    const randomQ  = randomQuote.quote;
    const randomA =  randomQuote.author;

    const newQuote = document.createElement('P');
    const newAuthor = document.createElement('p');

    newQuote.textContent = randomQ;
    newAuthor.textContent = randomA;

    newQuote.classList.add("quotes");
    newAuthor.classList.add("author"); 

    quotation.innerHTML = '';
    quotation.appendChild(newQuote);
    quotation.appendChild(newAuthor);


  
}

nextBtn.addEventListener("click", nextQuote);

document.addEventListener("DOMContentLoaded", function() {
    nextQuote();
})


