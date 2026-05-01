const obj = {};
// obj[1] = "one";
// obj["1"] = ['string one'];

const a = {id : 1};
const b = {id : 1};

obj[a] = "Hello";
obj[b] = "World";

console.log(obj)

const map = new Map();

map.set(a, "Hello");
map.set(b, "World");

console.log(map)