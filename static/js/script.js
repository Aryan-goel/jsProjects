//challenge 1
function ageInDays() {
  var birthyear = prompt("your year of birth?");
  var ageInDayss = (2022 - birthyear) * 365;
  var h1 = document.createElement("h1");
  var textAns = document.createTextNode(" you are " + ageInDayss + "days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAns);
  document.getElementById('flex-box-result').appendChild(h1)
  console.log(ageInDayss);
}
