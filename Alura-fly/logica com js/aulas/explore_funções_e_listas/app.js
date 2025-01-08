//document.querySelector = para pegar elementos do html
/* let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p'); */
//innerHTML - inserir algo diretamente dentro do HTMl
/* titulo.innerHTML = 'Jogo do número secreto';
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let numeroSecreto = gerarNumeroAleatorio();

//função para exibir o texto na ela
function exibirTextoNaTela(tag,texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
};

exibirTextoNaTela('h1' , 'Jogo do número secreto');
exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

//onclick = classe padrao para alguma função, ação
function verificarChute() {
    //value - pegar o valor alocado
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou!')
        exibirTextoNaTela('p' , 'você encontrou o número secreto!')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1' , 'Você errou!')
            exibirTextoNaTela('p' , 'o número é menor')
        } else {
            exibirTextoNaTela('h1' , 'Você errou!')
            exibirTextoNaTela('p' , 'o número é maior')
        }
    }

    console.log(numeroSecreto);
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
};