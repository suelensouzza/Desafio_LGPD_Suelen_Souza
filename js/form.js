const botaoEnviar = document.getElementById('btn-enviar');
const checkbox1 = document.getElementById('checkbox1')

// quando os checkboxes forem alterados, utiliza a lógica da função validaCheckbox
checkbox1.addEventListener('change', validaCheckbox)

class Contato{
    constructor(nome, email, telefone, assunto, comentario){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.assunto = assunto
        this.comentario = comentario
    }
}

function Post(event, form){
    
    event.preventDefault();

    const nome = form.nome.value
    const email = form.email.value
    const telefone = form.telefone.value
    const assunto = form.assunto.value
    const comentario = form.comentario.value

    let data = new Contato(nome, email, telefone, assunto, comentario)

    console.log(data)

    // função de validar checkbox
    validaCheckbox();

    Enviar(nome);

    form.reset();
}

function Enviar(nome) {
   
    if (nome == "") {
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Obrigado ' + nome + ', os seus dados foram encaminhados com sucesso!');
    }
}


function validaCheckbox(){
   if(checkbox1.checked){
    botaoEnviar.disabled = false; //tira o desabilitado do botao
    botaoEnviar.style.opacity = 1; //muda para opacidade padrão de cores
   }else{
    botaoEnviar.disabled = true; //desabilita novamente
    botaoEnviar.style.opacity = 0.3; //volta para opacidade inicial
}
}