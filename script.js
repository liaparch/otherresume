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

//  typing + button div id:
const introSection = document.getElementById("introSection");

let charIndex = 0;
let lineIndex = 0;

let typingStopped = false;       // flag to stop logic
let typingTimeoutId = null;      // track the current timeout

function typeText() {
    if (typingStopped) return;   // hard stop

    if (lineIndex < typingText.length) {
        if (charIndex < typingText[lineIndex].length) {
            typingElement.textContent += typingText[lineIndex].charAt(charIndex);
            charIndex++;

            // store timeout id so it can be cleared later
            typingTimeoutId = setTimeout(typeText, 50);
        } else {
            charIndex = 0;
            lineIndex++;

            typingTimeoutId = setTimeout(() => {
                if (!typingStopped) {
                    typingElement.textContent = "";
                    typeText();
                }
            }, 2000);
        }
    } else {
        // finished typing all lines
        startBtn.style.display = "block";
    }
}

startBtn.addEventListener("click", () => {
    // stop any future typing
    typingStopped = true;

    // cancel the scheduled timeout, if any
    if (typingTimeoutId !== null) {
        clearTimeout(typingTimeoutId);
    }

    // hide the button
    startBtn.style.display = "none";

    // show the details
    detailsElement.classList.remove("hidden");
    detailsElement.classList.add("fade-in");

    // OPTIONAL: hide the whole intro typing section if you want
    if (introSection) {
        introSection.style.display = "none";
    }

    // or just clear the text:
    // typingElement.textContent = "";
});

typeText();



