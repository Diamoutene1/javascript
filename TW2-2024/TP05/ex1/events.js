"use strict";

function init() {
   console.log("vous devez compléter la fonction init");
   // Récupération de l'élément question1 et ajout d'un écouteur d'événement au clic
   let question1 = document.querySelector('#question1');
   question1.addEventListener('click', changeCouleur);
   console.log(question1);

   // Récupération de l'élément question2-3 et ajout d'écouteurs d'événements pour la souris
   let question2_3 = document.querySelector('#question2-3');
   question2_3.addEventListener('mouseenter', mettreBordure);
   console.log(question2_3);
   question2_3.addEventListener('mouseleave', enleverBordure);

   // Récupération de l'élément question4 et ajout d'un écouteur d'événement au clic
   let question4 = document.querySelector('#question4');
   question4.addEventListener('click', changeImage);

   // Récupération de l'élément question5 et ajout d'un écouteur d'événement au clic 
   let question5 = document.querySelector('#question5');
   question5.addEventListener('click', toggleImage);
   
   // Récupération de l'élément question6 et ajout d'un écouteur d'événement au clic
   let question6 = document.querySelector('#question6');
   question6.addEventListener('click', togglePara);

   // Récupération de l'élément question7 (lien vers Google) et ajout d'un écouteur d'événement au clic
   let question7 = document.querySelector('#question7');
   question7.addEventListener('click', stopGoogle);

   // Récupération de l'élément question8 et ajout d'un écouteur d'événement au clic
   let question8 = document.querySelector('#question8');
   question8.addEventListener('click', ajouteItem);

   // Récupération de l'élément question9 et ajout d'un écouteur d'événement au clic
   let question9 = document.querySelector('#question9');
   question9.addEventListener('click', ajouteDoubleClic);

   // Récupération de l'élément question10 et ajout d'un écouteur d'événement au clic
   let question10 = document.querySelector('#question10');
   question10.addEventListener('click', enleveDoubleClic);

   // Récupération de l'élément question11 et ajout d'un écouteur d'événement au clic pour chaque bouton
   let buttonsQ11 = document.querySelectorAll('#question11 button');
   buttonsQ11.forEach(button => {
      button.addEventListener('click', supprimeItem);
   });

   // Récupération de l'élément question12 et ajout d'un écouteur d'événement au clic
   let question12 = document.querySelector('#question12');
   question12.addEventListener('click', initDark);

   // Récupération de l'élément question13 et ajout d'un écouteur d'événement au clic
   let question13 = document.querySelector('#question13');
   question13.addEventListener('click', paragraphesAleatoires);
}

// fonction qui change la couleur de h1 après un clic
function changeCouleur() {
   let h1 = document.querySelector('h1');
   h1.style.color = 'green';
   console.log(h1);
}

// fonction qui ajoute une bordure à question2_3
function mettreBordure() {
   let question2_3 = document.querySelector('#question2-3');
   question2_3.style.border = '1px solid black';
   console.log(question2_3);
}

// fonction qui enlève la bordure à question 2_3 après un clic
function enleverBordure() {
   let question2_3 = document.querySelector('#question2-3');
   question2_3.style.border = 'none';
}

// fonction qui change l'image de question 4 après un clic
function changeImage() {
   let question4 = document.querySelector('#sable img');
   if (question4) {
      question4.setAttribute('src', "images/chateau_sable_pro.jpg");
   } else {
      console.log(question4);
   }
}

// fonction qui alterne entre les 2 images de question 5 après un clic
function toggleImage() {
   let question5 = document.querySelector('#sable img');
   if (question5.getAttribute('src') == 'images/chateau_sable_pro.jpg') {
      question5.setAttribute('src', "images/chateau_sable_debutant.jpg");
   } else {
      question5.setAttribute('src', "images/chateau_sable_pro.jpg");
   }
}

// fonction qui affiche/masque le paragraphe après un clic
function togglePara() {
   let para = document.querySelector("#para");
   if (para.style.display === "none") {
      para.style.display = "block";
   } else {
      para.style.display = "none";
   }
}

// fonction qui empêche le lien vers Google de s'activer
function stopGoogle(event) {
   event.preventDefault();
}

// fonction qui ajoute un item à la fin de la liste
function ajouteItem() {
   let liste = document.querySelector('#liste');
   let newItem = document.createElement('li');
   newItem.textContent = 'Nouvel item de liste';
   liste.appendChild(newItem);
}

// fonction qui ajoute un capteur de double clic au paragraphe
function ajouteDoubleClic() {
   let para = document.querySelector("#para");

   para.addEventListener('dblclick', function() {
      if (para.style.backgroundColor === 'yellow') {
          para.style.backgroundColor = 'pink';
      } else {
          para.style.backgroundColor = 'yellow';
      }
   });
}

// fonction qui enlève le capteur de double clic au paragraphe
function enleveDoubleClic() {
   let para = document.querySelector("#para");
   para.removeEventListener('dblclick', ajouteDoubleClic);
  
   
      
}

// fonction qui supprime le dernier élément de la liste
function supprimeItem() {
   let liste = document.querySelector('#liste');
   liste.removeChild(liste.lastElementChild);
}

// fonction qui ajoute un capteur de clic à tous les éléments de classe dark
function initDark() {
   let elements = document.querySelectorAll('.dark');
   elements.forEach(element => {
      element.addEventListener('click', function() {
         element.style.color = 'white';
         element.style.backgroundColor = 'black';
      });
   });
}

// fonction qui ajoute N paragraphes en fin de page
function paragraphesAleatoires() {
   let nombreParagraphes = Math.floor(Math.random() * 5) + 1; // Nombre aléatoire entre 1 et 5
   let contenu = document.getElementById('conteneur');
   for (let i = 0; i < nombreParagraphes; i++) {
      let nouveauParagraphe = document.createElement('p');
      nouveauParagraphe.textContent = 'Nouveau paragraphe';
      contenu.appendChild(nouveauParagraphe);

      // Ajouter un écouteur d'événement pour le clic sur le nouveau paragraphe
      nouveauParagraphe.addEventListener('click', function() {
         // Générer des valeurs aléatoires pour les couleurs RGB
         let red = Math.floor(Math.random() * 256);
         let green = Math.floor(Math.random() * 256);
         let blue = Math.floor(Math.random() * 256);
         // Appliquer la couleur de fond aléatoire au paragraphe
         nouveauParagraphe.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      });
   }}