//document.querySelector = para pegar elementos do html
/* let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p'); */
//innerHTML - inserir algo diretamente dentro do HTMl
/* titulo.innerHTML = 'Jogo do número secreto';
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

//função para exibir o texto na ela
function exibirTextoNaTela(tag,texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
};

function mensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
};

mensagemInicial();

//onclick = classe padrao para alguma função, ação
function verificarChute() {
    //value - pegar o valor alocado
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('h1' , 'Acertou!')
        exibirTextoNaTela('p' , mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1' , 'Você errou!')
            exibirTextoNaTela('p' , 'o número é menor')
        } else {
            exibirTextoNaTela('h1' , 'Você errou!')
            exibirTextoNaTela('p' , 'o número é maior')
        }
        tentativas++;
        limparCampo();
    }
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
};
