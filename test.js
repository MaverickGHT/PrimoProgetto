 import {grid} from "./piazzaMine.js";

// let grid = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// piazzaMine();

//  function piazzaMine(){
//     for (let i=0; i<2; i++) {
//     let randomMina = Math.floor((Math.random() * 15));
//     grid[randomMina]= "Boom";
//     }
// }

let nomeBottone = document.getElementById("nameButton");


let nomeGiocatore = document.getElementById("nomeGiocatore");
nomeBottone.addEventListener('click', stampaNome, false);
let t = document.getElementById("test");

let counterWin=0;

let cellaZero= document.getElementById("0");
let cellaUno= document.getElementById("1");
let cellaDue= document.getElementById("2");
let cellaTre= document.getElementById("3");
let cellaQuattro= document.getElementById("4");
let cellaCinque= document.getElementById("5");
let cellaSei= document.getElementById("6");
let cellaSette= document.getElementById("7");
let cellaOtto= document.getElementById("8");
let cellaNove= document.getElementById("9");
let cellaDieci= document.getElementById("10");
let cellaUndici= document.getElementById("11");
let cellaDodici= document.getElementById("12");
let cellaTredici= document.getElementById("13");
let cellaQuattordici= document.getElementById("14");
let cellaQuindici= document.getElementById("15");

cellaZero.addEventListener('click', function () {mina(cellaZero, counterWin)}, false);
cellaUno.addEventListener('click', function () {mina(cellaUno, counterWin)}, false);
cellaDue.addEventListener('click', function () {mina(cellaDue, counterWin)}, false);
cellaTre.addEventListener('click', function () {mina(cellaTre, counterWin)}, false);
cellaQuattro.addEventListener('click', function () {mina(cellaQuattro, counterWin)}, false);
cellaCinque.addEventListener('click', function () {mina(cellaCinque, counterWin)}, false);
cellaSei.addEventListener('click', function () {mina(cellaSei, counterWin)}, false);
cellaSette.addEventListener('click', function () {mina(cellaSette, counterWin)}, false);
cellaOtto.addEventListener('click', function () {mina(cellaOtto, counterWin)}, false);
cellaNove.addEventListener('click', function () {mina(cellaNove, counterWin)}, false);
cellaDieci.addEventListener('click', function () {mina(cellaDieci, counterWin)}, false);
cellaUndici.addEventListener('click', function () {mina(cellaUndici, counterWin)}, false);
cellaDodici.addEventListener('click', function () {mina(cellaDodici, counterWin)}, false);
cellaTredici.addEventListener('click', function () {mina(cellaTredici, counterWin)}, false);
cellaQuattordici.addEventListener('click', function () {mina(cellaQuattordici, counterWin)}, false);
cellaQuindici.addEventListener('click', function () {mina(cellaQuindici, counterWin)}, false);




function mina (cella, counter) {
    document.getElementById(cella.id).textContent= grid[cella.id]; 
    if (grid[cella.id]=="Boom") {t.textContent ="Hai perso stronzo e fai schifo!";}
    else {counter++;}
    console.log(counter);
    if(counter==14) {
        t.textContent ="Hai vinto idiota!";
    }

}


function stampaNome(){
    t.textContent = "Benvenuto giocatore: " + nomeGiocatore.value;
}