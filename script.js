"use strict mode";
let elNetScore1 = document.querySelectorAll(".net");
//let elNetScore2 = document.querySelector(".netScore2");
let elCurrScore1 = document.querySelectorAll(".curr");
//let elCurrScore2 = document.querySelector(".currScore2");
let btnRoll = document.querySelector(".rollDice");
let btnHold = document.querySelector(".hold");
let diceNum = 0;
let dice = document.querySelector(".dice");
let currScore = [0, 0];
let netScore = [0, 0];
let i = 0;
let box = document.querySelectorAll(".box");
let mess = document.querySelector(".winMessage");
let bdy = document.querySelector("body");
box[i].style.opacity = "0.8";
// var dice2= document.querySelector('.dice2');
// var dice3= document.querySelector('.dice3');
// var dice4= document.querySelector('.dice4');
// var dice5= document.querySelector('.dice5');
// var dice6= document.querySelector('.dice6');

function roll() {
  diceNum = Math.floor(Math.random() * 6) + 1;

  dice.classList.remove("hidden");
  dice.style.backgroundImage = `url('dice-${diceNum}.png')`;
  if (diceNum != 1) {
    currScore[i] += diceNum;
    elCurrScore1[i].textContent = currScore[i];
  } else {
    currScore[i] = 0;
    elCurrScore1[i].textContent = currScore[i];
    box[i].style.opacity = "0.4";
    i = i == 0 ? 1 : 0;
    box[i].style.opacity = "0.8";
  }
}

function hold() {
  netScore[i] += currScore[i];
  elNetScore1[i].textContent = netScore[i];
  currScore[i] = 0;
  elCurrScore1[i].textContent = currScore[i];
  if (netScore[i] >= 100) {
    console.log("kljjji");
    mess.classList.remove("hidden");
    mess.textContent = `Player ${
      i + 1
    } Won this match🎊🎊🥳    ,refresh the page for a new game😍😍`;
    box[0].style.opacity = "0.4";
    box[1].style.opacity = "0.4";
    // bdy.style.backgroundImage = "linear-gradient(to bottom right, blue ,black)";
    bdy.style.backgroundImage = "url(pig3.jfif)";
    btnHold.style.opacity = "0";
    btnRoll.style.opacity = "0";

    dice.classList.add("hidden");

    return;
  }
  box[i].style.opacity = "0.4";
  i = i == 0 ? 1 : 0;
  box[i].style.opacity = "0.8";
}

btnRoll.addEventListener("click", roll);
btnHold.addEventListener("click", hold);
