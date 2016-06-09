/**Created by Bente on 25-05-2016.

 Imediate Invoke Function Expression(IIFE) er et design mønster(pattern) lavet til Javascript brugt til at få en funktion
 til at kalde sig selv.
 IIFE kan bruges til at undgå variable hoisting inden i blokke samt beskytter det globale miljø imod udfra kommende
 samtidig med at give offentlig adgang til metoder og bevare privatlivets fred for variabler, der er defineret i funktioner. */

// Eks. 1
(function(){
    var jubii = "jubiii";
    console.log(jubii);     // Her er variablen tilgængelig
})();
                            // Dette fejler fordi:
// console.log(jubii);         // udenfor funktionen er variablen ikke tilgængelig med IIFE.

// Eks. 2
var Bente = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() { return privateCounter;}
    }
})();

// "Bente" is an object with properties, which in this case happen to be methods.

Bente.increment();              // Her pluser vi den lokale variablen.
console.log(Bente.value());     // Derfor bliver den 1 her og ikke 0
console.log(Bente.privateCounter);   // Vi kan ikke tilgå denne variabel her, da den er lokal.





// For at implementere IIFE's indkapsler man funktionen expression i parenteser samt man kan indkapsle selve indstatieringen også.
(function() {
    // Koden her er eksekveret i sit eget scope.
})(); // eller }());


//Overføre variabler til scopet er gjort på følgende måde:
(function(a, b) {
    // a == 'hello'
    // b == 'world'
})('hello', 'world');



//Link: https://en.wikipedia.org/wiki/Immediately-invoked_function_expression