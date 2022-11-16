interface Auto{
    
    acelerar(): void;
    getVelocidadActual() : number;  

}


class AutoCarreras implements Auto{
    private cantidadDeAcientos : number;
    private velocidadActual : number;

    public constructor() {
        this.cantidadDeAcientos=2;
        this.velocidadActual = 0;
        if(this.velocidadActual <= 0){
            console.log("el auto  de carrera esta frenado");
        } else{
            console.log("el auto de carrera esta en movimiento");
        }
        
    }

    public acelerar(): void{

        this.velocidadActual += 50;

    }

    public getVelocidadActual(): number{

        return this.velocidadActual;

    }

}

class AutoFamiliar implements Auto{

    private velocidadActual : number;
    private cantidadDeAcientos: number;

    public constructor() {

        this.velocidadActual = 20;
        this.cantidadDeAcientos = 6;

        if(this.velocidadActual <= 0){
            console.log("el auto familiar esta frenado");
        } else{
            console.log("el auto familiar esta en movimiento");
        }



        
    }

    public acelerar(): void{

        this.velocidadActual += 20;

    }

    public getVelocidadActual(): number{

        return this.velocidadActual;

    }


}


let autoCarrera : AutoCarreras = new AutoCarreras();
let autoFamiliar: AutoFamiliar = new AutoFamiliar();

console.log(autoCarrera,autoFamiliar);