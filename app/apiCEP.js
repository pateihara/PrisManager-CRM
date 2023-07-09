const cep = document.querySelector("#cadInputCEP").value;
const url = `https://viacep.com.br/ws/${cep}/json`;

function getCEP() {

    const headers ={
        method: "GET",
        //mode: "cors",
        //cache: "no-cache",
        //credentials:"",
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Aqui você pode usar os dados retornados pela API
            console.log(data);
        })
        .catch(error => {
            // Trate qualquer erro ocorrido durante a requisição
            console.error(error);
        });
}