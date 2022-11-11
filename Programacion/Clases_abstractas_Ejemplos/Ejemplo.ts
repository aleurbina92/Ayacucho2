// No se puede instanciar una clase abstracta , como se ve en el siguiente ejemplo :

abstract class Base {
   abstract getNombre():string;

   imprimirNombre(){

    console.log(`Mi nombre es ${this.getNombre()}`);

   }

}

//Pero si es posible instanciar aquellas q las implementan :


class Derivada extends Base{
    getNombre():string{
        return "Laura";
    }
}

const miInstancia = new Derivada();
miInstancia.imprimirNombre();