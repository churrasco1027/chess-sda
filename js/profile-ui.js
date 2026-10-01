class EloSystem {
  constructor(initialElo = 100) {
    this.currentElo = initialElo;
    this.gameHistory = [];
  }

  calculateEloGain(totalGames) {
    let minGain, maxGain;
    if (totalGames < 10) { minGain = 50; maxGain = 115; }
    else if (totalGames < 15) { minGain = 40; maxGain = 80; }
    else if (totalGames < 25) { minGain = 15; maxGain = 35; }
    else { minGain = 7; maxGain = 13; }

    return Math.floor(Math.random() * (maxGain - minGain + 1)) + minGain;
  }

  addGame(gameData) {
    const totalGamesBefore = this.gameHistory.length;

    if (gameData.result === "win") {
      const eloGain = this.calculateEloGain(totalGamesBefore);
      gameData.eloChange = eloGain;
      this.currentElo += eloGain;
    } else if (gameData.result === "draw") {
      gameData.eloChange = 0;
    } else if (gameData.result === "loss") {
      const eloLoss = this.calculateEloGain(totalGamesBefore);
      gameData.eloChange = -eloLoss;
      this.currentElo -= eloLoss;
    }

    gameData.eloAfter = this.currentElo;
    this.gameHistory.push(gameData);
    return gameData;
  }
}
