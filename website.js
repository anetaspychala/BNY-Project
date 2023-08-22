const jsonData = require('./fxrate.json');

const obj = JSON.stringify(jsonData)
const mapJSON = new Map(Object.entries(JSON.parse(obj)))
let map2 = new Map();
map2= mapJSON.get("106");
const obj3 = JSON.stringify(map2)
const mapJSON2=new Map(Object.entries(JSON.parse(obj3)))
