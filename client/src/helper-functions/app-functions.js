import calculateRating from "./calculateRating";

export default function playersByRating(squad) {
  const newSquad = [...squad];
  return newSquad.sort((currentPlayer, nextPlayer) => {
    return calculateRating(nextPlayer) - calculateRating(currentPlayer);
  });
};
