"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, dni, telefono, obra_social) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.obra_social = obra_social;
    }
    Paciente.prototype.getDni = function () {
        return this.dni;
    };
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Paciente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Paciente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Paciente.prototype.getObra_social = function () {
        return this.obra_social;
    };
    Paciente.prototype.setObra_social = function (nuevaObra_social) {
        this.obra_social = nuevaObra_social;
    };
    return Paciente;
}());
exports["default"] = Paciente;
