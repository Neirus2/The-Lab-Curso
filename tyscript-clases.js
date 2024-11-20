/*1. Pila básica (LIFO)
Una pila tiene tres operaciones básicas:

push: Agregar un elemento a la pila.
pop: Sacar el último elemento agregado de la pila.
size: Consultar la cantidad de elementos en la pila.*/
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
/*Los genéricos ofrecen una forma de crear componentes reutilizables
▶ Además proporcionan una manera de hacer que los componentes funcionen con
cualquier tipo de datos y no se restrinjan a un tipo de datos particular
▶ Por lo tanto, los componentes se pueden llamar o usar con una variedad de tipos
de datos*/
var Pila = /** @class */ (function () {
    function Pila() {
        this.elementos = [];
    }
    Pila.prototype.push = function (elemento) {
        this.elementos.push(elemento);
    };
    Pila.prototype.pop = function () {
        return this.elementos.pop();
    };
    Pila.prototype.size = function () {
        return this.elementos.length;
    };
    Pila.prototype.peek = function () {
        return this.elementos[this.elementos.length - 1];
    };
    return Pila;
}());
var PilaSinRepetidos = /** @class */ (function (_super) {
    __extends(PilaSinRepetidos, _super);
    function PilaSinRepetidos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PilaSinRepetidos.prototype.push = function (elemento) {
        if (this.elementos.some(function (el) { return el === elemento; })) {
            console.log("El elemento ".concat(elemento, " ya est\u00E1 en la pila. No se puede agregar."));
        }
        else {
            _super.prototype.push.call(this, elemento);
        }
    };
    return PilaSinRepetidos;
}(Pila));
var pilaNumeros = new Pila();
pilaNumeros.push(10);
pilaNumeros.push(20);
console.log(pilaNumeros.size());
console.log(pilaNumeros.pop());
console.log(pilaNumeros.size());
var pilaUnica = new PilaSinRepetidos();
pilaUnica.push("apple");
pilaUnica.push("banana");
pilaUnica.push("apple");
console.log(pilaUnica.size());
console.log(pilaUnica.pop());
