# Our Marbles game  on Reach
Implementation of the Marbles game with Reach

## Concept of our Game ?
Our game is played with three players, who display a hand of marbles showing one to six marbles and after each of them have to declare  what they think the sum of all the marbles will be.


Rules:
- Each players guess what they think the sum of all marbles will be at the beginning of the game
- Players display a number of marbles (0 - 6)
- The winner is one who was able to guess the sum correctly

## How to Play the Marbles Game on our dApp
- You should ensure to have 3 players to play the game,
- Then, ensure all the 3 players connect their account to ALGO first by clicking on **connect wallet** button,
- Allow player 1 to create the game by clicking on **create game** button,
- Player 1 name should be called Alice
- Player input his/her guess, inputs his/her hand and set a stake for the game,
- Player 2 and 3 joins the game by clicking on **join game** button,
- Player 2 name should be tagged as **Bob** while player 3 name should be tagged as **Charlie**
- Player 1 waits for player 2 and player 3 to select a guess and play their hands,
- After which all players reveal their hand and the game started
- The winner is one who was able to guess the sum correctly.

## Run Marbles locally

### Prerequisite
To run this Dapp locally, you need to make sure you have the following installed:
- make: confirm with `make --version`
- docker: confirm with `docker --version`
- docker-compose: confirm with `docker-compose --version`


### Clone repo
```bash
git clone https://github.com/zeca19/Reach-Projekat.git
```

#### Install the dependencies

```
npm install install

# From the project root path

cd src/reach

# To see if Reach is installed correctly run 

s ./reach version
```

### Run app with reach
```bash
./reach run
```

---

#### Test the Application


Run `npm  start` to get your development server start.

This opens a new browser with `localhost:3000` running.

Ensure your browser pop-ups are enabled

---

#### Host view and Player view

Open `localhost:3000` on separate browsers to test using [MyAlgo](https://wallet.myalgo.com/) Testnet only.
