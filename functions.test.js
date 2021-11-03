function stringLength(string) {
    if (string.length >= 1 && string.length <= 10) {
        return string.length
    } else {
        throw new Error('string lenght must be between 1 and 10 characters')
    }
}

function reverseString(string) {
    return string.split("").reverse().join("");;
}

const Calculator = {
    add(a, b) {
        return a + b
    },

    substract(a, b) {
        return a - b
    },

    divide(a, b) {
        return a / b
    },

    multiply(a, b) {
        return a * b
    }

};


function capitalize(string) {
    if ((typeof string) != 'string') {
        throw new Error('input should be a string')    
    } else {
        return string[0].toUpperCase() + string.slice(1);
    }
}





it ('Karel must match 5 characters', () => {
    expect(stringLength('Karel')).toBe(5)
});

it ('Karel must match 7 characters', () => {
    expect(stringLength('Dodgers')).toBe(7)
});


it ('Karel must match leraK', () => {
    expect(reverseString('Karel')).toBe('leraK')
});

it ('dodgers must match sregdod', () => {
    expect(reverseString('dodgers')).toBe('sregdod')
});


describe('Test add method', () => {
    it('5 + 6 must return 11', () => {
        expect(Calculator.add(5, 6)).toBe(11)
    }),

    it('19 + 21 must return 40', () => {
        expect(Calculator.add(19, 21)).toBe(40)
    }),

    it('430 + 57 must return 487', () => {
        expect(Calculator.add(430, 57)).toBe(487)
    })
});

describe('Test substract method', () => {
    it('11 - 6 must return 5', () => {
        expect(Calculator.substract(11, 6)).toBe(5)
    }),

    it('120 - 60 must return 60', () => {
        expect(Calculator.substract(120, 60)).toBe(60)
    }),

    it('550 - 183 must return 367', () => {
        expect(Calculator.substract(550, 183)).toBe(367)
    })
});

describe('Test divide method', () => {
    it('6 / 2 must return 3', () => {
        expect(Calculator.divide(6, 2)).toBe(3)
    }),

    it('24 / 6 must return 4', () => {
        expect(Calculator.divide(24, 6)).toBe(4)
    }),

    it('420 / 30 must return 14', () => {
        expect(Calculator.divide(420, 30)).toBe(14)
    })
});

describe('Test multiply method', () => {
    it('2 * 5 must return 10', () => {
        expect(Calculator.multiply(2, 5)).toBe(10)
    }),

    it('12 * 4 must return 48', () => {
        expect(Calculator.multiply(12, 4)).toBe(48)
    }),

    it('335 * 12 must return 4020', () => {
        expect(Calculator.multiply(335, 12)).toBe(4020)
    })
});

it ('karel must match Karel', () => {
    expect(capitalize('karel')).toBe('Karel')
});

it ('dodgers must match 5 Karel', () => {
    expect(capitalize('dodgers')).toBe('Dodgers')
});
