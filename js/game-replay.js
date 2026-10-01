class GameReplayer {
  constructor(boardElement, gameData) {
    this.boardElement = boardElement;
    this.gameData = gameData;
    this.moves = gameData.moves || [];
    this.boardState = this.initializeBoardState();
    this.currentMoveIndex = -1;
    this.lastMoveHighlight = null;
  }

  initializeBoardState() {
    return [
      ["wr","wn","wb","wq","wk","wb","wn","wr"],
      ["wp","wp","wp","wp","wp","wp","wp","wp"],
      ["","","","","","","",""],
      ["","","","","","","",""],
      ["","","","","","","",""],
      ["","","","","","","",""],
      ["bp","bp","bp","bp","bp","bp","bp","bp"],
      ["br","bn","bb","bq","bk","bb","bn","br"]
    ];
  }

  notationToCoords(notation) {
    const file = notation.charCodeAt(0) - 97;
    const rank = 8 - parseInt(notation[1]);
    return [rank, file];
  }

  applyMove(move) {
    const [fromRow, fromCol] = this.notationToCoords(move.from);
    const [toRow, toCol] = this.notationToCoords(move.to);
    const piece = this.boardState[fromRow][fromCol];
    if (!piece) return false;

    this.boardState[toRow][toCol] = piece;
    this.boardState[fromRow][fromCol] = "";
    this.lastMoveHighlight = { from: move.from, to: move.to };
    return true;
  }

  undoMove(move) {
    const [fromRow, fromCol] = this.notationToCoords(move.from);
    const [toRow, toCol] = this.notationToCoords(move.to);
    const piece = this.boardState[toRow][toCol];
    this.boardState[fromRow][fromCol] = piece;
    this.boardState[toRow][toCol] = "";
    this.lastMoveHighlight = null;
  }

  render() {
    this.boardElement.innerHTML = "";
    const pieceSymbols = {
      w: { pawn: "♙", rook: "♖", knight: "♘", bishop: "♗", queen: "♕", king: "♔" },
      b: { pawn: "♟", rook: "♜", knight: "♞", bishop: "♝", queen: "♛", king: "♚" }
    };

    this.boardState.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const square = document.createElement("div");
        const isDark = (rowIndex + colIndex) % 2 === 1;
        square.className = `square ${isDark ? "dark" : "light"}`;
        if (this.lastMoveHighlight) {
          const [fromRow, fromCol] = this.notationToCoords(this.lastMoveHighlight.from);
          const [toRow, toCol] = this.notationToCoords(this.lastMoveHighlight.to);
          if ((rowIndex === fromRow && colIndex === fromCol) || (rowIndex === toRow && colIndex === toCol)) {
            square.classList.add("last-move");
          }
        }
        if (cell) {
          const piece = document.createElement("span");
          piece.textContent = pieceSymbols[cell[0]][cell.slice(1)];
          square.appendChild(piece);
        }
        this.boardElement.appendChild(square);
      });
    });
  }

  nextMove() {
    if (this.currentMoveIndex < this.moves.length - 1) {
      this.currentMoveIndex++;
      const move = this.moves[this.currentMoveIndex];
      this.applyMove(move);
      this.render();
      return move;
    }
    return null;
  }

  previousMove() {
    if (this.currentMoveIndex >= 0) {
      const move = this.moves[this.currentMoveIndex];
      this.undoMove(move);
      this.currentMoveIndex--;
      this.render();
      return move;
    }
    return null;
  }

  goToStart() {
    while (this.currentMoveIndex >= 0) this.previousMove();
    this.render();
  }

  goToEnd() {
    while (this.currentMoveIndex < this.moves.length - 1) this.nextMove();
    this.render();
  }

  getTotalMoves() {
    return this.moves.length;
  }
}
