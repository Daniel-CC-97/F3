const Player = require('../models/index');

const presetData = [{
  name: "john",
  games: 2,
  wins: 1,
  losses: 1,
},
{
  name: "paul",
  games: 2,
  wins: 2,
  losses: 0,
},
{
  name: "becky",
  games: 2,
  wins: 0,
  losses: 2,
}
];

(async () => {
  //connect to db using sequelize.sync / sequelize.auth
  await Player.sequelize.sync({ force: true });
  // set force to true

  Player.bulkCreate(presetData);
  // have some kind of confimation that db has been populated
})()

