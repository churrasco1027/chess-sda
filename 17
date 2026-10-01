const moveData = [
  { moveNumber: 1, notation: "e4", from: "e2", to: "e4", player: "white", classification: { name: "Libro", symbol: "📖", color: "#8B4513", description: "Jugada teórica de apertura." } },
  { moveNumber: 1, notation: "e5", from: "e7", to: "e5", player: "black", classification: { name: "Libro", symbol: "📖", color: "#8B4513", description: "Jugada teórica de apertura." } },
  { moveNumber: 2, notation: "Nf3", from: "g1", to: "f3", player: "white", classification: { name: "Excelente", symbol: "👍", color: "#90EE90", description: "Muy buena jugada." } },
  { moveNumber: 2, notation: "Nc6", from: "b8", to: "c6", player: "black", classification: { name: "Buena", symbol: "✓", color: "#90EE90", description: "Buena jugada." } }
];

const reviewBoard = document.getElementById("reviewChessboard");
const movesList = document.getElementById("movesList");
const currentMoveTitle = document.getElementById("currentMoveTitle");
const moveNotationEl = document.getElementById("moveNotation");
const moveClassificationEl = document.getElementById("moveClassification");
const moveDescriptionEl = document.getElementById("moveDescription");
const backToLobbyBtn = document.getElementById("backToLobby");
const moveNumberEl = document.getElementById("moveNumber");
const totalMovesEl = document.getElementById("totalMoves");

const replayer = new GameReplayer(reviewBoard, {
  playerWhite: "Magnus Carlsen",
  playerBlack: "Usuario_1027",
  whiteElo: 2823,
  blackElo: 1200,
  whiteCountry: "🇳🇴",
  blackCountry: "🇵🇪",
  result: "1-0",
  date: "2026-10-01",
  timeFormat: "Blitz",
  moves: moveData
});

let currentMoveIndex = -1;
totalMovesEl.textContent = replayer.getTotalMoves();

function renderMoveList() {
  movesList.innerHTML = "";
  moveData.forEach((move, index) => {
    const item = document.createElement("div");
    item.className = "move-entry";
    item.dataset.index = index;

    const moveNumber = document.createElement("span");
    moveNumber.className = "move-number";
    moveNumber.textContent = `${index + 1}.`;

    const moveText = document.createElement("span");
    moveText.className = "move-text";
    moveText.textContent = move.notation;

    const rating = document.createElement("span");
    rating.className = "move-rating";
    rating.textContent = move.classification.symbol;
    rating.style.background = move.classification.color;

    item.appendChild(moveNumber);
    item.appendChild(moveText);
    item.appendChild(rating);

    item.addEventListener("click", () => {
      goToMove(index);
    });

    movesList.appendChild(item);
  });
}

function updateMoveDetails(move) {
  if (!move) {
    currentMoveTitle.textContent = "Posición Inicial";
    moveNotationEl.textContent = "-";
    moveClassificationEl.innerHTML = `<span class="classification-icon">-</span><span class="classification-name">-</span>`;
    moveDescriptionEl.textContent = 'Posición inicial. Pulsa "Siguiente" para comenzar.';
    return;
  }

  currentMoveTitle.textContent = `Movimiento ${move.moveNumber}`;
  moveNotationEl.textContent = move.notation;
  moveClassificationEl.innerHTML = `<span class="classification-icon">${move.classification.symbol}</span><span class="classification-name">${move.classification.name}</span>`;
  moveClassificationEl.style.borderColor = move.classification.color;
  moveClassificationEl.style.background = `${move.classification.color}20`;
  moveDescriptionEl.textContent = move.classification.description;
}

function goToMove(index) {
  const targetIndex = Math.max(-1, Math.min(index, moveData.length - 1));
  currentMoveIndex = targetIndex;
  replayer.goToStart();
  for (let i = 0; i <= currentMoveIndex; i++) replayer.nextMove();
  updateMoveDetails(moveData[currentMoveIndex]);
  updateMoveListSelectedState();
}

function updateMoveListSelectedState() {
  document.querySelectorAll(".move-entry").forEach((item, idx) => {
    item.classList.toggle("active", idx === currentMoveIndex);
  });
}

function goToPreviousMove() {
  const prev = replayer.previousMove();
  if (prev) {
    currentMoveIndex--;
    moveNumberEl.textContent = currentMoveIndex + 1;
    updateMoveDetails(moveData[currentMoveIndex]);
    updateMoveListSelectedState();
  } else {
    currentMoveIndex = -1;
    moveNumberEl.textContent = "0";
    updateMoveDetails(null);
    updateMoveListSelectedState();
  }
}

function goToNextMove() {
  const next = replayer.nextMove();
  if (next) {
    currentMoveIndex++;
    moveNumberEl.textContent = currentMoveIndex + 1;
    updateMoveDetails(moveData[currentMoveIndex]);
    updateMoveListSelectedState();
  } else {
    updateMoveDetails(moveData[currentMoveIndex]);
  }
}

document.getElementById("prevMove").addEventListener("click", goToPreviousMove);
document.getElementById("nextMove").addEventListener("click", goToNextMove);
document.getElementById("goStart").addEventListener("click", () => {
  replayer.goToStart();
  currentMoveIndex = -1;
  moveNumberEl.textContent = "0";
  updateMoveDetails(null);
  updateMoveListSelectedState();
});
document.getElementById("goEnd").addEventListener("click", () => {
  replayer.goToEnd();
  currentMoveIndex = moveData.length - 1;
  moveNumberEl.textContent = moveData.length;
  updateMoveDetails(moveData[currentMoveIndex]);
  updateMoveListSelectedState();
});
backToLobbyBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

renderMoveList();
replayer.render();
updateMoveDetails(null);
