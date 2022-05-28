const registerUserForm = document.getElementById("registerUser")
const registerNewsletter = document.getElementById("registerNewsletter")

function inputValidation(input, string) {
    if(!input.value){
        errorFlag = true
        input.classList.add('inputError')
        let span = input.nextSibling.nextSibling
        span.innerText = `Insira o ${string} corretamente!`
    } else{
        input.classList.remove('inputError')
        let span = input.nextSibling.nextSibling
        span.innerText = ''
    }
}


/* First form validation */
registerUserForm.onsubmit = e =>{
    e.preventDefault()
    let errorFlag = false
    
    const nameInput = document.forms['registerUser']['name']
    const emailInput = document.forms['registerUser']['email']
    const cpfInput = document.forms['registerUser']['cpf']
    
    inputValidation(nameInput, 'nome')
    inputValidation(emailInput, 'e-mail')
    inputValidation(cpfInput, 'CPF')
    
    /* Radio inputs validation */
    const radioButtons = document.querySelectorAll('input[name="sexo"]');
    const span = document.querySelector('.radioError')
    let selectedValue

    for (const radioButton of radioButtons){
        if(radioButton.checked){
            selectedValue = radioButton.value
            break
        }
    }
        
    if(selectedValue){
        span.classList.remove('.inputError')
        span.innerText = ''

    } else{
        errorFlag = true
        span.classList.add('.inputError')
        span.innerText = 'Selecione uma das opções!'
    }
    
    if(!errorFlag){
        registerUserForm.submit()
    }
    
}

/* Newsletter form validation */
registerNewsletter.onsubmit = e =>{
    e.preventDefault()
    let errorFlag = false

    const nameInput = document.forms['registerNewsletter']['name']
    const emailInput = document.forms['registerNewsletter']['email']

    inputValidation(nameInput, 'nome')
    inputValidation(emailInput, 'e-mail')

    if(!errorFlag){
        registerNewsletter.submit()
    }


}

/* API request for displaying the catalog */
const showMoreBtn = document.getElementById('showMoreBtn')
const catalogGrid = document.querySelector('.catalog-grid')
const secondPage = document.getElementById('secondPage')
secondPage.style.display = 'none'

async function showProducts(page) {
    let productWrapper
   await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
   .then(res => res.json())
   .then(data => data.products.forEach((product) => {
        productWrapper = document.createElement('div')

        productWrapper.innerHTML += 
        `<div class="catalog-item">
            <div class="display-item">
                <img src="${product.image}" alt="" class="displayImg"/>
            </div>
            <div class="productName">${product.name}</div>

            <div class="productDescription">
                ${product.description}
            </div>

            <div class="oldPrice">De: <del>R$${product.oldPrice},00</del></div>
            <div class="price">Por: R$${product.price},00</div>
            <div class="installments">ou ${product.installments.count}x de R$${product.installments.value}0</div>

            <button class="btn">Comprar</button>
        </div>`

        catalogGrid.appendChild(productWrapper)

        
    }))

    showMoreBtn.onclick = function(){
        showProducts(2)
        secondPage.style.display = ''


    }
}


showProducts()









