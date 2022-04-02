const registerUserForm = document.getElementById("registerUser")

/* First form validation */

registerUserForm.onsubmit = e =>{
    e.preventDefault()
    let errorFlag = false
    
    const nameInput = document.forms['registerUser']['name']
    const emailInput = document.forms['registerUser']['email']
    const cpfInput = document.forms['registerUser']['cpf']
    /* const radioButtons = document.forms['registerUser']['sexo'] */

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

    const radioButtons = document.querySelectorAll('input[name="sexo"]');
    const span = document.querySelector('.radioError')

    for (const radioButton of radioButtons){
        if(!radioButton.checked){
            errorFlag = true
            span.innerText = 'EU N AGUENTO MAIS'
        } else{
            span.classList.remove('.radioError')
            span.innerText = ''
            console.log(radioButton.value)
        }
    }

    inputValidation(nameInput, 'nome')
    inputValidation(emailInput, 'e-mail')
    inputValidation(cpfInput, 'CPF')

    
    if(!errorFlag){
        registerUserForm.submit()
    }
    
}