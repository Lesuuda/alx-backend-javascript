/* eslint-disable */
export default class HolbertonCourse {
    constructor(name, length, students) {
        this._validateString(name, 'name');
        this._validaeNumber(length, 'length');
        this._validaeArrayOfStrings(students, 'students');

        this._name = name;
        this._length = length;
        this._students = students;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._validateString(value, 'name');
        this._name = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._validaeNumber(value, 'length');
        this._length = value;
    }
    get students() {
        return this._students;
    }
    set students(value) {
        this._validaeArrayOfStrings(value, 'students');
        this._students = value;

    }

    // validation methods
    _validateString(value, attributeName) {
        if (typeof value !== 'string') {
            throw new TypeError(`${attributeName} must be a string`);
        }
    }
    _validaeNumber(value, attributeName) {
        if (typeof value !== 'number') {
            throw new TypeError(`${attributeName} must be number`);
        }
    }
    _validaeArrayOfStrings(value, attributeName) {
        if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
            throw new TypeError(`${attributeName} must be an array of strings`);
        }
    }

}