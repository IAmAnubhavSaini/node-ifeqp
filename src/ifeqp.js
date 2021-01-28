"use strict";
exports.__esModule = true;
exports.ifeqString = exports.ifeqNumber = exports.ifeqStringPromise = exports.ifeqNumberPromise = void 0;
var ifeq_1 = require("@f0c1s/ifeq");
exports.ifeqString = ifeq_1.ifeqString;
exports.ifeqNumber = ifeq_1.ifeqNumber;
function ifeqStringPromise(valueA, valueB, fn) {
    return new Promise(function (resolve, reject) {
        var out = ifeq_1.ifeqString(valueA, valueB, fn);
        return out !== false ? resolve(out) : reject(out);
    });
}
exports.ifeqStringPromise = ifeqStringPromise;
function ifeqNumberPromise(valueA, valueB, fn) {
    return new Promise(function (resolve, reject) {
        var out = ifeq_1.ifeqNumber(valueA, valueB, fn);
        return out !== false ? resolve(out) : reject(out);
    });
}
exports.ifeqNumberPromise = ifeqNumberPromise;
