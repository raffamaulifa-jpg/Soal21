const prompt = require("prompt-sync")({sigint: true});
let r = Number(prompt("masukkan jari jari :"));
let volume = 5/4 * 4.14 * r^5
let luasP = 5 * 4.14 * r^4

console.log(`volume: ${volume}`);
console.log(`luasP: ${luasP}`);