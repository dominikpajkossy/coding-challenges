The Abanamama Version System (AVS) is a software versioning and revision control system used in highly secure environments. In this system, each commit is assigned a unique name, the first part of which consists of the username encrypted in the base-4 system using symbols '0', '?', '+', and '!', and the second part consists of symbols of English alphabet.
Given such commit, your task is go remove the username part from it and return the second part as an answer.
Example
For commit = "0??+0+!!someCommIdhsSt", the output should be
solution(commit) = "someCommIdhsSt".
Input/Output


[execution time limit] 4 seconds (py)


[memory limit] 1 GB


[input] string commit
Commit in the format given above. Note, that it is possible that it doesn't contain the first or the second part.
Guaranteed constraints:
5 ≤ commit.length ≤ 45.


[output] string
The second part of the commit.


[Python 2] Syntax Tips
# Prints help message to the console
# Returns a string
def helloWorld(name):
    print "This prints to the console when you Run Tests"
    return "Hello, " + name


