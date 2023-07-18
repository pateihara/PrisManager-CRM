let perfils = []

function formAdicionar() {
    let avatar = document.querySelector("#imageInputPerfil").value
    let nome = document.querySelector("#cadInputNome").value
    let email = document.querySelector("#cadInputEmail").value
    let celular = document.querySelector("#cadInputCelular").value
    let aniversário = document.querySelector("#cadInputAniversario").value
    let statusTrabalho = document.querySelector("#cad-select-status").value
    let senha = document.querySelector("#cadInputSenha").value
    let senhaConfirmacao = document.querySelector("#cadInputSenhaConfirmacao").value
    validaAdicionar(avatar, nome, email, celular, aniversário, statusTrabalho, senha, senhaConfirmacao)
}

function validaAdicionar(avatar, nome, email, celular, aniversário, statusTrabalho, senha, senhaConfirmacao) {
    let perfil = {
        sku: perfils.length,
        avatar,
        nome,
        email,
        celular,
        aniversário,
        statusTrabalho,
        senha,
        senhaConfirmacao
    }
    alert("Dados salvos com sucesso")
    perfils.push(perfil)
    console.log(perfils)
}

function exibirPerfil(x) {
    let oPerfil = document.querySelector("#oPerfil")
    oPerfil.innerHTML += `
   `
}

