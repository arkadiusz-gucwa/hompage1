const firstName = 'Arek';
const age = 31;



console.log(firstName);
console.log(age);
console.log(`Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat.`)

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat.`




const greet = (age, firstName) => {
    console.log(
        `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
    );
}

const calculate = (myNumber) => myNumber * 7

console.log(calculate(7))

greet(31, 'Arek')


function creatContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content;
}

function helloWorld() {
    console.log('witaj swiecie')
}

helloWorld();


creatContent('.week-summary__description--js', 'Witaj Świecie!')

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    name: 'Death Star',
    levels: 357,
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44,
    }
}

const myProperty = 'name'

const showMeProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`)
}
showMeProperty('levels')

const humanOne = {
    name: 'Arek',
    age: 31,
    addres: {
        street: 'Warszawska',
        city: 'Białystok',
    }
}
const humanTwo = {
    name: 'Stefan',
    age: 35,
    addres: humanOne.addres,
}



console.log(typeof 2);
console.log(typeof "2");

if (humanOne.age > humanTwo.age) {
    console.log("human one jest starszy");
} else if (humanOne.age === humanTwo.age) {
    console.log("są równolatkami")
} else if (humanOne.age === 31) {
    console.log("humnan one ma 31")
} else {
    console.log("human two jest starszy");
}

if (!("Javascript" == "Java")) {
    console.log("to sie wykona")
}

const myNumber = '7';

switch (myNumber) {
    case 7:
        console.log('jestem siódemnką');
        break;
    case 9:
        console.log('jestem dziewiątką');
        break;
    default:
        console.log('jestem czymś innym')
}


if (32 > 20) {
    console.log('to prawda')
} else {
        console.log('to nie prawda')
    }


const result = (humanOne.age > humanTwo.age) ? age : false
console.log(result)