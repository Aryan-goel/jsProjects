//challenge 1
function ageInDays() {
  var birthyear = prompt("your year of birth?");
  var ageInDayss = (2022 - birthyear) * 365;
  var h1 = document.createElement("h1");
  var textAns = document.createTextNode(" you are " + ageInDayss + "days old");
  h1.setAttribute("idy", "ageInDays");
  h1.appendChild(textAns);
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(ageInDayss);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "https://i.kym-cdn.com/photos/images/original/001/931/959/2e4.gif";
  div.appendChild(image);
}
//? rock paper scissors

function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randomToRpsInt());
  console.log("computer choice: ", botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  var youScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [youScore, computerScore];
}
function finalMessage([youScore, computerScore]) {
  if (youScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (youScore === 0.5) {
    return { message: "Tied!!", color: "yellow" };
  } else {
    return { message: "you won!", color: "green" };
  }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  //lets remove all the images

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img width src='" +
    imagesDatabase[humanImageChoice] +
    "' height=160 width=160 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size:60px padding:30px '>" +
    finalMessage["message"] +
    "</.h1>";
  botDiv.innerHTML =
    "<img width src='" +
    imagesDatabase[botImageChoice] +
    "' height=160 width=160 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
  document.getElementById("flex-box-rps-div").append(humanDiv);
  document.getElementById("flex-box-rps-div").append(messageDiv);
  document.getElementById("flex-box-rps-div").append(botDiv);
}
