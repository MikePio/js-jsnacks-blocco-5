/*
*SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const biciclette = [
    {nome: "Bici A", peso: 11},
    {nome: "Bici B", peso: 9},
    {nome: "Bici C", peso: 7},
    {nome: "Bici D", peso: 10},
    {nome: "Bici E", peso: 12},
];

//*forEach 
let biciLeggera = biciclette[0];
biciclette.forEach(bici => {
    if (bici.peso < biciLeggera.peso) {
        biciLeggera = bici;
    }
});

console.log(`La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`);

//*filter [migliore in questo caso]
biciLeggera = biciclette.filter(bici => bici.peso === Math.min(...biciclette.map(bici => bici.peso)))[0];

console.log(`La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`);














