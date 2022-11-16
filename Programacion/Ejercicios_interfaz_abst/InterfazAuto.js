var AutoCarreras = /** @class */ (function () {
    function AutoCarreras() {
        this.cantidadDeAcientos = 2;
        this.velocidadActual = 0;
        if (this.velocidadActual <= 0) {
            console.log("el auto  de carrera esta frenado");
        }
        else {
            console.log("el auto de carrera esta en movimiento");
        }
    }
    AutoCarreras.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarreras.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoCarreras;
}());
var AutoFamiliar = /** @class */ (function () {
    function AutoFamiliar() {
        this.velocidadActual = 20;
        this.cantidadDeAcientos = 6;
        if (this.velocidadActual <= 0) {
            console.log("el auto familiar esta frenado");
        }
        else {
            console.log("el auto familiar esta en movimiento");
        }
    }
    AutoFamiliar.prototype.acelerar = function () {
        this.velocidadActual += 20;
    };
    AutoFamiliar.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    return AutoFamiliar;
}());
var autoCarrera = new AutoCarreras();
var autoFamiliar = new AutoFamiliar();
console.log(autoCarrera, autoFamiliar);
