// Get quotes from the extension settings

// Split quotes into an array
const quoteArray = ['giraffe', 'mermaid', 'poodle'];

// Filter out empty quotes
const filteredQuotes = quoteArray.filter(quote => quote.trim() !== '');

// Select a random quote
const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
const randomQuote = filteredQuotes[randomIndex];

// Inject a quote div on every page
const quoteDiv = document.createElement('div');
quoteDiv.setAttribute('id', 'quote-injector-div');
quoteDiv.style.position = 'fixed';
quoteDiv.style.top = '0';
quoteDiv.style.left = '0';
quoteDiv.style.width = '320px';
quoteDiv.style.height = '240px';
quoteDiv.style.borderRadius = '20px';
quoteDiv.style.backgroundColor = 'rgba(255, 204, 0, 0.3)';
quoteDiv.style.color = '#fff';
quoteDiv.style.fontFamily = 'Arial, sans-serif';
quoteDiv.style.fontSize = '14px';
quoteDiv.style.padding = '10px';
quoteDiv.style.zIndex = '9999';
quoteDiv.textContent = randomQuote;
quoteDiv.style.transition = "background-color 0.2s ease-in";
quoteDiv.style.border = "3px solid black";

// Create close button
const closeButton = document.createElement("button");
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";
closeButton.style.color = "#fff";
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

quoteDiv.addEventListener("mouseover", (event) => {
  quoteDiv.style.backgroundColor = 'rgba(255, 204, 0, 0.7)';
});

quoteDiv.addEventListener("mouseout", (event) => {
  quoteDiv.style.backgroundColor = 'rgba(255, 204, 0, 0.3)';
});

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



