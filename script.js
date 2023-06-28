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
const input = document.getElementById('typed-value');
const start = document.getElementById('start'); // <button id="start"
const message= document.getElementById('message');


let quoteText; // undefined
let wordQueue;
let highlightPosition;
let startTime;

function startGame() {
  const quoteIndex= Math.floor(Math.random()*quotes.length);
  const quoteText=quotes[quoteIndex];
  wordQueue = quoteText.split(' '); 
  quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join(''); 
  
  highlightPosition = 0;
  // quote.childNodes = ['<span>type</span>', '<span>me</span>']
  quote.childNodes[highlightPosition].className = 'highlight';
}

function checkInput() {
  console.log('Checking', input.value);
  const currentWord = wordQueue[0]; // the first word in the wordQueue array
  const typedValue = input.value.trim(); // JS string method '  hello world  ' = 'hello world'
  
  if (currentWord !== typedValue) { // false when the word typed is correct
    input.className = currentWord.startsWith(typedValue) ? '' : 'error';
    return;
  }

  wordQueue.shift(); // remove the first word from the wordQueue array, because we already typed it!
  input.value = ''; // clear the input field
  if (wordQueue.length=== 0) {// if we have run out of words then game over.}
    gameOver();
    return;
}
  quote.childNodes[highlightPosition].className = "";
  highlightPosition++;
  quote.childNodes[highlightPosition].className = "highlight";
  
}

function gameOver() {
  const elapsedTime= new Date().getTime() - startTime;
  message.innerHTML=`
  <span class"congrats">Congratulations!</span><br>
  You finished in ${elapsedTime} seconds.
  `;
}

start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);