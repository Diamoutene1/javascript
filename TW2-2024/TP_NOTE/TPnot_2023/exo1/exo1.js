"use strict";

let listePersonnes = [ "Alexandra Holmes", "Paul Grant", "Humphrey Ryan", "Reba Wilcox", "Jenny Harding", "Paul Cameron", "Clements Hammond", "Norris Glass", "Rena Bush", "Mavis Perkins", "Bobbie Erickson", "Stacie Woods", "Kirsten Johns", "Mack Bailey", "Paul Clark", "Christa Finley", "Jean Parsons", "Tyler Hood", "Alexandra Stevens", "Theresa Mcintyre", "Nichols Cooke", "Leticia Davenport", "Stanley Mcfadden", "Williamson Butler", "Dalton Bryan", "Elsa Hatfield", "Leon Conley", "Jayne Wynn", "Yates Stephens", "Madelyn Nichols", "Allison Koch", "Alexandra Clarke", "Paul Chen", "Odessa Blanchard", "Quinn Payne", "Irwin Alston", "Alex Soto", "Paulette Cunningham", "Kari Long", "Pauline Durham", "Alexandra Shepard", "Gomez Hanson", "Alexandre Dawson", "Page Booth", "Leach Bond", "Sonia Cash", "Alexandra Foreman", "Natasha Solis", "Janette Nieves", "Phoebe Mccoy", "Campbell Navarro", "Christian Morgan", "Solis Velasquez", "Pena Mclean", "Mcknight Little", "Crystal Hayden", "Margarita Colon", "Bradshaw Osborn", "Jaclyn Pennington", "Velez Melton", "Pruitt Gallagher", "Ester Le", "Alexandra Conner", "Paul Roth", "Ann Bell", "Malone Snyder", "Molly Harris" ];

/**
 * Question 1
 * Afficher en console
 * a- le nombre de personnes contenues dans listePersonnes
 * b- le nom complet (prenom nom) de la 1ère personne
 * c- le nom complet (prenom nom) de la dernière personne
 * Les affichages devront fonctionner même si on changeait le contenu de listePersonnes
 */
 console.log(listePersonnes.length)
 console.log(listePersonnes[0])
 console.log(listePersonnes[66])
    // ou
console.log(listePersonnes[listePersonnes.length-1])



/**
 * Question 2
 * Écrire une fonction compter(liste, taille) qui renvoie un entier
 * qui est le nombre d'éléments de la liste ayant une longueur de chaine de caractères strictement supérieure à taille
 *
 * Afficher en console le résultat sur la liste des personnes pour les tailles 10 puis 17
 * Ça doit donner 53 et 1
 */

function compter(liste,taille) {

    return liste.filter(element => element.length > taille).length;

    
    }

console.log("Nombre d'éléments avec une longueur de chaîne supérieure à 10 :", compter(listePersonnes, 10));
console.log("Nombre d'éléments avec une longueur de chaîne supérieure à 17 :", compter(listePersonnes, 17));





/**
 * Question 3
 * Écrire la fonction prenom(liste, prenom) qui prend en argument une liste et un prenom
 * et retourne la liste des personnes dont le prénom est ÉGAL à prenom
 * On pensera à utiliser :
 * - split() pour séparer le prénom du nom
 * - toLowerCase() dans les comparaisons pour faire une recherche insensible aux majuscules/minuscules
 * - on ne traitera pas le cas des caractères accentués
 *
 * Afficher alors en console le résultat pour les prénoms Paul et Alexandra
 * Ça doit donner une liste de 5 noms :
 * [ "Paul Grant", "Paul Cameron", "Paul Clark", "Paul Chen", "Paul Roth" ]
 * puis une liste de 6 noms :
 * [ "Alexandra Holmes", "Alexandra Stevens", "Alexandra Clarke", "Alexandra Shepard", "Alexandra Foreman", "Alexandra Conner" ]
 */

function prenom(liste,prenom) {
    return liste.filter(personne => personne.split(" ")[0].toLowerCase() === prenom.toLowerCase());
    
   
}
console.log("Personnes avec le prénom 'Paul' :", prenom(listePersonnes, "Paul"));
console.log("Personnes avec le prénom 'Alexandra' :", prenom(listePersonnes, "Alexandra"));


/**
 * Question 4
 * Écrire une fonction afficher(parent, liste) qui prend en argument un noeud DOM et une liste
 * et qui :
 * - crée la liste HTML <ul><li> des éléments de liste
 * - met cette liste HTML dans le noeud DOM parent
 *
 * Avec cette fonction, afficher les élements de la liste listeQ4 (voir ci-dessous) dans la division d'identifiant "question4"
 * Voir capture1.png pour le résultat
 */

let listeQ4 = [ "toto", "titi", "tata", "tutu"];

function afficher(parent,liste) {
    let ul=document.createElement("ul")
    for(let i=0;i<liste.length;i++){
        let li= document.createElement("li")
        li.textContent=liste[i]
        ul.appendChild(li)
    }
    parent.appendChild(ul)
    



}
let liste4=["toto","titi","tata","tutu"]
let parentDiv=document.getElementById("question4")
afficher(parentDiv,liste4)



/**
 * Question 5
 * Compléter la fonction init() ci-dessous pour que le formulaire de la page HTML capte l'évènement submit
 * et appelle la fonction chercher lors du submit
 * Écrire la fonction chercher(event) qui bloque l'envoi du formulaire.
 * Si vous arrivez chez Google, c'est que ça ne marche pas.
 *
 * Question 6
 * Compléter la fonction chercher pour que celle-ci affiche dans la division d'identifiant question6
 * les personnes dont le prénom est celui saisi dans le formulaire.
 * Si le résultat est vide cela doit afficher "Aucun résultat".
 * Penser à vider la division à chaque nouvelle recherche.
 * Les fonctions écrites dans les questions précédentes peuvent être réutilisée.
 *
 * Voir capture2.png et capture3.png
 */

function init() {
    let formulaire=document.getElementById("recherche")
    formulaire.addEventListener("submit",chercher)


}

function chercher(event) {
    event.preventDefault()

    let question6=document.getElementById("question6")
    let prenoms=document.getElementById("prenom").value.trim()

    let resultat=prenom(listePersonnes,prenoms)
    question6.innerHTML=''

    if(resultat.length>0){

        let ul=document.createElement("ul")
        for(let i=0;i<resultat.length;i++){

            let li=document.createElement('li')
            li.textContent=resultat[i]

            ul.appendChild(li)
        }
        question6.appendChild(ul)

    }
    else{
        question6.textContent="aucun resultat"
    }

   

        
    }



