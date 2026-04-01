let currentPage = 1;

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let glitter;
let glitterInterval;

function createSparkle() {
  if (!glitter) return;

  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.innerHTML = "✨";

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.fontSize = (Math.random() * 10 + 8) + "px";
  sparkle.style.animationDuration = (Math.random() * 3 + 2) + "s";

  glitter.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 5000);
}

function startGlitter() {
  glitter = document.getElementById("glitter");
  if (!glitterInterval) {
    glitterInterval = setInterval(createSparkle, 120);
  }
}

function switchPage() {
  if (currentPage === 1) {
    page1.classList.remove("active");
    page2.classList.add("active");
    currentPage = 2;
    startGlitter();
  } else {
    page2.classList.remove("active");
    page1.classList.add("active");
    currentPage = 1;
  }
}
