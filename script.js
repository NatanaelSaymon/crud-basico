const addNewProduct = document.querySelector('#add');
const newProduto = document.querySelector('#produto');
const newValue = document.querySelector('#valor');
const tableBody = document.querySelector('#table-body');


const produtoCRUD = {

    items: [],

    adicionarProduto: function(name, value){
        const item = {
            nome: name,
            valor: value
        }

        this.items.push(item)
        this.exibirItems()

        console.log('Array de Produtos >>', this.items)
    },

    exibirItems: function(){
        const markup = `
            ${this.items.map(item => {
                return(
                    `
                        <tr>
                            <td>1</td>
                            <td>${item.nome}</td>
                            <td>${item.valor}</td>
                            <td>
                                <img src="./img/editar.png" alt="editar">
                                <img src="./img/deletar.png" alt="deletar">
                            </td>
                        </tr>
                    `
                )
            }).join('')}
            
        `
        tableBody.innerHTML = markup
    }
}

add.addEventListener('click', function(){
    const product = newProduto.value
    const value = newValue.value
    produtoCRUD.adicionarProduto(product, value)
})

