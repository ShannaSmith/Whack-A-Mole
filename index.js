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
let score = document.querySelector("#score");
let result = 0;
let currentTime = parseInt(timeRemaining.textContent);

const moleGame = (e) => {
  document.getElementById("end-message").style.display = "none";
  const randomHole = (e) => {
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
        score.textContent = `Score: ${result}`;
      }
    });
  });

  let moleTimerId = setInterval(randomHole, 1000);

  const gameOverTask = () => {
    currentTime = 60;
    gameOver.innerText = "GAME OVER!";
    gameScore.innerText = ` SCORE: ${result}`;
    gameOverWhackCount.innerText = `You whacked ${result / 10} moles over the head! `;
    gameOverMessage.innerText = "Happy gardening!";
    document.getElementById("end-message").appendChild(gameOver);
    document.getElementById("end-message").appendChild(gameScore);
    document.getElementById("end-message").appendChild(gameOverWhackCount);
    document.getElementById("end-message").appendChild(gameOverMessage);
    document.getElementById("end-message").style.display = "block";
    score.innerText = "";
    timeRemaining.textContent = 60;
    result = 0;
    document.querySelectorAll(".mole").forEach((e) => e.classList.remove("mole"));
    
  };
  const countDown = () => {
    currentTime--;
    timeRemaining.textContent = currentTime;
    if (currentTime === 0) {
      clearInterval(timerId);
      clearInterval(moleTimerId);
      gameOverTask();
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
};

startButton.addEventListener("click", moleGame);
