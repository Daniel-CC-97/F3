import React from 'react';
import '../CSS_Files/PlayerForm.css';

// form to update goals and motms stat.

export default function PlayerForm({ player, updatePlayerStats }) {
  // takes user input and updates 'newGoals' variable, this is then passed to the updatePlayerStats function.
  let newGoals = 0;
  function updateGoals(e) {
    const goals = Number(e.target.value);
    newGoals = Number(player.goals) + goals;
    console.log(player.name, newGoals, newGoals + newGoals);
  }

  // takes user input and updates 'newMotms' variable, this is then passed to the updatePlayerStats function.
  let newMotms = 0;
  function updateMotm() {
    newMotms = Number(player.motms) + 1;
  }

  return (
    <div className='PlayerForm_playerFormContainer'>
      <form
        className='PlayerForm_playerForm'
        onSubmit={(e) => {
          e.preventDefault();
          updatePlayerStats(player, newGoals, newMotms);
        }}
      >
        <label className='PlayerForm_playerFormLabel'>
          Goals
          <input
            placeholder={`${player.name}'s goals`}
            onChange={updateGoals}
          />
        </label>
        <label className='PlayerForm_playerFormLabel'>
          MOTM
          <input type='checkbox' onChange={updateMotm} />
        </label>
      </form>
    </div>
  );
}
