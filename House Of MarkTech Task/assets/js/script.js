
const menuToggle = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");
menuToggle.addEventListener("click", () => {
menuItems.classList.toggle("open");
});


const text = " Technology Transforms, Sales Soar!";
let index = 0;
let isDeleting = false;
const speed = 200; // Speed in milliseconds
const delay = 2000; // Delay before start typing again

function typeWriter() {
  const typedTextElement = document.getElementById("typed-text");

  if (!isDeleting && index < text.length) {
    typedTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && index > 0) {
    typedTextElement.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeWriter, speed);
  } else if (!isDeleting && index === text.length) {
    isDeleting = true;
    setTimeout(typeWriter, delay);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
});


const texts = "Best Solutions to Overcome Every Obstacle!"; // The text to type out
const typingEffectElement = document.getElementById("typing-effect");
let indexes = 0;

function typeEffect() {
  if (indexes < texts.length) {
    typingEffectElement.innerHTML += texts.charAt(indexes);
    indexes++;
    setTimeout(typeEffect, 100); // Adjust speed (ms per character)
  } else {
    // Optional: Add a blinking cursor after typing completes
    typingEffectElement.style.borderRight = "2px solid transparent";
    setInterval(() => {
      typingEffectElement.style.borderRight =
        typingEffectElement.style.borderRight === "2px solid transparent"
          ? "2px solid black"
          : "2px solid transparent";
    }, 100);
  }
}

typeEffect();
