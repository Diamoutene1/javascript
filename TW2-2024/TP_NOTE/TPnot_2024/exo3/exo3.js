"use strict";

/**
 * Le début de l'exercice dessine une grille et tire au sort une case de la grille.
 * Puis l'utilisateur clique sur les cases jusqu'à cliquer sur celle tirée au sort.
 * Le jeu affiche si la case cliquée est la bonne ou non et le score du joueur (qui
 * augmente de 1 à chaque tentative).
 * Une mauvaise case cliquée devient grise et n'est plus cliquable.
 * Lorsque la bonne case est cliquée celle-ci devient verte.
 * Une fois la case trouvée, les cases de la grille ne sont plus cliquables.
 *
 * La vidéo exo3-demo.mp4 montre le jeu en action.
 */


/**
 * Les variables globales ci-dessous servent pour la gestion du jeu
 */

// Nombre de lignes et de colonnes de la grille
// Ne PAS changer leurs valeurs sinon la CSS fournie ne sera plus adaptée
const nbLignes = 10;
const nbColonnes = 15;

// x et y seront les numéros de ligne et colonne de la case tirée au sort
let x = null;
let y = null;

// variable globale pour compter le nombre de coups
let score = 0;

/**
 * Écrire la fonction init qui initialise le jeu. Chaque case sera un élément <div>.
 * Il faut donc :
 * - créer les éléments div et les ajouter à la division d'identifiant 'grille'
 *   Nota : pas besoin de gérer de retours à la ligne, le display grid de la CSS va bien afficher une grille
 * - ajouter à chaque case des données de type dataset pour avoir le numéro de ligne et de colonnes de la case
 *   IMPORTANT : il est plus simple de numéroter à partir de 0
 * - ajouter à chaque case le capteur d'évènement click qui lance la fonction choix
 * - initialise les valeurs x et y de façon aléatoire
 *   Rappel : le code Math.floor(Math.random() * n) tire un nombre aléatoire entre 0 inclus et n exclus
 * - afficher x et y en console pour savoir quelle case est tirée au sort
 */

function init() {

   
    let grille=document.getElementById("grille")
    for(let i=0;i<nbColonnes*nbLignes;i++){
        let div=document.createElement("div")
        grille.appendChild(div)
        grille.dataset


    
    }
    

    

}


/**
 * Écrire la fonction choix qui est appelée lors du clic sur une case et qui :
 * - affiche en console le numéro de ligne et colonne de la case cliquée
 * - teste si la case cliquée est celle qui a été tirée au sort :
 *    * si oui :
 *        . affiche GAGNÉ dans la zone d'affichage d'identifiant 'jeu' (ajouter un élément <p>)
 *        . affiche le score du joueur
 *        . met la case cliquée en fond vert
 *        . désactive le click sur toutes le cases de la grille (sinon on peut continuer à cliquer et augmenter le score)
 *    * si non :
 *        . affiche Raté ! dans la zone d'affichage d'identifiant 'jeu' (ajouter un élément <p> à chaque fois)
 *        . incrémente le score de 1 et l'affiche
 *        . met la case cliquée en fond gris
 *        . désactive le click sur la case cliquée (pour ne pas pouvoir le rejouer)
 */

function choix(/* paramètre(s) à compléter si besoin */) {


}
