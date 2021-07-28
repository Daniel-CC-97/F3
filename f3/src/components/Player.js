import React from 'react';

export default function Player({ player }) {
  return (
    <div className='player'>
      <div className='playerName'>
        <h3>{player.name}</h3>
      </div>
      <div className='playerStats'>
        <div className='playerStats1'>
          <h6 className='stat'>Games: {player.games}</h6>
          <h6 className='stat'>Goals: {player.goals}</h6>
          <h6 className='stat'>Wins: {player.wins}</h6>
        </div>
        <div className='playerStats2'>
          <h6 className='stat'>Losses: {player.losses}</h6>
          <h6 className='stat'>Motms: {player.motms}</h6>
        </div>
      </div>
    </div>
  );
}
