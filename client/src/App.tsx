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

  const [squad, setSquad] = useState<any>([]);
  const [playingSquad, setPlayingSquad] = useState<any>([]);
  const [orderedSquad, setOrderedSquad] = useState<any>([]);

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
  const handleClick = (player: Player) => {
    console.log(player.imageUrl);
    let inList = false;
    let index: number = 0;

    for (let member of playingSquad) {
      if (member.id === player.id) {
        inList = true;
        index = playingSquad.indexOf(member);
      }
    }
    if (inList === false) {
      setPlayingSquad((prevState: Player[]) => [...prevState, player]);
      let tempSquad = squad.slice();
      index = squad.indexOf(player);
      tempSquad.splice(index, 1);
      setSquad(tempSquad);
    }
    if (inList === true) {
      const arr = [...playingSquad];
      arr.splice(index, 1);
      setPlayingSquad(arr);
      setSquad((prevState: Player[]) => [...prevState, player]);
    }
  };

  // Functions to update all the players stats after a game and reflect changes in the database.

  const updatePlayerStats = async (player: Player, newGoals: number, newMotms: number) => {
    await axios.put(`http://localhost:3001/player/${player.id}`, {
      goals: newGoals,
      motms: newMotms,
    });
    await axios
      .get(`http://localhost:3001/squad`)
      .then((response) => response.data)
      .then((data) => setSquad(data));
  };

  interface Player {
    name: String;
    [key: string]: any;
  }

  const updatePlayer = async (player: Player, updates: { [key: string]: any; }): Promise<void> => {
    const { id } = player;
    await axios.put(`http://localhost:3001/player/${id}`, updates);
    axios
      .get("http://localhost:3001/squad")
      .then((res) => res.data)
      .then((data) => setSquad(data));
  };

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
              updatePlayerStats={updatePlayerStats}
              squad={orderedSquad}
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
