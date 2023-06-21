const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');

let targetWord;

function startGame() {
  console.log('Game started!');
  targetWord = 'typeme';
  quote.innerHTML = `<span>${targetWord}</span>`;
}

start.addEventListener('click', startGame);