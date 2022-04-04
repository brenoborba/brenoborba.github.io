const registerUserForm = document.getElementById("registerUser")

/* First form validation */

registerUserForm.onsubmit = e =>{
    e.preventDefault()
    let errorFlag = false
    
    const nameInput = document.forms['registerUser']['name']
    const emailInput = document.forms['registerUser']['email']
    const cpfInput = document.forms['registerUser']['cpf']
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