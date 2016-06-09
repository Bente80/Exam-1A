/** Created by Bente on 24-05-2016.
 *
 * I JavaScript, kan en variabele erklæres efter den er blevet brugt. Dette kaldes hoisting.
 * Hoisting er JavaScript's default behavior, som gør at alle deklereringer bliver rykket til toppen af det
 * aktuelle scopet/scriptet eller funktion.
 * Det er derfor godt at deklarere variabler i toppen!!!
 * Hoisting virker i nedestående eksempel fordi variablen "x" bliver deklareret på et tidspunkt. */

// Eks. 1 med variable hoisting.
x = 5;
console.log(x);
var x;  // først her bliver variablen deklareret.


// Eks. 2 med variable hoisting.

console.log(EnfedSætning);   // Her prøver at skrive en variablens indhold/opgave ud, men den er ikke defineret endnu.
                             // Opgaven "jubiii" er undifined, fordi den ikke er hoisted (d.v.s. den ikke er registreret
                             // i toppen).
                             // Deklereringen af variablen "EnfedSætning" er dog hoisted.
var EnfedSætning = "jubiii"; // Her bliver variablen "EnfedSætning" hoisted.
console.log(EnfedSætning);   // Her lykkedes det derfor at udskrive variablens indhold.


// Eks. 3 Variabel hoisting - lidt det samme eks.

var a = 5; // Initialiserer a
console.log(a + " " + b);           // Her prøver vi at udskrive a og b, men opgaven i b er ikke hoisted før efter
                                    // variablen er kaldt.
var b = 7; // Initialiserer b


// Eks. 4 med funktions hoisting

hoisted();
function hoisted(){
    console.log("Denne metode er også hoisted");
}


// Eks. 5 med functions hoisting

// En almindelig kode del som denne:
function Eks5(){
    f1();
    f2();

    function f1(){
        console.log("I'm the first function");
    }
    var f2 = function(){
        console.log("That might bee, but I'm the second function");
    }
}

// Med hoisting vil det blive tolket således:

function eks5hoistingFunction(){                // Deklereringen af Funktioner/variabler bliver tolket først med hoisting
    function f1(){                              // senere kommer udførslen.
        console.log("I'm the first function");
    }
    var f2;

    f1();
    f2();
    f2 = function(){
        console.log("That might bee, but I'm the second function");
    }
}

// eks5hoistingFunction();  // Her kan man se hvad der sker, nemlig at den siger at variablen f2 ikke er defineret.

