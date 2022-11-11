import Especialidad from "./Clases/Especialidad";
import Medico from "./Clases/Medico";
import Paciente from "./Clases/Paciente";
import Horario from "./Clases/Horario";
import Turno from "./Clases/Turno";
import GestorDeArchivos from "./Clases/GestorDeArchivos";
import * as ReadlineSync from 'readline-sync';
import { cargarEspecialidad, crearEspecialidad, borrarEspecialidad, cargarMedicos, borrarMedico, crearNumRandom,
crearMedico , modificarMedico , cargarPacientes, crearPaciente, crearTurno} from './helper';





//--------------------------ESPECIALIDAD---------------------


let arregloEspecialidades : Array<Especialidad> = [];

let datoEspecialidad : GestorDeArchivos = new GestorDeArchivos("./txt/especialidad.txt");

for (let i : number = 0; i < datoEspecialidad.getArregloString().length; i++){
    cargarEspecialidad(arregloEspecialidades,datoEspecialidad.getArregloString()[i]);
}


crearEspecialidad(arregloEspecialidades);
borrarEspecialidad(arregloEspecialidades,"urologo");
console.log(arregloEspecialidades);


//-------------------------MEDICOS------------------------------

let arregloMedicos : Array<Medico> = [];

let datosMedicos : GestorDeArchivos = new GestorDeArchivos("./txt/medicos.txt");

for(let i : number = 0 ;i < datosMedicos.getArregloString().length;i++){

    cargarMedicos(arregloMedicos,arregloEspecialidades[crearNumRandom(arregloEspecialidades.length )],datosMedicos.getArregloString()[i]);


}

console.log(arregloMedicos);
for(let i : number= 0; i < arregloMedicos.length;i++){
    console.log(`El medico ${arregloMedicos[i].getNombre()} tiene la especialidad ${arregloMedicos[i].getEspecialidad().getNombre()}`)

}

let matriculaIngresada : number = ReadlineSync.questionInt("porfavor ingrese la matricula del medico a eliminar: ");
borrarMedico(arregloMedicos,matriculaIngresada);
console.log(arregloMedicos);


crearMedico(arregloMedicos,arregloEspecialidades);

modificarMedico(arregloMedicos,3,arregloEspecialidades);


//----------------PACIENTES------------------

//cargar pacientes al arreglo:

let arregloPacientes : Array<Paciente> = [];
let datosPacientes : GestorDeArchivos = new GestorDeArchivos("./txt/pacientes.txt");

for(let i : number = 0; i < datosPacientes.getArregloString().length;i++){
    
    cargarPacientes(arregloPacientes,datosPacientes.getArregloString()[i]);
}
console.log(arregloPacientes);


crearPaciente(arregloPacientes);





//..................HORARIOS..........................

let horarios : Array<Horario> =[];

let horario1 : Horario = new Horario("17/11",13);
let horario2 : Horario = new Horario("24/08",9);
let horario3 : Horario = new Horario("01/01",14);
let horario4: Horario = new Horario("13/12",15);

horarios.push(horario1,horario2,horario3,horario4);

//CREAR TURNOS
let turnos : Array<Turno>=[];

for(let i : number = 0 ;  i <= 4; i++){
    crearTurno(arregloMedicos,arregloPacientes,horarios,turnos)
}

for(let i : number = 0; i< turnos.length;i++){

    console.log(`El paciente ${turnos[i].getPaciente().getNombre()} tiene turno el día 
    ${turnos[i].getHorario().getFecha()} a las ${turnos[i].getHorario().getHora()} Hs, con el Dr
    ${turnos[i].getMedico().getNombre()} de especialidad ${turnos[i].getMedico().getEspecialidad().getNombre()}
     su numero de turno es: ${turnos[i].getNum_turno()} `);

}



