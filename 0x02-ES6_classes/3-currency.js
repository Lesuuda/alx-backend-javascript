/* eslint-disable */
export default class Currency {
    constructor(code, name) {
        this._validateString(code, 'string');
        this._validateString(name, 'string');

        this._code = code;
        this._name = name;

    }
    get code() {
        return self._coode;
    }
    set code(value) {
        this._validateString(value, 'string');

        self._code = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._validateString(value, 'string');
        this._code = value;
    }
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
    //validation methods
    _validateString(value, attributeName) {
        if (typeof value !== 'string') {
          throw new Error(`${attributeName} must be a string`); 
        }
    }

}