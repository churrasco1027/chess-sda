<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Revisión de Partida - Chess SDA</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/game-review.css" />
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <span class="logo-mark">♟</span>
      <h1>Chess SDA</h1>
    </div>

    <div class="review-title">
      <h2>Revisión de Partida</h2>
    </div>

    <div class="user-bar">
      <button class="btn ghost-btn" id="backToLobby">← Volver al Lobby</button>
    </div>
  </header>

  <main class="review-container">
    <aside class="review-left">
      <div class="game-header">
        <div class="players-info">
          <div class="player white-player">
            <div class="player-name"><span class="country">🇳🇴</span><span class="name">Magnus Carlsen</span></div>
            <div class="player-elo">ELO 2823</div>
          </div>

          <div class="vs-divider">vs</div>

          <div class="player black-player">
            <div class="player-name"><span class="country">🇵🇪</span><span class="name">Usuario_1027</span></div>
            <div class="player-elo">ELO 1200</div>
          </div>
        </div>

        <div class="game-result">
          <span class="result-text">1 - 0</span>
          <span class="result-detail">Blancas ganan por jaque mate</span>
        </div>
      </div>

      <div class="stats-section">
        <h3>Estadísticas</h3>

        <div class="player-stats white-stats">
          <h4>Blancas - Magnus Carlsen</h4>
          <div class="stat-row"><span class="stat-label">Precisión:</span><span class="stat-value">92%</span></div>
          <div class="stat-row"><span class="stat-label">Técnica:</span><span class="stat-value">88/100</span></div>
          <div class="stat-row"><span class="stat-label">Movimientos brillantes:</span><span class="stat-value">3</span></div>
          <div class="stat-row"><span class="stat-label">Errores:</span><span class="stat-value">0</span></div>
        </div>

        <div class="player-stats black-stats">
          <h4>Negras - Usuario_1027</h4>
          <div class="stat-row"><span class="stat-label">Precisión:</span><span class="stat-value">62%</span></div>
          <div class="stat-row"><span class="stat-label">Técnica:</span><span class="stat-value">58/100</span></div>
          <div class="stat-row"><span class="stat-label">Movimientos brillantes:</span><span class="stat-value">0</span></div>
          <div class="stat-row"><span class="stat-label">Errores:</span><span class="stat-value">3</span></div>
        </div>
      </div>

      <div class="game-info-section">
        <h3>Información</h3>
        <div class="info-row"><span class="info-label">Fecha:</span><span class="info-value">1 de Octubre, 2026</span></div>
        <div class="info-row"><span class="info-label">Formato:</span><span class="info-value">Blitz (3 min)</span></div>
        <div class="info-row"><span class="info-label">Resultado:</span><span class="info-value">1-0 (Jaque Mate)</span></div>
      </div>
    </aside>

    <section class="review-center">
      <div class="board-wrapper">
        <div id="reviewChessboard" class="chessboard review-board"></div>
      </div>

      <div class="replay-controls">
        <button class="control-btn" id="goStart">⏮️ Inicio</button>
        <button class="control-btn" id="prevMove">⬅️ Anterior</button>
        <div class="move-counter"><span id="moveNumber">0</span> / <span id="totalMoves">48</span></div>
        <button class="control-btn" id="nextMove">Siguiente ➡️</button>
        <button class="control-btn" id="goEnd">⏭️ Fin</button>
      </div>

      <div class="current-move-info">
        <h3 id="currentMoveTitle">Posición Inicial</h3>
        <div class="move-details">
          <div class="move-notation" id="moveNotation">-</div>
          <div class="move-classification" id="moveClassification">
            <span class="classification-icon">-</span>
            <span class="classification-name">-</span>
          </div>
        </div>
        <p class="move-description" id="moveDescription">Posición inicial. Pulsa "Siguiente" para comenzar.</p>
      </div>
    </section>

    <aside class="review-right">
      <h3>Movimientos</h3>
      <div class="moves-list" id="movesList"></div>
    </aside>
  </main>

  <script src="js/move-analysis.js"></script>
  <script src="js/game-replay.js"></script>
  <script src="js/game-review-ui.js"></script>
</body>
</html>
