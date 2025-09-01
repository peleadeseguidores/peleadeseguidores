// --- Juego básico: Pelea de Seguidores ---
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: 200, w: 40, h: 40, color: "cyan" };
let enemy = { x: 500, y: 200, w: 40, h: 40, color: "red" };

let gameRunning = false;

function drawCharacter(char) {
  ctx.fillStyle = char.color;
  ctx.fillRect(char.x, char.y, char.w, char.h);
}

function startGame() {
  gameRunning = true;
  gameLoop();
}

function gameLoop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar personajes
  drawCharacter(player);
  drawCharacter(enemy);

  // Movimiento enemigo automático
  enemy.x -= 2;
  if (enemy.x < 0) enemy.x = canvas.width;

  requestAnimationFrame(gameLoop);
}

// Controles básicos
document.addEventListener("keydown", (e) => {
  if (!gameRunning) return;
  if (e.key === "ArrowUp" && player.y > 0) player.y -= 20;
  if (e.key === "ArrowDown" && player.y + player.h < canvas.height) player.y += 20;
});
