import { uditok, alkoholosItalok, kavek } from "../italAdatok.js";
import { feltolt } from "../etelekEsItalok.js";

const uditoKategoria= document.getElementById("udito-kategoria");
const alkoholKategoria= document.getElementById("alkohol-kategoria");
const kaveKategoria= document.getElementById("kave-kategoria");

feltolt(uditok, uditoKategoria, "Italok");
feltolt(alkoholosItalok, alkoholKategoria, "Italok");
feltolt(kavek, kaveKategoria, "Italok");