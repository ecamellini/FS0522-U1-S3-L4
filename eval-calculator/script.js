// Tutte le volte che da qualche parte questa funzione verrà chiamata,
// la stringa che gli viene data tra parentesi, come parametro,
// verrà assegnata a questa variabile stringa
function writeToDisplay(element) {
  document.getElementById('display').value += element

  // Altri modi per fare la STESSA IDENTICA COSA:
  // Primo modo:
  // document.getElementById('display').value = document.getElementById('display').value + stringa

  // Secondo modo:
  // let display = document.getElementById('display')
  // display = display + stringa
}

function showResult() {
  // 1) Calcolo il risultato
  let result = eval(document.getElementById('display').value)

  // 2) Lo visualizzo nel display
  document.getElementById('display').value = result
}

function deleteDisplay() {
  document.getElementById('display').placeholder = '0' // Da ora in poi, placeholder è '0'
  document.getElementById('display').value = '' // Stringa vuota
}
