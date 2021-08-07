import Squad from "./containers/Squad";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Teams from "./containers/Teams";
import PlayingSquad from "./containers/PlayingSquad";
import HomePage from "./containers/HomePage";
import CreateTeams from "./components/Buttons";
import playersByRating from "./helper-functions/app-functions";
import LoadingScreen from "./components/LoadingScreen";
import axios from "axios";

function App() {
  const url = window.location.pathname.split("/").pop();

  const [squad, setSquad] = useState([]);
  const [playingSquad, setPlayingSquad] = useState([]);
  const [orderedSquad, setOrderedSquad] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/squad")
      .then((res) => res.data)
      .then((data) => setSquad(data));
    setPlayingSquad([]);
  }, [url]);

  // When user clicks 'create teams' button, arranged the selected squad in order of skill rating.
  const orderSquad = () => {
    setOrderedSquad(playersByRating(playingSquad));
    setPlayingSquad([]);
  };

  // Either adds or removes players to the 'playingSquad' depending on if they are already included or not.
  const handleClick = (player) => {
    console.log(player.imageUrl);
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
    console.log(player.id);
    fetch(`http://localhost:3001/squad/${player.id}`, {
      // this should be /player/id
      method: "PUT",
      body: JSON.stringify({ goals: newGoals, motms: newMotms }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  const updatePlayer = (player) => {
    const { id } = player;
    // axios.put(`http://localhost:3001/player/${id}` {})
    console.log(id);
  }

  function updateGameStats(player, newGames) {
    fetch(`http://localhost:3001/squad/${player.id}`, {
      method: "PUT",
      body: JSON.stringify({ games: newGames }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }
  function updatePlayerWins(player, newWins) {
    fetch(`http://localhost:3001/squad/${player.id}`, {
      method: "PUT",
      body: JSON.stringify({ wins: newWins }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }
  function updatePlayerLosses(player, newLosses) {
    fetch(`http://localhost:3001/squad/${player.id}`, {
      method: "PUT",
      body: JSON.stringify({ losses: newLosses }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  function updateTeamGoals(player, newTeamGoals) {
    fetch(`http://localhost:3001/squad/${player.id}`, {
      method: "PUT",
      body: JSON.stringify({ teamGoals: newTeamGoals }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  function updateGoalsConceded(player, newGoalsConceded) {
    fetch(`http://localhost:3001/squad/${player.id}`, {
      method: "PUT",
      body: JSON.stringify({ goalsConceded: newGoalsConceded }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      return response.json().then((data) => {
        setSquad(data);
      });
    });
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/teams">
            <Teams
              updatePlayer={updatePlayer}
              updatePlayerWins={updatePlayerWins}
              updateGameStats={updateGameStats}
              updatePlayerStats={updatePlayerStats}
              squad={orderedSquad}
              updatePlayerLosses={updatePlayerLosses}
              updateTeamGoals={updateTeamGoals}
              updateGoalsConceded={updateGoalsConceded}
            />
          </Route>
          <Route path="/squad">
            <Squad squad={squad} handleClick={handleClick} />
            <PlayingSquad squad={playingSquad} handleClick={handleClick} />
            <CreateTeams orderSquad={orderSquad} />
          </Route>
          <Route path="/loading">
            <LoadingScreen />
          </Route>
          <Route path="/">
            <HomePage orderSquad={orderSquad} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
