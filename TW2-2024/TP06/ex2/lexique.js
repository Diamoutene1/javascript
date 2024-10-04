"use strict";
function expliquer(event){
  
    console.log(event.currentTarget)
    let elem  =  event.currentTarget 
    console.log(elem.textContent)

    let lexiques = document.querySelector("#lexique")
    let acronyme = elem.textContent
    console.log(lexique )
   
    let desc = lexique[acronyme.toLowerCase()].desc
    console.log(desc)

    let elemnt=document.createElement("p")

    elemnt.textContent= desc

    lexiques.appendChild(elemnt)
    if(Object.hasOwn(lexique[acronyme.toLowerCase()],'url')){
        let texte = lexique[acronyme.toLowerCase()].url
        let lien =document.createElement("a")
        lien.textContent= texte
        lien.setAttribute("href",texte)
        lexiques.appendChild(lien)
        
    }
    
    
}

    








