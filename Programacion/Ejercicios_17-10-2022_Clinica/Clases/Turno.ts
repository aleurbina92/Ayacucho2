import Medico from './Medico';
import Paciente from "./Paciente";
import Horario from "./Horario";

export default class Turno{
    private medico : Medico;
    private paciente : Paciente;
    private horario : Horario;
    private num_turno : number;

    public constructor(medico : Medico, paciente : Paciente, horario : Horario, num_turno : number){
        this.medico = medico;
        this.paciente = paciente;
        this.horario = horario;
        this.num_turno = num_turno;
    }
    public getMedico(): Medico {
        return this.medico
    }

    public setMedico(nuevoMedico: Medico): void{
        this.medico = nuevoMedico;
    }   

    public getPaciente(): Paciente {
        return this.paciente
    }

    public setPaciente(nuevoPaciente: Paciente): void{
        this.paciente = nuevoPaciente;
    }

    public getHorario(): Horario {
        return this.horario
    }

    public setHorario(nuevoHorario: Horario): void{
        this.horario = nuevoHorario;
    }

    public getNum_turno(): number{
        return this.num_turno;
    }

    setNum_turno(nuevoTurno: number): void{
        this.num_turno = nuevoTurno;
    }

}