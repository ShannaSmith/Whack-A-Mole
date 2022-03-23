const hole = document.querySelectorAll(".hole");
const mole = document.querySelectorAll(".mole");
const startButton = document.getElementById("start-game");
const musicButton = document.getElementById("music");
const timeRemaining = document.getElementById("time-Remaining");
const pop = document.getElementById("pop");
const background = document.getElementById("background");
const gameOver = document.createElement('p');

let score = document.querySelector("#score");
let result = 0;
let currentTime = parseInt(timeRemaining.textContent);

const moleGame = (e) => {
  gameOver.innerText ='';
  const randomHole = () => {
    hole.forEach((className) => {
      className.classList.remove("mole");
    });

    let randomPosition = hole[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
  };
  hole.forEach((id) => {
    id.addEventListener("click", () => {
      if (id.id === hitPosition) {
        pop.play();
        result += 10;
        score.textContent = result;
        
      }
    });
  });
 
  let moleTimerId = setInterval(randomHole, 2000);
  //const moveMole = () => {
  //  let timerId = null;
   // if(currentTime > 0) {
    
   //   console.log(currentTime);
  //  } 
    
 // };

 const endGameScreen = () => {
  gameOver.innerText = `GAME OVER! You whacked ${result/ 10} moles over the head! Happy gardening!`;
 
 document.getElementById('end-message').appendChild(gameOver);

document.getElementById('end-message').style.display = 'inline-block';
};
  const countDown = () => {
    currentTime--;
    timeRemaining.textContent = currentTime;
    if (currentTime === 0) {
      clearInterval(timerId);
      background.pause();
      clearInterval(moleTimerId);
      endGameScreen();
    }
  };
  let timerId = setInterval(countDown, 1000);

  const stopBackgroundMusic = () => {
    background.pause();
  };

  const backgroundMusic = () => {
    background.paused ? background.play() : stopBackgroundMusic();
    return;
  };
  
  musicButton.addEventListener("click", backgroundMusic);
  
  
 // moveMole();}

  
};
startButton.addEventListener("click", moleGame);

