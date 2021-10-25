'use strict';

const h1 = document.querySelector('.alert');
let existeItem = false;

const autocomplete = document.querySelector('.auto-complete');
const input = document.querySelector('#pesquisa');


let letra = '';
let itemExiste = false;

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
        'nome':'componente',
        'valor':'1200,00'
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
        item.style.display = "flex";
    })
    h1.style.display = 'none';
}

const semItem = () => {
    h1.style.display = 'block';
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
    reset();
    event.preventDefault()
    const itemDesejado = document.querySelector('#pesquisa').value
    procurarItem(itemDesejado);
}

const items = document.querySelectorAll('.item-single');



const reset = () => {
    autocomplete.style.display = 'none'
}

const limparAutoComplete = () => {
    autocomplete.innerHTML = ''
}

const pegarLetra = (event)=> {
    let key = event.key;
    if(key.length < 2){
        letra += event.key;
    }
    if(key == "Backspace"){
        letra = letra.substring(0, letra.length - 1);
    }
    if(letra.length >= 1){
        autocomplete.style.display = 'block';
    }
    if(letra.length == 0){
        autocomplete.style.display = 'none';
    }

    limparAutoComplete();

    DB.forEach(item => {
        if(letra == item.nome.substr(0, letra.length)){
            autocomplete.innerHTML += `
                <div class="item-complete">
                    <p>${item.nome}</p>
                    <p>R$${item.valor}</p>
                </div>
            `;
            itemExiste = true;
        }
    })
    if(itemExiste == false){
        autocomplete.innerHTML = "<p>item não encontrado :(</p>";
    }
    itemExiste = false;
}


document.querySelector('.show-items').addEventListener('click', resetarItems)
document.querySelector('form').addEventListener('submit', pesquisarItem);
input.addEventListener('keydown', pegarLetra);