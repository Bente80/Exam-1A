// Vi har 2 arrays med ens værdier.
var a = [1,2,3];
var b = [1,2,3];

// Vi kører en function som kører et callback på de to arrays.
function handleNumArrays(a,b,callback) {
    for(var i = 0; i < a.length; i++) {
        callback(a[i], b[i]);
    }
};

// Oprettet et nyt array for at gemme de nye værdier
var newArray = [];

// Kører metoden med callback hvor vi vil lægge a og b sammen.
handleNumArrays(a,b, function(a,b) {
    newArray.push(a+b);
});
console.log("\n Results: " + newArray + "\n");