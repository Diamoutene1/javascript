function faireTable() {
    let nav = document.getElementById("table-matieres");
    let main = document.querySelector("main");

    let titres = main.querySelectorAll("h2");

    let ul = document.createElement("ol");

    titres.forEach(function(titre, index) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = titre.textContent;
        a.setAttribute("href", "#" + titre.textContent.replace(/ /g, "-"));
        li.appendChild(a);

        let sousSections = titre.parentNode.querySelectorAll("section > h3");
        if (sousSections.length > 0) {
            let sousUl = document.createElement("ul");
            sousSections.forEach(function(sousSection, index) {
                let sousLi = document.createElement("li");
                let span = document.createElement("span");
                span.textContent = String.fromCharCode(97 + index) + ". ";
                sousLi.appendChild(span);
                let sousA = document.createElement("a");
                sousA.textContent = sousSection.textContent;
                sousA.setAttribute("href", "#" + sousSection.textContent.replace(/ /g, "-"));
                sousLi.appendChild(sousA);

                let sousSousSections = sousSection.parentNode.querySelectorAll("section > h4");
                if (sousSousSections.length > 0) {
                    let sousSousUl = document.createElement("ul");
                    sousSousSections.forEach(function(sousSousSection, index) {
                        let sousSousLi = document.createElement("li");
                        let span = document.createElement("span");
                        span.textContent = String.fromCharCode(97 + index) + ". ";
                        sousSousLi.appendChild(span);
                        let sousSousA = document.createElement("a");
                        sousSousA.textContent = sousSousSection.textContent;
                        sousSousA.setAttribute("href", "#" + sousSousSection.textContent.replace(/ /g, "-"));
                        sousSousLi.appendChild(sousSousA);
                        sousSousUl.appendChild(sousSousLi);
                    });
                    sousLi.appendChild(sousSousUl);
                }

                sousUl.appendChild(sousLi);
            });
            li.appendChild(sousUl);
        }

        ul.appendChild(li);
    });

    nav.appendChild(ul);
}

faireTable();
