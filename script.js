let goodKarma = document.getElementById("goodKarma");
let gK = 0;
let badKarma = document.getElementById("badKarma");
let bK = 0;
let good = document.getElementById("good");
let bad = document.getElementById("bad");
let rebirth = document.getElementById("rebirth");
let moksa = document.getElementById("moksa");

function increGood() {
  goodKarma.value = gK++;
}

function decreGood() {
  goodKarma.value = gK--;
}

function increBad() {
  badKarma.value = bK++;
}

function decreBad() {
  badKarma.value = bK--;
}
function attainMoksa() {
  rebirth.style.width = badKarma.value - goodKarma.value + 'px';
  good.style.height = 'auto';
  moksa.style.width = goodKarma.value - badKarma.value + 'px';
}

function updateGood() {
  good.style.height = goodKarma.value + 'px';
  rebirth.style.width = badKarma.value - goodKarma.value + 'px';
}

function updateBad() {
  bad.style.height = badKarma.value + 'px';
  rebirth.style.width = badKarma.value - goodKarma.value + 'px';
  console.log(rebirth.style.width);
}