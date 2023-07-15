const users = [];
let indexToEdit = null; // Para compartilhar informacoes entre funcoes

// Função para salvar o usuário
function saveUser() {
  // Obter valores de entrada do usuário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (indexToEdit != null) {
    // Atualizar array com a pessoa que queria editar
    users[indexToEdit].name = name;
    users[indexToEdit].email = email;
    users[indexToEdit].password = password;
    // Atualiza a tela
    displayUsers();
    // Volta pra nulo, porque na proxima execucao vai salvar novamente
    indexToEdit = null;
    return;
  }

  // Criar objeto de usuário
  const user = {
    name: name,
    email: email,
    password: password,
  };

  // Adicionar usuário à lista
  users.push(user);

  // Exibir informações do usuário
  displayUsers();

  // Limpar o formulário
  document.getElementById("addUserForm").reset();
}

// Função para exibir os usuários
function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  // Percorra os usuários e crie itens de lista
  users.forEach(function (user) {
    const userItem = document.createElement("li");
    userItem.innerHTML =
      "<strong>Nome:</strong> " +
      user.name +
      "<br>" +
      "<strong>Email:</strong> " +
      user.email +
      "<br>" +
      "<strong>Senha:</strong> " +
      user.password +
      "<br>" +
      "<button type='button' class='btn btn-primary' onclick='editUser(" +
      users.indexOf(user) +
      ")'>Editar usuário</button> " +
      "<button type='button' class='btn btn-danger' onclick='deleteUser(" +
      users.indexOf(user) +
      ")'>Deletar usuário</button>";
    userList.appendChild(userItem);
  });

  // Mostrar o campo do usuário
  document.getElementById("userField").style.display = "block";
}

// Função para editar o usuário
function editUser(index) {
  const user = users[index];

  // Defina as informações do usuário de volta para o formulário
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("password").value = user.password;

  indexToEdit = index;
}

// Função para excluir um usuário
function deleteUser(index) {
  // Remover o usuário da lista
  users.splice(index, 1);

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
