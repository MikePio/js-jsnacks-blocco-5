/*
*SNACK 4*
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
Questo è l’elenco degli studenti:
Id  Name                 Grades
213 Marco della Rovere    78
110 Paola Cortellessa     96
250 Andrea Mantegna 	    48
145 Gaia Borromini        74
196 Luigi Grimaldello 	  68
102 Piero della Francesca 50
120 Francesca da Polenta  84
(NB: Si inverte l’ordine delle lezioni objects 3 e 2)
*/

const students = [
  {
    name: 'Marco della Rovere',
    id: 213,
    grades: 78
  },
  {
    name: 'Paola Cortellessa',
    id: 110,
    grades: 96
  },
  {
    name: 'Andrea Mantegna',
    id: 250,
    grades: 48
  },
  {
    name: 'Gaia Borromini',
    id: 196,
    grades: 74
  },
  {
    name: 'Luigi Grimaldello',
    id: 145,
    grades: 68
  },
  {
    name: 'Piero della Francesca',
    id: 102,
    grades: 50
  },
  {
    name: 'Francesca da Polenta',
    id: 120,
    grades: 84
  }
];

const gradesMaggiore = [];
const gradesInferiore = [];
const gradesEIdMaggiore = [];

students.forEach((student) => {
  const output = document.getElementById('output');
  output.innerHTML += `
  ${student.name.toUpperCase()}
  `
  output.innerHTML += `
  ----------
  `

  console.log(student.name.toUpperCase());

  if (student.grades > 70 && student.id > 120){
    gradesEIdMaggiore.push(student);
  }else if (student.grades > 70) {
    gradesMaggiore.push(student);
  }else{
    gradesInferiore.push(student);
  }

});
console.log(gradesEIdMaggiore);
console.log(gradesMaggiore);
console.log(gradesInferiore);




























