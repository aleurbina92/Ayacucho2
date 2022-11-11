//Ejemplo de Composición con clase televisor

class Pantalla{
    private pulgadas : number;

    constructor(pulgadas : number){
        this.pulgadas = pulgadas;
    }
}

class Boton{
    constructor(){

    }
}

class Enchufe{
    constructor(){
         
    }
}

class televisor{
    private pantalla : Pantalla;
    private boton : Boton;
    private enchufe : Enchufe;

    constructor(pantalla : Pantalla, boton : Boton , enchufe : Enchufe){
        this.pantalla = pantalla;
        this.boton = boton;
        this.enchufe = enchufe;
    }

}

let boton : Boton = new Boton();
let pantalla : Pantalla = new Pantalla(42);
let enchufe : Enchufe = new Enchufe();

let miTV : televisor = new televisor(pantalla,boton,enchufe);