/*
Vježba: Node modules
Trajanje: cca 15min (18:55)
1. Napravite mapu sa dva modula od kojih se jedan zove app.js, a drugi ima proizvoljan naziv.
2. U drugom modulu definirajte funkciju po izboru. Funkcija mora primati barem jedan parametar i vratiti neki definirani rezultat. Funkcija mora biti exportana iz modula.
3. U modulu app.js requireati drugi modul i pozvati exportanu funkciju. Ispisati rezultat u konzolu.
Radimo u Node okruženju!
*/

var aboutDog = require("./dogs");

console.log("Ime psića je " + aboutDog.dogName("Nero") + ", a vlasnik " + aboutDog.dogOwner("Domagoj"));