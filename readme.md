### Welcome to F3!

## Table of Contents

1. Introduction
2. Getting Started
3. Features
4. Future Features
5. Technologies

## Introduction


F3 aims to provide users with a better way to record football stats of games between themselves and their friends. F3 will then take the recorded data, display it in the form of player cards, and be able to produce fair teams for the next game based on the stats it has collected for each player.

## Getting Started

In order to run F3, postgreSQL is required to run the back-end database.

1. Fork this repo, copy the new HTTPS code, and run:

```
git clone 'HTTPS code you just copied'
cd client
```

2. Run `npm install` to install project dependencies into your local repo.
3. Run `npm start` to start the client.

```
cd ../server
```

5. Run `npm install` to install project dependencies into your local repo.
6. Make sure PostgreSQL is running.
8. Run ` node index.js` or `nodemon` to start the backend.
9.  Time to start recording your stats!

## Features

- Select players from total squad who will be playing in next game.
- Generates teams based on stats previously recorded.
- Record game stats, goals, motms etc.
- Player cards appearance change based on their stats.

## Future Features

- Add more players to your squad.
- Implement redux state management.
- Add login and register functionality.
- Allow user to change their own cards appearance based on accomplishments.

## Technologies

- JavaScript
- PostgreSQL
- Sequelize
- Express
- Node.js
- Jest

