const userData = {
  username: "Ajedrecista_1027",
  country: "🇵🇪",
  streak: 5,
  league: "Platino",
  leagueBg: "league-platinum",
  elo: { bullet: 1450, blitz: 1320, rapid: 1280 },
  stats: { all: { total: 156, wins: 89, losses: 52, draws: 15 }, white: { total: 78, wins: 52, losses: 18, draws: 8 }, black: { total: 78, wins: 37, losses: 34, draws: 7 } }
};

let currentFilter = "all";
let currentTimePeriod = "all";

function getCurrentStats() {
  return userData.stats[currentFilter];
}

function updateStatsDisplay() {
  const stats = getCurrentStats();
  const winRate = stats.total > 0 ? ((stats.wins / stats.total) * 100).toFixed(1) : 0;

  document.getElementById("totalGames").textContent = stats.total;
  document.getElementById("totalWins").textContent = stats.wins;
  document.getElementById("totalLosses").textContent = stats.losses;
  document.getElementById("totalDraws").textContent = stats.draws;
  document.getElementById("winRate").textContent = winRate + "%";
}

function initFilterButtons() {
  document.querySelectorAll(".filter-color").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-color").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.dataset.filter;
      updateStatsDisplay();
    });
  });

  document.querySelectorAll(".filter-time").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-time").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentTimePeriod = e.target.dataset.period;
      updateChartData();
    });
  });
}

function drawEloChart() {
  const canvas = document.getElementById("eloChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const data = [1100, 1150, 1200, 1180, 1250, 1320];
  const padding = 40;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#4caf50";
  ctx.lineWidth = 2;
  ctx.beginPath();

  data.forEach((value, index) => {
    const x = padding + (index / (data.length - 1)) * (canvas.width - padding * 2);
    const y = canvas.height - padding - ((value - 1100) / 10) * (canvas.height - padding * 2);
    ctx.lineTo(x, y);
  });

  ctx.stroke();
}

function updateChartData() {
  drawEloChart();
}

function initProfilePage() {
  updateStatsDisplay();
  initFilterButtons();
  drawEloChart();
}

document.addEventListener("DOMContentLoaded", initProfilePage);.
