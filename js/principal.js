var titulo = document.querySelector(".titulo-principal");
titulo.textContent = "Buena Vida Nutrición";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc"); 
    
    if (esPesoValido(peso) && esAlturaValida(altura)){
        tdIMC.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso, altura){
    return (peso/(altura * altura)).toFixed(2);
}

function esPesoValido(peso){
    var esPesoValido = true;
    if (peso <= 0 || peso > 700){
        esPesoValido = false;
        tdIMC.textContent = "Peso incorrecto";
    }
    return esPesoValido;
}

function esAlturaValida(altura){
    var esAlturaValida = true;
    if (altura <= 0 || altura > 3.0){
        esAlturaValida = false;
        tdIMC.textContent = "Altura incorrecta";
    }
    return esAlturaValida;
}
