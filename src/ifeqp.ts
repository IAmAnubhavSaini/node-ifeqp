import {ifeqString, ifeqNumber} from '@f0c1s/ifeq';

function ifeqStringPromise(valueA: string, valueB: string, fn: (v: string) => any) {
    return new Promise((resolve: (value: unknown) => void, reject: (reason?: any) => void) => {
        const out = ifeqString(valueA, valueB, fn)
        return out !== false ? resolve(out) : reject(out)
    })
}

function ifeqNumberPromise(valueA: number, valueB: number, fn: (v: number) => any) {
    return new Promise((resolve: (value: unknown) => void, reject: (reason?: any) => void) => {
        const out = ifeqNumber(valueA, valueB, fn)
        return out !== false ? resolve(out) : reject(out)
    })
}

export {
    ifeqNumberPromise,
    ifeqStringPromise,
    ifeqNumber,
    ifeqString
}
