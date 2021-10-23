'use strict';

const items = document.querySelectorAll('.item-single');
const h1 = document.querySelector('.alert');
let existeItem;

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
            let i = item.children[0].innerHTML
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

document.querySelector('.show-items').addEventListener('click', resetarItems)
document.querySelector('form').addEventListener('submit', pesquisarItem);