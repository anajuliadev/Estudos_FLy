function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    
    if (de >= ate || quantidade > ate) {
        alert('Opa! Verifique se você colocou os números corretamente');
        return;
    };



    /*for (inicialização; condição; incremento)*/
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        };

        sorteados.push(numero);
    };
    
    
    document.getElementById('exibirResultado').innerHTML = sorteados;
    alterarStatusBotao();
    
    /* verificarNumero(de, ate); */

  /*   let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`; */



    /* let numero = obterNumeroAleatorio(de, ate);
    alert(numero); */

    /* alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`); */
};

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    };
};

function reiniciar () {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('exibirResultado').innerHTML = 'Nenhum até agora';
    alterarStatusBotao();
};

/* function verificarNumero(de, ate){
    if (de >= ate) {
        alert('Opa! Verifique se você colocou os números corretamente');
        reiniciar();
    }
} */