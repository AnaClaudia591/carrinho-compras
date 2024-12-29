let totalGeral;
limpar();

function adicionar(){
// recuperar valores nome do produto, quantidade  e  valor.
let produto = document.getElementById('produto').value;
let NomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
// calcular o preço, o subtotal
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
// adicionar no carrinho
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${NomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
//atualizar valor total
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    carrinho = document.getElementById('lista-produtos').innerHTML= '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}