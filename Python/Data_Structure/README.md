# Data Structure
#### P1: Slice list into 3 equal chunks and reverse each chunk
Sample:  [11, 45, 8, 23, 14, 12, 78, 45, 89]

Result: [[8, 45, 11], [12, 14, 23], [89, 45, 78]]
#### Input:
#
```sh
list = [11, 45, 8, 23, 14, 12, 78, 45, 89]
```
#### Output:
#
```sh
[[8, 45, 11], [12, 14, 23], [89, 45, 78]]
```
### Testcases
| Input | Output |
| ------ | ------ |
| [11, 45, 8, 23, 14, 12, 78, 45, 89] | [8, 45, 11] [12, 14, 23] [89, 45, 78] |


-----------------------------------------------
-----------------------------------------------

#### P2:- Count the occurrence of each element from a list
Sample: [11, 45, 8, 11, 23, 45, 23, 45, 89]

Result: {11: 2, 45: 3, 8: 1, 23: 2, 89: 1}

#### Input:
#
```sh
Input :  list
```
#### Output:
#
```sh
Output : Dictionary with number of values in list
```


### Testcases
| Input | Output |
| ------ | ------ |
| [11, 45, 8, 11, 23, 45, 23, 45, 89] | {11: 2, 45: 3, 8: 1, 23: 2, 89: 1} |


-----------------------------------------------
-----------------------------------------------

