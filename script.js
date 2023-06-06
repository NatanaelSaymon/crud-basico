function crud() {

    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('#open-modal');
    const closeModal = document.querySelector('#btn-close');

    openModal.addEventListener('click', function(){
        modal.classList.add('is-active')
    })

    closeModal.addEventListener('click', function(){
        modal.classList.remove('is-active')
    })
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

