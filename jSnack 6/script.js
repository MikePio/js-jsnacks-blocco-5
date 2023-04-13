/*
*SNACK 6*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
*/

const squadre = [
    { 
        nome: "Squadra A", 
        puntiFatti: 0,
        falliSubiti: 0 
    },
    { 
        nome: "Squadra B", 
        puntiFatti: 0,
        falliSubiti: 0 
    },
    { 
        nome: "Squadra C", 
        puntiFatti: 0,
        falliSubiti: 0 
    },
    { 
        nome: "Squadra D", 
        puntiFatti: 0,
        falliSubiti: 0 
    }
];
    
//numeri casuali per le proprietà punti fatti e falli subiti
squadre.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random() * 100);
    squadra.falliSubiti = Math.floor(Math.random() * 50);
});

//map per creare un nuovo array con nomi e falli subiti
const squadreFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log("Squadre di calcio:", squadre);
console.log("Squadre con nomi e falli subiti:", squadreFalli);














