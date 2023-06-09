function crud() {

    //elementos
    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('#open-modal');
    const closeModal = document.querySelector('#btn-close');
    const btn_add = document.querySelector("#btn-add")
    const productId = document.querySelector("#id")
    const productName = document.querySelector("#produto")
    const productPrice = document.querySelector("#valor")
    const tbody = document.querySelector('#table-body')
    const editProduct = document.querySelector('#editProduct')


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
        readyProduct()
    }

    function updateProduct(index, product){
        const db_product = JSON.parse(localStorage.getItem('db_product'))
        db_product[index] = product
        localStorage.setItem('db_product', JSON.stringify(db_product))
    }

    function readyProduct(){
        const dados = JSON.parse(localStorage.getItem('db_product'))
        const tr = `
            ${dados.map((item, index) => {
                return `
                    <tr>
                        <td>${index}</td>
                        <td>${item.product}</td>
                        <td>${item.price}</td>
                        <td>
                            <button id="editProduct"><img src="./img/editar.png" alt="editar"></button>
                            <button id="deleteProduct"><img src="./img/deletar.png" alt="deletar"></button>
                        </td>
                    </tr>
                `
            }).join('')}
        `
        tbody.innerHTML = tr
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
        readyProduct()
        close_modal()
    }

    //eventos
    openModal.addEventListener('click', open_modal)
    closeModal.addEventListener('click', close_modal)
    btn_add.addEventListener('click', saveProduct)


    readyProduct()
}

crud()