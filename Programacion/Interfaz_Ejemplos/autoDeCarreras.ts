//es importante q los modificadores de accesos en las interfaces sean PUBLICOS!


interface Auto{
    
    acelerar(): void;
    getVelocidadActual() : number;  

}


//LA CLASE AutoCarreras implementa los metodos de la interfaz Auto:



class AutoCarreras implements Auto{

    private velocidadActual : number;

    public constructor() {

        this.velocidadActual = 0;
        
    }

    public acelerar(): void{

        this.velocidadActual += 50;

    }

    public getVelocidadActual(): number{

        return this.velocidadActual;

    }

}