// CONSEGNA

// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



let userChoice = '';
document.getElementById("play-button").addEventListener("click", function() {
    // prendo la scelta di difficoltà dell'utente
    userChoice = document.querySelector('.choice-list').value;
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';


    let squareSize = '';
    let squareQuantity = 0;
    if (userChoice == 'easy') {
        squareSize = 'square-10';
        squareQuantity = 100;

    } else if (userChoice == 'hard') {
        squareSize = 'square-9';
        squareQuantity = 81;

    } else if (userChoice == 'crazy') {
        squareSize = 'square-7';
        squareQuantity = 49;
    }

    for (let i = 0; i < squareQuantity; i++) {
        const numeri = generateRandomNumber(squareQuantity);

        const newBox = `
        <div class="square ${squareSize}">
            <span>${numeri[i]}</span>
        </div>
        `
        grid.innerHTML += newBox
        console.log(squareSize);
    }



});





// se sceglie facile metto quadrati s-10 e numeri da 1 e 100

// se sceglie medio metto quadrati s-9 e numeri da 1 e 81

// se sceglie difficile metto quadrati s-7 e numeri da 1 e 49




// FUNCTION
// Creo una funzione che mi da sotto forma di array numeri 
// tra 1 e 100, tra 1 e 81, e tra 1 e 49 senza ripeterli



// Questa funzione serve a generare una quantità di numeri
// casuali scelti da noi tramite l'argomento, che non si ripetono mai.
// return: fornisce un array contenente i numeri univoci
function generateRandomNumber (quantity) {
    const numbersArray = [];
    while(numbersArray.length < quantity) {

        const randomNumber = getRndInteger(1, quantity);
        if (!numbersArray.includes(randomNumber)) {
            numbersArray.push(randomNumber)
        }

    }
    return numbersArray

}

// Questa funzione serve a generare numeri casuali da un min a un max 
// (tutti e due compresi) che diamo noi come argomento.
// return: ci fornisce un numero
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




