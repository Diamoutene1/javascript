"use strict";

function createCell(text, type) {
    // fonction à écrire
    let cell=document.createElement(type);
    cell.appendChild(document.createTextNode(text));
    return cell;

}

function createTd(text) {
   
    return createCell(text, 'td');

}

function createTh(text) {
    return createCell(text, 'th');
}

function afficher(infos) {
    // infos contiendra les données de la 1ère personne du tableau data
    let conteneur = document.getElementById('conteneur');

    // Création du titre h2 avec le prénom et nom de la personne
    let titre = document.createElement('h2');
    titre.textContent = infos.prenom + ' ' + infos.nom;
    conteneur.appendChild(titre);

    let tableau = document.createElement('table');
    document.getElementById('conteneur').appendChild(tableau);

    let thead = document.createElement('thead');
    tableau.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let th0 = createTh('jour');
    let th1 = createTh('Début');
    let th2 = createTh('Fin');
    let th3 = createTh('Heures Jour');
    let th4 = createTh('Heures Prévues');
    let th5 = createTh('-/+');

    tr.appendChild(th0);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);

    let tbody = document.createElement('tbody');
    tableau.appendChild(tbody);

    let totalHeuresJour = 0; // Initialisation du total des heures de jour
    let totalHeuresPrevues = 0; // Initialisation du total des heures prévues
    let totalVariation = 0; // Initialisation du total de la variation

    // Parcours des données de chaque jour de la semaine
    for (let jour in infos.semaine) {
        let jourData = infos.semaine[jour];
        console.log(jourData);

        let trJour = document.createElement('tr');

        tbody.appendChild(trJour);

        let td0 = createTh(jour ); // Remplacer undefined par une colonne vide
        let td1 = createTd(Number.isNaN(jourData.heures[0]) ? 0 : jourData.heures[0]); // Remplacer NaN par zéro
        if(td1=='undified'){
            return createTd(" ")
        }
        let td2 = createTd(Number.isNaN(jourData.heures[1]) ? 0 : jourData.heures[1]); // Remplacer NaN par zéro
        let heuresJour = (jourData.heures[1] || 0) - (jourData.heures[0] || 0); // Calcul des heures de travail pour ce jour
        totalHeuresJour += heuresJour; // Ajout au total des heures de jour
        let td3 = createTd(heuresJour);
        let td4 = createTd(Number.isNaN(jourData.prevision) ? 0 : jourData.prevision); // Remplacer NaN par zéro
        totalHeuresPrevues += jourData.prevision || 0; // Ajout au total des heures prévues
        let variation = heuresJour - (jourData.prevision || 0);
        totalVariation += variation; // Ajout à la variation totale
        let td5 = createTd(variation);

        trJour.appendChild(td0);
        trJour.appendChild(td1);
        trJour.appendChild(td2);
        trJour.appendChild(td3);
        trJour.appendChild(td4);
        trJour.appendChild(td5);

        // Ajout de la classe more ou less selon la variation
        if (variation >= 0) {
            td5.classList.add('more');
        } else if (variation < 0) {
            td5.classList.add('less');
        }
    }
    // Ajout de l'élément tfoot et des totaux
    let tfoot = document.createElement('tfoot');
    tableau.appendChild(tfoot);

    let trFoot = document.createElement('tr');
    tfoot.appendChild(trFoot);

    let tdFootLabel = document.createElement('Th');
    tdFootLabel.textContent = 'Totaux';
    tdFootLabel.setAttribute('colspan', '3');
    trFoot.appendChild(tdFootLabel);

    let tdTotalHeuresJour = createTd(totalHeuresJour);
    trFoot.appendChild(tdTotalHeuresJour);

    let tdTotalHeuresPrevues = createTd(totalHeuresPrevues);
    trFoot.appendChild(tdTotalHeuresPrevues);

    let tdTotalVariation = createTd(totalVariation);
    trFoot.appendChild(tdTotalVariation);

    if (totalVariation > 0) {
        tdTotalVariation.classList.add('more');
    } else if (totalVariation < 0) {
        tdTotalVariation.classList.add('less');
    }

    if (totalHeuresJour >= 30) {
        tdTotalHeuresJour.classList.add('more');
    } else {
        tdTotalHeuresJour.classList.add('less');
    }
}





function afficherTous(infos) {
    for (let i = 0; i <= infos.length; i++) {
  
        afficher(infos[i]);
        
    }
}





