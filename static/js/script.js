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
  //humanChoice=yourChoice.id
  //botChoice=

  //results=decideWinner(humanChoice,botChoice);//
  //message=finalMessage(result)
  rpsFrontEnd(yourChoice.id, botChoice, message);
}
