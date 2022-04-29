var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    
    // este evento es para nuestro objeto de requisicion
    xhr.addEventListener("load", function(){
        var respuesta = xhr.responseText;
        var pacientes = JSON.parse(respuesta);
        
        pacientes.forEach(function(paciente){
            adicionarPaciente(paciente);
        });
    });
    
    xhr.send();
});