let hargasebuahBarang = parseInt(prompt("Masukkan total hargasebuahbarang:"));
let diskon = 0;

if (hargasebuahBarang >= 300000) {
    diskon = hargasebuahBarang * 0.075;
} else {
    diskon = 0;
}

let totalBayar = hargasebuahBarang - diskon;

console.log(`Harga asli  : Rp ${hargasebuahBarang}`);
console.log(`Diskon (7.5%): Rp ${diskon}`);
console.log(`Total bayar : Rp ${totalBayar}`);