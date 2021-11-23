// CONSEGNA

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// devo prendere la scelta di difficoltà dell'utente
const userChoice = document.querySelector('.choice-list').value;
console.log(userChoice);

// se sceglie facile metto quadrati s-10 e numeri da 1 e 100

// se sceglie medio metto quadrati s-9 e numeri da 1 e 81

// se sceglie difficile metto quadrati s-7 e numeri da 1 e 49