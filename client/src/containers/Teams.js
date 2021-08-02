import React, { useState, useEffect } from 'react';
import TeamPlayer from '../components/TeamPlayer';
import GameForm from '../components/GameForm';
import '../CSS_Files/Teams.css'

export default function Teams({
  squad,
  updatePlayerStats,
  updateGameStats,
  updatePlayerWins,
  updatePlayerLosses,
  updateTeamGoals,
  updateGoalsConceded,
}) {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  // const [orderedSquad, setOrderedSquad] = useState([]);
  /* 
  const initialState = {
    team1 : [],
    team2: [],
  }
  const [teams, setTeams] = useState(initialState);
  */

  // Function to create teams, loops through squad sorted by rating, adds first player to team 1, next to team 2, next to team 1 etc...
  const createTeams = (squad) => {
    const tempTeam1 = [];
    const tempTeam2 = [];
    // const tempTeams = { team1: [], team2: []}
    for (let i = 0; i < squad.length; i++) {
      if (i % 2 === 0) {
        tempTeam1.push(squad[i]);
        //tempTeams.team1.push(squad[i]);
      } else {
        tempTeam2.push(squad[i]);
        //tempTeams.team2.push(squad[i]);
      }
    }
    setTeam1((prevState) => [...prevState, ...tempTeam1]);
    setTeam2((prevState) => [...prevState, ...tempTeam2]);
    // setTeams( prevState => { ...prevState, ...tempTeams})
    // setTeams( {...tempTeams})
  };

  // function to display teams, maps through a team and returns a Player component for each player.
  const displayTeam = (team) => {
    return team.map((player) => {
      return (
        <TeamPlayer
          updatePlayerStats={updatePlayerStats}
          key={player.id}
          player={player}
        />
      );
    });
  };

  // As soon as the teams page is loaded, create the teams.
  useEffect(() => {
    createTeams(squad);
  }, []);

  return (
    <>
      <div className='Teams_teams'>
        <div className='Teams_team'>
          <div className='Teams_teamTitleContainer'>
            <h1 className='Teams_title'>Team 1</h1>
          </div>
          <div>{displayTeam(team1)}</div>
        </div>
        <div className='Teams_team'>
          <div className='Teams_teamTitleContainer'>
            <h1 className='Teams_title'>Team 2</h1>
          </div>
          <div>{displayTeam(team2)}</div>
        </div>
      </div>
      <div className='Teams_GameForm'>
        <GameForm
          team1={team1}
          team2={team2}
          updateGameStats={updateGameStats}
          updatePlayerWins={updatePlayerWins}
          updatePlayerLosses={updatePlayerLosses}
          updateTeamGoals={updateTeamGoals}
          updateGoalsConceded={updateGoalsConceded}
        />
      </div>
    </>
  );
}
