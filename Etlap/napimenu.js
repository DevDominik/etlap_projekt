import { levesek, foetelek, desszertek } from "./etelek.js"

let levesSor = document.getElementById("leves-sor");
let foetelSor = document.getElementById("foetel-sor");
let desszertSor = document.getElementById("desszert-sor");

function feltolt(lista, sor) {
    lista.forEach(etel => {
        let elem = document.createElement("div");
        elem.onclick = function(){kivalaszt()};

        let kep = document.createElement("img");
        kep.src = "Images/" + etel.kep + ".png";
        elem.appendChild(kep);
        
        let nev = document.createElement("p");
        nev.innerText = etel.nev;
        elem.appendChild(nev);

        let ar = document.createElement("p");
        ar.innerText = etel.ar+" Ft";
        elem.appendChild(ar);

        sor.appendChild(elem);
    });
}

function kivalaszt(event){
    let elem = window.event.currentTarget;
    if (elem.classList.contains("kivalasztott")) {
        elem.classList.remove("kivalasztott");
    } else {
        elem.classList.add("kivalasztott");
    }
}

feltolt(levesek, levesSor);
feltolt(foetelek, foetelSor);
feltolt(desszertek, desszertSor);