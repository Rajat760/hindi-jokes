const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter")
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Joke...";
    fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=94fd1f1570176f6c1b0501c6e380").then(response => response.json()).then(result => {
        quoteText.innerText = result.jokeContent;
    
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Joke";
    });
}

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);



