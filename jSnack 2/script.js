/*
## jSnack 2

Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.

Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti

## BONUS

Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome
*/

const students = [
  {
    name: 'Mario',
    surname: 'Rossi',
    idNumber: 12345,
    gPA: 7.8
  },
  {
    name: 'Michele',
    surname: 'Pilla',
    idNumber: 54321,
    gPA: 9.5
  },
  {
    name: 'Francesco',
    surname: 'Bianchi',
    idNumber: 89578,
    gPA: 3.5
  },
  {
    name: 'Maria',
    surname: 'Verdi',
    idNumber: 25987,
    gPA: 6
  },
  {
    name: 'Luisa',
    surname: 'Rossi',
    idNumber: 35687,
    gPA: 8
  },
  {
    name: 'Gianni',
    surname: 'Gialli',
    idNumber: 95863,
    gPA: 5.5
  }
];

students.forEach(student => {
  // Destrutturalizzazione
  const {name, surname, idNumber, gPA} = student;
  // console.log(student);
  const output = document.getElementById('output');
  output.innerHTML += `
  <ul>
    <li>${name}-${surname} ${idNumber} ${gPA}</li>
  </ul>
  `
});




















