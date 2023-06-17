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

    //não sei pq meus dados não são limpos
    nome = ''
    status = ''
    ultimoContato = ''

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


let meiosComunicacao = []

function formAdicionarMeioComunicacao() {
    let email = document.querySelector("#cadInputEmail").value
    let celular = document.querySelector("#cadInputCelular").value
    validaAdicionarMeioComunicacao(email, celular)
}

function validaAdicionarMeioComunicacao(email, celular) {
    let meioComunicacao = {
        sku: meiosComunicacao.length,
        email,
        celular
    }
    console.log(meiosComunicacao)
    alert("Meio de comunicação adicionado com sucesso")
    meiosComunicacao.push(meioComunicacao)
    exibirMeioComunicacao()
}

function exibirMeioComunicacao() {
    let listaMeioComunicacao = document.querySelector("#listaMeioComunicacao")
    listaMeioComunicacao.textContent = ""
    console.log(listaMeioComunicacao)

    meiosComunicacao.map(meioComunicacao => {
        listaMeioComunicacao.innerHTML += ` <tr>
        <td>${meioComunicacao.email}</td>
        <td>${meioComunicacao.celular}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditar" onclick="abrirEditorMeioComunicacao(${meioComunicacao.sku})">Editar</a></td>
    </tr>`;
    }
    )
}



function abrirEditorMeioComunicacao(x) {
    let listaMeioComunicacao = document.querySelector("#editarMeioComunicacao")

    listaMeioComunicacao.innerHTML = `
    <!-- Input de celu -->
    <div class="form-group">
        <label for="editInputName">e-mail:</label>
        <input type="text" class="form-control" id="editInputEmail" aria-describedby="nameHelp" value="${meiosComunicacao[x].email}">      
    </div>

    <div class="form-group">
        <label for="editInputName">celular:</label>
        <input type="text" class="form-control" id="editInputCelular" aria-describedby="nameHelp" value="${meiosComunicacao[x].celular}">      
    </div>

    <!-- Botão para realizar Cadastro -->
    <button type="submit" class="btn btn-primary" onclick="editarMeioComunicacao(${x})">Editar meio de comunicação</button>`;
}

function editarMeioComunicacao(x) {
    let email = document.querySelector("#editInputEmail").value
    let celular = document.querySelector("#editInputCelular").value

    meiosComunicacao[x].email = email
    meiosComunicacao[x].celular = celular

    alert("Meios de comunicação alterados com sucesso!")
    exibirMeioComunicacao()
}

// function nomeUsuario(x){
//     console.log(x)
//     let dadosBuscador = contatos.filter((contato) => contato.status === x)
//     console.log(dadosBuscador)

//     let nomeUsuario = document.querySelector("#nomeUsuario")
//     nomeUsuario.innerHTML = `<h1 class="paddingLeft24px"></h1>`;
// }





let historicoViagens = []

function formAdicionarHistoricoViagens() {
    let pacote = document.querySelector("#cad-select-pacote").value
    let statusHistorico = document.querySelector("#cad-select-status").value
    let adultos = document.querySelector("#cadInputAdulto").value
    let criancas = document.querySelector("#cadInputCrianca").value
    let dataViagemIda = document.querySelector("#cadInputDataIda").value
    let dataViagemVolta = document.querySelector("#cadInputDataVolta").value
    validaAdicionarHistoricoViagens(pacote, statusHistorico, adultos, criancas, dataViagemIda, dataViagemVolta)
}

function validaAdicionarHistoricoViagens(pacote, statusHistorico, adultos, criancas, dataViagemIda, dataViagemVolta) {
    let historicoViagem = {
        sku: historicoViagens.length,
        pacote,
        statusHistorico,
        adultos,
        criancas,
        dataViagemIda,
        dataViagemVolta
    }
    alert("Viagem adicionada com sucesso")
    historicoViagens.push(historicoViagem)
    exibirHistoricoViagens()
}

