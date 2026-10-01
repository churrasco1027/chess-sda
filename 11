<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perfil de Amigo | Chess SDA</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/profile.css" />
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <span class="logo-mark">♟</span>
      <h1>Chess SDA</h1>
    </div>
    <div class="user-bar">
      <div class="flag">🇵🇪</div>
      <div class="user-name">Ajedrecista_1027</div>
      <div class="fire">🔥 5 días</div>
      <button class="btn ghost-btn" id="backToLobby">Volver</button>
    </div>
  </header>

  <main class="profile-container">
    <aside class="profile-sidebar">
      <div class="sidebar-card">
        <h3>ELO del amigo</h3>
        <div class="elo-display">
          <div class="elo-value" id="friendElo">1320</div>
          <div class="elo-label" id="friendMode">Blitz</div>
          <div class="elo-change positive" id="friendEloChange">+120 este mes</div>
        </div>
      </div>

      <div class="sidebar-card">
        <h3>Resumen</h3>
        <div class="quick-stats">
          <div class="quick-stat"><div class="quick-stat-value" id="friendGames">156</div><div class="quick-stat-label">Partidas</div></div>
          <div class="quick-stat"><div class="quick-stat-value" id="friendWins">89</div><div class="quick-stat-label">Victorias</div></div>
          <div class="quick-stat"><div class="quick-stat-value" id="friendLosses">52</div><div class="quick-stat-label">Derrotas</div></div>
          <div class="quick-stat"><div class="quick-stat-value" id="friendDraws">15</div><div class="quick-stat-label">Empates</div></div>
        </div>
      </div>
    </aside>

    <section class="profile-main">
      <div class="profile-header">
        <div class="profile-user-info">
          <div class="profile-avatar">♟</div>
          <div class="profile-details">
            <h1 id="friendName">Ajedrecista_1027</h1>
            <div class="profile-streak">🔥 5 días de racha</div>
          </div>
        </div>
        <div class="profile-league">
          <div class="league-badge league-platinum" id="friendLeague">Platino</div>
        </div>
      </div>

      <div class="stats-filters">
        <div class="filter-group">
          <label>Filtrar por color</label>
          <button class="filter-btn filter-color active" data-filter="all">Todas</button>
          <button class="filter-btn filter-color" data-filter="white">Blancas</button>
          <button class="filter-btn filter-color" data-filter="black">Negras</button>
        </div>

        <div class="filter-group">
          <label>Periodo</label>
          <button class="filter-btn filter-time active" data-filter="all" data-period="all">Todo</button>
          <button class="filter-btn filter-time" data-filter="all" data-period="7days">7 días</button>
          <button class="filter-btn filter-time" data-filter="all" data-period="1month">1 mes</button>
          <button class="filter-btn filter-time" data-filter="all" data-period="1year">1 año</button>
        </div>
      </div>

      <div class="stats-card">
        <h3>Estadísticas principales</h3>
        <div class="stats-grid">
          <div class="stat-item"><div id="totalGames" class="stat-item-value">156</div><div class="stat-item-label">Partidas</div></div>
          <div class="stat-item"><div id="totalWins" class="stat-item-value">89</div><div class="stat-item-label">Victorias</div></div>
          <div class="stat-item"><div id="totalLosses" class="stat-item-value">52</div><div class="stat-item-label">Derrotas</div></div>
          <div class="stat-item"><div id="totalDraws" class="stat-item-value">15</div><div class="stat-item-label">Empates</div></div>
          <div class="stat-item"><div id="winRate" class="stat-item-value">57.1%</div><div class="stat-item-label">Win rate</div></div>
        </div>
      </div>

      <div class="chart-card">
        <h3>Progreso del ELO</h3>
        <canvas id="eloChart" width="760" height="220"></canvas>
      </div>

      <div class="games-history">
        <h3>Historial de partidas</h3>
        <div class="game-row"><div class="game-date">Hoy</div><div class="game-opponent">Bot 1450</div><div class="game-result result-win">Victoria</div><div class="game-elo-change">+32</div><div class="game-time">Blitz</div></div>
        <div class="game-row"><div class="game-date">Ayer</div><div class="game-opponent">Juan Pérez</div><div class="game-result result-loss">Derrota</div><div class="game-elo-change">-28</div><div class="game-time">Rápida</div></div>
      </div>
    </section>

    <aside class="profile-sidebar-right">
      <div class="achievements-card">
        <h3>Logros</h3>
        <div class="achievement-item"><div class="achievement-icon">👑</div><div class="achievement-name">Liga Platino</div></div>
        <div class="achievement-item"><div class="achievement-icon">🏆</div><div class="achievement-name">Top 5% entre jugadores</div></div>
        <div class="achievement-item"><div class="achievement-icon">🔥</div><div class="achievement-name">Racha activa</div></div>
      </div>
    </aside>
  </main>

  <script src="js/friends-system.js"></script>
  <script src="js/profile-ui.js"></script>
  <script>
    document.getElementById("backToLobby").addEventListener("click", () => {
      window.location.href = "index.html";
    });
  </script>
</body>
</html>
