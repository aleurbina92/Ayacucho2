//Ejemplo de Composición con clase televisor
var Pantalla = /** @class */ (function () {
    function Pantalla(pulgadas) {
        this.pulgadas = pulgadas;
    }
    return Pantalla;
}());
var Boton = /** @class */ (function () {
    function Boton() {
    }
    return Boton;
}());
var Enchufe = /** @class */ (function () {
    function Enchufe() {
    }
    return Enchufe;
}());
var televisor = /** @class */ (function () {
    function televisor(pantalla, boton, enchufe) {
        this.pantalla = pantalla;
        this.boton = boton;
        this.enchufe = enchufe;
    }
    return televisor;
}());
var boton = new Boton();
var pantalla = new Pantalla(42);
var enchufe = new Enchufe();
var miTV = new televisor(pantalla, boton, enchufe);
