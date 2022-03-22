const hole = document.querySelectorAll('.hole');
const mole = document.querySelectorAll('.mole');
const startButton = document.getElementById('start-game');
const soundButton = document.getElementById('sound-effect');
const musicButton = document.getElementById('music');
const timeRemaining = document.getElementById('time-Remaining');
const pop = document.getElementById('pop');
const background = document.getElementById('background');
let score = document.querySelector('#score');
let result = 0;
let currentTime = parseInt(timeRemaining.textContent);
console.log(currentTime);
const moleGame = (e) =>{
background.play();
const randomHole = () => {
    hole.forEach(className =>{
        className.classList.remove('mole');
        console.log(hole);
    })

let randomPosition = hole[Math.floor(Math.random() * 9)];
randomPosition.classList.add('mole')
console.log(hole);
 hitPosition = randomPosition.id;
 console.log(hitPosition);
}
hole.forEach(id => {
    id.addEventListener('mouseover', () =>{
        if(id.id === hitPosition){
            pop.play();
            result += 10;
            score.textContent = result;
            console.log(result);
        }
    })
})
const moveMole = ()=>{
    let timerId = null;
    timerId = setInterval(randomHole, 2000);
}

const countDown = () =>{
    currentTime--;
    timeRemaining.textContent = currentTime ;
   console.log(currentTime);
   if(currentTime === 0){
       clearInterval(timerId)
     alert(`Game Over! Your final score is ${result}`);
   }
}
let timerId = setInterval(countDown, 1000)
const playMusic = () =>{
    pop.play();
}
const backgroundMusic = () =>{
    background.play();
}
const effectSound = new Audio("/sounds/woodwack.wav")

moveMole();
}
startButton.onclick = moleGame;
