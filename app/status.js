let cores = []

function formAdicionarCor() {
    let nomeStatus = document.querySelector("#cadInputNomeStatus").value
    let color = document.querySelector("#cadInputCorStatus").value
    validaAdicionarCor(nomeStatus,color)
}

function validaAdicionarCor(nomeStatus,color) {
    let cor = {
        sku: cores.length,
        nomeStatus,
        color
    }

    alert("Status adicionado com sucesso")
    cores.push(cor)
    exibirTabelaCores()
}

function exibirTabelaCores() {
    let listaStatusCores = document.querySelector("#listaStatusCores")
    listaStatusCores.textContent = ""

    cores.map(cor => {
        listaStatusCores.innerHTML += ` <tr>
        <td>${cor.nomeStatus}</td>
        <td>${cor.color}</td>
        <td>
        <a href="#" data-bs-toggle="modal" data-bs-target="#ModalEditar" onclick="abrirEditorCorStatus(${cor.sku})">Editar</a>
        </td>
        </tr>`;
    })

}

function abrirEditorCorStatus(x) {
    let listaStatusCores = document.querySelector("#editarCorStatus")
    listaStatusCores.innerHTML = `
    <!-- Input de nome status -->
    <div class="form-group">
        <label for="editInputName">nome do status:</label>
        <input type="text" class="form-control" id="editInputNomeStatus" aria-describedby="nameHelp" value="${cores[x].nomeStatus}">
        
    </div>

    <!-- Input de cor -->
    <div class="form-group">
        <label for="editInputName">cor</label>
        <input type="color" class="form-control" id="editInputCorStatus" aria-describedby="nameHelp" value="${cores[x].color}">
        
    </div>


    <!-- Botão para realizar Cadastro -->
    <button type="submit" class="btn btn-primary" onclick="editarCorStatus(${x})">Editar</button>`;
}


function editarCorStatus(x) {
    let nomeStatus = document.querySelector("#editInputNomeStatus").value
    let color = document.querySelector("#editInputCorStatus").value

    cores[x].nomeStatus = nomeStatus
    cores[x].color = color

    alert("Editado com sucesso!")
    exibirTabelaCores()
}

