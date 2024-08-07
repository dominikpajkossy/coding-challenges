You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?
It is guaranteed that the sum of all elements in the array is divisible by 3.
Example
For a = [0, -1, 0, -1, 0, -1], the output should be
solution(a) = 4.
Here are all possible ways:

[0, -1] [0, -1] [0, -1]
[0, -1] [0, -1, 0] [-1]
[0, -1, 0] [-1, 0] [-1]
[0, -1, 0] [-1] [0, -1]

Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] array.integer a
Guaranteed constraints:
5 ≤ a.length ≤ 104,
-108 ≤ a[i] ≤ 108.


[output] integer
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


