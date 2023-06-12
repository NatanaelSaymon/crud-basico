function crud() {

    //elementos
    const modal = document.querySelector('#modal');
    const openModal = document.querySelector('#open-modal');
    const closeModal = document.querySelector('#btn-close');
    const btn_add = document.querySelector("#btn-add")
    const tbody = document.querySelector('#table-body')


    function open_modal() {
        modal.classList.add('is-active')
    }

    function close_modal(){
        modal.classList.remove('is-active')
        clearFields()
    }

    function deleteProduct(index) {
        const db_product = JSON.parse(localStorage.getItem('db_product'))
        db_product.splice(index, 1)
        localStorage.setItem('db_product', JSON.stringify(db_product))
        readyProduct()
    }

    function updateProduct(index, product){
        const db_product = JSON.parse(localStorage.getItem('db_product'))
        db_product[index] = product
        localStorage.setItem('db_product', JSON.stringify(db_product))
        readyProduct()
    }

    function readyProduct(){
        const dados = JSON.parse(localStorage.getItem('db_product'))
        const tr = `
            ${dados.map((item, index) => {
                return `
                    <tr>
                        <td>${index}</td>
                        <td>${item.product}</td>
                        <td>R$ ${item.price}</td>
                        <td style="padding: 5px 0;">
                            <button type="button" id="edit-${index}" class="btn-edit">
                                Editar
                            </button>
                            <button type="button" id="delete-${index}" class="btn-delete">
                                Excluir
                            </button>
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

    function clearFields() {
        const fields = document.querySelectorAll('.field')
        fields.forEach(item => item.value = '')
    }

    function saveProduct() {
        const produtId = document.querySelector("#id").value
        const productName = document.querySelector("#produto").value
        const ProductPrice = document.querySelector("#valor").value
        const index = document.querySelector('#index').dataset.index

        const product = {
            id: produtId,
            product: productName,
            price: ProductPrice
        }

        if(index === 'new') {
            if(produtId === '' || productName === '' || ProductPrice === '') {
                return alert('Preencha todos os campos!')
            } 
    
            createProduct(item)
            readyProduct()
            clearFields()
            close_modal()

        } else {
            updateProduct(index, product)
            close_modal()
        }
    }

    function fillFields(product) {
        document.querySelector("#id").value = product.id
        document.querySelector("#produto").value = product.product
        document.querySelector("#valor").value = product.price
        document.querySelector("#index").dataset.index = product.index
    }

    function editProduct(index) {
        const dados = JSON.parse(localStorage.getItem('db_product'))
        
        const product = dados[index]
        product.index = index
        fillFields(product)
        open_modal()
    }

    function action(e) {
        if(e.target.type == 'button') {
            const [action, index] = e.target.id.split('-')

            if(action === 'edit') {
                editProduct(index)
            } else {
                const product = JSON.parse(localStorage.getItem('db_product'))[index]
                const response = confirm(`Deseja realmente excluir o produto: ${product.product}?`)
                if(response) {
                    deleteProduct(index)
                }
                
            }
        }
    }

    //eventos
    openModal.addEventListener('click', open_modal)
    closeModal.addEventListener('click', close_modal)
    btn_add.addEventListener('click', saveProduct)
    tbody.addEventListener('click', action)


    readyProduct()
}

crud()