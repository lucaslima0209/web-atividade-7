const restaurantes = new Array();
const valores = new Array();
const gorjetas = new Array();
const valoresFinais = new Array();

const gorjeta = (valor) => {
  if (valor < 50) {
    return (20 / 100) * valor;
  } else if (valor >= 50 && valor <= 200) {
    return (15 / 100) * valor;
  } else {
    return (10 / 100) * valor;
  }
};

const resultado = (restaurantes, valores, gorjetas) => {
  for (let i = 0; i < 3; i++) {
    console.log(`Restaurante ${restaurantes[i]} - [Valor: R$ ${parseFloat(valores[i]).toFixed(
      2
    )} | Gorjeta: R$ ${parseFloat(gorjetas[i]).toFixed(2)} | Total: R$ ${parseFloat(
      valorFinal(valores[i], gorjetas[i])
    ).toFixed(2)}]`);
  }
};
const valorFinal = (valor, gorjeta) => parseFloat(valor) + parseFloat(gorjeta);

for (let i = 0; i < 3; i++) {
  restaurantes.push(prompt(`Restaurante ${i + 1}`));
  valores.push(prompt(`Valor gasto no restaurante ${restaurantes[i]}:`));
  gorjetas.push(gorjeta(valores[i]));
}

resultado(restaurantes, valores, gorjetas);