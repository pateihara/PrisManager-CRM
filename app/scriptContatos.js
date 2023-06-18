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

let pacotesAtivos = []

function formAdicionarPacote() {
    let nomePacote = document.querySelector("#cadInputNomePacote").value
    let paisPacote = document.querySelector("#cadInputPaisPacote").value
    let ufPacote = document.querySelector("#cadInputUFPacote").value
    let cidadePacote = document.querySelector("#cadInputCidadaPacote").value
    let passeiosPacote = document.querySelector("#cadInputPasseiosPacote").value
    let aviaoPacote = document.querySelector('input[name="cadRadioAviaoPacote"]:checked').value
    let aviaoPrecoPacote = document.querySelector("#cadInputPrecoAviaoPacote").value
    let beneficiosPacote = document.querySelector("#cadInputBeneficiosPacote").value
    let valorFinalPacote = document.querySelector("#cadInputValorFinalPacote").value
    validaAdicionarPacote(nomePacote, paisPacote, ufPacote, cidadePacote, passeiosPacote, aviaoPacote, aviaoPrecoPacote, beneficiosPacote, valorFinalPacote)
}

function validaAdicionarPacote(nomePacote, paisPacote, ufPacote, cidadePacote, passeiosPacote, aviaoPacote, aviaoPrecoPacote, beneficiosPacote, valorFinalPacote) {
    let pacoteAtivo = {
        sku: pacotesAtivos.length,
        nomePacote,
        paisPacote,
        ufPacote,
        cidadePacote,
        passeiosPacote,
        aviaoPacote,
        aviaoPrecoPacote,
        beneficiosPacote,
        valorFinalPacote
    }
    console.log(pacotesAtivos)
    alert("Pacote Adicionado com sucesso")
    pacotesAtivos.push(pacoteAtivo)
    exibirPacoteAtivo()
}


function exibirPacoteAtivo() {
    let listaPacotesAtivos = document.querySelector("#listaPacotesAtivos")
    listaPacotesAtivos.textContent = ""

    pacotesAtivos.map(pacoteAtivo => {
        listaPacotesAtivos.innerHTML += ` <tr>
        <td id="id${pacoteAtivo.sku}">${pacoteAtivo.sku}</td>
        <td>${pacoteAtivo.nomePacote}</td>
        <td>${pacoteAtivo.paisPacote}</td>
        <td>${pacoteAtivo.ufPacote}</td>
        <td>${pacoteAtivo.cidadePacote}</td>
        <td>${pacoteAtivo.passeiosPacote}</td>
        <td>${pacoteAtivo.aviaoPacote}</td>
        <td>${pacoteAtivo.aviaoPrecoPacote}</td>
        <td>${pacoteAtivo.beneficiosPacote}</td>
        <td>${pacoteAtivo.valorFinalPacote}</td>


        <td><a href="#" title="Editar" data-toggle="modal" data-target="#ModalEditarPacoteAtivo" onclick="abrirEditorPacoteAtivo(${pacoteAtivo.sku})">Editar</a></td>
    </tr>`;
    })

}


function abrirEditorPacoteAtivo(x) {
    let listaPacotesAtivos = document.querySelector("#EditarPacoteAtivo")
    listaPacotesAtivos.innerHTML = `
    <!-- Formulario para adicionar pacote ativo -->
    <div>
        <!-- Input de pacote -->
        <div class="form-group">
            <label for="editInputNomePacote">nome do pacote</label>
            <input type="text" class="form-control" id="editInputNomePacote" aria-describedby="nameHelp"
            value="${pacotesAtivos[x].nomePacote}">
        </div>

        <!-- Input de pais -->
        <div class="form-group">
            <label for="editInputPaisPacote">pais</label>
            <input type="text" class="form-control" id="editInputPaisPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].paisPacote}">
        </div>

        <!-- Input de UF -->
        <div class="form-group">
            <label for="editInputUFPacote">UF</label>
            <input type="text" class="form-control" id="editInputUFPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].ufPacote}">
        </div>

        <!-- Input de cidade -->
        <div class="form-group">
            <label for="editInputCidadaPacote">cidade</label>
            <input type="text" class="form-control" id="editInputCidadaPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].cidadePacote}">
        </div>

        <!-- Input de passeios -->
        <div class="form-group">
            <label for="editInputPasseiosPacote">passeios</label>
            <input type="text" class="form-control" id="editInputPasseiosPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].passeiosPacote}">
        </div>

        <!-- Input de avião -->
        <div class="form-group">
            <label for="editInputAviaoRadio" value="${pacotesAtivos[x].radioeditAviao}">tem avião?</label>
                <input type="radio" id="editRadioSimAviaoPacote" name="editRadioAviaoPacote"
                    value="sim" >
                <label for="sim">Sim</label>
                <input type="radio" id="editRadioNaoAviaoPacote" name="editRadioAviaoPacote"
                    value="nao">
                <label for="nao">Não</label>
        </div>

        <!-- Input de R$ avião -->
        <div class="form-group">
            <label for="editInputPrecoAviaoPacote">qual o custo individual do avião?</label>
            <input type="text" class="form-control" id="editInputPrecoAviaoPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].aviaoPrecoPacote}">
        </div>

        <!-- Input de beneficios -->
        <div class="form-group">
            <label for="editInputBeneficiosPacote">quais os benefícios para o cliente?</label>
            <input type="text" class="form-control" id="editInputBeneficiosPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].beneficiosPacote}">
        </div>

        <!-- Input de valor final -->
        <div class="form-group">
            <label for="editInputValorFinalPacote">Digite o valor final</label>
            <input type="text" class="form-control" id="editInputValorFinalPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].valorFinalPacote}">
        </div>


        <!-- Botão para realizar Cadastro -->
        <button type="submit" class="btn btn-primary" onclick="editarPacoteAtivo(${x})">Editar pacotes ativos</button>
    </div>
    `;
}


