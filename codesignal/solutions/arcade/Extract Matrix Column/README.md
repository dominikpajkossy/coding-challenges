Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).
Example
For
matrix = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]

and column = 2, the output should be
solution(matrix, column) = [1, 0, 3].
Input/Output


[execution time limit] 4 seconds (js)


[memory limit] 1 GB


[input] array.array.integer matrix
2-dimensional array of integers representing a rectangular matrix.
Guaranteed constraints:
1 ≤ matrix.length ≤ 500,
1 ≤ matrix[i].length ≤ 500,
0 ≤ matrix[i][j] ≤ 105.


[input] integer column
An integer not greater than the number of matrix columns.
Guaranteed constraints:
0 ≤ column ≤ matrix[i].length - 1.


[output] array.integer


[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


