/**
 * Build a game battling alien spaceships using Javascript.
 * github.com/fiddle-leaf
 * Shanon Palomino Salinas
 **/
/**
 * Actors and then Actions
 * An action these ships can take is to attack something. 
 * Perhaps a ship object (an actor) could therefore have an attack method (an action).
 */
const build = (num, name) => {
  const ships = [];
  let randomNum;
    const randomize = (x, y=0) => {
      x < 1 && y < 1 ?
      randomNum = Math.random()*(y - x) + x:
      randomNum = Math.random()*(Math.floor(y)-Math.ceil(x))+Math.ceil(x);
      return randomNum;
    };

    for (let i = 0; i < num; i++) {
      let shipName = name + `${i+1}`;
      let alienHull = Math.round(randomize(3, 6));
      let alienFP = Math.round(randomize(2, 4));
      let alienAcc = Number(randomize(0.6, 0.8).toFixed(2));
      ships.push(BattleShip(shipName, alienHull, alienFP, alienAcc));
    };
    return ships;
  };

const fight = (state) =>({
  attack: (ship) => {
    let attacker = state, opponent = ship.state;

    console.log(`\n${attacker.name} preparing attack...`);
    switch (Math.random() > opponent.accuracy) {
      case true: 
        opponent.hull -= attacker.firepower;
        console.log(`${opponent.name} hit!`);
        if (opponent.hull <= 0) {
          console.log(`${opponent.name} destroyed...`);
          alienShips.shift(opponent);
          break;
        } else {
          return true;
        }
      case false:
        console.log("Shot missed!");
        return false;
      };
    },
})


/**
 *  *  *  *  * Ship Properties *  *  *  *  *  *
 * hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
 * firepower is the amount of damage done to the hull of the target with a successful hit
 * accuracy is the chance between 0 and 1 that the ship will hit its target
 **/
const BattleShip = (name, hull, firepower, accuracy) => {
  let state = {
    name,
    hull,
    firepower,
    accuracy
  }
  return Object.assign(
    {state},
    fight(state),
    output(state)
  )
};

/**
 * Your spaceship, the USS Assembly should have the following properties:
 * hull - 20
 * firepower - 5
 * accuracy - .7
 **/
const userShip = BattleShip("USS Assembly", 20, 5, .7);
//console.log(userShip);

/**
 * The alien ships should each have the following ranged properties determined randomly:
 * hull - between 3 and 6
 * firepower - between 2and 4
 * accuracy - between .6 and .8
 */
const alienShips = build(6, "AlienShip");

const round = (attacker, opponent) => {
  let turn = false;
  do {
    turn = attacker.attack(opponent);
  } while (turn)
  return turn;
};

const game = () => {
  let alien = alienShips[0];
  switch(round(userShip, alien)){
    case false:
      round(alien, userShip);
      break;
    case undefined:
      break;
  }

  console.log("Score:\t", userShip.state.hull, alien.state.hull);
};

