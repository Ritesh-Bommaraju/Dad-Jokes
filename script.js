const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', jokeGenerator)
jokeGenerator()

function jokeGenerator(){
    fetch('https://icanhazdadjoke.com', {headers:{
        'Accept' : 'application/json'

    }})
    .then(res => res.json())
    .then(data=>{
        jokeEl.innerHTML = data.joke
    })
}

