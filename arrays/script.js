let listaDellaSpesa = [
  "Latte", // elemento 0 / index 0
  "Uova", // elemento 1 / index 1
  "Pasta", // elemento 2 / index 2
]


let result = 20 * (
  (12 + 45) * 34
) // Questo non è un array, è una espressione matematica, ma comunque un valore solo - il risultato

// Vediamo il nostro array in console
console.log(listaDellaSpesa)

// Stampo tutti gli elementi uno ad uno
console.log( listaDellaSpesa[0] ) // Stampa il primo elemento, cioè "Latte"
console.log( listaDellaSpesa[1] ) // Stampa il primo elemento, cioè "Uova"
console.log( listaDellaSpesa[2] ) // Stampa il primo elemento, cioè "Pasta"

// -----------------------------------------------
// Vediamo un esempio di un array con tipi diversi

let arrayConTipiDiversi = [
  "Questa è una stringa",
  123123,
  true
]

console.log(arrayConTipiDiversi)

// QUESTA COSA NON SI FA -- NON SI MISCHIANO TIPI DIVERSI IN UN ARRAY, SOLITAMENTE
// perché è un rischio, dato che se applico un'operazione a ogni elemento, posso avere
// risultati non coerenti, diversi.


// -----------------------------------------------


let images = [
  'https://picsum.photos/200/300',
  'https://www.europuppy.com/wp-content/uploads/2020/01/xIMG_9625-1.jpg.pagespeed.ic.aB3wA1tr1a.jpg',
  'https://catvills.com/wp-content/uploads/2021/01/tabby-cat-names.jpg',
]

function showRandomImage() {
  // 1) Genero un numero random tra 0 e la lunghezza dell'array images
  let randomIndex = getRandomInteger(0, images.length - 1)

  // 2) Vado a prendere l'indirizzo dell'immagine dall'array
  let imageLink = images[randomIndex]

  // 3) Visualizzo l'immagine
  document.getElementById('random-image').src = imageLink
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
 function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
