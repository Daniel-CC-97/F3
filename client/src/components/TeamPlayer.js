import React from "react";
import PlayerForm from "./PlayerForm";
import {
  determinePlayerNameClass,
  determineCard,
  determineStatClass,
} from "../helper-functions/player-functions";

export default function TeamPlayer({ player, updatePlayerStats }) {
  return (
    <>
      <div className="Player_playerAndForm">
        <div className="Player_playerCard">
          <img
            className="Player_cardImage"
            src={determineCard(player)}
            alt="card design"
          ></img>
          <div className={determinePlayerNameClass(player)}>
            <h3>{player.name}</h3>
          </div>
          <div className="Player_playerImageContainer">
            <img
              className="Player_playerImage"
              src={player.imgUrl}
              alt="player profile pic"
            ></img>
          </div>

          <div className="Player_playerStats">
            <div className="Player_playerStats1">
              <h5 className={determineStatClass(player)}>
                Games: {player.games}
              </h5>
              <h5 className={determineStatClass(player)}>
                Wins: {player.wins}
              </h5>
              <h5 className={determineStatClass(player)}>
                Losses: {player.losses}
              </h5>
            </div>
            <div className="Player_playerStats2">
              <h5 className={determineStatClass(player)}>
                Motms: {player.motms}
              </h5>
              <h5 className={determineStatClass(player)}>
                Goals: {player.goals}
              </h5>
              <h5 className={determineStatClass(player)}>
                GPG:{" "}
                {Math.round((player.goals / player.games) * 100) / 100 || 0}
              </h5>
            </div>
          </div>
        </div>
        <PlayerForm updatePlayerStats={updatePlayerStats} player={player} />
      </div>
    </>
  );
}
