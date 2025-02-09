let total;
limpar();

document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0'

function adicionar() {
    //recuperar valores: nome e qntd
    let produto = document.getElementById('produto').value;
    //spit(-): a string e dividida sempre que encontrar um ifen ,
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;


    //calc o subtotal por produto
    let preco = quantidade * valorUnitario;
    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}X</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span> </section>`;


    //atualizar o total dos produtos
    total = total + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;
};


 
function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'
}