(() => {
  "use strict";

  // Easy customization: change the recipient or sign-off here.
  const birthdayConfig = {
    recipientName: "Amrutha",
    senderName: "Your Rakhi brother"
  };

  document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("openButton");
    const replayButton = document.getElementById("replayButton");
    const letterSection = document.getElementById("letterSection");
    const envelope = document.getElementById("envelope");
    const envelopeScene = document.getElementById("envelopeScene");
    const celebrationLayer = document.getElementById("celebrationLayer");

    // Guard against missing elements so one typo cannot disable every interaction.
    if (!openButton || !replayButton || !letterSection) {
      console.error("Birthday page setup is incomplete. Check index.html element IDs.");
      return;
    }

    document.querySelectorAll("#previewName, #recipientName").forEach((el) => {
      el.textContent = birthdayConfig.recipientName;
    });
    const signature = document.querySelector(".signature");
    if (signature) signature.textContent = birthdayConfig.senderName + " ♡";

    function celebrate() {
      if (!celebrationLayer) return;
      const symbols = ["♥", "✦", "✿", "♡", "•"];
      const colors = ["#e879a3", "#f4a9c4", "#d8a0ba", "#f6c85f", "#c6a0d6"];
      for (let i = 0; i < 42; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + "%";
        piece.style.color = colors[Math.floor(Math.random() * colors.length)];
        piece.style.fontSize = (12 + Math.random() * 15) + "px";
        piece.style.setProperty("--duration", (2.4 + Math.random() * 2.2) + "s");
        piece.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
        piece.style.animationDelay = (Math.random() * .65) + "s";
        celebrationLayer.appendChild(piece);
        window.setTimeout(() => piece.remove(), 5500);
      }
    }

    function openLetter() {
      document.body.classList.add("opened");
      if (envelope) envelope.classList.add("is-open");
      if (envelopeScene) envelopeScene.classList.add("is-open");
      letterSection.classList.add("visible");
      letterSection.setAttribute("aria-hidden", "false");
      openButton.setAttribute("aria-expanded", "true");
      celebrate();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function replay() {
      document.body.classList.remove("opened");
      letterSection.classList.remove("visible");
      letterSection.setAttribute("aria-hidden", "true");
      openButton.setAttribute("aria-expanded", "false");
      if (envelope) envelope.classList.remove("is-open");
      if (envelopeScene) envelopeScene.classList.remove("is-open");
      if (celebrationLayer) celebrationLayer.replaceChildren();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    openButton.addEventListener("click", openLetter);
    if (envelopeScene) {
      envelopeScene.addEventListener("click", (event) => {
        if (!document.body.classList.contains("opened")) openLetter();
      });
    }
    replayButton.addEventListener("click", replay);
  });
})();
