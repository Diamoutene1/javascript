"use strict";



function init() {
    // fonction qui initialise les évènements de la page
    // ici il faut capter le submit du formulaire

    let form=document.querySelector('form')
    form.addEventListener("submit",verifier)
   

}

function verifier(event) {
    // ici le code qui va vérifier le formulaire
    // et le bloquer (ou pas)
//1
    let prenoms=document.getElementById('prenom').value;

    if(prenoms.trim()==''){
       let erreurPrenom= document.getElementById('erreur-prenom')
        erreurPrenom.textContent='le prénom est obligatoire'
        event.preventDefault()
    }
    else{

       let erreurPrenom= document.getElementById('erreur-prenom')
        erreurPrenom.textContent = ''; 
    }




//2
    let prenom = document.getElementById('prenom').value.trim(); 
    let erreurPrenom = document.getElementById('erreur-prenom'); 

    if (prenom === '') {
      
        erreurPrenom.textContent = 'Le prénom est obligatoire.';
        erreurPrenom.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        erreurPrenom.textContent = ''; 
        erreurPrenom.style.display = 'none'; 
    }

//3
    let jour =document.getElementById('jour').value.trim()
    let annee=document.getElementById('annee').value.trim()
    let Mois =document.getElementById('mois').value.trim()

    let erreurnaissance=document.getElementById("erreur-naissance")



    if(isNaN(jour)||isNaN(annee)||isNaN(annee)||isNaN(Mois)||jour<1||jour>31||Mois<1||Mois>12||annee<1990||annee>new Date().getFullYear()){
        erreurnaissance.textContent='la date de naissance est invalide';
        erreurnaissance.style.display='block'
        event.preventDefault();
    }
    else{
        erreurnaissance.textContent=''
        erreurnaissance.style.display='none'
    }


}
