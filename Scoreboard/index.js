let score1 = document.getElementById("score1-el");
let count = 0;

function homeplus1() {
  count += 1;
  score1.textContent = count;
}

function homeplus2() {
  count += 2;
  score1.textContent = count;
}
function homeplus3() {
  count += 3;
  score1.textContent = count;
}

let score2 = document.getElementById("score2-el");

let count2 = 0;
function awayplus1() {
  count2 += 1;
  score2.textContent = count2;
}
function awayplus2() {
  count2 += 2;
  score2.textContent = count2;
}
function awayplus3() {
  count2 += 3;
  score2.textContent = count2;
}

let newgame = document.getElementById("newgame9");
function newgame1() {
  score2.textContent = 0;
  score1.textContent = 0;
  count = 0;
  count2 = 0;
}
