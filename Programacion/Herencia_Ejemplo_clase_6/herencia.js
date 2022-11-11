//Ejemplo de Herencía
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
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.volumen = 50;
        this.canal = 25;
        this.estaPrendido = true;
    }
    Televisor.prototype.subirVolumen = function () {
        this.volumen = this.volumen + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumen = this.volumen - 1;
    };
    Televisor.prototype.apagarTele = function () {
        this.estaPrendido = false;
    };
    Televisor.prototype.prenderTele = function () {
        this.estaPrendido = true;
    };
    Televisor.prototype.getCanal = function () {
        return "estas en el canal " + this.canal;
    };
    Televisor.prototype.setCanal = function (canal) {
        this.canal = canal;
    };
    return Televisor;
}());
//La clase SmartTv va a ser una herencia de mi clase Televisor.
var SmarTv = /** @class */ (function (_super) {
    __extends(SmarTv, _super);
    function SmarTv(estaConectado) {
        var _this = _super.call(this) || this;
        _this.estaConectado = estaConectado;
        return _this;
    }
    return SmarTv;
}(Televisor));
var miSmart = new SmarTv(true);
console.log(miSmart);
miSmart.bajarVolumen();
console.log(miSmart);
