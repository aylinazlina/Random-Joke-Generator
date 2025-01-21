let JokeButton=document.querySelector(".JokeButton");
let jokeContainer=document.querySelector(".jokeContainer");

//joke api 
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke=()=>{
    jokeContainer.classList.remove("faded")
    fetch(url)
    .then(data =>data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("faded");
        
    })
}

getJoke();

JokeButton.addEventListener("click",getJoke);

