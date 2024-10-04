"use strict !";
let x=5;
let y=10;
somme=x+y;
console.log(x);
console.log(somme);
console.log(typeof somme);
somme="toto";
console.log(typeof somme);
let suite=8;
console.log(somme + suite);
console.log("------------------------------");
const personne = {
    "prenom": "Thomas",
    "nom": "Pesquet",
    "anneeNaissance": 1978
};
console.log(personne);
let annee= new Date().getFullYear(); 
age=annee-personne["anneeNaissance"];
console.log(age);
console.log("------------------------------");
const voiture={
    "marque":"renault",
    "modèle" :"seiei",
    "année de production":2006
}
console.log(voiture);
console.log("------------------------------");
let tableau=[1,3,5];
console.log(tableau);
console.log(tableau[0],);
console.log(tableau[tableau.length  -1]);
const ajoutdernier= tableau.push('tata');
console.log(ajoutdernier);
const supppremier= tableau.shift();
console.log(supppremier);
const suppdernier= tableau.pop();
console.log(suppdernier);
console.log(tableau.length)
let tableau1=["titi","toto",...tableau,"titi"];
console.log(tableau1);console.log("------------------------------");

let entier=0;
for(entier=1;entier<=10;entier++){
    console.log(entier);
}
for (let i = 0; i <= 30; i += 3) {
    console.log(i);}
    let entiers = [];

    for (let i = 0; i < 50; i++) {
        entiers.push(Math.floor(Math.random() * 100));
    }
console.log(...entiers)
for(j=0;j<entiers.length;j+=4){
    console.log(entiers[j]);
}
console.log("------------------------------");

// fonction qui permet de la conversion de temperature
function converti(fahremheit){
    let cels=(fahremheit-32)*5/9;
    return cels;
}
let premier=69;
let convertio= converti(premier);
console.log("pour" + premier+"°F on a:"+convertio.toFixed(2)+"°C" )
 let premiers=32;
 let converios=converti(premiers);
console.log( "pour " + premiers +"°F on a:"+ converios.toFixed(2) +"°C")
console.log("------------------------------");

// fonction anneés bissextiles
function estBissextile(annee){
    if ((annee % 4 ===0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true

}
    else{
        return false
    }
}
let anne0=1994;
console.log(estBissextile(anne0))
let anne1=2008;
console.log(estBissextile(anne1))
let anne2=1800;
console.log(estBissextile(anne2))
let anne3=2000;
console.log(estBissextile(anne3))

function recupererBissextiles(liste){
    let liste_tableau_bissextile=[];
    for(let i=0;i<liste.length;i++){
       if(estBissextile(liste[i])){
       
        liste_tableau_bissextile.push(liste[i])
        
         
       
    }
    
    }
   
    
  return liste_tableau_bissextile
}

let liste=[1348, 2778, 2022, 2200, 1984, 636] 
 console.log(recupererBissextiles(liste))

function  plusPetiteBissextile(liste3){
    let liste_tableau_bissextile=[];
    for(let i=0;i<liste3.length;i++){
       if(estBissextile(liste3[i])){
       
        liste_tableau_bissextile.push(liste3[i])
       console.log(liste_tableau_bissextile)
         
       
    }
    
    }
   
    
  return Math.min(...liste_tableau_bissextile)
}
let liste3=[1976, 1946, 2000, 1942, 1940, 1964];
console.log(plusPetiteBissextile(liste3))



