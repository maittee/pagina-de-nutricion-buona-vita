var pacientes = document.querySelectorAll(".paciente");
var paciente;

for (var i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc"); 
    
    var pesoValido = esPesoValido(peso);
    var alturaValida = esAlturaValida(altura);
    
    if (!pesoValido){
        pesoValido = false;
        tdIMC.textContent = "Peso incorrecto";
        paciente.classList.add("paciente-incorrecto");
    }
    
    if (!alturaValida){
        alturaValida = false;
        tdIMC.textContent = "Altura incorrecta";
        paciente.classList.add("paciente-incorrecto");
    }
    
    if (esPesoValido(peso) && esAlturaValida(altura)){
        tdIMC.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso, altura){
    return (peso/(altura * altura)).toFixed(2);
}

function esPesoValido(peso){
   return peso >= 0 && peso < 700;
}

function esAlturaValida(altura){
  return altura >= 0 && altura < 3.0;
}
