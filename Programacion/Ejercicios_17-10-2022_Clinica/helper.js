"use strict";
exports.__esModule = true;
exports.crearTurno = exports.crearPaciente = exports.cargarPacientes = exports.modificarMedico = exports.crearMedico = exports.borrarMedico = exports.cargarMedicos = exports.borrarEspecialidad = exports.crearEspecialidad = exports.cargarEspecialidad = exports.crearNumRandom = void 0;
var Especialidad_1 = require("./Clases/Especialidad");
var Medico_1 = require("./Clases/Medico");
var ReadlineSync = require("readline-sync");
var Paciente_1 = require("./Clases/Paciente");
var Turno_1 = require("./Clases/Turno");
//Numero Random
function crearNumRandom(max) {
    return Math.floor(Math.random() * max);
}
exports.crearNumRandom = crearNumRandom;
//funciones de especialidad
function cargarEspecialidad(arr, especialidad) {
    var nuevaEspecialidad = new Especialidad_1["default"](especialidad);
    arr.push(nuevaEspecialidad);
    return arr;
}
exports.cargarEspecialidad = cargarEspecialidad;
// crear una especialidad
function crearEspecialidad(arr) {
    console.log(ReadlineSync);
    var nuevaEspecialidad = ReadlineSync.question("ingrese el nombre de la nueva especialidad: ");
    var especialidad = new Especialidad_1["default"](nuevaEspecialidad);
    arr.push(especialidad);
    return especialidad;
}
exports.crearEspecialidad = crearEspecialidad;
//borrar especialidad
function borrarEspecialidad(arr, especialidad) {
    for (var i = 0; i < arr.length; i++) {
        if (especialidad == arr[i].getNombre()) {
            arr.splice(i, 1);
        }
    }
}
exports.borrarEspecialidad = borrarEspecialidad;
//Funciones para medicos
//cargar medicos
function cargarMedicos(arr, especialidad, medico) {
    var datos = medico.split(",");
    var nombre = datos[0];
    var matricula = Number(datos[1]);
    var nuevoMedico = new Medico_1["default"](nombre, matricula, especialidad);
    arr.push(nuevoMedico);
    return arr;
}
exports.cargarMedicos = cargarMedicos;
//borrar medicos
function borrarMedico(arr, matricula) {
    for (var i = 0; i < arr.length; i++) {
        if (matricula == arr[i].getMatricula()) {
            arr.splice(i, 1);
            console.log("el medio fue borado");
            break;
        }
    }
}
exports.borrarMedico = borrarMedico;
//crear medicos
function crearMedico(arregloMedicos, arregloEspecialidades) {
    var nombre = ReadlineSync.question("Ingrese el nombre y apellido del medico: ");
    var matricula = ReadlineSync.questionInt("Ingrese la matricula del medico: ");
    var especialidad = arregloEspecialidades[crearNumRandom(arregloEspecialidades.length)];
    var nuevoMedico = new Medico_1["default"](nombre, matricula, especialidad);
    arregloMedicos.push(nuevoMedico);
    console.log(arregloMedicos);
}
exports.crearMedico = crearMedico;
//modificar medicos
function modificarMedico(arregloMedicos, posicion, arregloEspecialidades) {
    var nombre = ReadlineSync.question("Ingrese el nombre modificado: ");
    var matricula = ReadlineSync.questionInt("Ingrese la nueva matricula : ");
    var especialidad = arregloEspecialidades[crearNumRandom(arregloEspecialidades.length)];
    var medicoModificado = new Medico_1["default"](nombre, matricula, especialidad);
    delete arregloMedicos[posicion];
    arregloMedicos[posicion] = medicoModificado;
    console.log(arregloMedicos);
}
exports.modificarMedico = modificarMedico;
//Funciones para pacientes
//Cargar pacientes
function cargarPacientes(arrPacientes, paciente) {
    var datos = paciente.split(",");
    var nombre = datos[0];
    var dni = Number(datos[1]);
    var telefono = Number(datos[2]);
    var obra_social = datos[3];
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    arrPacientes.push(nuevoPaciente);
    return arrPacientes;
}
exports.cargarPacientes = cargarPacientes;
//Crear Pacientes
function crearPaciente(arregloPaciente) {
    var nombre = ReadlineSync.question("Ingrese el nombre y el apellido del  paciente: ");
    var dni = ReadlineSync.questionInt("Ingrese el DNI del paciente: ");
    var telefono = ReadlineSync.questionInt("Ingrese el telefono del paciente: ");
    var obra_social = ReadlineSync.question("Ingrese la obra social del paciente: ");
    var nuevoPaciente = new Paciente_1["default"](nombre, dni, telefono, obra_social);
    arregloPaciente.push(nuevoPaciente);
    console.log(arregloPaciente);
}
exports.crearPaciente = crearPaciente;
//Borrar Pacientes
/*export borrarPaciente(arr : Array<Paciente>, dni : number){
    for(let i : number = 0; i < arr.length; i++){
        if(dni == arr[i].getDni()){
            arr.splice(i,1);
            console.log("el medio fue borado");
            break
        }
    }

}*/
//FUNCION PARA CREAR UN TURNO:
function crearTurno(arregloMedicos, arregloPacientes, arregloHorarios, arregloTurnos) {
    var num_turno = crearNumRandom(1000);
    var medico = arregloMedicos[crearNumRandom(arregloMedicos.length)];
    var paciente = arregloPacientes[crearNumRandom(arregloPacientes.length)];
    var horario = arregloHorarios[crearNumRandom(arregloHorarios.length)];
    var nuevoTurno = new Turno_1["default"](medico, paciente, horario, num_turno);
    arregloTurnos.push(nuevoTurno);
    return arregloTurnos;
}
exports.crearTurno = crearTurno;
