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
    hobbit.setAttribute('id', hobbits[i]);
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
    fellow.className = "buddy"
    fellow.setAttribute('id', buddies[i]);
    i++;
  }
}

buddy = document.getElementsByClassName('buddy')

let beautifulStranger = () => {
  buddy[3].innerText = "Aragorn";
}

let forgeTheFellowShip = () => {
  let fellowship = document.createElement('div');
  rivendell[0].appendChild(fellowship);
  let list = document.createElement('ul');
  fellowship.appendChild(list);
  let i=0;
  while (i<halfling.length) {
    list.appendChild(halfling[0]);
    // congrats(halfling[0].innerText);
    i++;
  }

  let k=0;
  while (k<buddy.length) {
    list.appendChild(buddy[0]);
    // congrats(buddy[0].innerText);
    k++;
  }
}


let congrats = (str) => {
  alert(str + " has joined your party!");
}

// const gandalf = document.getElementById('Gandalf the Grey');

let theBalrog = () => {
  buddy[0].innerText = 'Gandalf the White';
}



let hornOfGondor = () => {
  let boromir = document.getElementById('Boromir');
  alert("The Horn of Gondor has been blown!")
  boromir.innerHTML = '<del>"Boromir"<del>';
  boromir.remove();
}

let itsDangerousToGoAlone = () => {
  let mordor = document.getElementsByClassName('Mordor');
  let frodo = document.getElementById("Frodo Baggins");
  let sam = document.getElementById('Samwise \'Sam\' Gamgee')
  mordor[0].appendChild(frodo);
  mordor[0].appendChild(sam);
  let mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor[0].appendChild(mountDoom);
}

let weWantsIt = () => {
  let mordor = document.getElementsByClassName('Mordor');
  let smeagol = document.createElement('div');
  smeagol.setAttribute('id', 'gollum');
  mordor[0].appendChild(smeagol);
  let ring = document.getElementById('the-ring');
  smeagol.appendChild(ring);
  let mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(smeagol);
}

let thereAndBackAgain = () => {
  let smeagol = document.getElementById('gollum');
  smeagol.remove();
  let i=0;
  while (i<halfling.length) {
    hobbiton[0].appendChild(halfling[i]);
    i++;
  }
}



makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe();
makeBuddies();
beautifulStranger();
forgeTheFellowShip();
theBalrog();
hornOfGondor();
itsDangerousToGoAlone();
weWantsIt();
thereAndBackAgain();
