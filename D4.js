/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("--------Esercizio 1--------");

function area(l1, l2) {
  return l1 * l2;
}

let result = area(2, 4);
console.log(result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("--------Esercizio 2--------");

function crazySum(a, b) {
  if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
    if (a === b) {
      let result = (a + b) * 3;
      return result;
    } else {
      let result = a + b;
      return result;
    }
  } else {
    console.log("Devi inserire numeri interi!");
  }
}

result = crazySum(3, 2);
console.log(result);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("--------Esercizio 3--------");

function crazyDiff(a) {
  if (a > 19) {
    let result = a - 19;
    return result * 3;
  } else {
    let result = a - 19;
    return Math.abs(result);
  }
}

result = crazyDiff(20);
console.log(result);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("--------Esercizio 4--------");

function boundary(n) {
  if (Number.isInteger(n) === true) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Inserisci un numero intero");
  }
}

result = boundary(3);
console.log(result);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("--------Esercizio 5--------");

function epify(s) {
  if (s.indexOf("EPICODE") === 0) {
    return s;
  } else {
    return "EPICODE ".concat(s);
  }
}
result = epify("ciao");
console.log(result);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("--------Esercizio 6--------");

function check3and7(a) {
  if (a >= 0) {
    if (a % 3 === 0 || a % 7 === 0) {
      console.log(a, " è un multiplo di 3 o di 7!");
    } else {
      console.log(a, " non è un multiplo di 3 o di 7");
    }
  } else {
    console.log("Inserisci un numero positivo!");
  }
}

result = check3and7(8);
console.log(result);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("--------Esercizio 7--------");

function reverseString(s){
    let result = ""
    for(let i=s.length -1; i>=0;i--){
        result += s.charAt(i)
    }
    return result
}

result = reverseString("ciao")
console.log(result);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("--------Esercizio 8--------");

function upperFirst(s) {
  let newString = s.split(" ");

  for (let i = 0; i < newString.length; i++) {
    newString[i] =
      newString[i].charAt(0).toUpperCase() + newString[i].substring(1);
  }
  return newString.join(" ");
}
result = upperFirst("ciao come stai");
console.log(result);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("--------Esercizio 9--------");

function cutString(string){

    let result = string.slice(1,string.length-1)
    return result

}

result = cutString("gattino")
console.log(result);


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("--------Esercizio 10--------");

function giveMeRandom(n){
    let result = []
    for(let i=0;i<n;i++){
        result.push(Math.floor(Math.random()*11))
    }
    return result
}

result = giveMeRandom(5)
console.log(result);

