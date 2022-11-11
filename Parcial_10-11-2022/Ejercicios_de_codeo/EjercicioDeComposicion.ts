class Puerta{
  
    private materialPuerta : string;
    

    constructor(materialPuerta : string){

        this.materialPuerta = materialPuerta;
    }

}

class Ambientes{

    private cantidadDeAmbientes : number;

    constructor(cantidadDeAmbientes: number){

        this.cantidadDeAmbientes = cantidadDeAmbientes;
    }

}


class Tamaño{

    private tamañoDeCasa : boolean;

    constructor(esGrande : boolean){

        this.tamañoDeCasa = esGrande;

    }

}


class Pileta{

    private tienePileta : boolean;

    constructor(tienePileta: boolean){

        this.tienePileta = tienePileta;

    }

}


class Casa{

    private puerta : Puerta;
    private ambientes : Ambientes;
    private tamaño : Tamaño;
    private pileta : Pileta;


    constructor(puerta : Puerta, ambientes : Ambientes, tamaño : Tamaño, pileta : Pileta){

        this.puerta = puerta;
        this.ambientes = ambientes;
        this.tamaño = tamaño;
        this.pileta = pileta;

    }


}


let puerta : Puerta = new Puerta("Es de madera");
let ambientes : Ambientes = new Ambientes(5);
let tamaño : Tamaño = new Tamaño(true);
let pileta : Pileta = new Pileta(false);

let MiCasa : Casa = new Casa(puerta,ambientes,tamaño,pileta);
console.log(MiCasa);