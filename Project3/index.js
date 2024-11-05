
const quotes = [
    "In the following pages, Ill share with you one thought for each day of a",
    "year that is devoted to the topic of self-discipline, mental toughness", 
    "success, or self-improvement in general. The thoughts come from some of the world",
    "brightest minds: successful entrepreneurs, athletes, bestselling authors",
    "researchers, performers, bloggers, and more",
    "Since the entries are brief and get straight to the heart of the matter, youll",
    "be able to quickly find ongoing inspiration to continue working on your most",
    "important long-term goals and on becoming an ever better person.",
]

const usedIndexes = new Set() // creating a set
const quoteElement = document.getElementById("quote") //getting the functionality for the paragraph element using the id

function generateQuote(){
    while(true){
        const randomidx = Math.floor(Math.random() * quotes.length)

        if(usedIndexes.has(randomidx)) continue
        const quote = quotes[randomidx]
        quoteElement.innerHTML = quote //used to generate a text for that element, in this case we wre giving the paragraph element in html the text "hello world"
        usedIndexes.add(randomidx)
        if (usedIndexes.length === quotes.length) {usedIndexes.clear}
        break
    }
}