function crud() {

    //elementos
    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('#open-modal');
    const closeModal = document.querySelector('#btn-close');
    const btn_add = document.querySelector("#btn-add")
    const productId = document.querySelector("#id")
    const productName = document.querySelector("#produto")
    const productPrice = document.querySelector("#valor")


    function open_modal() {
        modal.classList.add('is-active')
    }

    function close_modal(){
        modal.classList.remove('is-active')
    }

    function deleteProduct(index) {
        const db_product = readyProduct()
        db_product.splice(index, 1)
        localStorage.setItem('db_product', JSON.stringify(db_product))
    }

    function updateProduct(index, product){
        const db_product = JSON.parse(localStorage.getItem('db_product'))
        db_product[index] = product
        localStorage.setItem('db_product', JSON.stringify(db_product))
    }

    function readyProduct(){
        const dados = JSON.parse(localStorage.getItem('db_product'))
        console.log(dados)
    }

    function createProduct(product){
        const db_product = JSON.parse(localStorage.getItem('db_product')) ?? []
        db_product.push(product)
        localStorage.setItem('db_product', JSON.stringify(db_product))
    }

    function saveProduct() {
        const id = productId.value;
        const product = productName.value;
        const price = productPrice.value;

        const item = {
            id: id,
            product: product,
            price: price
        }

        createProduct(item)
    }

    //eventos
    openModal.addEventListener('click', open_modal)
    closeModal.addEventListener('click', close_modal)
    btn_add.addEventListener('click', saveProduct)
}

crud()
// const addNewProduct = document.querySelector('#add');
// const newProduto = document.querySelector('#produto');
// const newValue = document.querySelector('#valor');
// const tableBody = document.querySelector('#table-body');


// const produtoCRUD = {

//     items: [],

//     adicionarProduto: function(ean, name, value){
//         const item = {
//             ean: ean,
//             nome: name,
//             valor: value
//         }

//         this.items.push(item)
//         this.exibirItems()

//         console.log('Array de Produtos >>', this.items)
//     },

//     exibirItems: function(){
//         const markup = `
//             ${this.items.map(item => {
//                 return(
//                     `
//                         <tr>
//                             <td>1</td>
//                             <td>${item.nome}</td>
//                             <td>${item.valor}</td>
//                             <td>
//                                 <img src="./img/editar.png" alt="editar">
//                                 <img src="./img/deletar.png" alt="deletar">
//                             </td>
//                         </tr>
//                     `
//                 )
//             }).join('')}
            
//         `
//         tableBody.innerHTML = markup
//     }
// }

// add.addEventListener('click', function(){
//     const ean = newProduto.value
//     const product = newProduto.value
//     const value = newValue.value
//     produtoCRUD.adicionarProduto(ean, product, value)
// })

