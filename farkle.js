class Player {
  constructor(name) {
    this.name = name;
    this.diceArr = [];
  }
}

let playersArray = [];

let numberPlayers;
let numberPlayersForm = document.querySelector("form");
function setNumberPlayers(e) {
  e.preventDefault();
  numberPlayers = e.target.elements[0].value;
  console.log(numberPlayers);
  for (let i = 0; i < numberPlayers; i++) {
    let newPlayer = new Player("player" + (i + 1));
    playersArray.push(newPlayer);
  }
  console.log(playersArray);
  initializePlayers();
}
numberPlayersForm.addEventListener("submit", setNumberPlayers);

function initializePlayers() {
  for (let i = 0; i < playersArray.length; i++) {
    let broken = document.createElement("br");
    let parent = document.querySelector("#test");
    parent.appendChild(broken);
    let newRow = document.createElement("div");
    newRow.classList.add("dice");
    newRow.classList.add("row");

    parent.appendChild(newRow);
    for (let i = 1; i < 7; i++) {
      let newDie = document.createElement("img");
      newDie.setAttribute("src", "images/" + i + ".png");
      newDie.setAttribute("id", "die" + i);
      newDie.setAttribute("data-number", i);
      newDie.addEventListener("click", diceClick);
      newRow.appendChild(newDie);
    }
    let newScoreRow = document.createElement("div");
    newScoreRow.classList.add("row");
    newScoreRow.classList.add("score");
    newScoreRow.innerText = 0;
    parent.appendChild(newScoreRow);
    let newButtonRow = document.createElement("div");
    newButtonRow.classList.add("row");
    let newRollButton = document.createElement("button");
    newRollButton.classList.add("button");
    newRollButton.classList.add("roll");
    // newRollButton.classList.add("column");
    newRollButton.innerText = "Roll Dice";
    newButtonRow.appendChild(newRollButton);
    parent.appendChild(newButtonRow);
  }
}

// var diceArr = [];

function initializeDice() {
  for (let i = 0; i < playersArray.length; i++) {
    for (j = 0; j < 6; j++) {
      playersArray[i].diceArr[j] = {};
      //Added parentheses for correct id from html
      playersArray[i].diceArr[j].id = "die" + (j + 1);
      playersArray[i].diceArr[j].value = j + 1;
      playersArray[i].diceArr[j].clicked = 0;
    }
  }
}

/*Rolling dice values*/
function rollDice() {
  for (var i = 0; i < 6; i++) {
    if (diceArr[i].clicked === 0) {
      diceArr[i].value = Math.floor(Math.random() * 6 + 1);
    }
  }
  updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg() {
  var diceImage;
  for (var i = 1; i < 7; i++) {
    //Needed the value of the dice for assigning the picture, not i
    diceImage = "images/" + diceArr[i].value + ".png";
    //To check if they were selecting correctly
    console.log(diceArr[i].id);
    let selected = document.getElementById(diceArr[i].id);
    console.log(selected);
    selected.setAttribute("src", diceImage);
  }
}

//I think we want to pass in the event bc we cant call on this anymore
function diceClick(e) {
  console.log();
  var i = e.target.getAttribute("data-number");
  console.log(i);
  e.target.classList.toggle("transparent");
  console.log(diceArr[i].clicked);
  //Changed double equals of loose comparison to single equals of assignment
  if (diceArr[i].clicked === 0) {
    diceArr[i].clicked = 1;
  } else {
    diceArr[i].clicked = 0;
  }
}

//*To bank score
let score = 0;
function bankScore() {
  let scoreElement = document.querySelector(".score");
  console.log(scoreElement.innerText);
}
