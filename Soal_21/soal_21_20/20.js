let input = prompt("Masukkan satu huruf (A-Z):");

if (input === null || input.length !== 1) {
    console.log("Bukan berupa huruf");
} else {
    let huruf = input.toLowerCase();
    let vokal = ['a', 'i', 'u', 'e', 'o'];

    if (vokal.includes(huruf)) {
        console.log("Vokal");
    } else if (huruf >= 'a' && huruf <= 'z') {
        console.log("Konsonan");
    } else {
        console.log("Bukan berupa huruf");
    }
}