var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosDePaciente(form);
    var tabla = document.querySelector("#tabla-pacientes");
    
    // creacion de tds y un tr
    var pacienteTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    // asignar los valores a la propiedad textContent
    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcularIMC(peso, altura);
    
    // asignacion al tr de los td, y a tabla el tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    tabla.appendChild(pacienteTr);
});

function capturarDatosDePaciente(form){
    // captura de los datos del formulario
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
    }
    return paciente;
}