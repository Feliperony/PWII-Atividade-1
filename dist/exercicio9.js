"use strict";
//exercicio3-4
exports.__esModule = true;
var numero = 32;
if (numero % 2 == 0) {
    console.log('Par');
}
else {
    console.log('Impar');
}
//exercicio5
var largura = 8;
var comprimento = 5;
var area = function (largura, comprimento) { return largura * comprimento; };
console.log("A \u00C0rea \u00E9: " + area(largura, comprimento));
//exercicio6
var Cubo = /** @class */ (function () {
    function Cubo(numerox) {
        this.numerox = numerox;
    }
    Cubo.prototype.aocubo = function () {
        Number;
        return Math.pow(this.numerox, 3);
    };
    return Cubo;
}());
exports.Cubo = Cubo;
