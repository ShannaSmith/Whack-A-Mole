//Place a handle on DOM elements
const hole = document.querySelectorAll(".hole");
const mole = document.querySelectorAll(".mole");
const startButton = document.getElementById("start-game");
const musicButton = document.getElementById("music");
const timeRemaining = document.getElementById("time-Remaining");
const pop = document.getElementById("pop");
const background = document.getElementById("background");
const gameOver = document.createElement("h3");
const gameScore = document.createElement("h3");
const gameOverWhackCount = document.createElement("h3");
const gameOverMessage = document.createElement("p");
//Declare global functions
let score = document.querySelector("#score");
let result = 0;
let currentTime = parseInt(timeRemaining.textContent);
//create mole game function
const moleGame = (e) => {
  //clear endgame message
  document.getElementById("end-message").style.display = "none";
  //remove class name form all occurances of mole. This ensures only the random id will be attached as an identifier
  const randomHole = (e) => {
    hole.forEach((className) => {
      className.classList.remove("mole");
    });
    // generates a random number 1-9 to be id
    let randomPosition = hole[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
  };
  // compares clicked position to mole position and increments score
  hole.forEach((id) => {
    id.addEventListener("click", () => {
      if (id.id === hitPosition) {
        pop.play();
        result += 10;
        score.textContent = `Score: ${result}`;
      }
    });
  });
  //sets speed of the mole
  let moleTimerId = setInterval(randomHole, 1000);
  // displays end game message, stops game function
  const gameOverTask = () => {
    currentTime = 60;
    gameOver.innerText = "GAME OVER!";
    gameScore.innerText = ` SCORE: ${result}`;
    gameOverWhackCount.innerText = `You whacked ${
      result / 10
    } moles over the head! `;
    gameOverMessage.innerText = "Happy gardening!";
    document.getElementById("end-message").appendChild(gameOver);
    document.getElementById("end-message").appendChild(gameScore);
    document.getElementById("end-message").appendChild(gameOverWhackCount);
    document.getElementById("end-message").appendChild(gameOverMessage);
    document.getElementById("end-message").style.display = "block";
    score.innerText = "";
    timeRemaining.textContent = 60;
    result = 0;
    document
      .querySelectorAll(".mole")
      .forEach((e) => e.classList.remove("mole"));
  };
  //manges game time, starts endgame process
  const countDown = () => {
    currentTime--;
    timeRemaining.textContent = currentTime;
    if (currentTime === 0) {
      clearInterval(timerId);
      clearInterval(moleTimerId);
      gameOverTask();
    }
  };
  //sets the speed of countdown, creating a timer
  let timerId = setInterval(countDown, 1000);
  //function called by backgroundmusic function if ternary function condition is met
  const stopBackgroundMusic = () => {
    background.pause();
  };
  //function called by event listener to determine whether button turns music on or off
  const backgroundMusic = () => {
    background.paused ? background.play() : stopBackgroundMusic();
    return;
  };
  //background music button event listener
  musicButton.addEventListener("click", backgroundMusic);
};
// start button event listner, calls molegame function
startButton.addEventListener("click", moleGame);
