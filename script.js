const biciclette = [
    { nome: "Bianchi", peso: 7.5 },
    { nome: "Scott", peso: 6.8 },
    { nome: "Cannondale", peso: 7.2 },
    { nome: "Trek", peso: 6.9 }
  ];
  
  let biciPiuLeggera = biciclette[0];
  
  for (let i = 1; i < biciclette.length; i++) {
    const bici = biciclette[i];
    
    if (bici.peso < biciPiuLeggera.peso) {
      biciPiuLeggera = bici;
    }
  }
  
  console.log("La bici più leggera è:");
  console.log(`Nome: ${biciPiuLeggera.nome}, Peso: ${biciPiuLeggera.peso} kg`);
  