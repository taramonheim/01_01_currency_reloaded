/*
 * CURRENCY CONVERTER RELOADED
 * Author: <Tara Monheim>
 * ---------------------------
 *
 * This converts currencies...somehow.
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe: Baut einen neuen Währungsumrechner. Nachfolgend findet ihr Code der die 
 *  dafür notwendingen Eingabewerte von der Konsole entgegennimmt.
 * 
 *  Dafür müsst ihr das Script wie folgt aufrufen:
 *  npm start -- <Ausgangssumme> <Ausgangswährung-Code> <Zielwährung-Code>
 *  also z.B.
 *  npm start -- 10.0 USD EUR
 * 
 *  Die erwartete Ausgabe ist ein Text in folgender Form:
 *  "Ergebnis: <Ausgangssumme> <Ausgangswährung> = <Ergebnis> <Zielwährung>"
 *  also z.B.
 *  Ergebnis: 10.00 USD = 11.00 EUR
 *  
 *  Das Script soll mindestens drei verschiedene Währungen in beide Richtungen unterstützen
 */


let args = process.argv.slice(2);

let amount, originalCurrency, targetCurrency;

if (args.length < 3) {
  console.log('Error: Not enough input arguments given!');
} else {
  amount = args[0];
  originalCurrency = args[1];
  targetCurrency = args[2];
}
//Variable Output deklarieren
let output;

//Faktoren EUR 
const currencys = {
  EUR: {rate: 1,Symbol: '€'},
  USD: {rate: 1.11, Symbol: '$'},
  CZK: {rate: 25.58, Symbol: 'Kč'},
  BWP: {rate: 12.04, Symbol: 'r' },
  AUD: {rate: 1.63, Symbol: 'AU$'},
  CNY: {rate: 7.78, Symbol: 'CN¥'},
  TRY: {rate: 6.34, Symbol: '₺'},
  ZAR: {rate: 16.33, Symbol: 'ZAR'}
}

const amountInEUR = amount / currencys[originalCurrency].rate;

output = amountInEUR * currencys[targetCurrency].rate;

//Ausgabe

console.log(' Das Ergebnis ist = ' + output + ' ' + currencys[targetCurrency].Symbol);

/*
const eur_usd = 1.11;
const eur_czk = 25.58;
const eur_bwp = 12.04;
const eur_aud = 1.63;
const eur_cny = 7.78;
const eur_try = 6.34;
const eur_zar = 16.33;
*/