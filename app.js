'use strict'
import { listaProdutos } from "./produtos.js";

const criarCard = function(listaProdutos){
    const card     = document.createElement('div')
    card.className = 'card'

    //Categoria do produto
    const categoria       = document.createElement('p')
    categoria.textContent = listaProdutos.categoria

    //Imagem referente ao produto
    const foto = document.createElement('img')
    foto.src   = `./img/${listaProdutos.imagem}`
    foto.alt   = `Foto de ${listaProdutos.nome}`
    
    //Nome do produto
    const nome = document.createElement('h2')
    nome.textContent = listaProdutos.nome

    //Descrição do produto
    const descricao = document.createElement('details')
    descricao.textContent = listaProdutos.descricao

    //Classificação do produto
    const classificacao = document.createElement('img')
    if(Number(listaProdutos.classificacao) == 2){
        classificacao.src = `./img/2 estrela.png`
    }else if(Number(listaProdutos.classificacao) == 3){
        classificacao.src = `./img/3 estrela.png`
    }else if(Number(listaProdutos.classificacao) == 4){
        classificacao.src = `./img/4 estrela.png`
    }else if(Number(listaProdutos.classificacao) == 5){
        classificacao.src = `./img/5 estrela.png`
    }else{

    }

    //Preço do produto
    const preco = document.createElement('h3')
    preco.textContent = listaProdutos.preco

    card.append(categoria, foto, nome, descricao, preco, classificacao)
    return card
}

//Percorrer o array de listaProdutos antes de fazer a função map, pois o retorno de listaProdutos é um array de objetos
const produtos = listaProdutos()

const card = produtos.map(criarCard)
//Substituir os elementos presentes por esses filhos
document.getElementById('container').replaceChildren(...card)