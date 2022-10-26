// Hex code array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Select button
const btn = document.getElementById('btn');

// Select span where generated hex code will go
const color = document.querySelector(".color");

// Create button that on click will run a for loop that iterates 6 times to generate a hex code
btn.addEventListener("click", function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    };
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Generate a random number 
const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
};