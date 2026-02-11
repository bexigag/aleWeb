// Estado do jogo
let currentPhase = 0;
let clickCount = 0;
let timerInterval = null;
let timeLeft = 7.0;
let challengeStarted = false;

// Mensagens de erro dramáticas
const errorMessages = [
  "COMO ASSIM NÃO SABES?! 💔",
  "Eu a achar que me conhecias... 😭",
  "ERRADO! Volta ao início, sem piedade! 🔥",
  "A relação está em risco... ⚠️",
  "Nem a minha avó errava esta... 👵",
];

// Mostrar ecrã
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Começar jogo
function startGame() {
  currentPhase = 1;
  showScreen('screen-phase1');
}

// Verificar resposta
function checkAnswer(phase, correct) {
  if (correct) {
    nextPhase(phase);
  } else {
    showError();
  }
}

// Próxima fase
function nextPhase(currentP) {
  const next = currentP + 1;
  if (next > 6) {
    showFinal();
    return;
  }

  if (next === 3) {
    resetChallenge();
  }

  if (next === 5) {
    resetFleeing();
  }

  currentPhase = next;
  showScreen('screen-phase' + next);
}

// Mostrar erro
function showError() {
  clearTimer();

  const msg = errorMessages[Math.floor(Math.random() * errorMessages.length)];
  document.getElementById('error-message').textContent = msg;

  const errorScreen = document.getElementById('screen-error');
  showScreen('screen-error');

  errorScreen.classList.remove('shake');
  void errorScreen.offsetWidth; // force reflow
  errorScreen.classList.add('shake');

  setTimeout(() => {
    currentPhase = 1;
    resetChallenge();
    showScreen('screen-phase1');
  }, 2500);
}

// === FASE 3: Desafio de tempo ===

function resetChallenge() {
  clickCount = 0;
  timeLeft = 7.0;
  challengeStarted = false;
  clearTimer();
  document.getElementById('click-counter').textContent = '0';
  document.getElementById('timer-display').textContent = '7.0s';
}

function clearTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function handleClick() {
  if (!challengeStarted) {
    challengeStarted = true;
    startTimer();
  }

  clickCount++;
  document.getElementById('click-counter').textContent = clickCount;

  if (clickCount >= 30) {
    clearTimer();
    nextPhase(3);
  }
}

function startTimer() {
  const startTime = Date.now();

  timerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    timeLeft = Math.max(0, 7.0 - elapsed);
    document.getElementById('timer-display').textContent = timeLeft.toFixed(1) + 's';

    if (timeLeft <= 0) {
      clearTimer();
      showError();
    }
  }, 50);
}

// === FASE 5: Sim fugitivo ===

function resetFleeing() {
  const btn = document.getElementById('btn-fleeing');
  btn.style.position = 'absolute';
  btn.style.left = '50%';
  btn.style.top = '0';
  btn.style.transform = 'translateX(-50%)';
}

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener('touchmove', e => { mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY; });

function fleeButton() {
  const btn = document.getElementById('btn-fleeing');
  const bw = btn.offsetWidth;
  const bh = btn.offsetHeight;
  const margin = 20;

  const w = window.innerWidth;
  const h = window.innerHeight;

  // Calcula o lado oposto do rato com algum random
  let targetX = w - mouseX + (Math.random() - 0.5) * w * 0.4;
  let targetY = h - mouseY + (Math.random() - 0.5) * h * 0.4;

  // Garante que fica dentro do ecrã
  targetX = Math.max(margin, Math.min(targetX, w - bw - margin));
  targetY = Math.max(margin, Math.min(targetY, h - bh - margin));

  btn.style.position = 'fixed';
  btn.style.transform = 'none';
  btn.style.left = targetX + 'px';
  btn.style.top = targetY + 'px';
}

// === ECRÃ FINAL ===

function showFinal() {
  showScreen('screen-final');

  // Delay para revelar a imagem
  setTimeout(() => {
    document.getElementById('final-reveal').classList.remove('hidden');
  }, 2000);

  // Confetti
  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#ff6b9d', '#c44dff', '#ffdd57', '#48dbfb', '#ff5252', '#69ff94'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 8 + 5) + 'px';
    piece.style.height = (Math.random() * 8 + 5) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    container.appendChild(piece);
  }
}
