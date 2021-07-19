export default class Cliente {
    constructor(nombre, impuesto = 21) {
        this._nombre = () => {
            return nombre;
        }
        this._impuesto = () => {
            return impuesto;
        }
    }

    get nombre() {
        return this._nombre();
    }
    set nombre(new_nombre) {
        return this._nombre = () => {
            return new_nombre;
        }
    }

    get impuesto() {
        return this._impuesto();
    }
    set impuesto(new_impuesto) {
        return this._impuesto = () => {
            return new_impuesto;
        }
    }

    calcularImpuesto() {
        let valorAnual = 0;
        valorAnual = (this._impuesto().montoBrutoAnual - this._impuesto().deducciones) * 0.21;
        return `El impuesto total a pagar es de: ${valorAnual}`;
    }
}