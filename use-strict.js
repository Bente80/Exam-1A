/**Created by Bente on 24-05-2016.
 *
 * Use strict er en litterer expression der kom med i JavaScript 1.8.5 (ECMAScript version 5).
 * Formålet med at bruge "use strict" er for at:
 *          - indikere at koden skal eksekveres i "strict mode".
 *          - gør det nemmere at skrive "sikker JavaScript"
 *          - ikke kunne bruge ikke erklærerede variabler. (Hvilket man ellers kan i JS)
 * Hvordan skrives det:
 *          Strict mode bliver deklereret ved at tilføje "use strict" enten i BEGYNDELSER af JavaScriptet (Globalt)
 *          eller i en JavaScript function (lokalt). */

// Global scope - her bruges use strict i hele scriptet.
"use strict"
// a = 3.14;       // Dette vil kaste en fejl, fordi a ikke er deklareret. (HUSK udkommenter linien herunder!)
var a = 3.14;      // Dette vil ikke kaste en fejl fordi a nu er deklereret.

// Local scope - her bliver use strict kun brugt inden i funktionen.
function myFunction() {
    "use strict";
// b = 3.14;   // Dette vil kaste en fejl, fordi b ikke er deklareret.
}
myFunction();

// Et andet eks.
"use strict"
var c = 3.14;  // Dette kaster ikke en fejl, fordi c er deklereret.