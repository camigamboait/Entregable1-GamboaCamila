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
    while (!nombre) {
    nombre = prompt("Por favor ingrese su nombre");
    }
    alert("Hola "+ nombre + ", Bienvenido/a!")
    console.log("Saludo de bienvenida" + "\n" + "---------------------------");
};

//Muestro requisitos de la obra social
function mostrarRequisitosObraSocial(nombreObraSocial) {
    console.log("------------REQUISITOS-------------");
    if (nombreObraSocial.nombre !== undefined){
        console.log("Nombre: " + nombreObraSocial.nombre);
    }
    if (nombreObraSocial.diasValidezRecetario !== undefined){
        console.log("Días de validez: " + nombreObraSocial.diasValidezRecetario);
    }
    if (nombreObraSocial.tipoRecetario !== undefined){
        console.log("Tipo de recetario: " + nombreObraSocial.tipoRecetario);
    } 
    if (nombreObraSocial.membreteRecetario !== undefined){
        console.log("Membrete: " + nombreObraSocial.membreteRecetario);
    }
    if (nombreObraSocial.generico !== undefined){
        console.log("Generico: " + nombreObraSocial.generico);
    }
    if (nombreObraSocial.diagnostico !== undefined){
        console.log("Diagnostico: " + nombreObraSocial.diagnostico);
    }
    if (nombreObraSocial.validacion !== undefined){
        console.log("¿Se valida?: " + nombreObraSocial.validacion);
    }
}

//Funcion agregar obra social
function agregarObraSocial() {
    let nombre = prompt("Ingrese el nombre de la obra social: ");
    let diasValidezRecetario = prompt("Ingrese días de validez del recetario: ");
    let tipoRecetario = prompt("Ingrese el tipo de recetario: ");
    let membreteRecetario = prompt("¿Requiere membrete? (Si/No): ");
    let generico = prompt("¿Requiere genérico? (Si/No): ");
    let diagnostico = prompt("¿Requiere diagnóstico? (Si/No): ");
    let validacion = prompt("¿Cómo se valida? ");

    let nuevaObraSocial = {
        nombre: nombre,
        diasValidezRecetario: diasValidezRecetario,
        tipoRecetario: tipoRecetario,
        membreteRecetario: membreteRecetario,
        generico: generico,
        diagnostico: diagnostico,
        validacion: validacion,
    };

    obrasSociales.push(nuevaObraSocial);
    alert("Obra social agregada con éxito :)");
    console.log("Se agregó una nueva obra social" + "\n" + "-----------------------------------");
}

//Busco obra social y muestro si existe o no
function buscarObraSocial(obraSocial) {
    let nombreObraSocial = "";
    let obraEncontrada = false; //Inicio en false 
    for (let i=0; i<obrasSociales.length; i++){ 
        if (obraSocial.toUpperCase() === obrasSociales[i].nombre.toUpperCase()){  //Comparo obra social ingresada con existente en array 
            obraEncontrada = true; 
            nombreObraSocial = obrasSociales[i];                                              //bandera cambia su valor a true
            break;                                                                            //salgo del ciclo
        }
    }

    if (obraEncontrada === true){
        console.log("Obra social existente en el array" + "\n" + "-----------------------------------");
        alert(nombreObraSocial.nombre + " está en la lista, a continuación te muestro los requisitos para su atención en la consola: "); 
        mostrarRequisitosObraSocial(nombreObraSocial);
    }
    else {
        console.log("Obra social no existe en el array" + "\n" + "-----------------------------------");
        let nuevaObra = confirm("La obra social no está en la lista, ¿desea agregarla?");
        if (nuevaObra) {
            agregarObraSocial();
            let nuevaBusqueda = prompt("Ingrese la obra social a buscar: ");
            buscarObraSocial(nuevaBusqueda);
        }  
    }
    
}

let nombre = prompt("¿Cuál es tu nombre?");
bienvenida(nombre);

let busqueda = prompt("Ingrese la obra social a buscar: ");
buscarObraSocial(busqueda);
