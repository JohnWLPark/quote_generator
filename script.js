const quotes = [
    {
        name: "Winston Churchill",
        quote: "However beautiful the strategy, you should occasionally look at the results"
    },
    {
        name: "Napoleon Bonaparte",
        quote: "You must not fight too often with one enemy, or you will teach him all your art of war"
    }, 
    {
        name: "Richard Marcinko",
        quote: "the more you sweat in training, the less you bleed in combat"
    },
    {
        name: "Miyamoto Musashi",
        quote: "Never stray from The Way"
    },
    {
        name: "German Proverb",
        quote: "On the day of victory, no fatigue is felt"
    }
]

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener('click', () => {
    let number = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
})