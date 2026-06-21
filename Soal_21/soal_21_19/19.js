let a = parseInt(prompt("Masukkan angka pertama (a):"));
let b = parseInt(prompt("Masukkan angka kedua (b):"));
let c = parseInt(prompt("Masukkan angka ketiga (c):"));

let terbesar = Math.max(a, b, c);
let terkecil = Math.min(a, b, c);

console.log(`Angka terbesar: ${terbesar}`);
console.log(`Angka terkecil: ${terkecil}`);