window.onload = iniciar;
var formulario;

function iniciar(){
    formulario = document.getElementsByTagName('form')[0];
    formulario.addEventListener('submit', enviar);
}

function enviar(event){
    cadastrar();
    event.preventDefault();
}

function cadastrar(){
    let txtProcessador = document.querySelector("#txtProcessador");
    let txtUSB = document.querySelector("#txtUSB");
    let chkAtualizado = document.querySelector("#chkAtualizado");
    let txtDataAtualizacao = document.querySelector("#txtDataAtualizacao");

    form.addEventListener("submit" , function(event){
        event.preventDefault();

        let dados = {
            txtProcessador: txtProcessador.value,
            txtUSB: txtUSB.value,
            chkAtualizado: chkAtualizado.value,
            txtDataAtualizacao: txtDataAtualizacao.value,

        }

        fetch("http://3tdsn2022.atwebpages.com/cadastrarComputador.php", {
         method: POST,
         body: JSON.stringify(dados),
         
        })
         .then(function(responde) {
            alert("Cadastrado(a) com Sucesso!")
        })
    }
}
