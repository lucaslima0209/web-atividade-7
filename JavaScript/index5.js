const nome = prompt("Digite seu nome: ");
const anoNascimento = prompt("Digite seu ano de nascimento: ");

function calcularIdade(anoNascimento){
    return 2021 - anoNascimento;
}

function tempoAposentar(idade){
    return 65 - idade;
}

const idade = calcularIdade(anoNascimento);
const tempoRestante = tempoAposentar(idade);

if(idade >=65){
    console.log(`${nome}, você já atingiu a idade necessária para a aposentadoria!`);
}else{
    console.log(`${nome}, resta(m) ${tempoRestante} ano(s) para que você possa se aposentar, no ano de ${(2021+tempoRestante)}.`);
}

