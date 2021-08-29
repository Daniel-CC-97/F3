const express = require("express");
const cors = require("cors");
const router = require("./router/router");
const Player = require("./models/index");

const PORT = 3001;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

app.use(router);

(async () => {
  await Player.sequelize.sync({ force: false });
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
})();