function exibirHistoricoViagens() {
    let listaHistoricoViagem = document.querySelector("#listaHistoricoViagem")
    listaHistoricoViagem.textContent = ""

    historicoViagens.map(historicoViagem => {
        if (historicoViagem.statusHistorico == "novo") {
            listaHistoricoViagem.innerHTML += ` <tr>
        <td id="id${historicoViagem.sku}">${historicoViagem.sku}</td>
        <td>${historicoViagem.pacote}</td>
        <td class="contatoStatusNovo">${historicoViagem.statusHistorico}</td>
        <td>${historicoViagem.adultos}</td>
        <td>${historicoViagem.criancas}</td>
        <td>${historicoViagem.dataViagemIda}</td>
        <td>${historicoViagem.dataViagemVolta}</td>
        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditarViagem" onclick="abrirEditorHistoricoViagens(${historicoViagem.sku})">Editar</a></td>
    </tr>`;
        }

        if (historicoViagem.statusHistorico == "negociacao") {
            listaHistoricoViagem.innerHTML += ` <tr>
    <td id="id${historicoViagem.sku}">${historicoViagem.sku}</td>
    <td>${historicoViagem.pacote}</td>
    <td class="contatoStatusNegociacao">${historicoViagem.statusHistorico}</td>
    <td>${historicoViagem.adultos}</td>
    <td>${historicoViagem.criancas}</td>
    <td>${historicoViagem.dataViagemIda}</td>
    <td>${historicoViagem.dataViagemVolta}</td>
    <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditarViagem" onclick="abrirEditorHistoricoViagens(${historicoViagem.sku})">Editar</a></td>
</tr>`;
        }

        if (historicoViagem.statusHistorico == "conquistado") {
            listaHistoricoViagem.innerHTML += ` <tr>
    <td id="id${historicoViagem.sku}">${historicoViagem.sku}</td>
    <td>${historicoViagem.pacote}</td>
    <td class="contatoStatusConquistado">${historicoViagem.statusHistorico}</td>
    <td>${historicoViagem.adultos}</td>
    <td>${historicoViagem.criancas}</td>
    <td>${historicoViagem.dataViagemIda}</td>
    <td>${historicoViagem.dataViagemVolta}</td>
    <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditarViagem" onclick="abrirEditorHistoricoViagens(${historicoViagem.sku})">Editar</a></td>
</tr>`;
        }

        if (historicoViagem.statusHistorico == "perdido") {
            listaHistoricoViagem.innerHTML += ` <tr>
    <td id="id${historicoViagem.sku}">${historicoViagem.sku}</td>
    <td>${historicoViagem.pacote}</td>
    <td class="contatoStatusPerdido">${historicoViagem.statusHistorico}</td>
    <td>${historicoViagem.adultos}</td>
    <td>${historicoViagem.criancas}</td>
    <td>${historicoViagem.dataViagemIda}</td>
    <td>${historicoViagem.dataViagemVolta}</td>
    <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditarViagem" onclick="abrirEditorHistoricoViagens(${historicoViagem.sku})">Editar</a></td>
</tr>`;
        }

    })
}

function abrirEditorHistoricoViagens(x) {
    let listaHistoricoViagem = document.querySelector("#modalListaHistorico")
    listaHistoricoViagem.innerHTML = `
    <!-- Input de pacote -->

                        <div class="form-group qty-select row">
                            <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">Pacote escolhido</label>
                            <div class="col-sm-8 col-md-9">
                                <select id="edit-select-pacote-viagem" class="form-control prod-options">
                                    <option> ${historicoViagens[x].pacote}                                      
                                    </option>
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

                        <!-- Input de historico -->
                        <div class="form-group qty-select row">
                            <label for="Quantity" class="col-sm-3 col-md-3 form-control-label">status</label>
                            <div class="col-sm-8 col-md-9">
                                <select id="edit-select-status-viagem" class="form-control prod-options">
                                    <option>${historicoViagens[x].statusHistorico}                               
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

                        <!-- Input de adultos -->
                        <div class="form-group">
                            <label for="editInputAdultos">Adultos</label>
                            <input type="number" class="form-control" id="editInputAdultos"
                                value="${historicoViagens[x].adultos}">
                        </div>

                        <!-- Input de criancas -->
                        <div class="form-group">
                            <label for="editInputCriancas">Crianças</label>
                            <input type="number" class="form-control" id="editInputCriancas"
                                value="${historicoViagens[x].criancas}">
                        </div>

                        <!-- Input de Ida -->
                        <div class="form-group">
                            <label for="editInputDataViagemIda">Data Ida</label>
                            <input type="date" class="form-control" id="editInputDataViagemIda"
                                value="${historicoViagens[x].dataViagemIda}">
                        </div>

                        <!-- Input de Volta -->
                        <div class="form-group">
                            <label for="editInputDataViagemVolta">Data Ida</label>
                            <input type="date" class="form-control" id="editInputDataViagemVolta"
                                value="${historicoViagens[x].dataViagemVolta}">
                        </div>

                        <!-- Botão para realizar editar -->
                        <button type="submit" class="btn btn-primary" onclick="editarHistoricoViagens(${x})">Adicionar
                        viagem</button>
                   `;
}

function editarHistoricoViagens(x) {

    let pacote = document.querySelector("#edit-select-pacote-viagem").value
    let statusHistorico = document.querySelector("#edit-select-status-viagem").value
    let adultos = document.querySelector("#editInputAdultos").value
    let criancas = document.querySelector("#editInputCriancas").value
    let dataViagemIda = document.querySelector("#editInputDataViagemIda").value
    let dataViagemVolta = document.querySelector("#editInputDataViagemVolta").value

    historicoViagens[x].pacote = pacote
    historicoViagens[x].statusHistorico = statusHistorico
    historicoViagens[x].adultos = adultos
    historicoViagens[x].criancas = criancas
    historicoViagens[x].dataViagemIda = dataViagemIda
    historicoViagens[x].dataViagemVolta = dataViagemVolta


    alert("Viagem alterada com sucesso!")
    exibirHistoricoViagens()
}

//imagem
const imageInput = document.querySelector("#imageInputPerfil");
var uploadedImage = "";

imageInput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#displayImage").style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
})