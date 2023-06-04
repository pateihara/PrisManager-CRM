let contatos = []

function formAdicionar() {
    let nome = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let telefone = document.querySelector("#cadInputTelefone").value
    let status = document.querySelector("#select-status").value
    let historico = document.querySelector("#select-historico").value
    let ultimaAtualizacao = document.querySelector("#cadInputAtualizacao").value
    validaAdicionar(nome, email, telefone, status, historico, ultimaAtualizacao)
}

function validaAdicionar(nome, email, telefone, status, historico, ultimaAtualizacao) {
    let contato = {
        sku: contatos.length,
        nome,
        email,
        telefone,
        status,
        historico,
        ultimaAtualizacao
    }

    //não sei pq meus dados não são limpos
    nome = ''
    email = ''
    telefone = ''
    status = ''
    historico = ''
    ultimaAtualizacao = ''

    alert("Contato adicionado com sucesso")
    contatos.push(contato)
    exibirContato()
}


function exibirContato() {
    let listaContatos = document.querySelector("#listaContatos")
    listaContatos.textContent = ""

    contatos.map(contato => {
        if(contato.status =="novo"){
        listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td>${contato.email}</td>
        <td>${contato.telefone}</td>
        <td class="contatoStatusNovo">${contato.status}</td>
        <td>${contato.historico}</td>
        <td>${contato.ultimaAtualizacao}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditar" onclick="abrirEditorContatos(${contato.sku})">Editar</a></td>
    </tr>`;}
    if(contato.status =="negociacao"){
        listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td>${contato.email}</td>
        <td>${contato.telefone}</td>
        <td class="contatoStatusNegociacao">${contato.status}</td>
        <td>${contato.historico}</td>
        <td>${contato.ultimaAtualizacao}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditar" onclick="abrirEditorContatos(${contato.sku})">Editar</a></td>
    </tr>`;}
    if(contato.status =="conquistado"){
        listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td>${contato.email}</td>
        <td>${contato.telefone}</td>
        <td class="contatoStatusConquistado">${contato.status}</td>
        <td>${contato.historico}</td>
        <td>${contato.ultimaAtualizacao}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditar" onclick="abrirEditorContatos(${contato.sku})">Editar</a></td>
    </tr>`;}
    if(contato.status =="perdido"){
        listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td>${contato.email}</td>
        <td>${contato.telefone}</td>
        <td class="contatoStatusPerdido">${contato.status}</td>
        <td>${contato.historico}</td>
        <td>${contato.ultimaAtualizacao}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditar" onclick="abrirEditorContatos(${contato.sku})">Editar</a></td>
    </tr>`;}
    })
   
}


function abrirEditorContatos(x) {
    let listaContatos = document.querySelector("#editarContato")

    
    listaContatos.innerHTML = `
    <!-- Input de Name -->
    <div class="form-group">
        <label for="editInputName">Nome:</label>
        <input type="text" class="form-control" id="editInputName" aria-describedby="nameHelp" value="${contatos[x].nome}">
        
    </div>

    <!-- Input de Email -->
    <div class="form-group">
        <label for="editInputEmail">E-mail</label>
        <input type="email" class="form-control" id="editarEmail" aria-describedby="emailHelp"
        value="${contatos[x].email}">
    </div>

    <!-- Input de Telefone -->
    <div class="form-group">
        <label for="editInputTelefone">Telefone</label>
        <input type="tel" class="form-control" id="editInputTelefone"
        value="${contatos[x].telefone}">
    </div>

    <!-- Input de Status -->
    <div class="form-group qty-select row">
        <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">Status da negociação:</label>
        <div class="col-sm-8 col-md-9">
            <select id="edit-select-status" class="form-control prod-options" value="${contatos[x].status}">
                <option value="novo">
                    Novo
                </option>
                <option value="negociacao">
                    Negociação
                </option>
                <option value="conquistado">
                    Conquistado
                </option>
                <option value="perdido">
                    Perdido
                </option>
            </select>
        </div>
    </div>

    <!-- Input de histórico -->
    <div class="form-group qty-select row">
        <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">Pacote:</label>
        <div class="col-sm-8 col-md-9">
            <select id="edit-select-historico" class="form-control prod-options" value="${contatos[x].historico}">
                <option value="Pacote1">
                    Pacote 1
                </option>
                <option value="Pacote2">
                    Pacote 2
                </option>
                <option value="Pacote3">
                    Pacote 3
                </option>
                <option value="Pacote4">
                    Pacote 4
                </option>
            </select>
        </div>
    </div>

    <!-- Input de última atualização -->
    <div class="form-group">
        <label for="editInputAtualizacao">última atualização</label>
        <input type="date" class="form-control" id="editInputAtualizacao"
        value="${contatos[x].ultimaAtualizacao}">
    </div>

    <!-- Botão para realizar Cadastro -->
    <button type="submit" class="btn btn-primary" onclick="editarContato(${x})">Editar contato</button>`;
}


function editarContato(x){
    let nome = document.querySelector("#editInputName").value
    let email = document.querySelector("#editarEmail").value
    let telefone = document.querySelector("#editInputTelefone").value
    let status = document.querySelector("#edit-select-status").value
    let historico = document.querySelector("#edit-select-historico").value
    let ultimaAtualizacao = document.querySelector("#editInputAtualizacao").value

    contatos[x].nome = nome
    contatos[x].email = email
    contatos[x].telefone = telefone
    contatos[x].status = status
    contatos[x].historico = historico
    contatos[x].ultimaAtualizacao = ultimaAtualizacao

    exibirContato()
}

function buscarHistorico(){
    let listaContatos = document.querySelector("#listaContatos")
    listaContatos.textContent = ""
    
    let dados = document.getElementById('buscador').value

    // let encontrarNaTabela = contatos.find(contato =>
    //     contato.sku === dados ||
    //     contato.nome === dados ||
    //     contato.email === dados ||
    //     contato.telefone === dados||
    //     contato.status === dados||
    //     contato.historico === dados||
    //     contato.ultimaAtualizacao === dados)

    // console.log(encontrarNaTabela)

    let dadosBuscador = contatos.filter((contato) => contato.status === dados)

    dadosBuscador.map(contato => {
        listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td>${contato.email}</td>
        <td>${contato.telefone}</td>
        <td>${contato.status}</td>
        <td>${contato.historico}</td>
        <td>${contato.ultimaAtualizacao}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditar" onclick="abrirEditorContatos(${contato.sku})">Editar</a></td>
    </tr>`;
    })

    if (dadosBuscador == ""){
        exibirContato()
    }
}

function coresStatus(){

}