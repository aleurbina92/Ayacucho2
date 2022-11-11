var Puerta = /** @class */ (function () {
    function Puerta(materialPuerta) {
        this.materialPuerta = materialPuerta;
    }
    return Puerta;
}());
var Ambientes = /** @class */ (function () {
    function Ambientes(cantidadDeAmbientes) {
        this.cantidadDeAmbientes = cantidadDeAmbientes;
    }
    return Ambientes;
}());
var Tamaño = /** @class */ (function () {
    function Tamaño(esGrande) {
        this.tamañoDeCasa = esGrande;
    }
    return Tamaño;
}());
var Pileta = /** @class */ (function () {
    function Pileta(tienePileta) {
        this.tienePileta = tienePileta;
    }
    return Pileta;
}());
var Casa = /** @class */ (function () {
    function Casa(puerta, ambientes, tamaño, pileta) {
        this.puerta = puerta;
        this.ambientes = ambientes;
        this.tamaño = tamaño;
        this.pileta = pileta;
    }
    return Casa;
}());
var puerta = new Puerta("Es de madera");
var ambientes = new Ambientes(5);
var tamaño = new Tamaño(true);
var pileta = new Pileta(false);
var MiCasa = new Casa(puerta, ambientes, tamaño, pileta);
console.log(MiCasa);
