"use strict";
exports.__esModule = true;
var ifeqp_1 = require("./ifeqp");
describe('ifeqStringPromise', function () {
    it('resolves when the values are equal', function (done) {
        var promise = ifeqp_1.ifeqStringPromise("WHAT".toLocaleLowerCase(), 'what', function (v) { return v; });
        var expected = 'what';
        promise.then(function (actual) {
            expect(actual).toEqual(expected);
            done();
        });
    });
    it('rejects when the values are not equal', function (done) {
        var promise = ifeqp_1.ifeqStringPromise("WHAT!".toLocaleLowerCase(), 'what', function (v) { return v; });
        var expected = false;
        promise["catch"](function (e) {
            expect(e).toEqual(expected);
            done();
        });
    });
});
describe('ifeqNumberPromise', function () {
    it('resolves when the values are equal', function (done) {
        var promise = ifeqp_1.ifeqNumberPromise(parseInt('1010', 2), 10, function (v) { return v; });
        var expected = 10;
        promise.then(function (actual) {
            expect(actual).toEqual(expected);
            done();
        });
    });
    it('rejects when the values are not equal', function (done) {
        var promise = ifeqp_1.ifeqNumberPromise(parseInt('1011', 2), 10, function (v) { return v; });
        var expected = false;
        promise["catch"](function (e) {
            expect(e).toEqual(expected);
            done();
        });
    });
});
