const calculateRating = (player) => {
  const goalsPerGame = Math.round((player.goals / player.games) * 100) / 100;
  const winPercentage = Math.round((player.wins / player.games) * 100) / 100;
  const lossPercentage = Math.round((player.losses / player.games) * 100) / 100;
  const motmsPerGame = Math.round((player.motms / player.games) * 100) / 100;
  const teamGoalsPerGame = Math.round((player.teamGoals / player.games) * 100) / 100;
  const goalsConcededPerGame = Math.round((player.goalsConceded / player.games) * 100) / 100;

  let rating =
    goalsPerGame +
    winPercentage +
    motmsPerGame * 3 -
    lossPercentage +
    teamGoalsPerGame * 0.5 -
    goalsConcededPerGame * 0.5;

  rating = Math.round(rating * 100) / 100;

  player.rating = rating;
  return rating || 0;

}

export default calculateRating;