/**Created by Bente on 24-05-2016.

* Pr. default, refererer this  til det globale objekt (window i en browser).

* This skifter værdi i 3 tilfælde: */

//__________1. Metode kald________________

var counter = {
    value: 0,
    dooit: function () {
        this.value += 1;
    }
};
// Her kalder vi metoden der tilhøre et objekt
counter.dooit();                // This refererer her til counter-objektets værdi, som ligger inde i funktionen.
console.log(counter.value); // 1
counter['dooit']();
console.log(counter.value); // 2

// Dette virker ikke!

var Bente = counter.dooit;     // Her kalder vi den samme funktion direkte, dvs. ikke som en egenskab af det overordnede
                              // objekt. Derfor bliver this ikke en henvisning til counter objektet.
Bente();                       // Metoden kaldes
console.log(counter.value);   // Intet er ændret, variablen er stadig 2
console.log(value); // NaN    // Denne referere til den globale variable window som er undifined +1 bliver til NaN


//__________2. funktioner kaldt med operatoren "new"_____________________

// En function kan bruges som konstruktør med operatoren "new".
// This refererer herefter til det nye objekt.

function F (data) {
    this.val = data;
}
var object = new F("Jubiiii!");
console.log(object.val);        // Jubiiii!

F("Meget mere Jubiiii!");        // uden new, vil this referere til det globale objekt
console.log(val);                // vil være "Meget mere Jubiiii!", men tilføjet til det globale scope


//__________3. funktioner der bliver kaldet ved brug af "call" og "apply".______________________

// Her henviser this til det første argument i "call" eller "apply".
// Hvis det første argument er null eller ikke et objekt, henviser this til det globale objekt.

var add = function (x, y) {
        this.val = x + y;
    },
    obj = {
        val: 0
    };

// metoderne er næsten ens men med apply sættes argumenterne ind i et array.
add.call(obj, 4, 7);
console.log(obj.val); // 11






/** __________1. Metode kald________________
 * Hvis vi kalder en funktion som en egenskab af et objekt ved hjælp af enten "dot." (dvs. obj.foo()) eller
 * "Klammer[]" (dvs. obj["foo"]()) notation, vil this henvise til det overordnede objekt inde i funktionen.
 * Når en funktion kaldes som en ejendom på en forælder objekt, refererer this til det overordnede objekt inde i denne
 * funktion.*/

/**__________2. funktioner kaldt med operatoren "new"_____________________
* Når en funktion kaldes med "new" operatoren, refererer this til det nyoprettede objekt inde denne funktion.*/

/**  3. funktioner der bliver kaldet ved brug af "call" og "apply".
 * Her henviser this til det første argument i "call" eller "apply".
 * Hvis det første argument er null eller ikke et objekt, henviser this til det globale objekt.
 * alle JS functions har metoderne Call og Apply, hvor første argument er hvad this skal sættes til*/

/** ------GLOBAL Object------
 I GLOBAL eksekverings kontekst (uden for en funktion), henviser this til det globale objekt,
 enten i strict mode eller ikke.*/

 //console.log(this.atob() === atob()); // true
