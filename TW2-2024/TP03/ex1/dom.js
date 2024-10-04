"use strict";

// Afficher en console l'élément d'identifiant paragraphe et le nom de la balise.

let p = document.getElementById('paragraphe');
console.log(p);
console.log("Tant que la ligne ci-dessus affiche null alors ça ne marche pas, ça devrait afficher <p>.");
console.log("Si vous ne comprenez pas pourquoi, demandez à votre prof.");
console.log("----------------------------");

function  getListe(){
    return  document.querySelector("#liste1")
}
console.log(getListe())

function getPara (){
    return document.querySelector("#partie1 p")
} 
console.log(getPara())

function getTextePara(){
    return document.querySelector("#partie1 p").textContent

}
console.log(getTextePara())

function getH2Debut(){
    return document.querySelector("h2.debut")
}
console.log(getH2Debut())

function getTexteH2Debut(){
    return document.querySelector("h2.debut").textContent
}
console.log(getTexteH2Debut())

function getEmphase(){
    return document.querySelector("li em")
}
console.log(getEmphase())
function getTexteEmphase(){
    return document.querySelector("li em").textContent
}

function getPremierFils(){
    return document.querySelector("figure").firstElementChild
}
console.log(getPremierFils())

function getSource(){
    return document.querySelector("figure img").getAttribute("src")

}
console.log(getSource())

function getAlt(){
    return document.querySelector("figure img").getAttribute("alt")
}
function  getFilsBody(){
    return document.querySelector("body").children
}
console.log(getFilsBody)

function getTousImportant(){
    return document.querySelectorAll(".important")
}
console.log(getTousImportant())

function getParaDiv1(){
    return document.querySelectorAll("#div1 p").length
}
console.log(getParaDiv1())

function  comptePara(){
    return document.querySelectorAll("p").length
}
console.log(comptePara())

function compteParaInDiv(){
    return document.querySelectorAll("div p").length
}
console.log(compteParaInDiv())

console.log("------------------------------");

function changePara(){
    let modifi =document.getElementById("pragraphe")
    paragraphe.style.width="600px"
    paragraphe.style.color="red"
    paragraphe.style.fontSize="26px"
    paragraphe.style.textContent="nouveau contenu"
    paragraphe.title="Titre"

    


}
console.log(changePara())

function changeImage(){
    
    let figureElement = document.querySelector('#partie2 figure');

            
    let  imgElement = figureElement.querySelector('img');

           
    imgElement.src = 'souris1968.jpg';

            
    imgElement.alt = 'Une souris en 1968';
   
        }
    console.log(changeImage())


function changeLegende(){
     let elment= document.querySelector('#partie2 figure');
     let lenge=elment.querySelector('figcaption');
    lenge.textContent='nouvelle legende';
    console.log(lenge.textContent)
    }

console.log(changeLegende())

function changeItem(){
    let change=document.querySelector('#partie2 ul')
    let item=change.querySelector('li')
    let dernier=change.lastElementChild;
    dernier.textContent = 'Nouveau texte pour le dernier item';
    console.log( dernier.textContent);
}

console.log(changeItem())

function supprimePara(){
    let pr=document.querySelector('#partie2 p')
    let sup=pr.querySelector('p:first-child')
    pr.remove(sup)

}
console.log(supprimePara())

function supprimePremierItem(){
    let prr=document.querySelector("#partie2 ul")
    let suup=prr.querySelector("li")
    let premierItem = suup.firstElementChild;
    suup.remove(premierItem)
}

console.log(supprimePremierItem())
console.log("------------------------------");

function ajouteBordure(){
    let partie3Section = document.getElementById('partie3');
    let h2Elements = partie3Section.getElementsByTagName('h2');

    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.border = '1px solid black';
    }
}

 
console.log(ajouteBordure())

function changeTousItems(){
    let change=document.getElementById('partie3')
    let item=change.getAttributeNames('li')
    for(let i=0;i<item.length;i++){
        item[i].style.color='white'
        item[i].style.backgroundcolor='black'
        item[i].style.magrin='10px'
        if (i % 2 === 0) { 
            item[i].style.padding = "10px"; } 
    }
}


function changeTousItems(){
    function changeTousItems() {
        let partie3Section = document.getElementById('partie3');
        let itemsListe = partie3Section.getElementsByTagName('li');

        for (var i = 0; i < itemsListe.length; i++) {
            itemsListe[i].style.color = 'white';
            itemsListe[i].style.backgroundColor = 'black';
            itemsListe[i].style.marginBottom = '10px';
        }
    }
        }
  
console.log(changeTousItems())









console.log("------------------------------");

function ajouteItem() { 
    let listeEnPlus = document.getElementById('listeEnPlus');

    let nouvelItem = document.createElement('li');

   
    nouvelItem.appendChild(document.createTextNode('un item en plus'));

    
    listeEnPlus.appendChild(nouvelItem);

    
}

console.log(ajouteItem())
















function ajouteTitre() {
    
    let nouveauTitre = document.createElement('h1');

    
    nouveauTitre.appendChild(document.createTextNode('un nouveau titre'));

    
    let corpsPage = document.body;

   
    corpsPage.insertBefore(nouveauTitre, corpsPage.firstChild);
}

console.log(ajouteTitre())

function ajoutePara() {


    let isteEnPlus = document.getElementById('listeEnPlus');

    let nouveauPara = document.createElement('p');

    nouveauPara.textContent = 'nouveau paragraphe';

    listeEnPlus.parentNode.insertBefore(nouveauPara, listeEnPlus);

}


console.log(ajoutePara())
   