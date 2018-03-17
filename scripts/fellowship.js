console.log("LINKED");

// Dramatis Personae
let hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

let buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
let lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
let body = document.querySelector('body');



const middleEarth = document.createElement('section');
middleEarth.setAttribute("id", "middle-earth")


let makeMiddleEarth = () => {
  body.appendChild(middleEarth);
  let i=0;
  while (i<lands.length) {
    let land = document.createElement('article')
    middleEarth.appendChild(land);
    land.className = (lands[i]);
    let header = document.createElement('h1');
    header.innerText = lands[i];
    land.appendChild(header);
    i++;
  }
}

makeMiddleEarth();

const hobbiton = document.getElementsByClassName('The Shire');

let makeHobbits = () => {
  let i=0;
  // let home = document.getElementsByClassName('The Shire');

  let halflings = document.createElement('ul');
  hobbiton.appendChild(halflings);
  while (i<hobbits.length) {
    let hobbit = document.createElement('li')
    halflings.appendChild(hobbit);
    hobbit.innerText(hobbits[i]);
    i++
  }
}


makeHobbits();
