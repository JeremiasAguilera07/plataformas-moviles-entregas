var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};



function crearPersona(nombre, apellido, edad, documento) {

    let nuevaPersona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
    return nuevaPersona;
}
console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));


function agregarApodo(persona, apodo) {

    let personaConApodo = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad,
        documento: persona.documento,
        apodo: apodo
    };
    return personaConApodo;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));


function sinDocumento(persona) {

    let personaSinDni = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad
    };
    return personaSinDni;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));

function tieneDocumento(persona) {
    
    if (persona.documento !== undefined) {
        return true;
    } else {
        return false;
    }
}
console.log("resultado tieneDocumento: ", tieneDocumento(personaEjemplo));


function nombreCompletoDePersona(persona) {
    
    let nombreCompleto = persona.apellido + ", " + persona.nombre;
    return nombreCompleto;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

function felizCumpleaños(persona) {
   
    let personaMasVieja = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad + 1,
        documento: persona.documento
    };
    return personaMasVieja;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));


function sonLaMismaPersona(persona1, persona2) {
   
    if (persona1.documento === persona2.documento) {
        return true;
    } else {
        return false;
    }
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));


function personaMasGrande(persona1, persona2) {

    if (persona1.edad > persona2.edad) {
        return persona1;
    } else {
        return persona2;
    }
}
console.log("resultado personaMasGrande: ", personaMasGrande(
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 }
));
