let randomNumber1= Math.floor(Math.random()*6) + 1;
let randomNumber2= Math.floor(Math.random()* 6) + 1;

let ranImgSrc1= "images/" + "dice" + randomNumber1 + ".png";
let ranImgSrc2= "images/" + "dice" + randomNumber2 + ".png";



document.querySelector(".img1").addEventListener("click", rollDice1);
function rollDice1(e){
    document.querySelectorAll("img")[0].setAttribute("src", ranImgSrc1);
    e.preventDefault();
}

document.querySelector(".img2").addEventListener("click", rollDice2);
function rollDice2(e){
    document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc2);
    e.preventDefault();
}


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText=" Player 1: Winner!"
    }else if (randomNumber1<randomNumber2) {
        document.querySelector("h1").innerText="Player 2: Winner!"
    }else{
        document.querySelector("h1").innerText="Draw!!!"
    };


