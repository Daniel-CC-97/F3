class MakePlayer {
  constructor(
    id,
    name,
    games,
    wins,
    losses,
    goals,
    motms,
    teamGoals,
    goalsConceded,
    imageUrl
  ) {
    this.id = id;
    this.name = name;
    this.games = games;
    this.goals = goals;
    this.wins = wins;
    this.losses = losses;
    this.motms = motms;
    this.teamGoals = teamGoals;
    this.goalsConceded = goalsConceded;
    this.imageUrl = imageUrl
  }
  goalsPerGame() {
    return Math.round((this.goals / this.games) * 100) / 100;
  }

  winPercentage() {
    return Math.round((this.wins / this.games) * 100) / 100;
  }

  lossPercentage() {
    return Math.round((this.losses / this.games) * 100) / 100;
  }

  motmsPerGame() {
    return Math.round((this.motms / this.games) * 100) / 100;
  }

  teamGoalsPerGame() {
    return Math.round((this.teamGoals / this.games) * 100) / 100;
  }

  goalsConcededPerGame() {
    return Math.round((this.goalsConceded / this.games) * 100) / 100;
  }


  calculateRating() {
    let rating =
      this.goalsPerGame() +
      this.winPercentage() +
      this.motmsPerGame() * 3 -
      this.lossPercentage() +
      this.teamGoalsPerGame() * 0.5 -
      this.goalsConcededPerGame() * 0.5;

    rating = Math.round(rating * 100) / 100;

    this.rating = rating;
    return rating || 0;
  }
}

module.exports = MakePlayer;
