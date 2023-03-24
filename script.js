const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter")
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=94fd1f1570176f6c1b0501c6e380").then(response => response.json()).then(result => {
        quoteText.innerText = result.jokeContent;
    
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
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



const options = {
	method: 'GET',
	headers: {
		Authorization: 'chrnMsqPx8Ww',
		'X-RapidAPI-Key': '3052958391msh06455a139ad1e2bp178c32jsn9a7cbead68fb',
		'X-RapidAPI-Host': 'random-stuff-api.p.rapidapi.com'
	}
};

fetch('https://random-stuff-api.p.rapidapi.com/reddit/RandomMeme?searchType=hot', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));