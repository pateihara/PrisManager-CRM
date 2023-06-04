let usuarios = []

function formCadastro() {

  let email = document.querySelector("#cadInputEmail").value
  let name = document.querySelector("#cadInputName").value
  let password = document.querySelector("#cadInputPassword").value

  let resultado = usuarios.find(usuario => usuario.email.password.name)

  let user = {
      name,
      email,
      password
  }

  usuarios.push(user)
  console.log(usuarios);
  alert(`Cadastrado com Sucesso!`)
}

function entrar() {

  let email = document.querySelector("#loginInputEmail").value
  let password = document.querySelector("#loginInputPassword").value

  let resultado = usuarios.find(usuario => usuario.email === email)

  if (resultado === undefined) {
      alert("Email não cadastrado no nosso sistema")
      return
  }

  if (resultado.password != password) {
      alert("Email ou senha não conferem no sistema!")
      return
  }

  alert(`Seja Bem Vindo ${resultado.name}`)
}

//

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    })

  })

})

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  })
})