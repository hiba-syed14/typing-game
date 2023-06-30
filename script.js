const quotes = [
  'Things are only impossible until they are not',
  'It is possible to commit no errors and still lose. That is not a weakness. That is life',
  'There is a way out of every box, a solution to every puzzle; it is just a matter of finding it.',
  'Without freedom of choice there is no creativity',
  'Logic is the beginning of wisdom, not the end',
  'Improve a mechanical device and you may double productivity. But improve yourself, you gain a thousandfold',
  'Compassion: that is the one thing no machine ever had. Maybe it is the one thing that keeps us ahead of them.',
];
const quote = document.getElementById('quote'); // <p id="quote"
const input = document.getElementById('typed-value'); // <imput id="typed-value"
const start = document.getElementById('start'); // <button id="start"
const message = document.getElementById('message');

let wordQueue;
let highlightPosition;
let startTime;

function startGame() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  // start with a string (a quote)
  const quoteText = quotes[quoteIndex];

  // split string values into an array
  wordQueue = quoteText.split(' ');

  // wrap each string within the array with a `<span></span>` tag,
  // and rejoin the array back to a string,
  // add the string of HTML to the p tag with the id of "quote"
  quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');
  
  highlightPosition = 0;
  // quote.childNodes = ['<span>type</span>', '<span>me</span>']
  quote.childNodes[highlightPosition].className = 'highlight';

  startTime = new Date().getTime();
  document.body.className = '';
  start.className = 'started';
  input.focus();
  setTimeout(() => {
    start.className = 'launch';
  }, 500);
  setTimeout(() => {
    start.style.display = 'none';
  }, 750);
}

function checkInput() {
  const currentWord = wordQueue[0].replaceAll('.', '').replaceAll(',', '').replaceAll(';', ''); // the first word in the wordQueue array
  const typedValue = input.value.trim(); // JS string method '  hello world  ' = 'hello world'

  // validate user's typing for errors
  if (currentWord !== typedValue) { // false when the word typed is correct
    input.className = currentWord.startsWith(typedValue) ? '' : 'error';
    return;
  }

  // this is what happens when there is no error...
  wordQueue.shift(); // remove the first word from the wordQueue array, because we already typed it!
  input.value = ''; // clear the input field

  if(wordQueue.length === 0) {
    gameOver();
    return;
  }

  quote.childNodes[highlightPosition].className = '';
  highlightPosition++;
  quote.childNodes[highlightPosition].className = 'highlight';
}

function gameOver() {
  const elapsedTime = new Date().getTime() - startTime;
  document.body.className = 'winner';
  message.innerHTML = `<span class="congrats">Congratulations!</span><br />You finished in ${elapsedTime / 1000} seconds`;
}

start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);