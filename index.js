var randomnumber1=Math.floor(Math.random()*6+1);
var diceimage= "dice"+ randomnumber1  + ".png";

var randomImagesource="images/images/"+ diceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);




var randomnumber2=Math.floor(Math.random()*6+1);
var diceimage2="dice"+randomnumber2 +".png";
var randomImagesource2="images/images/"+diceimage2


var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);


if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="This is draw!";
}