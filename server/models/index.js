const { Sequelize, DataTypes } = require("sequelize");

const isTesting = true;

const DB_NAME = isTesting ? "testF3DB" : "F3DB";
const DB_USER = "testuser";

const config = {
  host: "localhost",
  dialect: "postgres",
};

const sequelize = new Sequelize(DB_NAME, DB_USER, "", config);

const img =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E";

const Player = sequelize.define("player", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  games: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  wins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  losses: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  goals: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  motms: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  teamGoals: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  goalsConceded: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  imgUrl: {
    type: DataTypes.STRING(1234),
    defaultValue: img,
  },
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(
//       `Connection to ${
//         isTesting ? "test" : ""
//       } DB has been established successfully.`
//     );
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

module.exports = Player;
