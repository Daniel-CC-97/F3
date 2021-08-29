const {
  getPlayers,
  addPlayer,
  updatePlayer,
} = require("../controller/controller");

const router = require("express").Router();

router.get("/squad", getPlayers);
router.post("/player", addPlayer);
router.put("/player/:id", updatePlayer);

module.exports = router;
