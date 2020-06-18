const firstName = 'Arek';
const age = 31;



console.log(firstName);
console.log(age);
console.log(`Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat.`)

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat.`

const emptyParagraph = document.querySelector('.week-summary__description--js')
emptyParagraph.innerHTML = `Nawet uzupełniłem treść JavaScriptem`