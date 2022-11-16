abstract class Autos {
    
    abstract getNombre(): string;
    abstract getColor() : string;
    abstract getVelocidadMax(): number;

    nombreVehiculo (){
        console.log(`El vehiculo es un ${this.getNombre()}`);
    }

    colorVehiculo (){
        console.log(`de color ${this.getColor()}`);
    }

    velocidadMax(){
        console.log(`con una velocidad maxima de ${this.getVelocidadMax()}`);
    }

}

class AutoCiudad extends Autos{

    getNombre(): string {
        return "Chevrolet onyx"
    }

    getColor(): string {
        return "blanco"
    }
    
    getVelocidadMax(): number {
        return 20;
    }


}


class AutoDeportivo extends Autos{

    getNombre(): string {
        return "Ferrari 250 GTO"
    }

    getColor(): string {
        return "negro"
    }
    
    getVelocidadMax(): number {
        return 300;
    }



}


class Camioneta extends Autos{

    getNombre(): string {
        return "ford ranger"
    }

    getColor(): string {
        return "azul"
    }
    
    getVelocidadMax(): number {
        return 160;
    }



}



let autociudad : AutoCiudad = new AutoCiudad();
autociudad.nombreVehiculo()
autociudad.colorVehiculo()
autociudad.velocidadMax()


let autoCarrera : AutoDeportivo = new AutoDeportivo();
autoCarrera.nombreVehiculo();
autoCarrera.colorVehiculo();
autoCarrera.velocidadMax();

let camioneta : Camioneta = new Camioneta();
camioneta.nombreVehiculo();
camioneta.colorVehiculo();
camioneta.velocidadMax();