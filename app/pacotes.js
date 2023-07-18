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
        <td>
        <a href="#" data-bs-toggle="modal" data-bs-target="#ModalEditarPacoteAtivo" onclick="abrirEditorPacoteAtivo(${pacoteAtivo.sku})">Editar</a>
        </td>
    </tr>`;
    })

}


function abrirEditorPacoteAtivo(x) {
    let listaPacotesAtivos = document.querySelector("#EditarPacoteAtivo")
    
    if(pacotesAtivos[x].aviaoPacote == "sim")
    {
    listaPacotesAtivos.innerHTML = `
    <!-- Formulario para adicionar pacote ativo -->
    <div>
        <!-- Input de pacote -->
        <div class="form-group mb-3">
            <label for="editInputNomePacote" class="form-label">nome do pacote</label>
            <input type="text" class="form-control" id="editInputNomePacote" aria-describedby="nameHelp"
            value="${pacotesAtivos[x].nomePacote}">
        </div>

        <!-- Input de pais -->
        <div class="form-group mb-3">
            <label for="editInputPaisPacote" class="form-label">pais</label>
            <input type="text" class="form-control" id="editInputPaisPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].paisPacote}">
        </div>

        <!-- Input de UF -->
        <div class="form-group mb-3">
            <label for="editInputUFPacote" class="form-label">UF</label>
            <input type="text" class="form-control" id="editInputUFPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].ufPacote}">
        </div>

        <!-- Input de cidade -->
        <div class="form-group mb-3">
            <label for="editInputCidadaPacote" class="form-label">cidade</label>
            <input type="text" class="form-control" id="editInputCidadaPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].cidadePacote}">
        </div>

        <!-- Input de passeios -->
        <div class="form-group mb-3">
            <label for="editInputPasseiosPacote" class="form-label">passeios</label>
            <input type="text" class="form-control" id="editInputPasseiosPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].passeiosPacote}">
        </div>

        <!-- Input de avião -->
        <div class="form-group mb-3">
            <label for="editInputAviaoRadio" class="form-label">tem avião?</label>
                <input type="radio" id="editRadioSimAviaoPacote" name="editRadioAviaoPacote"
                    value="sim" checked="checked">
                <label for="sim">Sim</label>
                <input type="radio" id="editRadioNaoAviaoPacote" name="editRadioAviaoPacote"
                    value="nao">
                <label for="nao">Não</label>
        </div>

        <!-- Input de R$ avião -->
        <div class="form-group mb-3">
            <label for="editInputPrecoAviaoPacote" class="form-label">qual o custo individual do avião?</label>
            <input type="text" class="form-control" id="editInputPrecoAviaoPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].aviaoPrecoPacote}">
        </div>

        <!-- Input de beneficios -->
        <div class="form-group mb-3">
            <label for="editInputBeneficiosPacote" class="form-label">quais os benefícios para o cliente?</label>
            <input type="text" class="form-control" id="editInputBeneficiosPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].beneficiosPacote}">
        </div>

        <!-- Input de valor final -->
        <div class="form-group mb-3">
            <label for="editInputValorFinalPacote" class="form-label">Digite o valor final</label>
            <input type="text" class="form-control" id="editInputValorFinalPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].valorFinalPacote}">
        </div>


        <!-- Botão para realizar Cadastro -->
        <button type="submit" class="btn btn-primary" onclick="editarPacoteAtivo(${x})">Editar pacotes ativos</button>
    </div>
    `;}
    if(pacotesAtivos[x].aviaoPacote == "nao")
    {
    listaPacotesAtivos.innerHTML = `
    <!-- Formulario para adicionar pacote ativo -->
    <div>
        <!-- Input de pacote -->
        <div class="form-group mb-3">
            <label for="editInputNomePacote" class="form-label">nome do pacote</label>
            <input type="text" class="form-control" id="editInputNomePacote" aria-describedby="nameHelp"
            value="${pacotesAtivos[x].nomePacote}">
        </div>

        <!-- Input de pais -->
        <div class="form-group mb-3">
            <label for="editInputPaisPacote" class="form-label">pais</label>
            <input type="text" class="form-control" id="editInputPaisPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].paisPacote}">
        </div>

        <!-- Input de UF -->
        <div class="form-group mb-3">
            <label for="editInputUFPacote" class="form-label">UF</label>
            <input type="text" class="form-control" id="editInputUFPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].ufPacote}">
        </div>

        <!-- Input de cidade -->
        <div class="form-group mb-3">
            <label for="editInputCidadaPacote" class="form-label">cidade</label>
            <input type="text" class="form-control" id="editInputCidadaPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].cidadePacote}">
        </div>

        <!-- Input de passeios -->
        <div class="form-group mb-3">
            <label for="editInputPasseiosPacote" class="form-label">passeios</label>
            <input type="text" class="form-control" id="editInputPasseiosPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].passeiosPacote}">
        </div>

        <!-- Input de avião -->
        <div class="form-group mb-3">
            <label for="editInputAviaoRadio" class="form-label">tem avião?</label>
                <input type="radio" id="editRadioSimAviaoPacote" name="editRadioAviaoPacote"
                    value="sim">
                <label for="sim">Sim</label>
                <input type="radio" id="editRadioNaoAviaoPacote" name="editRadioAviaoPacote"
                    value="nao" checked="checked">
                <label for="nao">Não</label>
        </div>

        <!-- Input de R$ avião -->
        <div class="form-group mb-3">
            <label for="editInputPrecoAviaoPacote" class="form-label">qual o custo individual do avião?</label>
            <input type="text" class="form-control" id="editInputPrecoAviaoPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].aviaoPrecoPacote}">
        </div>

        <!-- Input de beneficios -->
        <div class="form-group mb-3">
            <label for="editInputBeneficiosPacote" class="form-label">quais os benefícios para o cliente?</label>
            <input type="text" class="form-control" id="editInputBeneficiosPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].beneficiosPacote}">
        </div>

        <!-- Input de valor final -->
        <div class="form-group mb-3">
            <label for="editInputValorFinalPacote" class="form-label">Digite o valor final</label>
            <input type="text" class="form-control" id="editInputValorFinalPacote"
                aria-describedby="nameHelp" value="${pacotesAtivos[x].valorFinalPacote}">
        </div>


        <!-- Botão para realizar Cadastro -->
        <button type="submit" class="btn btn-primary" onclick="editarPacoteAtivo(${x})">Editar pacotes ativos</button>
    </div>
    `;}
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