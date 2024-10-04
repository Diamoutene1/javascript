"use strict";

// variables liste1 et liste2 pour les questions 1 et 2
let liste1 = [4, 8, 12, -6, -1, 6];
let liste2 = [-2, 5, 9, 14, 78, -32, 10, -3, -9];


/**
 * Question 1
 *
 * Écrire la fonction puissances qui :
 * - prend en argument une liste et un entier n
 * - retourne la liste des puissances n de la liste donnée en argument
 *
 * Afficher en console le résultat pour liste1 et n = 2 puis pour liste2 et n = 3
 *
 * Rappel : comme en python, on peut faire nombre ** n pour avoir nombre puissance n
 *
 *  Exemple : si liste = [ 2, 4, 8] et n = 2
 *  alors la fonction retourne [ 4, 16, 64 ]
 */

function puissances(liste,n) {
    let listeP=[]
    for(let i=0;i<liste.length;i++){
        listeP.push(liste[i]*n)

        



    }
    return listeP



}
console.log(puissances(liste1,2))
console.log(puissances(liste2,3))


/**
 * Question 2
 *
 * Écrire la fonction multiples qui :
 * - prend en argument une liste et un entier n
 * - retourne la liste des éléments divisibles par n
 *
 * Afficher en console le résultat pour liste1 et n = 2 puis pour liste2 et n = 3
 */

function multiples(liste,n) {
     let listedivi=[]
    for(let i=0;i<liste.length;i++){

        if(liste[i] %n==0){
            listedivi.push(liste[i])


        }
        
    }
    return listedivi


}

console.log(multiples(liste1,2))
console.log(multiples(liste2,3))

