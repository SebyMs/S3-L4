const creaTabellone = function () {
  const board = document.querySelector(".board-tabelle");
  for (let i = 0; i < 76; i++) {
    board.innerHTML += `<div class='cell' '>${i + 1}</div>`;
  }
};
creaTabellone();
// id='${i + 1}'
const creaTabelline = function () {
  const input = document.querySelector("input");
  const container = document.querySelector("main");
  let inputValue = parseInt(input.value);
  let y = 0;
  let z = 0;
  for (let i = 0; i < inputValue; i++) {
    const tabelle = document.createElement("div");
    tabelle.innerHTML = "";
    // tabelle.setAttribute("id", i);
    tabelle.setAttribute("class", "tabelline-grandi");
    tabelle.setAttribute("id", i);
    container.appendChild(tabelle);
    let divTabelle = document.getElementById(i);
    z += 1;
    x = 0;
    while (x !== 15) {
      const randNum = Math.floor(Math.random() * 100);
      const tabelline = document.createElement("div");
      tabelline.innerHTML = ``;
      tabelline.setAttribute("class", "tabelline");
      stringa = "num" + randNum;
      tabelline.setAttribute("id", stringa);
      if (randNum <= 76 && randNum !== 0) {
        tabelline.innerHTML = `${randNum}`;
        divTabelle.appendChild(tabelline);
        x += 1;
        y += 1;
      }
    }
  }
};

array = [0];
const randNum = function () {
  let x = 0;
  let stringa = "";
  let randNumber = 0;
  while (x !== 1) {
    randNumber = Math.floor(Math.random() * 100);
    if (randNumber <= 76 && randNumber !== 0) {
      array.push(randNumber);
      x = 1;
    }
  }
  stringa = "num" + randNumber;
  console.log(stringa);
  let casella = 0;
  const div = document.querySelectorAll(".board-tabelle div");
  const tabelline = document.getElementById(stringa);
  console.log(tabelline);
  for (let i = 0; i < div.length; i++) {
    if (parseInt(div[i].innerHTML) === array[array.length - 1]) {
      casella = array[array.length - 1];
      div[i].style.backgroundColor = "red";
    }
  }
};
// sistema di controllo se il numero é presente nelle tebbelline
