const process = require('process');
const prompt = require('prompt-sync')();
const { question1 } = require('./src/utils/constants');
const { parseInputFormat, solve } = require('./src/utils/utility');
const integerPattern = /^\d+\.?\d*$/;

let answer = 0;
let cases = [];
let destructuredCases = [];
let results = [];

// QUESTION 1
const testCaseCount = prompt(question1);
answer = parseInt(testCaseCount);
if (isNaN(answer) || !integerPattern.test(answer)) {
    console.error(`Kindly provide a valid Integer [Value less than 10]`);
    console.error(`Incorrect answer format Exception.`);
    process.exit(1);
}

// INSERT cases in loop
for (let i = 0; i < answer; i++) {
    cases.push(prompt(''));
}

try {
    for (let i = 0; i < cases.length; i++) {
        const destructuredOutput = parseInputFormat(cases[i], i + 1);
        destructuredCases.push(destructuredOutput);
    }
} catch (error) {
    console.error(error);
    process.exit(1);
}

try {
    solve(destructuredCases, results);
} catch (error) {
    console.error(error);
    process.exit(1);
}

for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
}