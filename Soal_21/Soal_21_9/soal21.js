const prompt = require("prompt-sync") ({sigint: true});

let panjang = Number(prompt("masukan panjang :"));
let lebar = Number(prompt("masukan lebar :"));
let luas = panjang * lebar
let keliling = 2 * (panjang + lebar);

console.log(`luas: ${luas}`)
console.log(`keliling: ${keliling}`)