// // let game = {
// //   name: "Sonic",
// //   platform: "SEGA",
// //   year: 1991,
// // };

// // let gameMap = new Map();
// // // gameMap.set("Name", "Sonic the hedgehog");
// // // gameMap.set(3, " the number three");
// // // gameMap.set(true, "boolean");

// // // let getInfo = gameMap.get("Name");
// // // let hasInfo = gameMap.has("Name");
// // // console.log(gameMap);

// // // console.log(getInfo);

// // // gameMap.set("SEGA", "Sonic the Hedgehog");
// // // gameMap.set("SNES", "Super mario");
// // // gameMap.set("PS", "Spyro");

// // // console.log(gameMap);

// // // for (let key of gameMap.keys()) {
// // //   console.log(key);
// // // }

// // // for (let value of gameMap.values()) {
// // //   console.log(value);
// // // }

// // // for (let [k, y] of gameMap.entries()) {
// // //   console.log(`${k} has value of ${y}`);
// // // }

// // // let weakMap = new WeakMap();

// // // weakMap.set("Name", "John");

// // // console.log(weakMap);

// // let tourMap = new Map();

// // tourMap.set("Ryu", "Japan");
// // tourMap.set("ken", " USA");
// // tourMap.set("Guile", "USA");
// // tourMap.set("Blanka", "Brazil");

// // console.log(tourMap);

// // for (let [k, v] of tourMap.entries()) {
// //   console.log(`${k} is a city in  ${v}`);
// // }

// // const game = {
// //   title: "Sonic the hedgehog",
// //   year: 1991,
// // };

// // function info(platform, character) {
// //   console.log(
// //     `${this.title} was released in ${this.year}, for ${platform},
// //     it features the character ${character}`
// //   );
// // }

// // info.apply(game, ["SEGA", "Sonic"]);

// // info();

// // const game = {
// //   title: " donkey kong country",
// //   platform: "SNES",
// //   year: 1994,
// //   character: {
// //     main: "Donkey kong",
// //     side: "diddy kong",
// //     boss: "King k.Rool",
// //   },
// // };

// // let {
// //   title,
// //   platform,
// //   year: release,
// //   character: { main, side, boss },
// // } = game;

// // console.log(main, side, boss);

// // const book = [
// //   "the last battle",
// //   "C.S Lewis",
// //   "1956",
// //   ["shift", "puzzle", "Tirian"],
// // ];

// // // array destructuring

// // let [title, author, year, [a, b, c]] = book;

// // console.log(a, b, c);

// // NUMS = [1, 2, 3];

// // let myArray = [...NUMS, 4, 5, 6];

// // console.log(NUMS);
// // console.log(myArray);

// const sum2 = (a, b) => {
//   return console.log(a + b);
// };

// sum2(5, 4);

// const game = () => {
//   return "sonic";
// };

// console.log(game());

// const games = (title) => {
//   let favGame = title;
//   return favGame;
// };

// console.log(game("sonic"));

// function sub(channel) {
//   console.log(`subscribe to ${channel}`);
// }
// let timer = setTimeout(sub, 3000, `misty`);

// const clear = () => {
//   clearTimeout(timer);
//   console.log(`clearTimeout() stopped the timer`);
// };

// const btn = document.getElementById("btn").addEventListener("click", clear);
