export default class Impuesto {
    constructor(montoBrutoAnual = 0, deducciones = 0) {
        this._montoBrutoAnual = () => {
            return montoBrutoAnual;
        }
        this._deducciones = () => {
            return deducciones;
        }
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual();
    }
    set montoBrutoAnual(new_montoBrutoAnual) {
        return this._montoBrutoAnual = () => {
            return new_montoBrutoAnual;
        }
    }

    get deducciones() {
        return this._deducciones();
    }
    set deducciones(new_deducciones) {
        return this._deducciones = () => {
            return new_deducciones;
        }
    }
}