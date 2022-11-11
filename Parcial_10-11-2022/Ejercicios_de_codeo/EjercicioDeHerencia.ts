class Planeta{
    
    private nombre : string;
    private cantidadDeLunas : number;
    private tieneVida : boolean;
    
    public constructor(){

        this.nombre = "Urano";
        this.cantidadDeLunas = 27;
        this.tieneVida = false;
    }

    public getNombre () {

        return "El nombre del planeta es: " + this.nombre;
       
    }

    public setNombre(nombre : string){

       this.nombre = nombre;
        
    }

    public getCantidadDeLunas(){

        return "la cantidad de lunas del planeta es de: " + this.cantidadDeLunas;
    }

    public setCantidadDeLunas(cantidadDeLunas : number){

        this.cantidadDeLunas = cantidadDeLunas;

    }


    public getTieneVida(){

        return "El planeta tiene vida ?" + this.tieneVida;

    }

    public setTieneVida(tieneVida: boolean){

        this.tieneVida = tieneVida;
    }


}


class PlanetaGaseoso extends Planeta{

    public esGaseoso : boolean;

    constructor(esGaseoso : boolean){
        super();
        this.esGaseoso = esGaseoso;
    }


}

let miPlaneta : PlanetaGaseoso = new PlanetaGaseoso(true);
console.log(miPlaneta);