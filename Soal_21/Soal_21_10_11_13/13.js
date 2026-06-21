let hargaMakanan = parseInt(prompt("Masukkan harga makanan:"));

let pajak = hargaMinuman * 0.1;
let fee = hargaMinuman * 0.05;

let hargaBayar = hargaMinumam + pajak + fee;

console.log(`Harga minuman : ${hargaMinuman}`);console.log(`Pajak : ${pajak}`);
console.log(`Fee : ${fee}`);
console.log(`Harga bayar : ${hargaBayar}`);