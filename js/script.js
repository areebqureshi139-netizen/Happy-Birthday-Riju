// Typing animation
const text =
  "Happy Birthday to the most amazing best friend anyone could ever ask for. 💙 You’ve been my constant source of support, laughter, and strength, and I honestly can’t imagine my life without you in it. You’ve seen me at my best and at my worst, and you’ve never left my side, and for that I’ll always be grateful. On your special day, I just want you to know how much you mean to me and how much I truly value our friendship. I hope this year brings you endless happiness, success, love, and peace because you genuinely deserve all the good things life has to offer. Thank you for being you my best friend, my safe place, and my favorite human. Wishing you the happiest birthday ever, filled with love and unforgettable moments ❤️.";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 65);
  }
}
window.onload = typeEffect;

// Hearts rain
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
}
function drawHeart(x, y, size) {
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size / 2, x, y + size, x, y + size * 1.5);
  ctx.bezierCurveTo(x, y + size, x + size, y + size / 2, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fill();
}
function createHearts() {
  let x = Math.random() * canvas.width;
  let y = 0;
  let size = Math.random() * 20 + 10;
  let speed = Math.random() * 2 + 1;
  hearts.push(new Heart(x, y, size, speed));
}
function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < hearts.length; i++) {
    let h = hearts[i];
    drawHeart(h.x, h.y, h.size);
    h.y += h.speed;
    if (h.y > canvas.height) {
      hearts.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateHearts);
}
setInterval(createHearts, 500);
animateHearts();

// Gift modal

function openGift() {
  document.getElementById("gift-modal").style.display = "flex";
}

function closeGift() {
  document.getElementById("gift-modal").style.display = "none";
}

// background music

document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bg-music");
  let musicPlayed = false;

  function playMusic() {
    if (!musicPlayed) {
      bg.volume = 1;
      bg.muted = false;
      bg.play()
        .then(() => {
          console.log("Music started!");
          musicPlayed = true;
        })
        .catch((err) => {
          console.log("Autoplay blocked:", err);
          showFallbackButton();
        });
    }
  }

  function showFallbackButton() {
    const btn = document.createElement("button");
    btn.innerText = "Tap to Play Music ▶";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.left = "20px";
    btn.style.zIndex = "9999";
    btn.style.padding = "10px";
    btn.style.background = "#000";
    btn.style.color = "#F5F5DC";
    btn.style.fontFamily = "'Great Vibes', cursive";
    btn.style.borderRadius = "10px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    document.body.appendChild(btn);

    // hover
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#222";
      btn.style.color = "white";
    });

    // Hover
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#FFC0CB";
      btn.style.color = "black";
    });

    btn.addEventListener("click", () => {
      bg.play();
      btn.remove();
    });
  }

  // Mobile touch

  window.addEventListener("touchstart", playMusic, { once: true });

  // Desktop fallback
  window.addEventListener("click", playMusic, { once: true });
  window.addEventListener("scroll", playMusic, { once: true });
});
