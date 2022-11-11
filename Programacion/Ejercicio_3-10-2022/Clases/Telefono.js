"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono(estaPrendido, bateriaActual) {
        this.estaPrendido = true;
        this.bateriaActual = 50;
        this.prenderTelefono = true;
        this.apagarTelefono = false;
    }
    Telefono.prototype.mandarMensaje = function () {
        return "escribe tu mensaje: " + this.mandarMensaje;
    };
    Telefono.prototype.hacerLlamada = function () {
        return "marca el numero al que deseas llamar " + this.hacerLlamada;
    };
    Telefono.prototype.prenderApagar = function () {
        this.prenderTelefono = true;
        this.apagarTelefono = false;
    };
    return Telefono;
}());
exports["default"] = Telefono;
