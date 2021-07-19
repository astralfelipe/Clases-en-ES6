"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestoCliente1 = new _impuesto["default"](200000, 30000);
var cliente1 = new _cliente["default"]('Pedro', impuestoCliente1);
console.log(cliente1.calcularImpuesto());
var impuestoCliente2 = new _impuesto["default"](300000, 80000);
var cliente2 = new _cliente["default"]('Juan', impuestoCliente2);
console.log(cliente2.calcularImpuesto());
var impuestoCliente3 = new _impuesto["default"](250000, 65000);
var cliente3 = new _cliente["default"]('Diego', impuestoCliente3);
console.log(cliente3.calcularImpuesto());