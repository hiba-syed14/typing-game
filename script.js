const quote = document.getElementById('quote'); // <p id="quote"
const input = document.getElementById('typed-value');
const start = document.getElementById('start'); // <button id="start"

let quoteText; // undefined
let wordQueue;
let highlightPosition;

function startGame() {
  quoteText = 'type me';
  wordQueue = quoteText.split(' '); // ['type', 'me']
  quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join(''); // <span>type</span><span>me</span>
  
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
}

start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);