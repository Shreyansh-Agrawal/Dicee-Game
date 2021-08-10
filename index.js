let randomNumber1 = Math.random()*6;
randomNumber1=Math.ceil(randomNumber1);

let randomDiceImage = "images/dice"+randomNumber1+".png";

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

let randomNumber2 = Math.ceil(Math.random()*6);
let randomDiceImage2 = "images/dice"+randomNumber2+".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

let result = document.querySelectorAll("h1")[0];

if(randomNumber1>randomNumber2){
  document.querySelector("h2").innerHTML="Player 1 wins!🏆";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h2").innerHTML="Player 2 wins!🏆";
}
else{
  document.querySelector("h2").innerHTML="🚩Draw🚩";
}
