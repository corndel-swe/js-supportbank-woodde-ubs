import { strict as assert } from 'assert';
import { makeToast } from '../../exercises/day-2-exercise-1.js';

function promiseState(promise) {
    const t = Symbol()
    return Promise.race([promise, t])
        .then(v => (v === t) ? "pending" : "fulfilled")
        .catch(() => "rejected")
}

describe('breakfast', () => {
    describe('makeToast', () => {
        it('should be an async function', () => {
            assert.equal(makeToast.constructor.name, 'AsyncFunction');
        });
        it('should wait to finish toasting', () => {
            const called = [];

            const toastPromise = new Promise();

            const toaster = {
                add: () => {},
                startToasting: () => toastPromise,
                pop: () => bread,
            };

            const makeToastPromise = makeToast(bread, toaster);

            assert.equal(promiseState(makeToastPromise), "pending");

            toastPromise.resolve();

            assert.equal(promiseState(makeToastPromise), "fulfilled");
        });
    });
});
