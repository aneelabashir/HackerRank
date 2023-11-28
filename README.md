A covert agent has some crucial information. stored in the form of an array of integers. The array contains sensitive information and it must not be revealed to anyone. However, there are few things about the array which are known.
1
2
An array is said to be analogous to the secret array if all of the following conditions are true:
• The length of the array is equal to the length of the secret array.
• Each integer in the array lies in the interval [lowerBound, upperBound],
The difference between each pair of consecutive integers of the array must be equal to the difference between the respective pair of consecutive integers in the secret array. In other words, let the secret array be [5[0], 5[1]....5[n-1 ]Jand let the analogous array be [a[0] a[1],...a[n-1]], then (a[i-1] - a[i]) must be equal to (s[i-1] - s[i]) for each ifrom 1 to n-1.
Given the value of the integers lowerBound and upperBound, inclusive, and the array of differences between each pair of consecutive integers of the secret array, find the number of arrays that are analogous to the secret array. If there is no array analogous to the secret array, return 0.
For example:
consecutiveDifference = [-2, -1, -2, 5]
lowerBound=3
upperBound=10
The logic to create an analogous array starting from the lower
bound is:
Start with a value of 3.
Subtract consecutiveDistances[0], 3 - (-2) = 5
Subtract consecutiveDistances[1], 5 - (-1) = 6
Subtract consecutive Distances[2], 6 - (-2) = 8
Subtract consecutiveDistances[3], 8 - 5 = 3
Note that none of the values is out of bounds. All possible analogous arrays are:
[3, 5, 6, 8, 3]
[4, 6, 7, 9, 4]
[5, 7, 8, 10, 5]
The answer is 3.
Function Description
Complete the function countAnalogousArrays in the editor below.
countAnalogousArrays has the following parameter(s): int consecutiveDifference[n]: the differences between each pair of consecutive integers in the secret array int lowerBound: an integer int upperBound: an integer
Returns:
int: the number of arrays that are analogous to the secret array
Constraints
• -10° = lowerBound = upperBound = 109
• 1=n= 105
・ -2*109 ≤ consecutiveDifferencelil ≤2*109
Input Format For Custom Testing
The first line contains an integer, n, that denotes the number of elements in consecutiveDifference.
Each line i of the n subsequent lines contains an integer, consecutiveDifferenceli], where 0 s i < n.
The next line contains an integer, lowerBound.
The last line contains an integer, upperBound.
• Sample Case O
Sample Input For Custom Testing
STDIN   Function
3       consecutiveDifferences[] size n = 3
-1      consecutiveDifferences = [-1, -3, 2]
-3
2
2       LowerBound = 2
8       upperBound = 8
Sample Output
3
Explanation

All possible analogous arrays are:

[3, 4, 7, 5]

[2, 3, 6, 4]

[4, 5, 8, 6]
Thus, the answer is 3.

Sample Case 1
Sample Input For Custom Testing
STDIN   Function
2       consecutiveDifferences[] size n = 2
1       consecutiveDifferences = [1, 2]
2
3       lowerBound = 3
4       upperBound = 4
Sample Output
0

===============================================================================================================
===============================================================================================================
***************************************************************************************************************
***************************************************************************************************************
===============================================================================================================
===============================================================================================================


Given the initial setup of a match between two players, evaluate the match's outcome.
There are two players, and there is a number sequence of size n.
Players alternate turns for n rounds. Each round, a player removes the first number from the sequence and adds its value to their score.
After that, if the 'removed' number is even, the remaining sequence is reversed.
Determine the difference in scores between the two players after the game.
More precisely, suppose first _score and second score are the final scores of the first and second player, respectively. The goal is to calculate the value of first score - second_score.
Example
The number of elements is n = 5 and numSeq = [3, 6, 2, 3, 5].
• 15t round: The first player picks 3, first_score = 3. The remaining sequence: [6, 2, 3, 5].
• 2nd round: The second player picks 6, second_score = 6. Since 6 is even, the remaining sequence is reversed: [5, 3, 2].
• 3rd round: The first player picks 5, first_score = 3 + 5 = 8. The remaining sequence: [3, 2].
• 45h round: Second player picks 3, second_score = 6 + 3 = 9. The remaining sequence: [2].
• 5th round (final): First player picks 2, second_score = 8 + 2 = 10. The remaining sequence: 
The total difference between players' scores is first_score -
second_score = 10 - 9 = 1.
Function Description
Complete the function getScoreDifference in the editor.
getScoreDifference has the following parameter:
numSeq: the given array of integers
Returns
int: first score - second score
Constraints
・1<=n≤10^5
• 1  <= numSeati = 10^4 for each 0 <= i <n
