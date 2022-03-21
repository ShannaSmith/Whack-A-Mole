hole.forEach(id => {
    id.addEventListener('onclick', () =>{
        if(id.id === hitPosition){
            result += 10;
            score.textContent = result;
        }
    })
})
const moveMole = ()=>{
    let timerId = null;
    timerId = setInterval(randomHole, 1000);
}
moveMole();
//const countDown = () =>{
   // timeRemaining.textContent = currentTime
  //  if(currentTime === 0){
  //      clearInterval(timerId)
  //      alert(`Game Over! Your final score is ${result}`);
  //  }
//}
//let timerId = setInterval(countDown, 1000);
//moveMole();