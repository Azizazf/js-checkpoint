//Fonctions de manipulation de chaînes 

// inverser les chaines de carecteres

function reverseStr(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStr("Hello Word"));

//compter les chaines de caractere

function nbCaracter(chaine) {
    return chaine.length;
}

console.log(nbCaracter("day daw rek"));

// // mettre les mots en majuscules
// function toUpperCase(mots) {
//     mots = mots.split(" ");
//     for (let i = 0; i < mots.length; i++) {
//         mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slices(1)
//     }
//     return mots.join(" ")
// }

function changetoUpperCase(nice){
    return nice.toUpperCase();
}
const result = changetoUpperCase("king Yakhassane");

console.log(result);

//Fonctions de tableau :

//min et max 

function minandmax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return ("Minimun=" + min + "et" + "Maximum=" + max);
}
console.log(minandmax([12, 54, 87, 8, 3, 98]));

// Somme d'un tableau 

function somme(tableau) {
    let som = 0
    for (let i = 0; i < tableau.length; i++) {
        som = som + tableau[i];
    }
    return som;
}

console.log(somme([34, 67, 87, 2, 45]));

//Filtrer le Tableau

function FiltrerTab(tab) {
    let tab2 = [];
    for (let i = 0; i < tab.length; i++) {
        if ((tab[i] % 2) == 0) {
            tab2.push(tab[i])
        }
    }
    return tab2;
}

console.log(FiltrerTab([89, 57, 64, 28, 41, 94]));

//  Fonctions mathématiques :


// Factorielle

function factorielle(n) {
    let f = 1
    for (let i = 1; i <= n; i++) {
        f = f * 1
    }
    return f;
}

console.log(factorielle(4));

//Verification des premiers nombres 

function nbPremier(nombre) {
    let check = true
    let m = nombre / 2
    for (let i = 0; i <= m; i++) {
        if (m % i === 0) {
            check = false
        }
    }
    return check;
}
console.log(nbPremier(5));

//suite de fibonacci
function fibonacci(m) {
    var fib = [];
    fib[0] = 0
    fib[1] = 1
    for (let i = 2; i <= m; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib;
}

console.log(fibonacci(8))