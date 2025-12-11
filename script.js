const typingText = [
    "I am Excited To Join Your Team...! ",
    "I am an ambitious IS graduate...",
    "A Beginner Programmer...",
    "And Someone Who Can Play Golf... kind of.",
    "Let’s dive into my journey!"
];

const typingElement = document.getElementById("typing");
const detailsElement = document.getElementById("details");
const startBtn = document.getElementById("startBtn");

let charIndex = 0;
let lineIndex = 0;

// NEW FLAG — this lets us stop the typing when button is clicked
let typingStopped = false;

function typeText() {
    // Stop typing immediately if user clicked the button
    if (typingStopped) return;

    if (lineIndex < typingText.length) {
        if (charIndex < typingText[lineIndex].length) {
            typingElement.textContent += typingText[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        } else {
            charIndex = 0;
            lineIndex++;
            setTimeout(() => {
                if (!typingStopped) typingElement.textContent = "";
                typeText();
            }, 2000);
        }
    } else {
        startBtn.style.display = "block";
    }
}

startBtn.addEventListener("click", () => {
    // Stop the typing animation
    typingStopped = true;

    // Hide the button
    startBtn.style.display = "none";

    // Show extra details
    detailsElement.classList.remove("hidden");

    // Optional: clear the typing text if you don't want it to stay visible
    // typingElement.textContent = "";
});

typeText();




