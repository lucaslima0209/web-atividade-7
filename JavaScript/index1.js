const nome1 = prompt("Digite o nome da pessoa 1: ");
const peso1 = prompt("Digite o peso da pessoa 1 (em kg): ");
const altura1 = prompt("Digite a altura da pessoa 1 (em m [0.00]): ");
const imc1 = parseFloat((peso1/(altura1*altura1)).toFixed(2));

const nome2 = prompt("Digite o nome da pessoa 2: ");
const peso2 = prompt("Digite o peso da pessoa 2 (em kg): ");
const altura2 = prompt("Digite a altura da pessoa 2 (em m [0.00]): ");
const imc2 = parseFloat((peso2/(altura2*altura2)).toFixed(2));

if(imc1 > imc2){
    const texto = `O IMC de ${nome1} (${imc1}) é maior do que o de ${nome2} (${imc2}).`;
    console.log(texto);
}else{
    const texto = `O IMC de ${nome2} (${imc2}) é maior do que o de ${nome1} (${imc1}).`;
    console.log(texto);
}