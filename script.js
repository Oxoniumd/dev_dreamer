let game = {
  name: "Sonic",
  platform: "SEGA",
  year: 1991,
};

let gameMap = new Map();
// gameMap.set("Name", "Sonic the hedgehog");
// gameMap.set(3, " the number three");
// gameMap.set(true, "boolean");

// let getInfo = gameMap.get("Name");
// let hasInfo = gameMap.has("Name");
// console.log(gameMap);

// console.log(getInfo);

// gameMap.set("SEGA", "Sonic the Hedgehog");
// gameMap.set("SNES", "Super mario");
// gameMap.set("PS", "Spyro");

// console.log(gameMap);

// for (let key of gameMap.keys()) {
//   console.log(key);
// }

// for (let value of gameMap.values()) {
//   console.log(value);
// }

// for (let [k, y] of gameMap.entries()) {
//   console.log(`${k} has value of ${y}`);
// }

// let weakMap = new WeakMap();

// weakMap.set("Name", "John");

// console.log(weakMap);

let tourMap = new Map();

tourMap.set("Ryu", "Japan");
tourMap.set("ken", " USA");
tourMap.set("Guile", "USA");
tourMap.set("Blanka", "Brazil");

console.log(tourMap);

for (let [k, v] of tourMap.entries()) {
  console.log(`${k} is a city in  ${v}`);
}
