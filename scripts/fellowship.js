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
  //add middle earth to the body
  body.appendChild(middleEarth);
  let i=0;
  //cycle through lands
  while (i<lands.length) {
    //create each article
    let land = document.createElement('article')
    //append each article
    middleEarth.appendChild(land);
    //give each land their class name
    land.className = (lands[i]);
    //create the headers
    let header = document.createElement('h1');
    header.innerText = lands[i];
    land.appendChild(header);
    i++;
  }
}

makeMiddleEarth();

let hobbiton = document.getElementsByClassName('The Shire');

let makeHobbits = () => {
  let i=0;
//create unordered list
  let halflings = document.createElement('ul');
  //hobbiton is an array, so have to append to first and only element
  hobbiton[0].appendChild(halflings);
  while (i<hobbits.length) {
    let hobbit = document.createElement('li')
    halflings.appendChild(hobbit);
    //to add text to a li
    hobbit.append(document.createTextNode(hobbits[i]));
    hobbit.className = ('hobbit');
    i++
  }
}

const halfling = document.getElementsByClassName('hobbit');

let keepItSecretKeepItSafe = () => {
  let ring = document.createElement('div');
  ring.className = 'magic-imbued-jewelry';
  ring.setAttribute('id', 'the-ring');
  halfling[0].appendChild(ring);
}

const rivendell = document.getElementsByClassName('Rivendell');

let makeBuddies = () => {
  let aside = document.createElement('aside');
  let fellowship = document.createElement('ul');
  rivendell[0].appendChild(aside);
  aside.appendChild(fellowship);
  let i=0;
  while (i<buddies.length) {
    let fellow = document.createElement('li');
    aside.appendChild(fellow);
    fellow.innerHTML = buddies[i];
    i++;
  }
}


makeHobbits();
















keepItSecretKeepItSafe();

makeBuddies();
