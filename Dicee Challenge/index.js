function getRandomInt(max) {
  return Math.floor((Math.random() * Math.floor(max))+1);//without this +1 it would be ranging between 0-5
}
var randomNumber1 = getRandomInt(6);
document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";
var randomNumber2 = getRandomInt(6);
document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "player1 wins"
}else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML = "it's a tie"
}else{
  document.querySelector("h1").innerHTML = "player2 wins"
}
