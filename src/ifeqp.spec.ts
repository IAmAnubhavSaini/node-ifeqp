import {ifeqStringPromise, ifeqNumberPromise} from "./ifeqp";

describe('ifeqStringPromise', () => {
    it('resolves when the values are equal', done => {
        const promise = ifeqStringPromise("WHAT".toLocaleLowerCase(), 'what', v => v)
        const expected = 'what'
        promise.then(actual => {
            expect(actual).toEqual(expected)
            done()
        })
    })
    it('rejects when the values are not equal', done => {
        const promise = ifeqStringPromise("WHAT!".toLocaleLowerCase(), 'what', v => v)
        const expected = false
        promise.catch(e => {
            expect(e).toEqual(expected)
            done()
        })
    })
})


describe('ifeqNumberPromise', () => {
    it('resolves when the values are equal', done => {
        const promise = ifeqNumberPromise(parseInt('1010', 2), 10, v => v)
        const expected = 10
        promise.then(actual => {
            expect(actual).toEqual(expected)
            done()
        })
    })
    it('rejects when the values are not equal', done => {
        const promise = ifeqNumberPromise(parseInt('1011', 2), 10, v => v)
        const expected = false
        promise.catch(e => {
            expect(e).toEqual(expected)
            done()
        })
    })
})
