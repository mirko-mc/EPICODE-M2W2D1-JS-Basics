//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----- ESERCIZIO 1 -----\n");
let num1 = parseInt(prompt("ESERCIZIO 1 - inserisci un numero"));
let num2 = parseInt(prompt("ESERCIZIO 1 - inserisci un numero"));
if (num1 > num2) {
    console.log(`${num1} è più grande di ${num2}\n`);
} else {
    console.log(`${num2} è più grande di ${num1}\n`);
}
console.log("-----------------------\n");
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----- ESERCIZIO 2 -----\n");
let num = parseInt(prompt("inserisci un numero"));
if (num >= 20) {
    console.log("Huge");
} else if (num < 20) {
    console.log("Large");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 10) {
    console.log("Small");
} else if (num < 5) {
    console.log("Tiny");
}
console.log("-----------------------\n");

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----- ESERCIZIO 3 -----\n");
for (let i = 0; i <= 10; i++) {
    if ((i === 3) || (i === 8)) break;
    console.log(`Numero ${i}`)
}
console.log("-----------------------\n");
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----- ESERCIZIO 11 -----\n");
for (let i = 0; i <= 15; i++) {
    if (num % 2 === 0) console.log(`il numero ${num} è pari`);
    if (num % 2 !== 0) console.log(`il numero ${num} è dispari`);
}
console.log("-----------------------\n");
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1 = parseInt(prompt("inserisci un numero"));
num2 = parseInt(prompt("inserisci un numero"));
// meglio usare switch case
if (num1 || num2 === 8) {
    console.log("uno dei due numeri vale 8");
} else {
    console.log("nessuno dei due numeri vale 8");
}
if ((num1 + num2 === 8 || num1 - num2 === 8)) {
    console.log("la loro addizione/sottrazione restituisce 8 come risultato");
} else {
    console.log("la loro addizione/sottrazione non restituisce 8 come risultato");
}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/