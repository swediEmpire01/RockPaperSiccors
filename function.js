const play = document.getElementById("strt");
const stopit = document.getElementById("stop");
const notice= document.getElementById("child");
const hed= document.getElementById("topHed");
const drk= document.getElementById("drkbck");
const sts= document.getElementById("Sts");
const showComScore=  document.getElementById("computerScore");
const comp= document.getElementById("computer");
const plyer= document.getElementById("player");
const plyerScore= document.getElementById("playerScore");
const rockShow= document.getElementById("Rock");
const pperShow= document.getElementById("Paper");
const siccorsShow= document.getElementById("Siccors");
const loseSond= new Audio('assets/sounds/WrongBuded.mp3');
const winSond=  new Audio('assets/sounds/TheRight.mp3');
const loseRound= new Audio('assets/sounds/Loses.mp3');
const winRound=  new Audio('assets/sounds/Win.mp3');
let computerDecision = ["Rock", "Paper", "Siccors"];
let comDecided = null;
let comScore = 0;
let userSCore = 0;

//shuffle code by www.geeksforgeeks.org, Danko
function shuffle(array){
    for( var i = array.length -1; i > 0; i--){
        var j = Math.floor(Math.random()*(i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}


function close(){
        notice.style.display = "none";
        drk.style.display = "none";
}
addEventListener("click", close)

function stopGme(){
    hed.innerHTML= "ROCK-PAPER-SICCORS";
    stopit.style.display= "none";
    comDecided = null;
    comScore = 0;
    userSCore = 0;
    sts.textContent = "Status"
    plyerScore.textContent = 0;
    showComScore.textContent = 0;
}

function rock(stuff){
    hed.innerHTML= "ROCK-PAPER-SICCORS";
    stopit.style.display= "block";
    plyer.textContent = "Rock";
    computerDecision = shuffle(computerDecision);
    comDecided = computerDecision["0"];
    comp.textContent = comDecided;
    if(comDecided == "Rock"){
        sts.textContent = "It's a tie "
        rockShow.style.border="solid 3px #000"
        pperShow.style.border="solid 3px #000"
        siccorsShow.style.border="solid 3px #000"
    }
    else if(comDecided == "Paper"){
        sts.textContent = "You Lost"
        comScore ++;
        showComScore.textContent = comScore;
        rockShow.style.border="solid 3px #ff5050"
        pperShow.style.border="solid 3px #000"
        siccorsShow.style.border="solid 3px #000"
        loseSond.play();
    }
    else if(comDecided == "Siccors"){
        winSond.play();
        sts.textContent = "You Won"
        userSCore ++;
        plyerScore.textContent = userSCore;
        rockShow.style.border="solid 3px #66ffb3"
        pperShow.style.border="solid 3px #000"
        siccorsShow.style.border="solid 3px #000"
    }
    stuff();
}

function paper(stuff){
    hed.innerHTML= "ROCK-PAPER-SICCORS";
    stopit.style.display= "block";
    computerDecision = shuffle(computerDecision);
    comDecided = computerDecision["1"];
    plyer.textContent = "Paper";
    comp.textContent = comDecided;
    if(comDecided == "Paper"){
        sts.textContent = "It's a tie "
        pperShow.style.border="solid 3px #000"
        siccorsShow.style.border="solid 3px #000"
        rockShow.style.border="solid 3px #000"
    }
    else if(comDecided == "Siccors"){
        loseSond.play();
        sts.textContent = "You Lost"
        comScore ++;
        showComScore.textContent = comScore;
        pperShow.style.border="solid 3px #ff5050"
        siccorsShow.style.border="solid 3px #000"
        rockShow.style.border="solid 3px #000"
    }
    else if(comDecided == "Rock"){
        winSond.play();
        sts.textContent = "You Won"
        userSCore ++;
        plyerScore.textContent = userSCore;
        pperShow.style.border="solid 3px #66ffb3"
        siccorsShow.style.border="solid 3px #000"
        rockShow.style.border="solid 3px #000"
    }
    stuff();
}

function siccors(stuff){
    hed.innerHTML= "ROCK-PAPER-SICCORS";
    stopit.style.display= "block";
    plyer.textContent = "Siccors";
    computerDecision = shuffle(computerDecision);
    comDecided = computerDecision["1"];
    comp.textContent = comDecided;
    if(comDecided == "Siccors"){
        sts.textContent = "It's a tie "
        siccorsShow.style.border="solid 3px #000"
        pperShow.style.border="solid 3px #000"
        rockShow.style.border="solid 3px #000"
    }
    else if(comDecided == "Rock"){
        loseSond.play();
        sts.textContent = "You Lost"
        comScore ++;
        showComScore.textContent = comScore;
        siccorsShow.style.border="solid 3px #ff5050"
        pperShow.style.border="solid 3px #000"
        rockShow.style.border="solid 3px #000"
    }
    else if(comDecided == "Paper"){
        winSond.play();
        sts.textContent = "You Won"
        userSCore ++;
        plyerScore.textContent = userSCore;
        siccorsShow.style.border="solid 3px #66ffb3"
        pperShow.style.border="solid 3px #000"
        rockShow.style.border="solid 3px #000"
        
    }
    stuff();
}

function checkWinner(){
    if(userSCore== 16){
        hed.innerHTML= "YOU HAVE WON!!! &#127881 &#128293 &#129395 &#x1f973 &#127881 &#129395 &#x1f973 "
        stopit.style.display= "none";
        comScore = 0;
        userSCore = 0;
        sts.textContent = "Status"
        plyerScore.textContent = 0;
        showComScore.textContent = 0;
        winRound.play();
    }
    else if(comScore== 16){
        hed.innerHTML= "YOU HAVE LOST &#128557 &#128514 &#128520 &#128529"
        stopit.style.display= "none";
        comScore = 0;
        userSCore = 0;
        sts.textContent = "Status"
        plyerScore.textContent = 0;
        showComScore.textContent = 0;
        loseRound.play()
    }
}
addEventListener("click",checkWinner);