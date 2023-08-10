// randomNumber1=Math.random();

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = "./images/dice" + randomNumber1 + ".png";
document.getElementById("img1").setAttribute("src", randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.getElementById("img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins the game 😎";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 wins the game 😏";
} else {
  document.querySelector("h1").innerText = "Its a Draw😪";
}
