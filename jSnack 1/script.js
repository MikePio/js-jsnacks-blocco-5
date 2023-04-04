/*
## jSnack 1

Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65

*/
const users = [
  {
    name: 'Mario',
    surname: 'Rossi',
    age: 16
  },
  {
    name: 'Michele',
    surname: 'Pilla',
    age: 23
  },
  {
    name: 'Francesco',
    surname: 'Bianchi',
    age: 78
  },
  {
    name: 'Maria',
    surname: 'Verdi',
    age: 40
  },
  {
    name: 'Luisa',
    surname: 'Rossi',
    age: 98
  },
  {
    name: 'Gianni',
    surname: 'Gialli',
    age: 12
  }
];


users.forEach((user)  => {
  //stampo ogni user
  // console.log(user);

  //stampo ogni nome ed età di ogni user
  // console.log(user.name, user.age);
  
  // stampo i minorenni e gli over 65
  // if(user.age < 18 || user.age >= 65){
  //   console.log(user.name, user.age);
  // }


  if(user.age < 18){
      const output = document.getElementById('output');
      output.innerHTML += `
      <ul>
        <li>${user.name} con ${user.age} anni</li>
      </ul>
      `
      
    }
    if(user.age >= 65){
      const output2 = document.getElementById('output2');
      output2.innerHTML += `
      <ul>
        <li>${user.name} con ${user.age} anni</li>
      </ul>
      `
    }
});


//* utilizzando .map
// const minorenni = users.map((user) => {
//   if(user.age > 18) return user.age; 
// });
// console.log(user.age);

// const over65 = users.map((user) =>{
//   if(user.age <= 65) return user.age;
// });
// console.log(user.age);

//* METODO 1 utilizzando .filter 
// const minorenniEOver65 = users.filter((user) => {
//   if(user.age < 18){
//     return console.log(user.age)
//   }
//   if(user.age >= 65){
//     return console.log(user.age);
//   }
  
// });

//* METODO 2 utilizzando .filter
// const minorenni = users.filter((user) => {
//   //valore booleano true
//   if(user.age > 18){
//     return true; //12, 16
//   }
//   // STESSO RISULTATO CON valore booleano false
//   // if(user.age > 18){ //12, 16
//   //   return false;
//   // }
  
//   console.log(user.age);
// });

// const over65 = users.filter((user) => {
//   // //valore booleano true
//   if(user.age <= 65){
//     return true;
//   }
//   // // STESSO RISULTATO CON valore booleano false
//   // if(user.age <= 65){
//   //   return false;
//   // }
  
//   console.log(user.age);
// });
















