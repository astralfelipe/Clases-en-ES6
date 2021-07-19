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