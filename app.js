const ville = document.getElementById('ville');
const canvas = ville.getContext('2d');

const background = new Image();
background.src = 'images/tile.png';;
background.addEventListener('load', drawMap);

const vaca = new Image();
vaca.src = 'images/vaca.png';

const pollo = new Image();
pollo.src = 'images/pollo.png';
pollo.addEventListener('load', drawPollo);

const cerdo = new Image();
cerdo.src = 'images/cerdo.png';
cerdo.addEventListener('load', drawCerdo);

function drawMap() {
  canvas.drawImage(background, 0, 0);

  const vaca = new Image();
  vaca.src = 'images/vaca.png';
  vaca.addEventListener('load', drawVaca);

  const pollo = new Image();
  pollo.src = 'images/pollo.png';
  pollo.addEventListener('load', drawPollo);

  const cerdo = new Image();
  cerdo.src = 'images/cerdo.png';
  cerdo.addEventListener('load', drawCerdo);
}

function drawVaca() {
  canvas.drawImage(vaca, 10, 10);
}

function drawPollo() {
  canvas.drawImage(pollo, 300, 150);
}

function drawCerdo() {
  canvas.drawImage(cerdo, 10, 300);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
