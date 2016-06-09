/** Created by Bente on 25-05-2016.

Et callback -> et stykke eksekverbar kode -> der bliver givet som argument til anden kode
            ->som forventes at kalde tilbage (udføre) det argument på et belejligt tidspunkt.
Callbacks kan være øjeblikkelig som i en synkron kald , eller det kan ske på et senere tidspunkt som i en asynkron kald.
I korte termer er callbacks en funktion, der er givet som et argument til en anden funktion og kan kaldes
efter en form for begivenhed.*/

var nameArray = ["Georgina", "Jeanette", "Susanne", "Sus", "Ann"];

function lengthOfNames(parameter) {
    if(parameter.length <= 3){
        return parameter;
    }
}

function lettersToUppercase(parameter){
    return parameter.toUpperCase();
}

console.log("Arrayet filtreret:                                        "+nameArray.filter(lengthOfNames));
console.log("Efter bogstaverne i arrayet er ændret til Uppercase:      "+nameArray.map(lettersToUppercase));
console.log("Arrayet er uændret i længde trods de andre console logs:  "+nameArray);

// Dette eks. viser vi også bruger callbacks i simpel brug af foreach i JS
nameArray.forEach(function(name){                                   // arr.forEach(callback())
    console.log("Mit navn er ikke: "+name);
});

// Her laver vi vores egen filter metode:
function UsingLenthOfNamesFilter(array, lengthOfNamesCallback) {
    var newArrayInThisMethod = [];
    for (var i = 0; i < array.length; i++) {
        if (lengthOfNamesCallback(array[i])) {
            newArrayInThisMethod.push(array[i]);
        }
    }
    return newArrayInThisMethod;
};

console.log("Ved brug af ny funktion hvor vi laver vores eget filter:  "+UsingLenthOfNamesFilter(nameArray, lengthOfNames));