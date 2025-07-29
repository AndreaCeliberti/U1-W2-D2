/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
// const numb1 = 8;
// const numb2 = 16;
// console.log("numb2 è maggiore", numb2 > numb1);

/* 
D2.js:6 numb2 è maggiore true
 */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
// const numb1 = 8;
// const numb2 = 5;
// console.log("not equal", numb1 === 5);

/* 
D2.js:17 not equal false
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

// const numb1 = 25;
// const numb2 = 5;
// console.log("è divisibile per 5", numb1 % numb2);

/* 
D2.js:29 è divisibile per 5 0
 */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// console.log("la differenza è uguale a 8", numb2 - numb1);

/* 
D2.js:39 la differenza è uguale a 8 8
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

// console.log(typeof numb1);

/* 
D2.js:72 number
 */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// console.log("se il risultato è 0 il numero è pari", numb2 % numb1);

/* 
D2.js:82 se il risultato è 0 il numero è pari 0
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

// let val = 2;
// if (val > 10) {
//   console.log("Meno di 10");
// } else if (val < 5) {
//   console.log("Meno di 5");
// } else {
//   console.log("Uguale a 10 o maggiore");
// }

/* 
2
D2.js:96 Meno di 5

7
D2.js:94 Meno di 10

11
D2.js:98 Uguale a 10 o maggiore
 */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };
// me.city = "toronto";

// console.log(me);

/* 
D2.js:123 {name: 'John', lastName: 'Doe', skills: Array(3), city: 'toronto'}
city: "toronto"
lastName: "Doe"
name: "John"
skills: (3) ['javascript', 'html', 'css']
[[Prototype]]: Object
 */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

// delete me.lastName;
// console.log(me);

/* {
    "name": "John",
    "skills": [
        "javascript",
        "html",
        "css"
    ],
    "city": "toronto"
} */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
// me.skills.splice(2);
// console.log(me);

/* {
    "name": "John",
    "lastName": "Doe",
    "skills": [
        "javascript",
        "html"
    ],
    "city": "toronto"
}*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

console.log(numbers);

/* [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]
 */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*

 */
