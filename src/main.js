import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

var impuestoCliente1 = new Impuesto(200000, 30000);
var cliente1 = new Cliente('Pedro', impuestoCliente1);
console.log(cliente1.calcularImpuesto());

var impuestoCliente2 = new Impuesto(300000, 80000);
var cliente2 = new Cliente('Juan', impuestoCliente2);
console.log(cliente2.calcularImpuesto());

var impuestoCliente3 = new Impuesto(250000, 65000);
var cliente3 = new Cliente('Diego', impuestoCliente3);
console.log(cliente3.calcularImpuesto());