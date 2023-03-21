let randNum = Math.floor(Math.random() * (20 - 1 + 1) + 1);
const answer = document.querySelector(".answer");
const win = document.querySelector(".win");

const btn = document.getElementById("submit");
const btnAgain = document.querySelector(".again");
const empty = document.getElementById("empty");
let scoreDisplay = document.getElementById("score");
let highscoreEl = document.getElementById("highscore");
const guess = document.querySelector(".start_guessing_text");
const bg = document.getElementsByTagName("body")[0];

// retrieve highscore from localStorage or set it to 0
let highscore = localStorage.getItem("highscore") || 0;
highscoreEl.innerHTML = highscore;

// state variable
let score = 20;
console.log(randNum);
btnAgain.addEventListener("click", function () {
  location.reload();
});

btn.addEventListener("click", function () {
  let input2 = Number(document.getElementById("number").value); //!this should be within the event listener function

  if (!input2 || input2 < 0) {
    guess.innerHTML = "<span style='color:red'>Enter a valid number</span>";
  } 
  
  else if (input2 === randNum) {
    answer.innerHTML = randNum;
    answer.style.color = 'black';
  
    guess.innerHTML = "☑ Correct Guess!";
    bg.style.background = "green";
    win.style.visibility = "visible";
    if(score > highscore){
      highscore = score;
      highscoreEl.innerHTML = highscore;
      localStorage.setItem("highscore", highscore); // store highscore in localStorage
    }
  } 
  //when input is wrong
  else if(input2 !== randNum){
    if (score > 0) {
      guess.innerHTML = input2 > randNum ? "<span style='color:red'>Guess is High</span>" : "<span style='color:red'>Guess is Low</span>";
      score--;
      scoreDisplay.textContent = score;
    } else {
      guess.innerHTML = "<span style='color:red'>You Lost 😔</span>";
    }
  }

});
