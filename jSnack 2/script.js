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
    gPA: 7.8,
    photo: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Luca',
    surname: 'Bianchi',
    idNumber: 54321,
    gPA: 9.5,
    photo: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Francesca',
    surname: 'Bianchi',
    idNumber: 89578,
    gPA: 3.5,
    photo: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Maria',
    surname: 'Verdi',
    idNumber: 25987,
    gPA: 6,
    photo: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Luisa',
    surname: 'Rossi',
    idNumber: 35687,
    gPA: 8,
    photo: 'barbara-ramos-graphic-designer.jpg'
  },
  {
    name: 'Gianni',
    surname: 'Gialli',
    idNumber: 95863,
    gPA: 5.5,
    photo: 'scott-estrada-developer.jpg'
  }
];

//* BONUS
// ordinare in ordine alfabetico in base al cognome
students.sort((a, b) => {
  if (a.surname < b.surname) {
    return -1;
  }
  if (a.surname > b.surname) {
    return 1;
  }
  return 0;
});

students.forEach(student => {
  // Destrutturalizzazione
  const {name, surname, idNumber, gPA, photo} = student;
  // console.log(student);
  const output = document.getElementById('output');
  output.innerHTML += `
  <section id="students" class="pb-5">
    <div class="container">
      <div class="row flex-column align-items-center">
        <div class="card">
          <div class="card-body text-center p-2 py-3">
            <p><img class=" img-fluid rounded-2" src="img/${photo}" alt="card image"></p>
            <h4 class="card-title pt-2">${name} ${surname}</h4>
            <p class="card-text">${name}-${surname} ${idNumber} ${gPA}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
});




















