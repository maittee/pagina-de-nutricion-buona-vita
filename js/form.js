var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosDePaciente(form);
    var pacienteTr = construirTr(paciente);
    
    var error = !esPacienteValido(paciente);
    var errores = validarPaciente(paciente);
    if (error && errores.length > 0){
        exhibirMensajesDeErrores(errores);
        return;
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();
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
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    
    return td;
}

function esPacienteValido(paciente){
    return esPesoValido(paciente.peso) && esAlturaValida(paciente.altura);
}

function validarPaciente(paciente){
    var errores = [];
    if (!esPesoValido(paciente.peso)){
        errores.push("El peso es incorrecto");
    } 
    if (!esAlturaValida(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesDeErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}   
