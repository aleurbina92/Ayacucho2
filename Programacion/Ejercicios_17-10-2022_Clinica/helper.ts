import Especialidad from "./Clases/Especialidad";
import Medico from "./Clases/Medico";
import * as ReadlineSync from 'readline-sync';
import Paciente from './Clases/Paciente';
import Horario from "./Clases/Horario";
import Turno from './Clases/Turno';



//Numero Random

export function crearNumRandom(max : number){
    return Math.floor(Math.random() * max);
}



//funciones de especialidad

export function cargarEspecialidad(arr : Array <Especialidad>, especialidad : string) : Array <Especialidad>{
    
    let nuevaEspecialidad : Especialidad = new Especialidad(especialidad);
    arr.push(nuevaEspecialidad);

    return arr;   
}

// crear una especialidad

export function crearEspecialidad(arr: Array<Especialidad>) : Especialidad{
    console.log(ReadlineSync)
    let nuevaEspecialidad : string = ReadlineSync.question("ingrese el nombre de la nueva especialidad: ");
    let especialidad : Especialidad = new Especialidad(nuevaEspecialidad);
    arr.push(especialidad);

return especialidad;
}

//borrar especialidad

export function borrarEspecialidad(arr : Array<Especialidad>,especialidad : string){
    
    for(let i : number = 0; i < arr.length; i++){
        if (especialidad == arr[i].getNombre()){
            arr.splice(i,1)

        } 
    }
}


//Funciones para medicos

//cargar medicos

export function cargarMedicos(arr : Array<Medico>,especialidad: Especialidad,medico : string):Array<Medico>{
    let datos : string [] = medico.split(",");
    let nombre : string = datos[0];
    let matricula : number = Number(datos[1]);
    
    let nuevoMedico : Medico = new Medico(nombre,matricula,especialidad);
    arr.push(nuevoMedico);

    return arr


}

//borrar medicos

export function borrarMedico(arr : Array<Medico>, matricula : number){
    for(let i : number = 0; i < arr.length; i++){
        if(matricula == arr[i].getMatricula()){
            arr.splice(i,1);
            console.log("el medio fue borado");
            break
        }
    }
}

//crear medicos

export function crearMedico(arregloMedicos : Array<Medico>, arregloEspecialidades : Array<Especialidad>){

    let nombre : string = ReadlineSync.question("Ingrese el nombre y apellido del medico: ");
    let matricula : number = ReadlineSync.questionInt("Ingrese la matricula del medico: ");
    let especialidad: Especialidad = arregloEspecialidades[crearNumRandom(arregloEspecialidades.length)];

    let nuevoMedico : Medico = new Medico(nombre,matricula,especialidad);

    arregloMedicos.push(nuevoMedico);

    console.log(arregloMedicos);

}

//modificar medicos

export function modificarMedico(arregloMedicos : Array<Medico>, posicion : number, arregloEspecialidades : Array<Especialidad>){

    let nombre : string = ReadlineSync.question("Ingrese el nombre modificado: ");
    let matricula : number = ReadlineSync.questionInt("Ingrese la nueva matricula : ");
    let especialidad : Especialidad = arregloEspecialidades[crearNumRandom(arregloEspecialidades.length)]

    let medicoModificado : Medico = new Medico(nombre,matricula,especialidad);

    delete arregloMedicos[posicion];
    arregloMedicos[posicion] = medicoModificado;

    console.log(arregloMedicos);

}


//Funciones para pacientes

//Cargar pacientes
export function cargarPacientes(arrPacientes : Array<Paciente>, paciente : string) : Array<Paciente>{

    let datos: string[] = paciente.split(",");
    let nombre: string = datos[0];
    let dni : number = Number(datos[1]);
    let telefono : number = Number(datos[2]);
    let obra_social : string = datos[3];

    let nuevoPaciente : Paciente = new Paciente(nombre,dni,telefono,obra_social);
    arrPacientes.push(nuevoPaciente);

    return arrPacientes;


}

//Crear Pacientes

export function crearPaciente(arregloPaciente : Array<Paciente>,){

    let nombre : string = ReadlineSync.question("Ingrese el nombre y el apellido del  paciente: ");
    let dni : number = ReadlineSync.questionInt("Ingrese el DNI del paciente: ");
    let telefono : number = ReadlineSync.questionInt("Ingrese el telefono del paciente: ");
    let obra_social : string = ReadlineSync.question("Ingrese la obra social del paciente: ");

    let nuevoPaciente : Paciente = new Paciente(nombre,dni,telefono,obra_social);

    arregloPaciente.push(nuevoPaciente);

    console.log(arregloPaciente);


}

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

export function crearTurno(arregloMedicos: Array<Medico>,arregloPacientes: Array<Paciente>,arregloHorarios: Array<Horario>, arregloTurnos: Array<Turno>){

    let num_turno : number = crearNumRandom(1000);
    let medico : Medico = arregloMedicos[crearNumRandom(arregloMedicos.length)];
    let paciente : Paciente = arregloPacientes[crearNumRandom(arregloPacientes.length)];
    let horario : Horario = arregloHorarios[crearNumRandom(arregloHorarios.length)];

    let nuevoTurno : Turno = new Turno(medico,paciente,horario,num_turno);
    arregloTurnos.push(nuevoTurno)

    return arregloTurnos;

}