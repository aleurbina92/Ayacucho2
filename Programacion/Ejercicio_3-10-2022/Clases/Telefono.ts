export default class Telefono{
    private estaPrendido : boolean;
    private bateriaActual : number;
    private prenderTelefono : boolean;
    private apagarTelefono : boolean;

    constructor(estaPrendido : boolean, bateriaActual : number){
        this.estaPrendido = true;
        this.bateriaActual = 50;
        this.prenderTelefono = true;
        this.apagarTelefono = false;
    }

    public mandarMensaje(){
        return "escribe tu mensaje: " + this.mandarMensaje;
    }

    public hacerLlamada(){
        return "marca el numero al que deseas llamar " + this.hacerLlamada;
    }

    public prenderApagar() : void{
        this.prenderTelefono = true;
        this.apagarTelefono = false;
        
    }

}