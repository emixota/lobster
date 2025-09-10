// === Homard bleu principal (son + rotation + disco) ===
const lobsterImg = document.getElementById('lobster-img');
const audio = new Audio('blue.m4a');

lobsterImg.addEventListener('click', () => {
  audio.currentTime = 0;
  audio.play();
  document.body.classList.add('disco');
  lobsterImg.classList.add('dance');
  audio.onended = () => {
    document.body.classList.remove('disco');
    lobsterImg.classList.remove('dance');
  };
});

// === Gestion overlay (love.jpg + flamme) ===
const miniLobster = document.getElementById('mini-lobster');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const karaoke = document.getElementById('karaoke');

// Son des flammes
const fireAudio = new Audio('fire.mp3');
fireAudio.loop = true;

// Gestion pluie de homards 🦞
let lobsterRainInterval;
function spawnLobster() {
  const lobster = document.createElement("div");
  lobster.classList.add("lobster-fall");
  lobster.textContent = "🌯";
  lobster.style.left = Math.random() * 100 + "vw";
  lobster.style.fontSize = Math.random() * 30 + 20 + "px";
  document.body.appendChild(lobster);
  setTimeout(() => lobster.remove(), 5000);
}

// Gestion confettis 🎉
function spawnConfetti() {
  const c = document.createElement("div");
  c.classList.add("confetti");
  c.style.left = Math.random() * 100 + "vw";
  c.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 3000);
}

miniLobster.addEventListener('click', () => {
  overlay.style.display = 'flex';
  karaoke.style.display = 'block';
  fireAudio.currentTime = 0;
  fireAudio.play();
  lobsterRainInterval = setInterval(spawnLobster, 400);
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  karaoke.style.display = 'none';
  fireAudio.pause();
  fireAudio.currentTime = 0;
  clearInterval(lobsterRainInterval);
  for (let i = 0; i < 30; i++) setTimeout(spawnConfetti, i * 50);
});
