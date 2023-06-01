const DATA_ATUAL = new Date();
const ANO_ATUAL = DATA_ATUAL.getFullYear();

let nome = prompt("Digite o seu nome:");
const IDADE = parseInt(prompt("Digite a sua idade:"));

nome = nome.toUpperCase();

alert(`${nome} NASCEU EM ${ANO_ATUAL - IDADE}`);
console.log(typeof IDADE);
