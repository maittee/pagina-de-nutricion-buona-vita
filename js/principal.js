var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Buena Vida Nutrición";

var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

var esPesoValido = true;
var esAlturaValida = true;

if (peso <= 0 || peso > 700){
    esPesoValido = false;
    tdIMC.textContent = "Peso incorrecto";
} 

if (altura <= 0 || altura > 3.0){
    esAlturaValida = false;
    tdIMC.textContent = "Altura incorrecta";
}

if (esPesoValido && esAlturaValida){
    tdIMC.textContent = calcularIMC(peso, altura);
}

function calcularIMC(peso, altura){
    return peso/(altura * altura);
}
