"use strict";
exports.__esModule = true;
var Piscina = /** @class */ (function () {
    function Piscina(diametro, custoconstrucao) {
        this.diametro = diametro;
        this.custoconstrucao = custoconstrucao;
    }
    Piscina.prototype.raio = function () {
        Number;
        return (this.diametro / 2);
    };
    Piscina.prototype.area = function () {
        Number;
        return ((this.raio() * this.raio()) * 3.14);
    };
    Piscina.prototype.custoTotal = function () {
        Number;
        return (this.area() * this.custoconstrucao);
    };
    return Piscina;
}());
exports.Piscina = Piscina;
