const quotes = [
  {
    quote: "he way get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "I shut my eyes in order to see.",
    author: "Paul Gauguin",
  },
  {
    quote: "What I dream if is an art of balance.",
    author: "Henri Matisse",
  },
  {
    quote: "Painting is just another way of keeping a diary.",
    author: "Pablo Picasso",
  },
  {
    quote: "I believe that you always have to beileve.",
    author: "Gerhard Richter",
  },
  {
    quote: "Art is either plagiarism or revolution.",
    author: "Paul Gauguin",
  },
  {
    quote: "Find your eyes.",
    author: "Alec Soth",
  },
  {
    quote: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "A lot of times, people don't know what they want until you show it to them.",
    author: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todatysQuote.quote;
author.innerText = todatysQuote.author;
