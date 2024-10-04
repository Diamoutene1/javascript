"use strict";

function init() {
    afficher(data )

    let nombreSelect = document.getElementById("nombre");
    let langueSelect = document.getElementById("langue");

    nombreSelect.addEventListener('change', filtrer);
    langueSelect.addEventListener('change', filtrer);

}

/**
 * Le fichier data.js contient une variable data qui est une liste d'objets modélisant des personnes
 * Une personne contient des données de ce type :
 *    {
 *         "id": "64347cfef72a169dcbc84bae",
 *         "profile": {
 *             "name": "Sadie Atkinson",
 *             "about": "Aliquip ullamco ex incididunt mollit in. Consectetur consectetur occaecat dolor eu."
 *         },
 *         "languages": [
 *             "espagnol",
 *             "chinois",
 *             "français",
 *             "norvégien"
 *         ],
 *         "createdAt": "2014-01-11T05:51:58.754Z"
 *     }
 *
 * Question 1
 * Écrire une fonction qui prend en argument une liste de personnes
 * et qui affiche la liste des noms de personnes dans la division d'identifiant listeQ1
 * Compléter la fonction init() pour que la liste des personnes s'affiche une fois la page chargée
 *
 * Voir capture1.png pour le résultat
 *
 * Compléter la fonction pour que chaque item capte le clic
 * Le clic sur un nom déclenchera la fonction voir (question 2)
 */

function afficher(liste) {
    let listeQ1=document.getElementById("listeQ1")
    let ul=document.createElement("ul")
    for(let i=0;i<liste.length;i++){
        let personne=liste[i]

        let li=document.createElement("li")
        li.textContent=personne.profile.name
        li.dataset.personne = JSON.stringify(personne); // question2 Stocker la personne comme un attribut de données   
         ul.appendChild(li)
         
         li.addEventListener('click',voir)
         
        
    }
    listeQ1.appendChild(ul)


}

/**
 * Question 2
 * Écrire la function voir(event) qui affiche les détails de la personne dans la section d'identifiant details
 * ATTENTION vous devrez faire des ajouts/modifications dans la fonction afficher pour faire cette question.
 * Pour n'afficher que l'année de création de la personne, créer un objet Date en lui passant en argument la
 * valeur de createdAt de la personne, puis utiliser la méthode getFullYear()
 * Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 *
 * Voir capture2.png
 */

function voir(event) {
    let detailsSection = document.getElementById("details");
    detailsSection.innerHTML = ""; // Vider le contenu précédent

    // Récupérer la personne à partir de l'attribut de données de l'élément <li> cliqué
    let personne = JSON.parse(event.target.dataset.personne);

    let nom = document.createElement("p");
    nom.innerHTML = "<strong>" + personne.profile.name + "</strong>"

    let dateCreation = new Date(personne.createdAt);
    let anneeCreation = dateCreation.getFullYear();
    let annee = document.createElement("p");
    annee.textContent = " Membre depuis :" + anneeCreation;
    let langues = document.createElement("p");
    langues.innerHTML = "Langues parlées : " + personne.languages.join(", ");

    let about = document.createElement("p");
    about.innerHTML =  personne.profile.about;

    detailsSection.appendChild(nom);
    detailsSection.appendChild(annee);
    detailsSection.appendChild(langues)
    detailsSection.appendChild(about);
    
}



/**
 * Question 3
 *
 * Compléter la fonction init() pour que les 2 éléments select du formulaire captent l'évènement "change"
 * qui sera déclenché dès que la valeur du select change (càd l'utilisateur change l'option sélectionnée)
 * La fonction filtrer sera appelée quand un select change
 *
 * Écrire la fonction filtrer pour afficher dans la division d'identifiant listeQ3 les personnes
 * qui correspondent aux critères des 2 select du formulaire.
 *
 * Voir capture3.png et capture4.png pour des exemples
 *
 * Compléter pour que un clic sur un nom de personnes appelle aussi la fonction voir
 * qui affichera le détail de la personne cliquée
 */

function filtrer() {
    let nombreSelect = document.getElementById("nombre");
    let langueSelect = document.getElementById("langue");
    let nombre = parseInt(nombreSelect.value);
    let langue = langueSelect.value;

    let listeQ3 = document.getElementById("listeQ3");
    listeQ3.innerHTML = ""; // Vider le contenu précédent

    // Filtrer la liste de personnes en fonction des critères des deux selects
    let personnesFiltrees = data.filter(personne => {
        let nombreLangues = personne.languages.length;
        return (nombre === 0 || nombreLangues >= nombre) && (langue === "indifferent" || personne.languages.includes(langue));
    });

    // Afficher la liste filtrée
    let ul = document.createElement("ul");
    personnesFiltrees.forEach(personne => {
        let li = document.createElement("li");
        li.textContent = personne.profile.name;
        ul.appendChild(li);
    });

    listeQ3.appendChild(ul);
}


