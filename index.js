// Remove the main element from the DOM
main.remove();

// Create a new element with an id of 'victory'
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Set the text content of the new element
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

// Append the new element to the document body
document.body.appendChild(newHeader);
// Write your code here!
