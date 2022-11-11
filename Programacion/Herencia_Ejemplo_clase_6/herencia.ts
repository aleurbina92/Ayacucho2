//Ejemplo de Herencía

class Televisor{
    private volumen : number;
    private canal : number;
    private estaPrendido : boolean;
    
    public constructor(){
        this.volumen = 50;
        this.canal = 25;
        this.estaPrendido = true;
    }

    public subirVolumen() : void{
        this.volumen = this.volumen +1;
    }
    public bajarVolumen() : void{
        this.volumen = this.volumen -1;
    }
    public apagarTele() {
        this.estaPrendido = false;
    }
    public prenderTele(){
        this.estaPrendido = true;
    }
    public getCanal(){
        return "estas en el canal " + this.canal;
    }
    public setCanal(canal : number){
        this.canal = canal;

}
}

//La clase SmartTv va a ser una herencia de mi clase Televisor.


class SmarTv extends Televisor{
    public estaConectado : boolean;

    public constructor(estaConectado : boolean){
        super();
        this.estaConectado = estaConectado;
    }
}

let miSmart : SmarTv = new SmarTv(true);
console.log(miSmart);
miSmart.bajarVolumen();
console.log(miSmart);

