// Javascript

let nome;
let eta;
let lavoro;

nome = "Giacomo";
eta = 50;
lavoro = "tecnico/programmatore GIS";

// Uso della concatenazione con il simbolo + 
console.log("Mi chiamo " + nome + ", ho " + eta + " anni, e faccio il " + lavoro + ".");

// Uso delle stringhe template con il Backtick
console.log(`Mi chiamo ${nome}, ho ${eta} anni, e faccio il ${lavoro}.`);

// document.getElementById("messaggio1").innerText = `Mi chiamo ${nome}, ho ${eta} anni, e faccio il ${lavoro}.`;
document.getElementById("messaggio1").innerHTML = `Mi chiamo ${nome}, ho ${eta} anni, e faccio il ${lavoro}.`;
document.getElementById("messaggio2").innerHTML = `Mi chiamo <span>${nome}</span>, ho <span>${eta}</span> anni, e faccio il <span>${lavoro}</span>.`;