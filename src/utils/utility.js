const integerPattern = /^\d+\.?\d*$/;

const parseTestCaseNum = function (testCaseCount) {
    if (testCaseCount) {
        const num = parseInt(testCaseCount);
        if (!isNaN(num) && integerPattern.test(num) && num < 10) {
            return num;
        }
    }
    return null;
}

const parseInputFormat = function (input, position) {
    if (!input || typeof input !== 'string') {
        throw new Error(`Wrong format for input no.: ${position}`);
    }
    if (typeof position !== 'number') {
        throw new Error(`Expected position to be a number.`);
    }
    const output = input.split(' ');
    if (output.length !== 4) {
        throw new Error(`Wrong format for input no.: ${position}`);
    }
    const arr = [];
    for (let i = 0; i < output.length; i++) {
        const num = parseInt(output[i]);
        if (isNaN(num) || !integerPattern.test(num)) {
            throw new Error(`Expect all integers. Wrong format for input no.: ${position}, position: ${i + 1}`);
        }
        arr.push(num);
    }
    return arr;
}

const getChance = function (p1Age, p2Age) {
    if (typeof p1Age !== 'number') {
        throw new Error(`Expected p1Age to be a number.`);
    }
    if (typeof p2Age !== 'number') {
        throw new Error(`Expected p2Age to be a number.`);
    }
    if (p1Age > p2Age) {
        return 'p1';
    } else if (p1Age < p2Age) {
        return 'p2'
    } else {
        throw new Error(`Both ages cannot be same.`);
    }
}

const isNonZeroPositiveNum = function (num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return false; //throw new Error(`Expects a number.`);
    } else if (num <= 0) {
        return false; //throw new Error(`Number must be positive non zero number.`);
    }
    return true;
}

const solve = function (destructuredCases, results) {
    if (!Array.isArray(results) || (Array.isArray(results) && results.length)) {
        throw new Error(`Expect new empty array for results.`);
    }
    if (!Array.isArray(destructuredCases) || !destructuredCases.length) {
        throw new Error(`Expect new empty array for destructuredCases.`);
    }
    for (let i = 0; i < destructuredCases.length; i++) {
        const _case = destructuredCases[i];
        const p1Age = _case[0];
        let p1Pos = _case[1];
        const p2Age = _case[2];
        let p2Pos = _case[3];
        let start = null;
        let chance = '';
        if (!isNonZeroPositiveNum(p1Age) || !isNonZeroPositiveNum(p1Pos) || !isNonZeroPositiveNum(p2Age) || !isNonZeroPositiveNum(p2Pos)) {
            throw new Error(`All ages and positions on ladder must be a non-zero integer value.`);
        }
        while (true) {
            if (!start) {
                chance = getChance(p1Age, p2Age);
                start = chance;
            } else {
                if ('p1' === chance) {
                    if (p1Pos > p2Pos) {
                        if ((p1Pos - 1) !== p2Pos) {
                            p1Pos = (p1Pos - p2Pos) > 2 ? (p1Pos - 2) : (p1Pos - 1); // walkdown
                            chance = 'p2';
                        } else {
                            results.push(start === 'p2' ? 0 : 1); break;
                        }
                    } else if (p1Pos < p2Pos) {
                        if ((p1Pos + 1) !== p2Pos) {
                            p1Pos = (p2Pos - p1Pos) > 2 ? (p1Pos + 2) : (p1Pos + 1); // walkup
                            chance = 'p2';
                        } else {
                            results.push(start === 'p1' ? 0 : 1); break;
                        }
                    }
                } else if ('p2' === chance) {
                    if (p2Pos > p1Pos) {
                        if ((p2Pos - 1) !== p1Pos) {
                            p2Pos = (p2Pos - p1Pos) > 2 ? (p2Pos - 2) : (p2Pos - 1); // walkdown
                            chance = 'p1';
                        } else {
                            results.push(start === 'p2' ? 0 : 1); break;
                        }
                    } else if (p2Pos < p1Pos) {
                        if ((p2Pos + 1) !== p1Pos) {
                            p2Pos = (p1Pos - p2Pos) > 2 ? (p2Pos + 2) : (p2Pos + 1); // walkup
                            chance = 'p1';
                        } else {
                            results.push(start === 'p1' ? 0 : 1); break;
                        }
                    }
                }
                // console.log(p1Pos, p2Pos);
            }
        }
    }
    return results;
}

module.exports = {
    parseTestCaseNum,
    parseInputFormat,
    getChance,
    solve,
    isNonZeroPositiveNum
};

Object.freeze(module.exports);