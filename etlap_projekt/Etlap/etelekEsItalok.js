export function feltolt (lista, sor, kepMappa) {
    lista.forEach(termek => {
        let elem = document.createElement("div");
        elem.className = "item";

        let kep = document.createElement("img");
        kep.src = `../Images/${kepMappa}/${termek.kep}.png`;
        elem.appendChild(kep);

        let adatokDiv = document.createElement("div");
        adatokDiv.className = "adatok";
        
        let nev = document.createElement("p");
        nev.innerText = termek.nev;
        adatokDiv.appendChild(nev);

        let ar = document.createElement("p");
        ar.innerText = `${termek.ar} Ft`;
        adatokDiv.appendChild(ar);
        
        elem.append(adatokDiv);
        sor.appendChild(elem);
    });
}