const nome = prompt("Digite o seu nome: ");
const peso = prompt("Digite o seu peso (em kg): ");
const altura = prompt("Digite a sua altura (em m [0.00]): ");
const imc = parseFloat((peso / (altura * altura)).toFixed(2));

console.log(imc);

if (imc < 17) {
  const texto = `${nome}! Você está muito abaixo do peso.\nDica: mude seus hábitos alimentares e procure um nutricionista.`;
  console.log(texto);
} else if ((imc < 18.5)) {
  const texto = `${nome}! Você está abaixo do peso.\nDica: melhore seus hábitos alimentares e pratique exercícios.`;
  console.log(texto);
} else if (imc < 25) {
  const texto = `${nome}! Você está com o peso ideal.\nDica: porém não relaxe na sua saúde, pratique exercícios.`;
  console.log(texto);
} else if (imc < 30) {
  const texto = `${nome}! Você está acima do peso.\nDica: não se desespere! tente cortar besteiras e corra um pouco.`;
  console.log(texto);
} else if (imc < 35) {
  const texto = `${nome}! Você está com obesidade I.\nDica: cuidado! procure rever sua alimentação e, se precisar, procure um nutricionista.`;
  console.log(texto);
} else if (imc < 40) {
  const texto = `${nome}! Você está com obesidade II (severa).\nDica: está tudo bem! apenas procure um médico e verifique o que você pode fazer.`;
  console.log(texto);
} else {
  const texto = `${nome}! Você está com obesidade III (mórbida).\nDica: procure um especialista e siga as indicações fornecidas.`;
  console.log(texto);
}
