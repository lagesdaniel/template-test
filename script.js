const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

// let apiQuotes = [];

//SHOW LOADING
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//HIDE LOADING
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//SHOW NEW QUOTE
function newQuote(){
    loading();
    //PICK RANDOM QUOTE FROM apiQuotes ARRAY
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    //CHEKC IF AUTHOR FIELD IS BLANK AND REPLACE IT WITH 'UNKNOWN'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    //CHECK QUOTE LENGTH TO DETERMINE STYLING
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //SET QUOTE, HIDE LOADER
    quoteText.textContent = quote.text;
    complete();
    // const quoteAPI = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quoteAPI);

}

//GET QUOTES FROM API
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl)
//         apiQuotes = await response.json();
//         newQuote();
//     }catch(error){
        
//     }
// }


//TWEET QUOTE
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

//EVENT LISTENERS
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// ON LOAD API
// getQuotes();

//ON LOAD LOCAL
newQuote();



















