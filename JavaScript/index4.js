const numero = prompt("Digite um número:");

alert(`Agora digite ${numero} palavra(s):`);

let palavras = new Array();

for(let i = 0; i < numero; i++){
    const palavra = prompt(`Palavra ${parseInt(i)+1}:`);
    palavras.push(palavra);
}

console.log(`Ordem inversa da(s) ${palavras.length} palavra(s):`);

for(let i = palavras.length - 1; i >=0; i--){
    console.log(`Palavra ${i+1}: "${palavras[i]}".`);
}