"use strict";

let listeTaches = [];
let listeDevis=[]

function init() {
    afficheCategories();
    makeSelectTaches();
    let section = document.getElementById('selection');
    section.addEventListener("submit", ajouterTache);

    let resetButton = document.getElementById('effacer');

    resetButton.addEventListener('click', raz);

    let save=document.getElementById('save')
    save.addEventListener('submit',enregistrerDevis)

     initStorage()

    

     

   

    
}

function afficheCategories() {
    let categoriesContainer = document.getElementById('categories');
    let ul = document.createElement("ul");

    for (let i = 0; i < categories.length; i++) {
        let li = document.createElement("li");
        li.textContent = categories[i].categorie;
        li.dataset.categorieId = categories[i].id;
        ul.appendChild(li);
        li.addEventListener("click", makeSelectTaches);
    }
    categoriesContainer.appendChild(ul);
}

function makeSelectTaches(event) {
    let categorieId = event ? event.currentTarget.dataset.categorieId : categories[0].id;
    let select = document.getElementById('select-taches');
    select.innerHTML = ""; // Clear the select options before populating

    const tache = taches.filter((item) => item.categorie === categorieId);
    for (let i = 0; i < tache.length; i++) {
        let option = document.createElement('option');
        option.value = tache[i].id;
        option.textContent = tache[i].intitule;
        select.appendChild(option);
    }
}

function ajouterTache(event) {
    event.preventDefault();
    let tacheId = document.getElementById('select-taches').value;
    let quantite = document.querySelector('input[name="quantite"]').value;
    let tva = parseFloat(document.querySelector('input[name="tva"]:checked').value); // Récupère la valeur de la TVA sélectionnée

    let tache = taches.find(item => item.id === tacheId);
    

    listeTaches.push({ "tache": tache, "quantite": quantite, "tauxTva": tva });

    afficheDevis(listeTaches);
}

function afficheDevis(liste) {
    let devisDiv = document.getElementById('devis');// Efface le contenu existant
    devisDiv.innerHTML = ""; 

    let table = document.createElement('table');
    devisDiv.appendChild(table);

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr);
    tr.appendChild(createTh('Designation'));
    tr.appendChild(createTh('Quantité'));
    tr.appendChild(createTh('PU HT'));
    tr.appendChild(createTh('Total HT'));
    tr.appendChild(createTh('Taux TVA'));
    tr.appendChild(createTh('TVA'));
    tr.appendChild(createTh('Prix TTC'));

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    let totalHT = 0;
    let totalTVA = 0;

    for (let i = 0; i < liste.length; i++) {
        let tache = liste[i].tache;
        let prixUnitaireHT = tache.prix;
        let quantite = parseFloat(liste[i].quantite);
        let tauxTva = parseFloat(liste[i].tauxTva) / 100;

        let prixTotalHT = prixUnitaireHT * quantite;
        totalHT += prixTotalHT;
        let tva = prixTotalHT * tauxTva;
        totalTVA += tva;
        let prixTotalTTC = prixTotalHT + tva;

        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.appendChild(createTd(tache.intitule));
        tr.appendChild(createTd(quantite));
        tr.appendChild(createTd(prixUnitaireHT.toFixed(2) + " €"));
        tr.appendChild(createTd(prixTotalHT.toFixed(2) + " €"));
        tr.appendChild(createTd((tauxTva * 100).toFixed(0) + "%")); // Affichage du taux TVA sans décimales
        tr.appendChild(createTd(tva.toFixed(2) + " €"));
        tr.appendChild(createTd(prixTotalTTC.toFixed(2) + " €"));
    }

    let tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    let trTotal = document.createElement('tr');
    tfoot.appendChild(trTotal);
    trTotal.appendChild(createTh('Total', 3)); // Cellule "Total" avec colspan
    trTotal.appendChild(createTd(totalHT.toFixed(2) + " €", 'th'));
    trTotal.appendChild(createTd('', 'th')); // Cellule vide pour le Taux TVA
    trTotal.appendChild(createTd(totalTVA.toFixed(2) + " €", 'th'));
    trTotal.appendChild(createTd((totalHT + totalTVA).toFixed(2) + " €", 'th'));

    let save=document.getElementById('save')
    save.style.display='block'

    
}

function createCell(text, type, colspan) {
    let cell = document.createElement(type);
    cell.textContent = text;
    if (colspan) {
        cell.colSpan = colspan;
    }
    return cell;
}

function createTd(text, type, colspan) {
    return createCell(text, 'td', colspan);
}

function createTh(text, colspan) {
    return createCell(text, 'th', colspan);
}

function raz() {
    // Réinitialisation de la liste listeTaches
    listeTaches = [];

    // Vidage de la division d'affichage du devis
    let devisDiv = document.getElementById('devis');
    devisDiv.innerHTML = "";

    // Réinitialisation du formulaire d'identifiant selection
    let form = document.getElementById('selection');
    form.reset();

    let save=document.getElementById('save')
    save.style.display='none'

    


}


