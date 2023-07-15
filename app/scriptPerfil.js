let perfils = []

function formAdicionar() {
    let email = document.querySelector("#cadInputName").value
    let celular = document.querySelector("#select-status").value
    let aniversário = document.querySelector("#cadInputUltimoContato").value
    let statusTrabalho = document.querySelector("#cadInputUltimoContato").value

    let senha = document.querySelector("#cadInputUltimoContato").value
    let senhaConfirmacao = document.querySelector("#cadInputUltimoContato").value



    validaAdicionar(email, celular, aniversário, statusTrabalho, senha, senhaConfirmacao)
}

function validaAdicionar(email, celular, aniversário, statusTrabalho, senha, senhaConfirmacao) {
    let perfil = {
        sku: perfils.length,
        email,
        celular,
        aniversário,
        statusTrabalho,
        senha,
        senhaConfirmacao
    }
    alert("Contato adicionado com sucesso")
    perfils.push(perfil)
}


function exibirPerfil() {
    let oPerfil = document.querySelector("#oPerfil")
    oPerfil.innerHTML += `
    <p>teste</p> `
}

