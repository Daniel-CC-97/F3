const Player = require("../models/index");

exports.getPlayers = async (req, res) => {
  try {
    const squad = await Player.findAll();
    console.log(squad);
    res.send(squad);
  } catch (err) {
    console.log(err);
  }
};

exports.addPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.send(newPlayer).status(201);
  } catch (err) {
    console.error(err);
  }
};

exports.updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await Player.update(req.body, {
      where: { id: req.params.id },
    });
    res.send("player was updated").status(201);
  } catch (err) {
    console.error(err);
  }
};
