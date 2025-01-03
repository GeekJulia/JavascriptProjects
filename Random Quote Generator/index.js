
const quotes = [
    "A In the following pages, Ill share with you one thought for each day of a",
    "B year that is devoted to the topic of self-discipline, mental toughness", 
    "C success, or self-improvement in general. The thoughts come from some of the world",
    "D brightest minds: successful entrepreneurs, athletes, bestselling authors",
    "E researchers, performers, bloggers, and more",
    "F Since the entries are brief and get straight to the heart of the matter, youll",
    "G be able to quickly find ongoing inspiration to continue working on your most",
    "H important long-term goals and on becoming an ever better person.",
]

const usedIndexes = new Set() // creating a set
const quoteElement = document.getElementById("quote") //getting the functionality for the paragraph element using the id

function generateQuote(){
    /*if(usedIndexes.size >= quotes.length){    // Another method for preventing the infinite loop at the continue part.
        usedIndexes.clear
    }*/
    while(true){
        const randomidx = Math.floor(Math.random() * quotes.length)
        if(usedIndexes.has(randomidx)) 
            continue
        const quote = quotes[randomidx]
        quoteElement.innerHTML = quote //used to generate a text for that element, in this case we are giving the paragraph element in html the text "hello world"
        usedIndexes.add(randomidx)
        if (usedIndexes.size === quotes.length) {
            usedIndexes.clear()
        }
        break
    }
}