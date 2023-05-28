let contatos = []

function formAdicionar(x) {
    console.log(x)
    let resultado = contatos.findIndex((contato) => contato.sku == x)
    if (resultado < 0) {
        let nome = document.querySelector("#cadInputName").value
        let email = document.querySelector("#cadInputEmail").value
        let telefone = document.querySelector("#cadInputTelefone").value
        let status = document.querySelector("#select-status").value
        let historico = document.querySelector("#select-historico").value
        let ultimaAtualizacao = document.querySelector("#cadInputAtualizacao").value
        validaAdicionar(nome, email, telefone, status, historico, ultimaAtualizacao)
    } else {
        alert("pensando")
    }
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
    <button type="submit" class="btn btn-primary" onclick="formAdicionar(${x})">Editar contato</button>`;
}
