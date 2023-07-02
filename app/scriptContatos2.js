let contatos = []

function formAdicionar() {
    let nome = document.querySelector("#cadInputName").value
    let status = document.querySelector("#select-status").value
    let ultimoContato = document.querySelector("#cadInputUltimoContato").value
   validaAdicionar(nome, status, ultimoContato)
}

function validaAdicionar(nome, status, ultimoContato) {
    let contato = {
        sku: contatos.length,
        nome,
        status,
        ultimoContato
    }
    alert("Contato adicionado com sucesso")
    contatos.push(contato)
    exibirContato()
}


function exibirContato() {

    let listaContatos = document.querySelector("#listaContatos")
    listaContatos.textContent = ""

    contatos.map(contato => {
        if (contato.status == "novo") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusNovo">${contato.status}</td>
        <td>${contato.ultimoContato}</td>        
        <td><a href="paginaCliente.html" onclick="nomeUsuario(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
        if (contato.status == "negociacao") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusNegociacao">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
        if (contato.status == "conquistado") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusConquistado">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
        if (contato.status == "perdido") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusPerdido">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
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

    <!-- Input de Status -->
    <div class="form-group qty-select row">
        <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">Status da negociação:</label>
        <div class="col-sm-8 col-md-9">
            <select id="edit-select-status" class="form-control prod-options">
                <option class="optionSelected">
                    ${contatos[x].status}
                </option>
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


    <!-- Input de último contato -->
    <div class="form-group">
        <label for="editInputAtualizacao">último Contato</label>
        <input type="date" class="form-control" id="editInputUltimoContato"
        value="${contatos[x].ultimoContato}">
    </div>

    <!-- Botão para realizar Cadastro -->
    <button type="submit" class="btn btn-primary" onclick="editarContato(${x})">Editar contato</button>`;
}


function editarContato(x) {
    let nome = document.querySelector("#editInputName").value
    let status = document.querySelector("#edit-select-status").value
    let ultimoContato = document.querySelector("#editInputUltimoContato").value

    contatos[x].nome = nome
    contatos[x].status = status
    contatos[x].ultimoContato = ultimoContato

    exibirContato()
}

function buscarHistorico() {
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
        if (contato.status == "novo") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusNovo">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
        if (contato.status == "negociacao") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusNegociacao">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
        if (contato.status == "conquistado") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusConquistado">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
        if (contato.status == "perdido") {
            listaContatos.innerHTML += ` <tr>
        <td id="id${contato.sku}">${contato.sku}</td>
        <td>${contato.nome}</td>
        <td class="contatoStatusPerdido">${contato.status}</td>
        <td>${contato.ultimoContato}</td>
        <td><a href="paginaCliente.html" onclick="abrirEditorContatos(${contato.sku})">Atualizar</a></td>
    </tr>`;
        }
    })

    if (dadosBuscador == "") {
        exibirContato()
    }
}