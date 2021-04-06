var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() { //segura a função de fadeOut
        event.target.parentNode.remove(); // "coloca o pai como responsável por escutar o evento"
    }, 500); //define em milisegundos o quanto demora o fadeOut

});
