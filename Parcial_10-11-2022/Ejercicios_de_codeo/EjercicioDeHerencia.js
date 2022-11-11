var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Planeta = /** @class */ (function () {
    function Planeta() {
        this.nombre = "Urano";
        this.cantidadDeLunas = 27;
        this.tieneVida = false;
    }
    Planeta.prototype.getNombre = function () {
        return "El nombre del planeta es: " + this.nombre;
    };
    Planeta.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Planeta.prototype.getCantidadDeLunas = function () {
        return "la cantidad de lunas del planeta es de: " + this.cantidadDeLunas;
    };
    Planeta.prototype.setCantidadDeLunas = function (cantidadDeLunas) {
        this.cantidadDeLunas = cantidadDeLunas;
    };
    Planeta.prototype.getTieneVida = function () {
        return "El planeta tiene vida ?" + this.tieneVida;
    };
    Planeta.prototype.setTieneVida = function (tieneVida) {
        this.tieneVida = tieneVida;
    };
    return Planeta;
}());
var PlanetaGaseoso = /** @class */ (function (_super) {
    __extends(PlanetaGaseoso, _super);
    function PlanetaGaseoso(esGaseoso) {
        var _this = _super.call(this) || this;
        _this.esGaseoso = esGaseoso;
        return _this;
    }
    return PlanetaGaseoso;
}(Planeta));
var miPlaneta = new PlanetaGaseoso(true);
console.log(miPlaneta);
