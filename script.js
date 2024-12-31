// Hamburger Menu Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transition = "transform 0.3s ease-in-out"; // Smooth transition
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transition = "transform 0.3s ease-in-out"; // Smooth transition
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "CODER"
];

const speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

// Function to type the text
function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed); // Delay between typing each character
    } else {
        setTimeout(eraseText, 1000); // Wait 1 second before erasing text
    }
}

// Function to erase the text
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Remove last character
        setTimeout(eraseText, 50); // Delay between removing each character
    } else {
        textIndex = (textIndex + 1) % texts.length; // Loop through texts
        charIndex = 0;
        setTimeout(typeWriter, 500); // Delay before starting to type new text
    }
}

// Start typewriter effect when the window is loaded
window.onload = typeWriter;
