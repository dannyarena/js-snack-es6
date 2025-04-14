const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = getRandomNumber(0, 100);
  squadre[i].falliSubiti = getRandomNumber(0, 50);
}


const risultati = [];

for (let i = 0; i < squadre.length; i++) {
  const squadra = squadre[i];

  const nuovaSquadra = {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  };

  risultati.push(nuovaSquadra);
}

console.log("Tutte le squadre con dati completi:");
console.log(squadre);

console.log("Nuovo array con solo nomi e falli subiti:");
console.log(risultati);