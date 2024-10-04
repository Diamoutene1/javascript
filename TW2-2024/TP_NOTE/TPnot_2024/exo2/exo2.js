"use strict";

/**
 * La page web exo2.html inclut le fichier data.js qui définit une liste d'objets listeVoitures.
 * Chaque objet modélise une voiture et est constitué de 3 propriétés, par exemple :
 *     {
 *         "marque": "Peugeot",
 *         "modele": "3008",
 *         "etat": "excellent"
 *     }
 *
 * L'exercice a pour but de faire une recherche dans la liste des voitures et d'afficher les résultats de recherche.
 */


/**
 * Écrire la fonction init qui ajoute le capteur d'évènement submit au formulaire de la page
 * et déclenche la fonction affiche lorsque le submit est capté
 */

function init() {

    let form=document.getElementById("recherche")

    form.addEventListener("submit",affiche)

}

/**
 * Écrire la fonction affiche qui :
 * - bloque l'envoi des données du formulaire (si vous arrivez sur la page de Google c'est que ça ne marche pas)
 * - vide la division d'affichage des résultats
 * - vérifie si la chaine cherchée est vide, et affiche un message d'erreur si c'est le cas (cf. capture1.png)
 * - si la chaine cherchée est non vide, alors :
 *      * efface le message d'erreur
 *      * effectue la recherche de véhicule dans la liste listeVoitures définie dans data.js
 *        La recherche se fait sur la marque et le modèle et n'est pas sensible à la casse (penser à utiliser toLowerCase())
 *        Si le select est sur l'option "Peu importe", la recherche ne tient pas compte de l'état de la voiture.
 *        Si le select est sur une autre option, on filtre les résultats selon l'état des voitures trouvées
 *        S'il n'y a aucun résultat, un message en ce sens est affiché
 *        Les résultats sont affichés sous la forme d'une liste <ul> avec un <li> pour chaque résultats
 *        sous la forme "marque modèle (État : état)", par exemple "Peugeot 3008 (État : excellent)"
 *
 *        Voir captures 2 à 4 pour les exemples d'affichage
 */

function affiche(event,liste) {

   event.preventDefault()

   let chaine=document.getElementById("chaine").value.trim()

   let resultata=document.getElementById("resultats")
   let etat=document.getElementById("etat")
   if(chaine===''){

    let erreur=document.getElementById("erreur")
    erreur.textContent="saisir une chaine non vide"

    
   }

   else{

    erreur.textContent=''

    let ul=document.createElement("ul")

    for(let i=0;i<liste.length;i++){
        let li=document.createElement("li")
        li.textContent=listeVoitures.etat




    }

    


    


    




    
    







   }


}

