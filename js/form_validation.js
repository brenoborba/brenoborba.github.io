const registerUserForm = document.getElementById("registerUser")
const registerNewsletter = document.getElementById("registerNewsletter")


registerUserForm.onsubmit = e => {
    e.preventDefault()
    let errorFlag = true
    const nameInput = document.forms['registerUser']['name']
    const emailInput = document.forms['registerUser']['email']
    const cpfInput = document.forms['registerUser']['cpf']

    if(!nameInput.value){
        errorFlag = true
        nameInput.classList.add('error')
        let span = nameInput.nextSibling.nextSibling
        span.innerText = `Insira o nome corretamente!`
    } else{
        errorFlag = false
        let span = nameInput.nextSibling.nextSibling
        span.innerText = ''

    }

    if(!emailInput.value){
        errorFlag = true
        emailInput.classList.add('error')
        let span = emailInput.nextSibling.nextSibling
        span.innerText = `Insira o e-mail corretamente!`
    } else{
        errorFlag = false
        let span = emailInput.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!cpfInput.value){
        errorFlag = true
        cpfInput.classList.add('error')
        let span = cpfInput.nextSibling.nextSibling
        span.innerText = `Insira o CPF corretamente!`
    } else{
        errorFlag = false
        let span = cpfInput.nextSibling.nextSibling
        span.innerText = ''
    }


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
        span.classList.remove('.radioError')
        span.innerText = ''

    } else{
        errorFlag = true
        span.classList.add('.radioError')
        span.innerText = 'Selecione uma das opções!'
    }


    if(!errorFlag){
        registerUserForm.submit()
    }

}


registerNewsletter.onsubmit = e =>{
    e.preventDefault()
    let errorFlag = true

    const nameInput = document.forms['registerNewsletter']['name']
    const emailInput = document.forms['registerNewsletter']['email']

    if(!nameInput.value){
        errorFlag = true
        nameInput.classList.add('error')
        let span = nameInput.nextSibling.nextSibling
        span.innerText = `Insira o nome corretamente!`
    } else{
        errorFlag = false
        let span = nameInput.nextSibling.nextSibling
        span.innerText = ''

    }

    if(!emailInput.value){
        errorFlag = true
        emailInput.classList.add('error')
        let span = emailInput.nextSibling.nextSibling
        span.innerText = `Insira o e-mail corretamente!`
    } else{
        errorFlag = false
        let span = emailInput.nextSibling.nextSibling
        span.innerText = ''
    }
    
    if(!errorFlag){
        registerNewsletter.submit()
    }

}