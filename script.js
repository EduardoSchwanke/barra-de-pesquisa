'use strict';

const h1 = document.querySelector('.alert');
let existeItem;

const DB = [
    {
        'nome':'celular',
        'valor':'800,00'
    },
    {
        'nome':'computador',
        'valor':'2000,00'
    },
    {
        'nome':'tablet',
        'valor':'500,00'
    },
    {
        'nome':'HD',
        'valor':'400,00'
    },
    {
        'nome':'SSD',
        'valor':'200,00'
    },
    {
        'nome':'fonte',
        'valor':'300,00'
    },
    {
        'nome':'processador',
        'valor':'500,00'
    },
    {
        'nome':'monitor',
        'valor':'200,00'
    },
    {
        'nome':'Cabo Sata',
        'valor':'10,00'
    },
    {
        'nome':'cabo USB',
        'valor':'15,00'
    },
    {
        'nome':'TV',
        'valor':'1400,00'
    },
    {
        'nome':'MAC',
        'valor':'1200,00'
    },
    {
        'nome':'mouse',
        'valor':'20,00'
    },
    {
        'nome':'teclado',
        'valor':'60,00'
    },
    {
        'nome':'cooler',
        'valor':'40,00'
    },
    {
        'nome':'headset',
        'valor':'200,00'
    },
    {
        'nome':'celular',
        'valor':'800,00'
    },
    {
        'nome':'computador',
        'valor':'2000,00'
    },
    {
        'nome':'tablet',
        'valor':'500,00'
    },
    {
        'nome':'HD',
        'valor':'400,00'
    },
    {
        'nome':'SSD',
        'valor':'200,00'
    },
    {
        'nome':'fonte',
        'valor':'300,00'
    },
    {
        'nome':'processador',
        'valor':'500,00'
    },
    {
        'nome':'monitor',
        'valor':'200,00'
    },
    {
        'nome':'Cabo Sata',
        'valor':'10,00'
    },
    {
        'nome':'cabo USB',
        'valor':'15,00'
    },
    {
        'nome':'TV',
        'valor':'1400,00'
    },
    {
        'nome':'MAC',
        'valor':'1200,00'
    },
    {
        'nome':'mouse',
        'valor':'20,00'
    },
    {
        'nome':'teclado',
        'valor':'60,00'
    },
    {
        'nome':'cooler',
        'valor':'40,00'
    },
    {
        'nome':'headset',
        'valor':'200,00'
    }
];


const createElements = (nome, valor) => {
    const item = document.createElement('div');
    item.classList.add('item-single');
    item.innerHTML = `
        <p>${nome}</p>
        <p>R$${valor}</p>
    `;
    document.querySelector('.items').appendChild(item);
}

const createAlert = () => {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Item não encontrado :(';
    document.querySelector('.alert').appendChild(h1);
}

const showElements = () => {
    DB.forEach(item => {
        createElements(item.nome, item.valor)
    })
    createAlert();
}

showElements();

const resetarItems = () => {
    items.forEach(item => {
        item.style.display = "flex"
    })
    h1.style.display = 'none'
}

const semItem = () => {
    h1.style.display = "block"
}

const procurarItem = (itemDesejado) => {
    if(itemDesejado == ''){
        resetarItems();
    }else{ 
        resetarItems();
        items.forEach(item => {
            let i = item.children[0].innerHTML;
            item.style.display = 'none';
            if(i === itemDesejado){
                existeItem = true;
                item.style.display = "flex";
            }
        })
        if(existeItem == false){
            semItem();
        }
        existeItem = false;
    }
    
}

const pesquisarItem = (event) => {
    event.preventDefault()
    const itemDesejado = document.querySelector('#pesquisa').value
    procurarItem(itemDesejado);
}

const items = document.querySelectorAll('.item-single');

document.querySelector('.show-items').addEventListener('click', resetarItems)
document.querySelector('form').addEventListener('submit', pesquisarItem);