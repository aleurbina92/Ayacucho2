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
var Autos = /** @class */ (function () {
    function Autos() {
    }
    Autos.prototype.nombreVehiculo = function () {
        console.log("El vehiculo es un ".concat(this.getNombre()));
    };
    Autos.prototype.colorVehiculo = function () {
        console.log("de color ".concat(this.getColor()));
    };
    Autos.prototype.velocidadMax = function () {
        console.log("con una velocidad maxima de ".concat(this.getVelocidadMax()));
    };
    return Autos;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.getNombre = function () {
        return "Chevrolet onyx";
    };
    AutoCiudad.prototype.getColor = function () {
        return "blanco";
    };
    AutoCiudad.prototype.getVelocidadMax = function () {
        return 20;
    };
    return AutoCiudad;
}(Autos));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.getNombre = function () {
        return "Ferrari 250 GTO";
    };
    AutoDeportivo.prototype.getColor = function () {
        return "negro";
    };
    AutoDeportivo.prototype.getVelocidadMax = function () {
        return 300;
    };
    return AutoDeportivo;
}(Autos));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.getNombre = function () {
        return "ford ranger";
    };
    Camioneta.prototype.getColor = function () {
        return "azul";
    };
    Camioneta.prototype.getVelocidadMax = function () {
        return 160;
    };
    return Camioneta;
}(Autos));
var autociudad = new AutoCiudad();
autociudad.nombreVehiculo();
autociudad.colorVehiculo();
autociudad.velocidadMax();
var autoCarrera = new AutoDeportivo();
autoCarrera.nombreVehiculo();
autoCarrera.colorVehiculo();
autoCarrera.velocidadMax();
var camioneta = new Camioneta();
camioneta.nombreVehiculo();
camioneta.colorVehiculo();
camioneta.velocidadMax();
