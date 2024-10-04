 "use strict";
 let x = 9;
let y = x - 8;
console.log(y);
z = x + 2;
console.log(z);

 
 

function init(){
    console.log(document.querySelector("#titre-article"));
    let lesLis = document.querySelectorAll("li");
    let der = lesLis[ lesLis.length - 1 ];
    console.log(der);
    let h2s = document.querySelectorAll("h2");
    for (let i = 0; i < h2s.length; i++) {
        h2s[i].addEventListener('click', afficher);
}

    let ext=document.querySelectorAll(".ext")
    for(let i=0;i<ext.length;i++){
        ext[i].addEventListener('click',bloquerExt)
    }  

    let articleLis = document.querySelectorAll("article li");
    for (let i = 0; i < articleLis.length; i++) {
    articleLis[i].dataset.numeroLi = i;
}
    
    let exts = document.querySelectorAll(".ext");
    for (let i = 0; i < exts.length; i++) {
        exts[i].remove();
}

}

function afficher() {
    console.log("Un clic a été fait sur un h2");
    }

function bloquerExt(event) {
    let lien = event.currentTarget;
    if (lien.classList.contains("ext")) {
        event.preventDefault();
        console.log("Ce lien est bloqué");
    }
}