#### P3:- Write a Python program to get a list, sorted in increasing order by the last element in each tuple from a given list of non-empty tuples.
Sample: [(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]

Result: [(2, 1), (1, 2), (2, 3), (4, 4), (2, 5)]

#### Input:
#
```sh
Input :  list with 2 valued tuples
```
#### Output:
#
```sh
Output : Sorted list from the second value of the tuple
```

### Testcases
| Input | Output |
| ------ | ------ |
| [(2, 5), (2, 3), (2, 1)]| [(2, 1), (2, 3), (2, 5)] |


-----------------------------------------------
-----------------------------------------------

#### P4: Find the intersection (common) of two sets and remove those elements from the first set.
Sample: {23, 42, 65, 57, 78, 83, 29}
        {57, 83, 29, 67, 73, 43, 48}

Result: {57, 83, 29}, {65, 42, 78, 23}

#### Input:
#
```sh
x = set1
y = set2
```
#### Output:
#
```sh
Output: set1 intersection set2 and elements from set1 removed when compare to set2
```


### Testcases
| Input | Output |
| ------ | ------ |
| {23, 42, 65, 57, 78, 83, 29}
{57, 83, 29, 67, 73, 43, 48}  | {57, 83, 29}        {65, 42, 78, 23} |


-----------------------------------------------
-----------------------------------------------

#### P5: Sort given array of three random elements. 0,1 & 2. Without any sorting algorithm. Time complexity: O(n)
Sample: [1,0,2,2,0,1,0,1,2,0,0]

Output: [0,0,0,0,0,1,1,1,2,2,2] 

#### Input:
#
```sh
Input :  List of random 3 numbers
```
#### Output:
#
```sh
Output : list of numbers in ascending order
```


### Testcases
| Input | Output |
| ------ | ------ |
| [1,0,2,2,0,1,0,1,2,0,0] | [0,0,0,0,0,1,1,1,2,2,2]  |


-----------------------------------------------
-----------------------------------------------

#### P6: Create a function to reverse the entire list without any function and also do not use any indexing or slicing shortcut. 

Time Complexity O(logn)


#### Input:
#
```sh
Input : A list
```
#### Output:
#
```sh
Output: Reverse of list
```
### Testcases
| Input | Output |
| ------ | ------ |
| [1,2,3] | [3,2,1]|
| [2,3,4,5] | [5,4,3,2] |


-----------------------------------------------
-----------------------------------------------

#### P7:Convert any lower case string to upper case without in-built python functions.
Ex. A = “abcdef ghi”

Output: “ABCDEF GHI


#### Input:
#
```sh
Input : A string
```
#### Output:
#
```sh
Output: String Converted to upper case
```
### Testcases
| Input | Output |
| ------ | ------ |
| "abc" | "ABC" |
| "hi there"| "HI THERE" |


----------------------------------------------
----------------------------------------------

#### P8: Return the sum of duplicates elements from the given List
 Ex. L = [3, 5, 6, 11, 12, 3, 5, 2]

Output = 8 (3+5)

#### Input:
#
```sh
Input : A list with repetetive elements
```
#### Output:
#
```sh
Output : Sum of the elements which are repeating
```
### Testcases
| Input | Output |
| ------ | ------ |
| [2,4,5,2,4] | 6 |
| [1,3,5] | 0 |


-----------------------------------------------
-----------------------------------------------

#### P9: Count the subsequence “AG” in the given string.
Ex. S = “BCAHGBNAJKGTYUALKWG”

Output: 6

#### Input:
#
```sh
Input : Take a long string 
```
#### Output:
#
```sh
Output : Count total number of repetetive elements
```
### Testcases
| Input | Output |
| ------ | ------ |
| "WERTWEERRT" | 10 |
| "ABCBCDFGHJ" | 4 |


-----------------------------------------------
----------------------------------------------


#### P10: Find the max sum of sub array
Ex L = [5, 4, 7, -2, 5, 0, 6, 9, 15, -3]

Output = 49
#### Input:
#
```sh
Input : Array of positive as well as negative value
```
#### Output:
#
```sh
Output : Max sum of sub arrays
```
#### Testcases
| Input | Output |
| ------ | ------ |
| [5, 4, 7, -2, 5, 0, 6, 9, 15, -3] | 49 |

-----------------------------------------------
-----------------------------------------------


#### P11: Return product of minimum of odd and maximum of even from a given list.
Sample = [7, 5,  2, 3, 12, 9, 15, 24]

Output = 72        (24 max even * 3 min odd)

#### Input:
#
```sh
Input : Take a list
```
#### Output:
#
```sh
Output : Product of (max of even) and (min of odd)
```

### Testcases
| Input | Output |
| ------ | ------ |
|[7, 5,  2, 3, 12, 9, 15, 24]| 72 |
|[2, 4, 6, 1, 3, 5] | 30 |


-----------------------------------------------
-----------------------------------------------

#### P12: Create a simulation program for Hot Potato Game.
You can develop with your ideas. Just take care of the following things:
- At least one person must remove from each round.
- Display name in the console that which user has a hot potato.
- Each user holds a potato for random seconds between 0.1 to 3.0
- Each round starts after 3 seconds of the previous elimination.
- Each round stops at random seconds between 5 to 20.
- Display the name of the winner.

#### Input:
#
```sh
Input : Number of players in list
```
#### Output:
#
```sh
Output : Prints player that were out of game and lastly the winner of the game.
```


-----------------------------------------------
-----------------------------------------------

#### P13: Return the array which contains the elements which are greater than from its right side
Sample = [5, 17, 2, 6, 3]

Output = [17, 6, 3] 

#### Input:
#
```sh
Input : Take a list
```
#### Output:
#
```sh
Output : Elements that are greater than the elements from its ride side
```
### Testcases
| Input | Output |
| ------ | ------ |
| [5, 17, 2, 6, 3] | [17, 6, 3] |
| [3, 5, 13 ,4, 1]| [13, 4, 1]|


-----------------------------------------------
-----------------------------------------------


#### P14: Add 1 to given list elements. Do not use string conversion.
Sample = [1, 2, 3]

Output = [1, 2, 4]

#### Input:
#
```sh
Input : List of random elements
```
#### Output:
#
```sh
Output : Sum in the form of list on adding 1 to the list
```
### Testcases
| Input | Output |
| ------ | ------ |
| [1, 2, 3] | [1, 2, 4] |
| [9, 9, 9] | [1, 0, 0, 0] |


-----------------------------------------------
-----------------------------------------------

#### P15: Calculate the sum of the major and minor diagonals of the given matrix
A = [   [2, 0, 7],
        [4, 1, 9],
        [8, 1, -1], 
    ]

ans = 2, 16

#### Input:
#
```sh
Input : NxN matrix
```
#### Output:
#
```sh
Output : sum of major diagonal, sum of minor diagonal
```
### Testcases
| Input | Output |
| ------ | ------ |
| [ [2, 0, 7], [4, 1, 9], [8, 1, -1] ] | 2, 16 |
| [ [2, 0, 7, 4], [4, 1, 9, 3], [8, 1, -1, 2], [1, 2, 1, 5] ] | 7, 15 |


-----------------------------------------------
-----------------------------------------------

#### P16: Find the elements of the given list which are exactly the same as the entire product of the list except itself
A = [1, 5, 1, 10, 50]   Ans = 50

A = [1, 2, 4, 8, 1]     Ans = 8

#### Input:
#
```sh
Input : A list
```
#### Output:
#
```sh
Output : product of all the elements of list except itself 
```
### Testcases
| Input | Output |
| ------ | ------ |
| [1, 5, 1, 10, 50] | 50 |
| [1, 2, 4, 8, 1]   | 8 |


-----------------------------------------------
-----------------------------------------------

#### P17: Print reverse string using recursion
A = "helloworld"

ans = "dlrowolleh"

#### Input:
#
```sh
Input : string
```
#### Output:
#
```sh
Output : reverse of string  
```
### Testcases
| Input | Output |
| ------ | ------ |
| "helloworld" | "dlrowolleh" |
| "kshitij"   | "jitihsk" |


-----------------------------------------------
-----------------------------------------------

#### P18: Find the majority element of the given list.
Majority element: count of the element > N/2

N = length of list

A = [5, 2, 3, 5, 1, 5, 1, 2, 5, 5, 5]

Ans = 5

#### Input:
#
```sh
Input : a list of repetitive elements
```
#### Output:
#
```sh
Output : count of any element greater than half the length of list 
```
### Testcases
| Input | Output |
| ------ | ------ |
| [5, 2, 3, 5, 1, 5, 1, 2, 5, 5, 5] | 5 |
| [1, 1, 1, 3, 5, 1, 8, 1] | 1 |


-----------------------------------------------
-----------------------------------------------


#### P19: Find the overlapping area of two rectangles
Rectangles can be in any direction

A = 2     E = 4  --  left point

B = 2      F = 4  --  top point

C = 6      G = 8  -- right point

D = 6      H = 8  --  bottom point

Ans = 4

#### Input:
#
```sh
Input : co-ordinates of two rectangle
```
#### Output:
#
```sh
Output : area of overlapped rectangle 
```
### Testcases
| Input | Output |
| ------ | ------ |
| (2,2), (4,4), (6,6), (8,8) | 4 |
| (0,0), (2,2), (1.5,1), (3,3) | 0.5 |


-----------------------------------------------
-----------------------------------------------