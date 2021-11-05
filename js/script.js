// dichiarazione variabili
let prezzo;

// chiedo all'utente i dati
const km = parseFloat(prompt("Quanti chilometri devi percorrere?"));

const eta = parseInt(prompt("Quanti anni hai?"));


// controllo se l'utente ha inserito i dati
if(km && eta){
    document.getElementById("km").innerHTML = km + " Km";
    document.getElementById("eta").innerHTML = eta;
}
else {
    document.getElementById("km").innerHTML = "Reinserisci i dati!!";
    document.getElementById("eta").innerHTML = "Reinserisci i dati!!";
}

// calcolo il prezzo intero del biglietto
prezzo = 0.21 * km;

// controllo l'età dell'utente e applico eventuali sconti
if(eta < 18){
    prezzo -= ((prezzo * 20) / 100);
}
else if(eta > 65){
    prezzo -= ((prezzo * 40) / 100);
    console.log(prezzo);
}

// stampo il prezzo
if(km && eta){
    document.getElementById("prezzo").innerHTML = (prezzo).toFixed(2);
}
else{
    document.getElementById("prezzo").innerHTML = "Non posso calcolare il prezzo finale!";
}