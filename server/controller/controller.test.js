const express = require("express");
const router = require("../router/router");
const supertest = require("supertest");
const flushPromises = require("flush-promises");
const Player = require("../models/index");

// const { Sequelize } = require("sequelize");

describe("Integration test", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    await Player.sequelize.sync({ force: true });
  });

  it("should save player to db", async () => {
    const name = "sarah";
    await request.post("/player").send({ name });
    const player = await Player.findOne({ where: { name } });
    expect(player.dataValues.name).toBe(name);
  });
});
