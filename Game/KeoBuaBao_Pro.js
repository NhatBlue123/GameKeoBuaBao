//xu ly su kien khi nhan phim
document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
      playGame("rock");
    } else if (event.key === "p") {
      playGame("paper");
    } else if (event.key === "s") {
      playGame("scissors");
    } else if (event.key === "a") {
      autoPlay();
    } else if (event.key === "Backspace") {
      showReset();
    }
  });
  //luu diem
  const score = JSON.parse(localStorage.getItem("sc")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  //random keo bua bao
  function randomNumber() {
    let rd = Math.random();
    if (rd >= 0 && rd < 1 / 3) {
      return "rock";
    } else if (rd >= 1 / 3 && rd < 2 / 3) {
      return "paper";
    }
    return "scissors";
  }
  //them su kien khi nhan vao nut rock paper scissors
  document.querySelector(".js-rock-button").addEventListener("click", () => {
    playGame("rock");
  });
  document.querySelector(".js-paper-button").addEventListener("click", () => {
    playGame("paper");
  });
  document.querySelector(".js-scissors-button").addEventListener("click", () => {
    playGame("scissors");
  });
  //choi game
  function playGame(movePlayer) {
    let moveComputer = randomNumber();
    let result = "";
    if (movePlayer === "rock") {
      if (moveComputer === "rock") {
        result = "Tie.";
      } else if (moveComputer === "paper") {
        result = "Loss.";
      } else {
        result = "Win.";
      }
    } else if (movePlayer === "paper") {
      if (moveComputer === "rock") {
        result = "Win.";
      } else if (moveComputer === "paper") {
        result = "Tie.";
      } else {
        result = "Loss.";
      }
    } else if (movePlayer === "scissors") {
      if (moveComputer === "rock") {
        result = "Loss.";
      } else if (moveComputer === "paper") {
        result = "Win.";
      } else {
        result = "Tie.";
      }
    }
  //tinh diem
    if (result === "Win.") {
      score.wins += 1;
      document.querySelector(".kq").innerHTML = "You win.";
    } else if (result === "Loss.") {
      score.losses += 1;
      document.querySelector(".kq").innerHTML = "You lose.";
    } else {
      score.ties += 1;
      document.querySelector(".kq").innerHTML = "Tie.";
    }
    localStorage.setItem("sc", JSON.stringify(score));
    //in anh
    document.querySelector(".player-computer").innerHTML = `You
      <img class="rps" src="${movePlayer}-emoji.png" alt="">
      <img class="rps" src="${moveComputer}-emoji.png" alt="">
      Computer`;
      //in diem
    output();
  }
  function output() {
    document.querySelector(
      ".results"
    ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
  }
  
  
  
  const askQ = document.querySelector(".ask");
  document.querySelector(".reset").addEventListener("click", () => {
    showReset();
  });
  //hien reset score
  function showReset() {
    askQ.innerHTML =
      'Are you sure you want to reset the score? <button class="yes">Yes</button> <button class="no">No</button>';
    document.querySelector(".yes").addEventListener("click", () => {
      resetScore();
      hideReset();
    });
    document.querySelector(".no").addEventListener("click", () => {
      hideReset();
    });
  }
  // an
  function hideReset() {
    document.querySelector(".ask").innerHTML = "";
  }
  function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem("sc", JSON.stringify(score));
    output();
  }
  function reLoad() {
    output();
  }
  //auto play
  const auto = document.querySelector(".auto-play");
  let isAutoPlaying = false;
  let intervalID;
  function autoPlay() {
    if (isAutoPlaying === false) {
      auto.innerHTML = "Stop playing";
      intervalID = setInterval(() => {
        const movePlayer = randomNumber();
        playGame(movePlayer);
      }, 1000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalID);
      auto.innerHTML = "Auto play";
      isAutoPlaying = false;
    }
  }
  // const autoPlayButton = document
  //   .querySelector(".auto-play")
  //   .addEventListener("click", autoPlay());
  