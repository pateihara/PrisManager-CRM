document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputNome = document.getElementById("inputNome").value;
    const inputEmail = document.getElementById("inputEmail").value;

    if (!validateEmail(inputEmail)) {
      document.getElementById("emailError").classList.remove("d-none");
    } else {
      document.getElementById("emailError").classList.add("d-none");
      alert("Sua solicitação foi enviada com sucesso!");
    }
  });

function validateEmail(email) {
  // Expressão regular para validar email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
