(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;

    _classCallCheck(this, Cliente);

    this._nombre = function () {
      return nombre;
    };

    this._impuesto = function () {
      return impuesto;
    };
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre();
    },
    set: function set(new_nombre) {
      return this._nombre = function () {
        return new_nombre;
      };
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto();
    },
    set: function set(new_impuesto) {
      return this._impuesto = function () {
        return new_impuesto;
      };
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var valorAnual = 0;
      valorAnual = (this._impuesto().montoBrutoAnual - this._impuesto().deducciones) * 0.21;
      return "El impuesto total a pagar es de: ".concat(valorAnual);
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto() {
    var montoBrutoAnual = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var deducciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Impuesto);

    this._montoBrutoAnual = function () {
      return montoBrutoAnual;
    };

    this._deducciones = function () {
      return deducciones;
    };
  }

  _createClass(Impuesto, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual();
    },
    set: function set(new_montoBrutoAnual) {
      return this._montoBrutoAnual = function () {
        return new_montoBrutoAnual;
      };
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones();
    },
    set: function set(new_deducciones) {
      return this._deducciones = function () {
        return new_deducciones;
      };
    }
  }]);

  return Impuesto;
}();

exports["default"] = Impuesto;
},{}],3:[function(require,module,exports){
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
},{"./cliente.js":1,"./impuesto.js":2}]},{},[3]);
