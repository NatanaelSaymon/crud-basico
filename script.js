const addNewProduct = document.querySelector('#add');
const newProduto = document.querySelector('#produto');
const newValue = document.querySelector('#valor');


const produtoCRUD = {

    items: [],

    adicionarProduto: function(name, value){
        const item = {
            nome: name,
            valor: value
        }

        this.items.push(item)
        console.log('Item adicionado', item)
        console.log('Produtos', this.items)
    }
}

add.addEventListener('click', function(){
    const product = newProduto.value
    const value = newValue.value
    produtoCRUD.adicionarProduto(product, value)
})

