import Squad from './containers/Squad';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teams from './containers/Teams';
import MakePlayer from './helper-functions/makePlayerObject';
import PlayingSquad from './containers/PlayingSquad';
import HomePage from './containers/HomePage';
import CreateTeams from './components/Buttons';
import playersByRating from './helper-functions/app-functions';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [squad, setSquad] = useState([]);
  const [orderedSquad, setOrderedSquad] = useState([]);
  const [playingSquad, setPlayingSquad] = useState([]);

  const url = window.location.pathname.split('/').pop();

  useEffect(() => {
    fetch('http://localhost:3000/squad').then((response) => {
      return response.json().then((data) => {
        setSquad(
          data.map((player) => {
            return new MakePlayer(
              player.id,
              player.name,
              player.games,
              player.wins,
              player.losses,
              player.goals,
              player.motms,
              player.teamGoals,
              player.goalsConceded,
              player.imageUrl
            );
          })
        );
      });
    });
    setPlayingSquad([]);
    // updatePlayerCard();
  }, [url]);

  // When user clicks 'create teams' button, arranged the selected squad in order of skill rating.
  const orderSquad = () => {
    setOrderedSquad(playersByRating(playingSquad));
    setPlayingSquad([]);
  };

  // Either adds or removes players to the 'playingSquad' depending on if they are already included or not.
  const handleClick = (player) => {
    console.log(player.calculateRating());
    let inList = false;
    let index = 0;

    for (let member of playingSquad) {
      if (member.id === player.id) {
        inList = true;
        index = playingSquad.indexOf(member);
      }
    }
    if (inList === false) {
      setPlayingSquad((prevState) => [...prevState, player]);
      const tempSquad = squad;
      index = squad.indexOf(player);
      tempSquad.splice(index, 1);
      setSquad(tempSquad);
    }
    if (inList === true) {
      const arr = [...playingSquad];
      arr.splice(index, 1);
      setPlayingSquad(arr);
      setSquad((prevState) => [...prevState, player]);
    }
  };

  // Functions to update all the players stats after a game and reflect changes in the database.

  function updatePlayerStats(player, newGoals, newMotms) {
    fetch(`http://localhost:3000/squad/${player.id}`, {
      method: 'PUT',
      body: JSON.stringify({ goals: newGoals, motms: newMotms }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  function updateGameStats(player, newGames) {
    fetch(`http://localhost:3000/squad/${player.id}`, {
      method: 'PUT',
      body: JSON.stringify({ games: newGames }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }
  function updatePlayerWins(player, newWins) {
    fetch(`http://localhost:3000/squad/${player.id}`, {
      method: 'PUT',
      body: JSON.stringify({ wins: newWins }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }
  function updatePlayerLosses(player, newLosses) {
    fetch(`http://localhost:3000/squad/${player.id}`, {
      method: 'PUT',
      body: JSON.stringify({ losses: newLosses }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  function updateTeamGoals(player, newTeamGoals) {
    fetch(`http://localhost:3000/squad/${player.id}`, {
      method: 'PUT',
      body: JSON.stringify({ teamGoals: newTeamGoals }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  function updateGoalsConceded(player, newGoalsConceded) {
    fetch(`http://localhost:3000/squad/${player.id}`, {
      method: 'PUT',
      body: JSON.stringify({ goalsConceded: newGoalsConceded }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  return (
    <div className='App'>
      <Router>
        <div>
          <Header orderSquad={orderSquad} />
        </div>
        <Switch>
          <Route path='/teams'>
            <Teams
              updatePlayerWins={updatePlayerWins}
              updateGameStats={updateGameStats}
              updatePlayerStats={updatePlayerStats}
              squad={orderedSquad}
              updatePlayerLosses={updatePlayerLosses}
              updateTeamGoals={updateTeamGoals}
              updateGoalsConceded={updateGoalsConceded}
            />
          </Route>
          <Route path='/squad'>
            <Squad squad={squad} handleClick={handleClick} />
            <PlayingSquad squad={playingSquad} handleClick={handleClick} />
            <CreateTeams orderSquad={orderSquad} />
          </Route>
          <Route path='/loading'>
            <LoadingScreen />
          </Route>
          <Route path='/'>
            <HomePage orderSquad={orderSquad} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
