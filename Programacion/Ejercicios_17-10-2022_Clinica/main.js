"use strict";
exports.__esModule = true;
var Horario_1 = require("./Clases/Horario");
var GestorDeArchivos_1 = require("./Clases/GestorDeArchivos");
var ReadlineSync = require("readline-sync");
var helper_1 = require("./helper");
//--------------------------ESPECIALIDAD---------------------
var arregloEspecialidades = [];
var datoEspecialidad = new GestorDeArchivos_1["default"]("./txt/especialidad.txt");
for (var i = 0; i < datoEspecialidad.getArregloString().length; i++) {
    (0, helper_1.cargarEspecialidad)(arregloEspecialidades, datoEspecialidad.getArregloString()[i]);
}
(0, helper_1.crearEspecialidad)(arregloEspecialidades);
(0, helper_1.borrarEspecialidad)(arregloEspecialidades, "urologo");
console.log(arregloEspecialidades);
//-------------------------MEDICOS------------------------------
var arregloMedicos = [];
var datosMedicos = new GestorDeArchivos_1["default"]("./txt/medicos.txt");
for (var i = 0; i < datosMedicos.getArregloString().length; i++) {
    (0, helper_1.cargarMedicos)(arregloMedicos, arregloEspecialidades[(0, helper_1.crearNumRandom)(arregloEspecialidades.length)], datosMedicos.getArregloString()[i]);
}
console.log(arregloMedicos);
for (var i = 0; i < arregloMedicos.length; i++) {
    console.log("El medico ".concat(arregloMedicos[i].getNombre(), " tiene la especialidad ").concat(arregloMedicos[i].getEspecialidad().getNombre()));
}
var matriculaIngresada = ReadlineSync.questionInt("porfavor ingrese la matricula del medico a eliminar: ");
(0, helper_1.borrarMedico)(arregloMedicos, matriculaIngresada);
console.log(arregloMedicos);
(0, helper_1.crearMedico)(arregloMedicos, arregloEspecialidades);
(0, helper_1.modificarMedico)(arregloMedicos, 3, arregloEspecialidades);
//----------------PACIENTES------------------
//cargar pacientes al arreglo:
var arregloPacientes = [];
var datosPacientes = new GestorDeArchivos_1["default"]("./txt/pacientes.txt");
for (var i = 0; i < datosPacientes.getArregloString().length; i++) {
    (0, helper_1.cargarPacientes)(arregloPacientes, datosPacientes.getArregloString()[i]);
}
console.log(arregloPacientes);
(0, helper_1.crearPaciente)(arregloPacientes);
//..................HORARIOS..........................
var horarios = [];
var horario1 = new Horario_1["default"]("17/11", 13);
var horario2 = new Horario_1["default"]("24/08", 9);
var horario3 = new Horario_1["default"]("01/01", 14);
var horario4 = new Horario_1["default"]("13/12", 15);
horarios.push(horario1, horario2, horario3, horario4);
//CREAR TURNOS
var turnos = [];
for (var i = 0; i <= 4; i++) {
    (0, helper_1.crearTurno)(arregloMedicos, arregloPacientes, horarios, turnos);
}
for (var i = 0; i < turnos.length; i++) {
    console.log("El paciente ".concat(turnos[i].getPaciente().getNombre(), " tiene turno el d\u00EDa \n    ").concat(turnos[i].getHorario().getFecha(), " a las ").concat(turnos[i].getHorario().getHora(), " Hs, con el Dr\n    ").concat(turnos[i].getMedico().getNombre(), " de especialidad ").concat(turnos[i].getMedico().getEspecialidad().getNombre(), "\n     su numero de turno es: ").concat(turnos[i].getNum_turno(), " "));
}
