const typingText = [
    
    "I am Excited To Join Your Company...! ",
   
    "I am a multitasking student...",

    "A Beginner Programmer...",

    "And Someone Who Can Play Golf... kind of.",

    "Let’s dive into my journey!"

    
];



const typingElement = document.getElementById("typing");

const detailsElement = document.getElementById("details");

const startBtn = document.getElementById("startBtn");



let charIndex = 0;

let lineIndex = 0;



function typeText() {

    if (lineIndex < typingText.length) {

        if (charIndex < typingText[lineIndex].length) {

            typingElement.textContent += typingText[lineIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeText, 50);

        } else {

            charIndex = 0;

            lineIndex++;

            setTimeout(() => {

                typingElement.textContent = "";

                typeText();

            }, 2000);

        }

    } else {

        startBtn.style.display = "block";

    }

}



startBtn.addEventListener("click", () => {

    detailsElement.classList.remove("hidden");

    startBtn.style.display = "none";

});



typeText();

