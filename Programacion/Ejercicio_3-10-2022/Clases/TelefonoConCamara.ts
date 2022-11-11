export default class TelefonoConCamara{
    private camara : number;
    private estaPrendido : boolean;
    private estaApagado : boolean;
    
    public sacarFoto() : void{
        this.estaPrendido = true;
        this.estaApagado = false;
    }




}