function  enregistrerDevis(event){


    


    event.preventDefault()

    let client=document.querySelector('input[name="client"]').value
    let intitule=document.querySelector('input[name="intitule"]').value

    listeDevis.push({
        "client": client,
        "intitule": intitule,
        "devis": listeTaches
    })

    afficheListeDevis(listeDevis)

    localStorage.setItem('liste-devis', JSON.stringify(listeDevis));

    

}






function afficheListeDevis(liste){


    let mes_devis=document.getElementById('mes-devis')

    // Sélectionne le deuxième enfant de l'élément parent
    let enfant = document.querySelector("#mes-devis").children[1];

    for (let i = mes_devis.children.length - 1; i >= 0; i--) {
        if (mes_devis.children[i] !== enfant) {
            mes_devis.removeChild(mes_devis.children[i]);
        }
    }


    
    let ul =document.createElement('ul')
    for(let i=0;i<liste.length;i++){

        let devis=liste[i]

        let li=document.createElement('li')

        li.textContent=devis.client+"-"+devis.intitule
        

        //creation de buton partie 8
        let buton=document.createElement('button')
        buton.textContent="supprimer"
        buton.type='button'//pour eviter la soumission du buton dans le formulaire

        buton.dataset.index=i

        buton.addEventListener("click",supprimeDevis)
        li.appendChild(buton)

        //creation du buton exporter

        let buton1=document.createElement("button")
        buton1.textContent="Exporter"
        buton1.type="button"
        buton1.dataset.index=i
        buton1.addEventListener("click",exportHtml)
        li.appendChild(buton1)


        

        ul.appendChild(li)

        

    }

    mes_devis.appendChild(ul)

   

  




}

function initStorage(){

    let storedDevis = localStorage.getItem('liste-devis');
    if (storedDevis) {
        listeDevis = JSON.parse(storedDevis);

        listeDevis = listeDevis || [];
        afficheListeDevis(listeDevis);

}

 }

function supprimeDevis (event){

    // Récupérer l'index du devis à supprimer depuis l'attribut data-index du bouton cliqué
    let index = event.target.dataset.index

    // Supprimer le devis du tableau listeDevis en utilisant la méthode splice
    listeDevis.splice(index, 1);

    // Mettre à jour le localStorage avec la nouvelle version de listeDevis
    localStorage.setItem('liste-devis', JSON.stringify(listeDevis));

    // Rafraîchir l'affichage des devis enregistrés
    afficheListeDevis(listeDevis);
   


}

function exportHtml(event) {
    let index = event.target.dataset.index;
    let devis = listeDevis[index];

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Devis</title>
            <style>
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                th, td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <h1>Votre Devis</h1>
            <h2> ${devis.client} - ${devis.intitule}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Designation</th>
                        <th>Quantité</th>
                        <th>PU HT</th>
                        <th>Total HT</th>
                        <th>Taux TVA</th>
                        <th>TVA</th>
                        <th>Prix TTC</th>
                    </tr>
                </thead>
                <tbody>
    `;

    for (let i = 0; i < devis.devis.length; i++) {
        let item = devis.devis[i];
        htmlContent += `
            <tr>
                <td>${item.tache.intitule}</td>
                <td>${item.quantite}</td>
                <td>${item.tache.prix.toFixed(2)} €</td>
                <td>${(item.tache.prix * item.quantite).toFixed(2)} €</td>
                <td>${(item.tauxTva).toFixed(0)}%</td>
                <td>${((item.tache.prix * item.quantite) * item.tauxTva).toFixed(2)} €</td>
                <td>${((item.tache.prix * item.quantite) * (1 + item.tauxTva)).toFixed(2)} €</td>
            </tr>
        `;
    };

    let totalHT = devis.devis.reduce((acc, curr) => acc + (curr.tache.prix * curr.quantite), 0);
    let totalTVA = devis.devis.reduce((acc, curr) => acc + ((curr.tache.prix * curr.quantite) * curr.tauxTva), 0);
    let totalTTC = totalHT + totalTVA;

    htmlContent += `
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">Total</th>
                        <th>${totalHT.toFixed(2)} €</th>
                        <th></th>
                        <th>${totalTVA.toFixed(2)} €</th>
                        <th>${totalTTC.toFixed(2)} €</th>
                    </tr>
                </tfoot>
            </table>
        </body>
        </html>
    `;

    // Créer un Blob contenant le HTML
    let blob = new Blob([htmlContent], { type: 'text/html' });

    // Créer un URL pour le Blob
    let url = URL.createObjectURL(blob);

    // Créer un lien pour le téléchargement
    let a = document.createElement('a');
    a.href = url;
    a.download = `${devis.client}_${devis.intitule}_devis.html`; // Nom du fichier à télécharger

    // Simuler un clic sur le lien pour déclencher le téléchargement
    a.click();

    // Libérer l'URL et supprimer le lien
    URL.revokeObjectURL(url);
    a.remove();
}



