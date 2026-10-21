/*
  BIRTHDAY WEBSITE CUSTOMIZATION
  Change these values to personalize the page for your friend.
*/
const birthdayConfig = {
  recipientName: "you",
  senderName: "Your Rakhi brother",
  // Edit the paragraphs in index.html to write your own birthday message.
};

const envelopeWrap = document.getElementById("envelopeWrap");
const envelopeScene = document.getElementById("envelopeScene");
const openButton = document.getElementById("openButton");
const tapHint = document.getElementById("tapHint");
const birthdayLetter = document.getElementById("birthdayLetter");
const replayButton = document.getElementById("replayButton");
const confettiLayer = document.getElementById("confettiLayer");
const liveMessage = document.getElementById("liveMessage");

document.getElementById("previewName").textContent = birthdayConfig.recipientName;
document.getElementById("recipientName").textContent = birthdayConfig.recipientName;
document.querySelector(".signature").textContent = birthdayConfig.senderName + " ♡";

let opened = false;
let messageTimer;

function openLetter() {
  if (opened) return;
  opened = true;
  envelopeWrap.classList.add("open");
  envelopeScene.classList.add("opened");
  openButton.setAttribute("aria-expanded", "true");
  openButton.querySelector("span").textContent = "Your letter is open";
  tapHint.textContent = "a little note, from the heart";
  // Sparkles and hearts begin as the envelope opens and the letter slides out.
  burstConfetti(65);
  floatHearts(10);
  window.setTimeout(() => {
    birthdayLetter.classList.add("visible");
    birthdayLetter.setAttribute("aria-hidden", "false");
    birthdayLetter.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 650);
}

function burstConfetti(amount = 70) {
  const colors = ["#e58ca5", "#f5c3d0", "#d6a5b8", "#f4d7a1", "#ffffff", "#c77991"];
  const shapes = ["●", "♥", "✦", "■"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (8 + Math.random() * 10) + "px";
    piece.style.setProperty("--duration", (2.2 + Math.random() * 2.5) + "s");
    piece.style.setProperty("--drift", (-100 + Math.random() * 200) + "px");
    piece.style.animationDelay = (Math.random() * .65) + "s";
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5500);
  }
}

function floatHearts(amount = 8) {
  const hearts = ["♡", "♥", "❤"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = (5 + Math.random() * 90) + "vw";
    heart.style.color = ["#d97891", "#e8a6b8", "#c46e88"][Math.floor(Math.random() * 3)];
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.setProperty("--duration", (3 + Math.random() * 2) + "s");
    heart.style.animationDelay = (Math.random() * .8) + "s";
    confettiLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 5600);
  }
}

function showMessage(message) {
  liveMessage.textContent = message;
  liveMessage.classList.add("show");
  window.clearTimeout(messageTimer);
  messageTimer = window.setTimeout(() => liveMessage.classList.remove("show"), 2500);
}

function replay() {
  opened = false;
  birthdayLetter.classList.remove("visible");
  birthdayLetter.setAttribute("aria-hidden", "true");
  envelopeWrap.classList.remove("open");
  envelopeScene.classList.remove("opened");
  openButton.querySelector("span").textContent = "Open your letter";
  openButton.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

openButton.addEventListener("click", openLetter);
replayButton.addEventListener("click", replay);

// Tiny twinkling stars in the background.
const sparkles = document.getElementById("sparkles");
for (let i = 0; i < 24; i++) {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (10 + Math.random() * 12) + "px";
  star.style.animationDelay = (Math.random() * 4) + "s";
  sparkles.appendChild(star);
}
