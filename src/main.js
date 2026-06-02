import { Experience } from "./Experience/Experience";
import { Modal } from "./Experience/Modal";
import gsap from "gsap";
import "./style.css";

const experience = new Experience();

const infoModal = new Modal();
const infoBtn = document.getElementById("info-btn");

infoBtn.addEventListener("mouseenter", () => {
  experience.world.raycaster?.showHitboxMarkers();
});

infoBtn.addEventListener("mouseleave", () => {
  experience.world.raycaster?.hideHitboxMarkers();
});

infoBtn.addEventListener("click", () => {
  infoModal.openHTML(
    "About Sanatan's Comfort Space 💖",
    `Welcome to Sanatan's personalized 3D Birthday Comfort Space! 🎂✨<br><br>
This interactive 3D digital refuge is designed to offer a peaceful, cozy holding environment away from the busy world. 
<br><br>
<b>Cozy Features to Explore:</b><br>
• 📻 <b>Phonograph:</b> Click the vintage radio to play/pause the beautiful, heartwarming theme song *"Married Life"*.<br>
• 🎈 <b>Floating Balloons:</b> Watch beautifully colored helium balloons sway dynamically under physics simulations.<br>
• 📝 <b>Chalkboard:</b> Zoom into the blackboard to find a hand-drawn chalkboard birthday card created especially for Sanatan. You can also draw your own messages directly on the board!<br>
• 🌗 <b>Day/Night Toggle:</b> Click the moon icon in the top right to switch between warm daylight and cozy night-time (watch the glowing fireflies light up!).<br><br>
Have a wonderful time exploring, and Happy Birthday, Sanatan!`,
  );
});

const btn = document.getElementById("day-night-toggle");
const icon = btn.querySelector(".day-night-btn__icon");

btn.addEventListener("click", () => {
  experience.world.room?.toggleDayNight();
  const goingNight = experience.world.room?.isNight ?? false;
  icon.innerHTML = goingNight ? "&#9728;" : "&#9790;";
  experience.world.raycaster?.setDayNightVolume(goingNight);
});

// Custom Birthday Modal Logic for Sanatan
const bdayModal = document.getElementById("birthday-modal");
const bdayCloseBtn = document.getElementById("bday-close-btn");
const enterBtn = document.getElementById("enter-btn");
const enterSilentBtn = document.getElementById("enter-silent-btn");

function showBirthdayModal() {
  setTimeout(() => {
    bdayModal.classList.add("bday-modal--visible");
    triggerConfetti();
  }, 800);
}

if (enterBtn) enterBtn.addEventListener("click", showBirthdayModal);
if (enterSilentBtn) enterSilentBtn.addEventListener("click", showBirthdayModal);

if (bdayCloseBtn) {
  bdayCloseBtn.addEventListener("click", () => {
    bdayModal.classList.remove("bday-modal--visible");
  });
}

function triggerConfetti() {
  const container = document.querySelector(".bday-modal__confetti-container");
  if (!container) return;

  container.innerHTML = "";
  const colors = ["#FF5E7E", "#FFD24C", "#4CD3C2", "#9E72C3", "#FF9233", "#45B6FE"];
  
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = Math.random() * 8 + 6 + "px";
    confetti.style.height = Math.random() * 12 + 6 + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-5%";
    confetti.style.opacity = Math.random() * 0.7 + 0.3;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    
    container.appendChild(confetti);
    
    // Animate via GSAP
    gsap.to(confetti, {
      y: window.innerHeight * 0.85,
      x: `+=${(Math.random() - 0.5) * 250}`,
      rotation: Math.random() * 720 - 360,
      duration: Math.random() * 2.5 + 2.0,
      delay: Math.random() * 0.6,
      ease: "power1.out",
      onComplete: () => confetti.remove()
    });
  }
}

