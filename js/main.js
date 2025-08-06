//OBJETOS ---> OBRAS SOCIALES

const osde = {
    nombre: "OSDE",
    diasValidezRecetario: "30",
    tipoRecetario: "Cualquiera",
    membreteRecetario: "Si",
    generico: "No",
    diagnostico: "No",
    validacion: "Por sistema",
};

const swissMedical = {
    ...osde,
    nombre: "SWISS MEDICAL",
    validacion: "Por sistema o IMED",
};

const galeno = {
    ...osde,
    nombre: "GALENO",
    validacion: "Por sistema o IMED",
};

const pami = {
    nombre: "PAMI",
    tipoRecetario: "Oficial/Electrónico",
    generico: "Si",
    diagnostico: "Si",
    validacion: "Por sistema o IMED", 
};


//ARRAY DE OBRAS SOCIALES
const obrasSociales = [osde, swissMedical, galeno, pami];

//FUNCIONES
//Saludo de bienvenida
function bienvenida(nombre) {
    alert("Hola "+ nombre + ", Bienvenido/a!")
    console.log("Saludo de bienvenida");
};

//Muestro requisitos de la obra social
function mostrarRequisitosObraSocial(nombreObraSocial) {
    console.log("------------REQUISITOS-------------");
    console.log("Nombre: " + nombreObraSocial.nombre);
    console.log("Días de validez: " + nombreObraSocial.diasValidezRecetario);
    console.log("Tipo de recetario: " + nombreObraSocial.tipoRecetario);
    console.log("Membrete: " + nombreObraSocial.membreteRecetario);
    console.log("Generico: " + nombreObraSocial.generico);
    console.log("Diagnostico: " + nombreObraSocial.diagnostico);
    console.log("¿Se valida?: " + nombreObraSocial.validacion);
}

//Busco obra social y muestro si existe o no
function buscarObraSocial(obraSocial) {
    let nombreObraSocial = "";
    let obraEncontrada = false; //Inicio en false 
    for (let i=0; i<obrasSociales.length; i++){ 
        if (obraSocial.toUpperCase() === obrasSociales[i].nombre.toUpperCase() || obraEncontrada){  //Comparo os ingresada con existente en array 
            obraEncontrada = true; 
            nombreObraSocial = obrasSociales[i];                                              //bandera cambia su valor a true
            break;                                                                            //salgo del ciclo
        }
    }

    if (obraEncontrada === true){
        console.log("Obra social existente en el array");
        alert(nombreObraSocial.nombre + " está en la lista, a continuación te muestro los requisitos para su atención en la consola: "); 
        mostrarRequisitosObraSocial(nombreObraSocial);
    }
    else {
        console.log("Obra social no existe");
    }
    
}

let nombre = prompt("¿Cuál es tu nombre?");
bienvenida(nombre);

let busqueda = prompt("Ingrese la obra social a buscar: ");
buscarObraSocial(busqueda);
