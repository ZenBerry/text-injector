// Get quotes from the extension settings – doesn't work for now
// chrome.storage.sync.get({ quotes: '' }, function (items) {
//   console.log(items.quotes);
// })

// Split quotes into an array
const quoteArray = [
'Check every method before you make changes to it: where else is it called? – my CTO',
'Never leave empty fields in an object – My CTO',
'Perfect calls to the server contain only an _id',
'Always clear the fields when you copy code from somewhere #important',
'Always check if you can use const instead of let'
];

// Filter out empty quotes
const filteredQuotes = quoteArray.filter(quote => quote.trim() !== '');

// Select a random quote
const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
const randomQuote = filteredQuotes[randomIndex];

// Inject a quote div on every page
const quoteDiv = document.createElement('div');
quoteDiv.setAttribute('id', 'quote-injector-div');
quoteDiv.style.position = 'fixed';
quoteDiv.style.top = Math.floor(Math.random() * (window.innerHeight-100)) + 'px'; // Randomize vertical position
quoteDiv.style.left = Math.floor(Math.random() * (window.innerWidth-100)) + 'px'; // Randomize horizontal position
// quoteDiv.style.width = '160px';
// quoteDiv.style.height = '120px';
quoteDiv.style.borderRadius = '20px';
quoteDiv.style.backgroundColor = 'rgba(255, 204, 0, 1)';
quoteDiv.style.color = '#000'; // Set text color to black
quoteDiv.style.fontFamily = 'Arial, sans-serif';
quoteDiv.style.fontSize = '16px';
quoteDiv.style.padding = '30px';
quoteDiv.style.zIndex = '9999';
quoteDiv.textContent = randomQuote;
quoteDiv.style.transition = "background-color 0.2s ease-in";
quoteDiv.style.border = "3px solid black";

// Create close button
const closeButton = document.createElement("button");
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";
closeButton.style.color = "#000"; // Set close button color to black
closeButton.style.border = "none";
closeButton.style.backgroundColor = "transparent";
closeButton.innerHTML = "&#10006;"; // Close symbol (X)

// Add event listener to close button
closeButton.addEventListener("click", () => {
  document.body.removeChild(quoteDiv);
});

quoteDiv.appendChild(closeButton); // Add close button to the div

// Make the div draggable
let isDragging = false;
let offset = { x: 0, y: 0 };

quoteDiv.addEventListener("mousedown", (event) => {
  isDragging = true;
  offset = {
    x: event.clientX - quoteDiv.offsetLeft,
    y: event.clientY - quoteDiv.offsetTop,
  };
});

// quoteDiv.addEventListener("mouseover", (event) => {
//   quoteDiv.style.backgroundColor = 'rgba(255, 204, 0, 1)';
// });

// quoteDiv.addEventListener("mouseout", (event) => {
//   quoteDiv.style.backgroundColor = 'rgba(255, 204, 0, 0.3)';
// });

quoteDiv.addEventListener("mouseup", () => {
  isDragging = false;
});

quoteDiv.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const left = event.clientX - offset.x;
    const top = event.clientY - offset.y;
    quoteDiv.style.left = `${left}px`;
    quoteDiv.style.top = `${top}px`;
  }
});

document.body.appendChild(quoteDiv);



