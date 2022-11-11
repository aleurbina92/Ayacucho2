"use strict";
exports.__esModule = true;
var Turno = /** @class */ (function () {
    function Turno(medico, paciente, horario, num_turno) {
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
        this.num_turno = num_turno;
    }
    Turno.prototype.getMedico = function () {
        return this.medico;
    };
    Turno.prototype.setMedico = function (nuevoMedico) {
        this.medico = nuevoMedico;
    };
    Turno.prototype.getPaciente = function () {
        return this.paciente;
    };
    Turno.prototype.setPaciente = function (nuevoPaciente) {
        this.paciente = nuevoPaciente;
    };
    Turno.prototype.getHorario = function () {
        return this.horario;
    };
    Turno.prototype.setHorario = function (nuevoHorario) {
        this.horario = nuevoHorario;
    };
    Turno.prototype.getNum_turno = function () {
        return this.num_turno;
    };
    Turno.prototype.setNum_turno = function (nuevoTurno) {
        this.num_turno = nuevoTurno;
    };
    return Turno;
}());
exports["default"] = Turno;
