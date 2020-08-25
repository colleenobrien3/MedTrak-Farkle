var diceArr = [];

function initializeDice() {
  for (i = 0; i < 6; i++) {
    diceArr[i] = {};
    //Added parentheses for correct id from html
    diceArr[i].id = "die" + (i + 1);
    diceArr[i].value = i + 1;
    diceArr[i].clicked = 0;
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

function diceClick(img) {
  console.log(img);
  var i = img.getAttribute("data-number");
  console.log(i);
  img.classList.toggle("transparent");
  console.log(diceArr[i].clicked);
  if (diceArr[i].clicked === 0) {
    diceArr[i].clicked = 1;
  } else {
    diceArr[i].clicked = 0;
  }
}
