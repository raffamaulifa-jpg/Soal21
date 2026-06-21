let a = 1.8
let c = "2.4"

let cAngka = parseFloat(c);

let aBulat = parseInt(a);
let cBulat = parseInt(c); 

console.log(aBulat + cBulat)

document.body.innerHTML=`
${a} + ${cBulat} = ${a + cBulat}<br>
${a} - ${cBulat} = ${a - cBulat}<br>
${a} * ${cBulat} = ${a * cBulat}<br>
${a} / ${cBulat} = ${a / cBulat}<br>
${aBulat} % ${cBulat} = ${aBulat % cBulat}`;