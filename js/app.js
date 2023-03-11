//1

const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const resetButton = document.getElementById('reset');


let bgColor = '#fff';
let textColor = '#000';

redButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ff0000';
  document.body.style.color = '#fff';
});

blueButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#00a2ff';
  document.body.style.color = '#fff';
});

greenButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#00ff00';
  document.body.style.color = '#000';
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
});