"use strict";
let hello= function (name) {
    return "Hello "+name
}
console.log(hello("Dolly"));
let bye=(name)=>"Goodbye "+name;
console.log(bye("Mike"))
console.log("------------------------------");
function produitTableau(tab){
    let element=1;
    for(let i=0;i<tab.length;i++){
        element*=tab[i];
    }
    return element;
}
function tranche(tab,debut,fin){
    if(debut<0){
       debut=0;
    }
    if (debut>tab.length){
        return [];
    }
    else if(fin<debut){
        return[];
    }
    else{
        return tab.slice(debut,fin)
    }

}
console.log (tranche(tableau1, 3, 6))
console.log(tranche(tableau1,5,3))
console.log(tranche(tableau1,-3,3))
function plusPetits(tab,n){
    let sup=[];
    for(let i=0;i<tab.length;i++){
        if(tab[i]<n)
        sup.push(tab[i]);
    }
    return sup;
}
console.log(plusPetits(tableau1,5))

function estInclus(tab1,tab2){
   for(let i=0;i<tab1.length;i++){
    if (!tab2.includes(tab1[i])){
        return false
    }
   }
   return true
}
console.log(estInclus(tableau1,tableau2))
console.log(estInclus(tableau1,tableau3))
console.log("------------------------------");
function aujourdhui(){
   
    const jour=["dimanche" ,"lundi","mardi","mercredi","jeudi","vendredi","samedi"]
    const mois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
    const date =new Date()
    const jours = jour[date.getUTCDay()];
    const jourMois = date.getUTCDate();
    const moiss = mois[date.getUTCMonth()];
    const annee = date.getUTCFullYear();

  const dateFormatee = `${jours} ${jourMois} ${moiss} ${annee}`;

  console.log(dateFormatee);
  
  return dateFormatee;
}



const dateActuelle = new Date();

const tampenmillisecondes = dateActuelle.getTime();
const tampensecondes = Math.floor(tampenmillisecondes / 1000);
console.log(tampensecondes);
function age(jour, mois, annee) {
    
   
}


function estTrinome(objet){
    return Object.hasOwnProperty.call(objet, 'a') && Object.hasOwnProperty.call(objet, 'b') && Object.hasOwnProperty.call(objet, 'c');
}
console.log(estTrinome(trinome1))
console.log(estTrinome(trinome2))
console.log(estTrinome(trinome3))


function discriminant (objet){
    if('a' in objet && 'b' in objet && "c" in objet){
        let discri=objet.b*objet.b-4*objet.a*objet.c;
        return discri
        
    } else{
        return false
    }
}
discriminant( trinome1, trinome3)

function resoudre(trinome) {
    
    if (!('a' in trinome) || !('b' in trinome) || !('c' in trinome)) {
        return false;
    }

    
    const a = trinome.a;
    const b = trinome.b;
    const c = trinome.c;

   
    const discriminant = b * b - 4 * a * c;

    
    if (discriminant > 0) {
       
        const x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2].sort((a, b) => a - b);
    } else if (discriminant === 0) {
        
        const x = -b / (2 * a);
        return [x];
    } else {
     
        return [];
    }
}
result=resoudre(trinome1,trinome3,trinome4)







