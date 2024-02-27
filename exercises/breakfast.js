export class Bread {
    constructor() {
        this.toasted = false;
    }

    toast() {
        console.log('I\'ve been toasted!');
        this.toasted = true;
    }
}

export class Toaster {
    constructor() {
        this.slot = null;
    }
    add(bread) {
        this.slot = bread;
    }
    async startToasting() {
        console.log('Started toasting...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.slot.toast();
        console.log('Finished toasting!');
    }
    pop() {
        console.log('Pop!');
        const contents = this.slot;
        this.slot = null;
        return contents;
    }
}

// Add the `async` and `await` where needed to make the test pass.
export function makeToast(bread, toaster) {
    toaster.add(bread);
    toaster.startToasting();
    return toaster.pop();
}