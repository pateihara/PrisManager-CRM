const users = [];
let indexToEdit = null; // Para compartilhar informacoes entre funcoes

// Função para salvar o usuário
function saveUser() {
  // Obter valores de entrada do usuário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (indexToEdit != null) {
    // Atualizar array com a pessoa que queria editar
    users[indexToEdit].name = name;
    users[indexToEdit].email = email;
    // Atualiza a tela
    displayUsers();
    // Volta pra nulo, porque na proxima execucao vai salvar novamente
    indexToEdit = null;
    return;
  }

  // Criar objeto de usuário
  const user = {
    sku: users.length,
    name: name,
    email: email,
  };

  // Adicionar usuário à lista
  users.push(user);
  console.log(users)

  alert("usuário dicionado com sucesso!")
  // Exibir informações do usuário
  displayUsers();

  // Limpar o formulário
  document.getElementById("addUserForm").reset();
}

// Função para exibir os usuários
function displayUsers() {
  const userList = document.getElementById("listaUsuarios");
  userList.textContent = ""


  users.map(user => {
    userList.innerHTML +=
      `
    <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><a href="#" data-bs-toggle="modal" data-bs-target="#ModalEditar" onclick="editUser(${user.sku})">Editar</a></td>
        <td><a href="#" onclick="deleteUser(${user.sku})">Excluir</a></td>

    </tr
    `
  })
}

  // Função para editar o usuário
  function editUser(x) {
    let userList = document.querySelector("#editarUsuarios")

    userList.innerHTML = `
    <!-- Input de nome -->
    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input type="text" class="form-control" id="editName" value="${users[x].name}">
    </div>

  <!-- Input de email -->
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="editEmail" value="${users[x].email}">
  </div>


    <!-- Botão para realizar Cadastro -->
    <button type="submit" class="btn btn-primary" onclick="saveEditUser(${x})">Editar</button>`;
}


function saveEditUser(x) {
  let name = document.querySelector("#editName").value
  let email = document.querySelector("#editEmail").value

  users[x].name = name
  users[x].email = email

  alert("Editado com sucesso!")
  displayUsers()
}

  // Função para excluir um usuário
  function deleteUser(index) {
    // Remover o usuário da lista
    users.splice(index, 1);
    alert("Excluído com sucesso!")

    // Atualize a exibição do usuário
    displayUsers();
  }

  // Função para excluir todos os usuários
  function deleteAllUsers() {
    // Limpe a matriz de usuários
    users = [];

    // Ocultar o campo do usuário
    document.getElementById("userField").style.display = "none";
  }

// function getData(url, callback) {
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       callback(data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }
// function displayData(data) {
//   console.log(data);
// }
// getData("https://api.example.com/data", displayData);
