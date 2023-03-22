
const utility = require('../../src/utils/utility');

describe("Parse test case input which must be a number", () => {
    test("test  normal number", () => {
        // arrange and act
        const result = utility.parseTestCaseNum('1')
        // assert
        expect(result).toBe(1);
    });

    test("test a non number", () => {
        // arrange and act
        const result = utility.parseTestCaseNum('a')
        // assert
        expect(result).toBe(null);
    });

    test("test a null", () => {
        // arrange and act
        const result = utility.parseTestCaseNum('a')
        // assert
        expect(result).toBe(null);
    });

    test("test a undefined", () => {
        // arrange and act
        const result = utility.parseTestCaseNum('a')
        // assert
        expect(result).toBe(null);
    });

    test("test a special character", () => {
        // arrange and act
        const result = utility.parseTestCaseNum('/')
        // assert
        expect(result).toBe(null);
    });
});

describe("Parse input format", () => {
    test("test  normal input and position", () => {
        // arrange and act
        const result = utility.parseInputFormat('1 2 3 4', 1)
        // assert
        expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });

    test("test  normal input and non number position", () => {
        // assert
        expect(() => {
            utility.parseInputFormat('1 2 3 4', 'a')
        }).toThrowError('Expected position to be a number.');
    });

    test("test null input and number position", () => {
        // assert
        expect(() => {
            utility.parseInputFormat(null, 1)
        }).toThrowError('Wrong format for input no.: 1');
    });

    test("test undefined input and number position", () => {
        // assert
        expect(() => {
            utility.parseInputFormat(null, 1)
        }).toThrowError('Wrong format for input no.: 1');
    });

    test("test undefined input and number position", () => {
        // assert
        expect(() => {
            utility.parseInputFormat('1 2', 1)
        }).toThrowError('Wrong format for input no.: 1');
    });

    test("test invalid input and number position", () => {
        // assert
        expect(() => {
            utility.parseInputFormat('1 a a a', 1)
        }).toThrowError('Expect all integers. Wrong format for input no.: 1, position: 2');
    });
});

describe("Get appropriate chance", () => {
    test("test both params as integer", () => {
        // arrange and act
        const result = utility.getChance(1, 2)
        // assert
        expect(result).toBe('p2');
    });
    test("test both params as integer", () => {
        // arrange and act
        const result = utility.getChance(3, 2)
        // assert
        expect(result).toBe('p1');
    });
    test("test both params as non numbers", () => {
        // assert
        expect(() => {
            utility.getChance('3', '2')
        }).toThrowError('Expected p1Age to be a number.');
    });
    test("test second params as non numbers", () => {
        // assert
        expect(() => {
            utility.getChance(3, '2')
        }).toThrowError('Expected p2Age to be a number.');
    });
    test("test both params are numbers and equal", () => {
        // assert
        expect(() => {
            utility.getChance(3, 3)
        }).toThrowError('Both ages cannot be same.');
    });
});

describe("Check a number is non zero positive number", () => {
    test("test absent value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum();
        // assert
        expect(result).toBe(false);
    });
    test("test null value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum(null);
        // assert
        expect(result).toBe(false);
    });
    test("test undefined value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum(undefined);
        // assert
        expect(result).toBe(false);
    });
    test("test empty string value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum('');
        // assert
        expect(result).toBe(false);
    });
    test("test zero integer value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum(0);
        // assert
        expect(result).toBe(false);
    });
    test("test negative integer value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum(-1);
        // assert
        expect(result).toBe(false);
    });
    test("test non-zero positive integer value", () => {
        // arrange and act
        const result = utility.isNonZeroPositiveNum(1);
        // assert
        expect(result).toBe(true);
    });
});

describe("Solve Ladder puzzle", () => {
    test("test proper inputs in parareters [1]", () => {
        // arrange and act
        const result = utility.solve([[10, 1, 9, 5]], [])
        // assert
        expect(result).toEqual(expect.arrayContaining([0]));
    });
    test("test proper inputs in parareters [2]", () => {
        // arrange and act
        const result = utility.solve([[9, 2, 5, 4]], [])
        // assert
        expect(result).toEqual(expect.arrayContaining([1]));
    });
    test("test proper inputs in parareters [3]", () => {
        // arrange and act
        const result = utility.solve([[8, 1, 9, 4]], [])
        // assert
        expect(result).toEqual(expect.arrayContaining([1]));
    });
    test("test proper inputs in parareters [4]", () => {
        // arrange and act
        const result = utility.solve([[10, 1, 2, 9]], [])
        // assert
        expect(result).toEqual(expect.arrayContaining([0]));
    });
    test("test proper inputs in parareters [5]", () => {
        // arrange and act
        const result = utility.solve([[5, 6, 7, 1]], [])
        // assert
        expect(result).toEqual(expect.arrayContaining([1]));
    });
    test("test second params as non empty array", () => {
        // assert
        expect(() => {
            utility.solve([[10, 1, 9, 5]], [1])
        }).toThrowError('Expect new empty array for results.');
    });
    test("test second params as non empty array", () => {
        // assert
        expect(() => {
            utility.solve(undefined, [])
        }).toThrowError('Expect new empty array for destructuredCases.');
    });
});