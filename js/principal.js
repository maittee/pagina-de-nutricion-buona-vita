var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Buena Vida Nutrición";

var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

function calcularIMC(peso, altura){
    return peso/(altura * altura);
}