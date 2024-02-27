import { strict as assert } from 'assert';
import { makeToast } from '../../exercises/breakfast.js';
import { setTimeout } from 'timers/promises';

function promiseState(promise) {
    const t = Symbol()
    return Promise.race([promise, t])
        .then(v => (v === t) ? "pending" : "resolved")
        .catch(() => "rejected")
}

describe('breakfast', () => {
    describe('makeToast', () => {
        it('should be an async function', () => {
            assert.equal(
                makeToast.constructor.name, 
                'AsyncFunction',
                'makeToast is not an async function'
            );
        });

        it('should not resolve if toaster is still toasting', async () => {
            const bread = {};

            const toaster = {
                add: () => {},
                startToasting: () => new Promise(() => {}),
                pop: () => bread,
            };

            const makeToastPromise = makeToast(bread, toaster);

            // Wait for the promise to have started properly
            await setTimeout(1)

            assert.equal(
                await promiseState(makeToastPromise), 
                'pending',
                'makeToast should wait for the toaster to finish toasting'
            );
        });

        it('should resolve when toasting is finished', async () => {
            const bread = {};

            const toaster = {
                add: () => {},
                startToasting: () => Promise.resolve(),
                pop: () => bread,
            };

            const makeToastPromise = makeToast(bread, toaster);

            // Wait for the promise to resolve
            await setTimeout(1)

            assert.equal(
                await promiseState(makeToastPromise), 
                'resolved',
                'makeToast should finish after the toaster finishes toasting'
            );
        });
    });
});
