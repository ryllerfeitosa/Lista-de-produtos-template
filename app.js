'use strict'
import { listaProdutos } from "./produtos.js";

const criarCard = function(listaProdutos){
    const card     = document.createElement('div')
    card.className = 'card'

    //Categoria do produto
    const categoria       = document.createElement('categoria')
    categoria.textContent = listaProdutos.categoria

    //Imagem referente ao produto
    const foto = document.createElement('img')
    foto.src   = `./img/${listaProdutos.imagem}`
    foto.alt   = `./img/${listaProdutos.nome}`
    
    //Nome do produto
    const nome = document.createElement('h2')
    nome.textContent = listaProdutos.nome

    //Descrição do produto
    const descricao = document.createElement('details')
    descricao.textContent = listaProdutos.descricao

    //Preço do produto
    const preco = document.createElement('h3')
    preco.textContent = listaProdutos.preco

    card.append(categoria, foto, nome, descricao)
    return card
}

const card = listaProdutos.map(criarCard)
//Substituir os elementos presentes por esses filhos
document.getElementById('container').replaceChildren(...card)