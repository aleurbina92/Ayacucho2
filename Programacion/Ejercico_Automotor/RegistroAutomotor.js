"use strict";
exports.__esModule = true;
var fs = require("fs");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaAutos) {
        this.listaAutos = listaAutos;
    }
    RegistroAutomotor.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    return RegistroAutomotor;
}());
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
//Funcion para agregar un nuevo Auto
function agregarAuto(auto, arrayAutos) {
    var propiedadAuto = auto.split(',');
    var marca = propiedadAuto[0];
    var modelo = Number(propiedadAuto[1]);
    var color = propiedadAuto[2];
    var nuevoAuto = new Auto(marca, modelo, color);
    arrayAutos.push(nuevoAuto);
}
function borrarAuto(arrayAutos, position) {
    var readlineSync = require('readline-sync');
    var marca = readlineSync.question("Ingrese la marca: ");
    var modelo = Number(readlineSync.question("Ingrese el modelo: "));
    var color = readlineSync.question("Ingrese el color: ");
    var nuevoAuto = new Auto(marca, modelo, color);
    delete arrayAutos[position];
    arrayAutos[position] = nuevoAuto;
}
//Inicio programa
var datos = new GestorDeArchivos('./txt/autos.txt');
var arrayAutos = [];
for (var i = 0; i < datos.getArregloString().length; i++) {
    agregarAuto(datos.getArregloString()[i], arrayAutos);
}
console.log(arrayAutos);
console.log(borrarAuto(arrayAutos, 2));
