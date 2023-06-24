
var users = [];

// Função para salvar o usuário
function saveUser() {
  // Obter valores de entrada do usuário
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Criar objeto de usuário
  var user = {
    name: name,
    email: email,
    password: password
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
  var userList = document.getElementById("userList");
  userList.innerHTML = "";

  // Percorra os usuários e crie itens de lista
  users.forEach(function(user) {
    var userItem = document.createElement("li");
    userItem.innerHTML = "<strong>Nome:</strong> " + user.name + "<br>" +
      "<strong>Email:</strong> " + user.email + "<br>" +
      "<strong>Senha:</strong> " + user.password + "<br>" +
      "<button type='button' class='btn btn-primary' onclick='editUser(" + users.indexOf(user) + ")'>Editar usuário</button> " +
      "<button type='button' class='btn btn-danger' onclick='deleteUser(" + users.indexOf(user) + ")'>Deletar usuário</button>";
    userList.appendChild(userItem);
  });

  // Mostrar o campo do usuário
  document.getElementById("userField").style.display = "block";
}

// Função para editar o usuário
function editUser(index) {
  var user = users[index];

  // Defina as informações do usuário de volta para o formulário
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("password").value = user.password;
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