var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];

function invertirLista(listaDeNumeros) {
    return listaDeNumeros.slice().reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]));

function sumarLista(listaDeNumeros) {
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];
    }
    return suma;
}
console.log("sumarLista([2,3,4]): ", sumarLista([2,3,4]));

function contarElementosLista(listaDeNumeros) {
    return listaDeNumeros.length;
}
console.log("contarElementosLista([2,3,4]): ", contarElementosLista([2,3,4]));
console.log("contarElementosLista([2,3]): ", contarElementosLista([2,3]));
console.log("contarElementosLista([]): ", contarElementosLista([]));

function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) return 0;
    let suma = sumarLista(listaDeNumeros);
    return suma / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));

function triplicarLista(listaDeNumeros) {
    return listaDeNumeros.map(num => num * 3);
}
console.log("triplicarLista([1, 2, 3]): ", triplicarLista([1, 2, 3]));

function crearListaDeNumeros(inicio, fin) {
    let resultado = [];
    for (let i = inicio; i <= fin; i++) {
        resultado.push(i);
    }
    return resultado;
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5));

function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.slice().sort((a, b) => b - a);
}
console.log("ordenarDeMayorAMenor([2,-1,4]): ", ordenarDeMayorAMenor([2,-1,4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));

function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));

function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.slice().sort((a, b) => a.length - b.length);
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));

function encontrarPalabraMasCorta(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    let masCorta = listaDePalabras[0];
    for (let i = 1; i < listaDePalabras.length; i++) {
        if (listaDePalabras[i].length < masCorta.length) {
            masCorta = listaDePalabras[i];
        }
    }
    return masCorta;
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));

function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(num => num >= 0);
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));

function contarAprobados(listaDeNotas) {
    let aprobados = listaDeNotas.filter(nota => nota >= 4);
    return aprobados.length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));

function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(Boolean);
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));

function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    if (listaDePalabras.length === 1) return listaDePalabras[0] + ".";

    let ultimo = listaDePalabras[listaDePalabras.length - 1];
    let resto = listaDePalabras.slice(0, -1);

    let resultado = resto.join(", ") + " y " + ultimo + ".";

    return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));