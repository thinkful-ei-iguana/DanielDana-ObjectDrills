'use strict';
//////1 - object initializers and methods///////
// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.
const loaf = {
  flour: 300,
  water: 210,
  hydration () {
    return this.water/this.flour*100;
  }
};
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());



////2 - Iterating over an objects properties////
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.
const fiver = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
}

for(let key in fiver) {
  console.log(`${key} ${fiver[key]}`);
}



//////3 - Array in objects ////////
// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const Hobbits = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(Hobbits.meals[3]);






////4 - Array of objects ////
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

let fred = {
  name: 'fred',
  jobTitle: 'kicker'
}

let george = {
  name: 'fred',
  jobTitle: 'puncher'
}

let velma = {
  name: 'Velma',
  jobTitle: 'Owner'
}

let peopleArr = [fred, george, velma];

peopleArr.forEach(person => {
  console.log(`${person.name} ${person.jobTitle}`);
});




////5 -Properties that Aren't there ///
// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.
peopleArr.forEach(employee => {
  if(employee.jobTitle!=='Owner') {
    employee.boss='Velma';
    console.log(`${employee.jobTitle} ${employee.name} reports to ${employee.boss}`);
  }
  else console.log(`${employee.jobTitle} ${employee.name} doesn't report to anybody.`);
});





////// 6 - Cracking the code//////
// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. This means, instead of doing some kind of condition check like if (char === 'a'), you should use an object's key-value pair structure as the code translator.
// Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

const decoder = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  decodeWords(string) {
    let arr = string.split(' ');
    let message = '';
    arr.forEach((word) => {
      if (word[0] === 'a') {
        message += word[this.a];
      } else if (word[0] === 'b') {
        message += word[this.b];
      } else if (word[0] === 'c') {
        message += word[this['c']];
      } else if (word[0] === 'd') {
        message += word[this.d];
      } else {
        message += ' ';
      }
    });
    return message;
  }
}

let arr56 = 'craft block argon meter bells brown croon droop';
console.log(decoder.decodeWords(arr56));

///////7 - Factory functions with LOTR //////
// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.




// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name, nickname, race, origin, attack, defense,
    describe() { console.log(`${this.name} is a ${this.race} from ${this.origin}`);},
    evaluateFight(character) {
      let opponentDamage = this.attack-character.defense;
      let ownDamage = character.attack-this.defense;
      return `Your opponent takes ${opponentDamage<0?0:opponentDamage} damage and you receive ${ownDamage<0? 0:ownDamage} damage`;

    }

  };
}

let characterArr = 'Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        || Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        || Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2       || Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8'.split('||').map(x=>x.split(' | ')).map(y=>y.map(z=>z.trim()));
let cast = characterArr.map(char=> createCharacter(...char));



// Arwen Undomiel is a Half-Elf of Rivendell
cast.push(createCharacter(
'Arwen Undomiel', 
'arwy',
'Three Quarter-Elf of Rivendell vegan',
'Rivendell',
100,
1000
));

console.log(cast);
// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.
cast.find(fighter=>fighter.nickname==='aragorn').describe();

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.
console.log(cast.filter(person=>person.race==='Hobbit'));

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.
console.log(cast.filter(person=>person.attack>5));
// What if you wanted to equip a weapon for each character and change how they are described? For example:
// Gandalf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?

function weaponize(char, weapon) {          // adds a wepon attribute and mutates the describe function
  char.weapon = weapon;
  char.describe = function () {
    console.log(`${char.name} is a ${char.race} from ${char.origin} who uses a ${char.weapon}`);
  }

  return char;
}

console.log(weaponize(cast[0], 'wizard staff'));
console.log(cast[0].describe());




///8 - BONUS /////
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
function findOne(arr, query){
  let key = Object.keys(query)[0];
  let value = Object.values(query)[0];
  return HEROES.find(hero=>hero[key]===value) || null;
}
console.log(findOne(HEROES, { id: 8 }));


const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  }
};