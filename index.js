const hole = document.querySelectorAll('.hole');
const mole = document.querySelectorAll('.mole');
const timeRemaining = document.getElementById('time-Remaining');
let score = document.querySelector('#score');
let result = 0;
let currentTime = parseInt(timeRemaining.textContent);
console.log(currentTime);
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
let timerId = setInterval(countDown, 1000);
moveMole();
