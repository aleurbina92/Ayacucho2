"use strict";
exports.__esModule = true;
var fs = require("fs");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtfilelocation) {
        var archivoTxt = fs.readFileSync(txtfilelocation, "utf-8");
        this.arregloString = archivoTxt.split(";");
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
exports["default"] = GestorDeArchivos;