function editarPacoteAtivo(x) {
    let nomePacote = document.querySelector("#editInputNomePacote").value
    let paisPacote = document.querySelector("#editInputPaisPacote").value
    let ufPacote = document.querySelector("#editInputUFPacote").value
    let cidadePacote = document.querySelector("#editInputCidadaPacote").value
    let passeiosPacote = document.querySelector("#editInputPasseiosPacote").value
    let aviaoPacote = document.querySelector('input[name="editRadioAviaoPacote"]:checked').value
    let aviaoPrecoPacote = document.querySelector("#editInputPrecoAviaoPacote").value
    let beneficiosPacote = document.querySelector("#editInputBeneficiosPacote").value
    let valorFinalPacote = document.querySelector("#editInputValorFinalPacote").value

    pacotesAtivos[x].nomePacote = nomePacote
    pacotesAtivos[x].paisPacote = paisPacote
    pacotesAtivos[x].ufPacote = ufPacote
    pacotesAtivos[x].cidadePacote = cidadePacote
    pacotesAtivos[x].passeiosPacote = passeiosPacote
    pacotesAtivos[x].aviaoPacote = aviaoPacote
    pacotesAtivos[x].aviaoPrecoPacote = aviaoPrecoPacote
    pacotesAtivos[x].beneficiosPacote = beneficiosPacote
    pacotesAtivos[x].valorFinalPacote = valorFinalPacote

    alert("Pacote editado com sucesso")
    exibirPacoteAtivo()
}


// let pacotesEncerrados = []

// function formAdicionarPacoteEncerrado() {
//     let nomePacote = document.querySelector("#cadInputNomePacoteEncerrado").value
//     let paisPacote = document.querySelector("#cadInputPaisPacoteEncerrado").value
//     let ufPacote = document.querySelector("#cadInputUFPacoteEncerrado").value
//     let cidadePacote = document.querySelector("#cadInputCidadaPacoteEncerrado").value
//     let passeiosPacote = document.querySelector("#cadInputPasseiosPacoteEncerrado").value
//     let aviaoPacote = document.querySelector('input[name="cadRadioAviaoPacoteEncerrado"]:checked').value
//     let aviaoPrecoPacote = document.querySelector("#cadInputPrecoAviaoPacoteEncerrado").value
//     let beneficiosPacote = document.querySelector("#cadInputBeneficiosPacoteEncerrado").value
//     let valorFinalPacote = document.querySelector("#cadInputValorFinalPacoteEncerrado").value
//     let npsPacote = document.querySelector("#cadInputNpsPacote").value

//     validaAdicionarPacote(nomePacote, paisPacote, ufPacote, cidadePacote, passeiosPacote, aviaoPacote, aviaoPrecoPacote, beneficiosPacote, valorFinalPacote,npsPacote)
// }

// function validaAdicionarPacote(nomePacote, paisPacote, ufPacote, cidadePacote, passeiosPacote, aviaoPacote, aviaoPrecoPacote, beneficiosPacote, valorFinalPacote, npsPacote) {
//     let pacoteEncerrado = {
//         sku: pacotesEncerrados.length,
//         nomePacote,
//         paisPacote,
//         ufPacote,
//         cidadePacote,
//         passeiosPacote,
//         aviaoPacote,
//         aviaoPrecoPacote,
//         beneficiosPacote,
//         valorFinalPacote,
//         npsPacote,
//     }
//     pacotesEncerrados.push(pacoteEncerrado)
//     exibirPacoteEncerrado()
// }


// function exibirPacoteEncerrado() {
//     let listaPacotesEncerrados = document.querySelector("#listaPacotesEncerrados")
//     listaPacotesEncerrados.textContent = ""

//     pacotesEncerrados.map(pacoteEncerrado => {
//         listaPacotesEncerrados.innerHTML += ` <tr>
//         <td id="id${pacotesEncerrados.sku}">${pacotesEncerrados.sku}</td>
//         <td>${pacotesEncerrados.nomePacote}</td>
//         <td>${pacotesEncerrados.paisPacote}</td>
//         <td>${pacotesEncerrados.ufPacote}</td>
//         <td>${pacotesEncerrados.cidadePacote}</td>
//         <td>${pacotesEncerrados.passeiosPacote}</td>
//         <td>${pacotesEncerrados.aviaoPacote}</td>
//         <td>${pacotesEncerrados.aviaoPrecoPacote}</td>
//         <td>${pacotesEncerrados.beneficiosPacote}</td>
//         <td>${pacotesEncerrados.valorFinalPacote}</td>
//         <td>${pacotesEncerrados.npsPacote}</td>
//     </tr>`;
//     });
// }

