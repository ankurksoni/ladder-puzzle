# Problem Statement

Two players is walking toward each other on a narrow ladder (one-dimensional). Each player can walk one or two
steps, where older player starts first. The player who can no long move lose, with the Rules of games listed below.
You have to create a program to calculate who will win the game, after we provide the age and the position of each
player. The position refers to the location of the ladder of the player.
Rules of the game
1. The older player always starts first and no two players have the same age.
2. On any player turn, the player has to move towards the opponent by 1 or 2 steps. No player can move
backward or jump over his opponent or share the same position.
3. The player that can no longer move on its turn will lose.
Each player been trained well so they can always makes the move to the optimal move.

### Input:
Read the input stream from the console (standard input).
The first line of the input contains number of test case (t < 10). Each test case consist of 4 integers
```
player1-age<SPACE>player1-pos<SPACE>player2-age<SPACE>player2-pos.
```
### Output:
For each test case, print “1” if the first player wins and “0”otherwise. Write the output to the console (result...) with a
new line after each output.

### Scoring:
Your code submission will be graded according to these criteria:
1. Clean Code / Development (Node.js) : 60%
2. Unit Testing (Node.js) : 40%

## Example:
### Input:
```
2
10 1 9 5
9 2 5 4
```
### Output:
```
0
1
```

## Guidelines:
Please try to demonstrate the following:
* Capabilities of using Node.js to solve the above problem.
* Well-formatted, understandable code.
* Appropriate use of language syntax.
* Concise, meaningful, well- formatted comments.
* Avoid code duplication.
* To cover the success scenario of at least 10 test cases and ability to extend more
than 10 test cases is the plus.
* To cover as many validations. For example, age & position cannot be less than0.
* Proper exception handling to prevent system crash.
* The script been optimized to run quickly.
* Your code must include unit test to cover at least 70% code coverage.

● Upload the completed custom plugin source code into Google Drive or your personal
Github account.

## Technical guidelines
* Ensure you have latest node.js and yarn installed
* commands
    ```
    yarn install
    yarn run test
    yarn index
    ```