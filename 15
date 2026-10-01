const MoveClassification = {
  BRILLIANT: { name: "Brillante", symbol: "!!", icon: "✨", color: "#87CEEB", description: "Movimiento extraordinario que sorprende al oponente" },
  GREAT: { name: "Gran jugada", symbol: "!", icon: "⭐", color: "#4169E1", description: "Jugada excelente que mejora tu posición" },
  BEST: { name: "La mejor jugada", symbol: "★", icon: "⭐", color: "#228B22", description: "La jugada óptima en esta posición" },
  EXCELLENT: { name: "Excelente", symbol: "👍", icon: "👍", color: "#90EE90", description: "Muy buena jugada, mejora significativamente" },
  GOOD: { name: "Buena", symbol: "✓", icon: "✓", color: "#90EE90", description: "Buena jugada, sólida y correcta" },
  BOOK: { name: "Libro", symbol: "📖", icon: "📖", color: "#8B4513", description: "Jugada teórica de apertura, línea conocida" },
  INACCURACY: { name: "Inexactitud", symbol: "?", icon: "❓", color: "#FFD700", description: "Jugada imprecisa que pierde ventaja pequeña" },
  MISTAKE: { name: "Error", symbol: "??", icon: "⚠️", color: "#FFA500", description: "Error que pierde material o posición importante" },
  BLUNDER: { name: "Error grave / Colgada", symbol: "??", icon: "💥", color: "#FF0000", description: "Error catastrófico, posiblemente pierdes la partida" },
  FORCED: { name: "Forzada", symbol: "⏸", icon: "🔒", color: "#A9A9A9", description: "Única jugada legal o viable disponible" }
};

class MoveAnalyzer {
  constructor() { this.moves = []; }
  analyzeMoveQuality(moveData, engineEvaluation) {
    const move = { moveNumber: moveData.moveNumber, player: moveData.player, from: moveData.from, to: moveData.to, piece: moveData.piece, notation: moveData.notation };
    if (engineEvaluation.legalMoves === 1) {
      move.classification = MoveClassification.FORCED;
    } else if (this.isFromOpeningBook(move.notation, moveData.moveNumber)) {
      move.classification = MoveClassification.BOOK;
    } else {
      const diff = engineEvaluation.playerMoveEval - engineEvaluation.bestMoveEval;
      if (diff >= 0.5) move.classification = MoveClassification.BRILLIANT;
      else if (diff >= 0.2) move.classification = MoveClassification.GREAT;
      else if (diff >= 0) move.classification = MoveClassification.BEST;
      else if (diff >= -0.15) move.classification = MoveClassification.EXCELLENT;
      else if (diff >= -0.3) move.classification = MoveClassification.GOOD;
      else if (diff >= -0.75) move.classification = MoveClassification.INACCURACY;
      else if (diff >= -1.5) move.classification = MoveClassification.MISTAKE;
      else move.classification = MoveClassification.BLUNDER;
    }
    this.moves.push(move);
    return move;
  }

  isFromOpeningBook(notation, moveNumber) {
    if (moveNumber > 25) return false;
    const openingMoves = ["e4","d4","Nf3","c4","e5","c5","d5","Nf6","Nc3","Bc4","Be2","g3","Bg5","Bxc6","exd4"];
    return openingMoves.includes(notation);
  }

  calculatePrecision(player) {
    const playerMoves = this.moves.filter(m => m.player === player);
    if (!playerMoves.length) return 0;
    const score = { Brillante:100, "Gran jugada":95, "La mejor jugada":90, Excelente:85, Buena:75, Libro:80, Inexactitud:50, Error:25, "Error grave / Colgada":0, Forzada:70 };
    const total = playerMoves.reduce((sum, move) => sum + (score[move.classification.name] || 0), 0);
    return Math.round(total / playerMoves.length);
  }

  calculateTechnique(player) {
    const playerMoves = this.moves.filter(m => m.player === player);
    if (!playerMoves.length) return 0;
    let score = 50;
    playerMoves.forEach(move => {
      const name = move.classification.name;
      if (name === "Brillante") score += 8;
      else if (name === "Gran jugada") score += 5;
      else if (name === "La mejor jugada") score += 3;
      else if (name === "Buena") score += 1;
      else if (name === "Error") score -= 4;
      else if (name === "Error grave / Colgada") score -= 10;
    });
    return Math.max(0, Math.min(100, score));
  }
}
