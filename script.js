// Function: Show a floating message with animation
function showFloatingMessage(text) {
  const floatText = document.createElement("div");
  floatText.innerText = text;
  floatText.style.position = "fixed";
  floatText.style.top = "50%";
  floatText.style.left = "50%";
  floatText.style.transform = "translate(-50%, -50%)";
  floatText.style.padding = "15px 25px";
  floatText.style.background = "linear-gradient(45deg, #7f00ff, #00d2ff)";
  floatText.style.color = "white";
  floatText.style.fontWeight = "bold";
  floatText.style.borderRadius = "20px";
  floatText.style.boxShadow = "0 0 20px rgba(127,0,255,0.6)";
  floatText.style.zIndex = "1000";
  floatText.style.opacity = "0";
  floatText.style.transition = "opacity 0.5s ease";

  document.body.appendChild(floatText);

  // Show it with fade-in
  setTimeout(() => {
    floatText.style.opacity = "1";
  }, 100);

  // Remove after 2.5 seconds with fade-out
  setTimeout(() => {
    floatText.style.opacity = "0";
    setTimeout(() => {
      floatText.remove();
    }, 500);
  }, 2500);
}

// Say Hello Button Click
function sayHello() {
  const messages = [
    "Hello Ashwini! 🚀",
    "Keep coding, future AI engineer! 🤖",
    "You're doing amazing! 🌟",
    "Web + AI + Creativity = You 💡"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  showFloatingMessage(randomMessage);
}

// Thank you message when page loads
window.addEventListener("load", () => {
  setTimeout(() => {
    showFloatingMessage("✨ Thank you for visiting my webpage! ✨");
  }, 1500); // Show after 1.5s
});

// Button hover glow effect
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-gradient");

  if (button) {
    button.addEventListener("mouseover", () => {
      button.style.boxShadow = "0 0 25px #00d2ff, 0 0 50px #7f00ff";
    });

    button.addEventListener("mouseout", () => {
      button.style.boxShadow = "0 0 20px #7f00ff";
    });
  }
});

