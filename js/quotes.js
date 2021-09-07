const quotes = [
  {
    quotes: "Think like a man of action and act like man of thought.",
    author: "wook",
  },
  {
    quotes:
      "Courage is very important. Like a muscle, it is strengthened by use.",
    author: "hyun",
  },
  {
    quotes:
      "Life is the art of drawing sufficient conclusions from insufficient premises.",
    author: "taek",
  },
  {
    quotes: "By doubting we come at the truth.",
    author: "young",
  },
  {
    quotes:
      "A man that hath no virtue in himself, ever envieth virtue in others.",
    author: "seok",
  },
  {
    quotes: "When money speaks, the truth keeps silent.",
    author: "ju",
  },
  {
    quotes: "Better the last smile than the first laughter.",
    author: "yoon",
  },
  {
    quotes:
      "In the morning of life, work; in the midday, give counsel; in the evening, pray.",
    author: "hoon",
  },
  {
    quotes: "Painless poverty is better than embittered wealth.",
    author: "roy",
  },
  {
    quotes: "A poet is the painter of the soul.",
    author: "bob",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const rand = Math.floor(Math.random() * 10);
const randQuote = quotes[rand];

quote.innerText = randQuote.quotes;
author.innerText = randQuote.author;
