"use strict";

function init() {
    let formulaire = document.getElementById('recherche');
    formulaire.addEventListener('submit', recherche);
}

function recherche(event) {
    event.preventDefault();

    let auteur = document.getElementById('auteur').value.trim();

    if (auteur === '') {
        let erreur = document.getElementById('erreur');
        erreur.textContent = 'Il faut saisir une recherche non vide';
        return;
    }

    let requete = new XMLHttpRequest();
    requete.open("GET", "https://ensweb.users.info.unicaen.fr/TW2/services/articles/articles.php?api_key=diamout231&method=search&auteur=" + auteur);
    requete.addEventListener("load", afficheReponse);
    requete.responseType = "json";
    requete.send();
}

function afficheReponse(event) {
    console.log(event.target.response);
    let xhr = event.target; 

    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let result = xhr.response;

            if (result && result.result && result.result === "error") {
                let errorMessage = result.error || "Une erreur inconnue est survenue.";
                document.getElementById('erreur').textContent = errorMessage;
                document.getElementById('resultats').textContent = ""; 
                return; 
            }

            if (result && result.result && result.result === "success" && result.articles) {
                let articles = result.articles;
                if (articles.length === 0) {
                    document.getElementById('resultats').innerHTML = "<p>Aucun résultat trouvé .</p>";
                    return;
                }

                let html = ""; 
                articles.forEach(function(article) {
                    html += `<div class="article" style="border: 1px solid black; padding: 10px; margin-bottom: 10px;">`;
                    html += `<h2>${article.title}</h2> <h3> De ${article.creator} , publié le ${article.createdAt}</h3>`;
                    let paragraphs = article.articleContent.split('\n');
                    paragraphs.forEach(function(paragraph) {
                        html += `<p>${paragraph}</p>`;
                    });
                    html += "</div>"; 
                });

                document.getElementById('resultats').innerHTML = html; 
            }
        } else {
            console.error('Erreur lors de la requête :', xhr.status);
        }
    }
}

