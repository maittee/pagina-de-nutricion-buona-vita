var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosDePaciente(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
});

function capturarDatosDePaciente(form){
    // captura de los datos del formulario
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
    // creacion de tds y un tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    var nombreTd = document.createElement("td");
    nombreTd.classList.add("info-nombre");
    
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");
    
    // asignar los valores a la propiedad textContent
    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    
    // asignacion al tr de los td, y a tabla el tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
}