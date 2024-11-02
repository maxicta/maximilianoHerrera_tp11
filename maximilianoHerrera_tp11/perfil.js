const prompt = require('prompt-sync')();

let perfil = prompt("Ingrese su perfil: ").toLowerCase();

switch (perfil) {
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");      
        
        break;
    case "asistente":
        console.log("Usted tiene permisos de registrar, modificar y consultar datos");      
        
        break;
    case "invitado":
        console.log("Usted solo tiene permisos para consultar datos");      
        
        break;

    default:
        console.log("Debe especificar un perfil valido");
        
}

