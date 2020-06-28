// Create a function that reverses a string:
// 'Hi My Name is Andrei' should be"
// 'ierdnA si emaN yM iH'

function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid Input or a single length string'
    }
    const backwards = [];
    const totalItems = str.length;
    for (let i = totalItems - 1; i >= 0; i--) {
        backwards.push(str[i])
    }
    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

// ES6 way
const reverse3 = str => [...str].reverse().join('');

