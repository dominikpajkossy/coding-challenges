A spiral matrix is a square matrix of size n × n. It contains all the integers in range from 1 to n * n so that number 1 is written in the bottom right corner, and all other numbers are written in increasing order spirally in the counterclockwise direction.
Given the size of the matrix n, your task is to create a spiral matrix.
Example
For n = 3, the output should be
solution(n) = [[5, 4, 3],
               [6, 9, 2],
               [7, 8, 1]]

Input/Output


[execution time limit] 4 seconds (py3)


[memory limit] 1 GB


[input] integer n
Matrix size, a positive integer.
Guaranteed constraints:
3 ≤ n ≤ 75.


[output] array.array.integer
A spiral matrix of size n.


[Python 3] Syntax Tips
# Prints help message to the console
# Returns a string
def helloWorld(name):
    print("This prints to the console when you Run Tests")
    return "Hello, " + name


