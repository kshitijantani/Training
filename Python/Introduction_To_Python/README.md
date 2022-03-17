# Introduction to python
#### P1:- Write a Python function that takes a sequence of numbers and     determines whether all the numbers are different from each other.
#### Input:
#
```sh
list = [1,2,3,7,4,6]
x = 3
y = 4
```
#### Output:
#
```sh
True
```
### Testcases
| Input | Output |
| ------ | ------ |
| [1,2,3,7,4,6] | True |
| [1,2,3,2,4,6] | False |


#### P2:- Write a Python program to add two positive integers without using the '+' operator

#### Input:
#
```sh
x = 10
y = 20
```
#### Output:
#
```sh
ans = 30
```

#### Explanation:
Using bitwise operators like & , | , ^ , << , >>

### Testcases
| Input | Output |
| ------ | ------ |
| 10 20 | 30 |
| 30 40 | 70 |


#### P3:- Write a Python program to find common divisors between two numbers in a given pair

#### Input:
#
```sh
x = 25
y = 5
```
#### Output:
#
```sh
gcd = 5
```

### Testcases
| Input | Output |
| ------ | ------ |
| 25 5 | 5 |
| 10 6 | 2 |


#### P4: Write a Python program to filter(even and odd) a list of integers using Lambda. 
##### * Original list of integers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
##### * Even numbers from the said list: [2, 4, 6, 8, 10]
##### * Odd numbers from the said list: [1, 3, 5, 7, 9]

#### Input:
#
```sh
x = 4
x = 5
```
#### Output:
#
```sh
Even = [2,4] 
Odd = [1,3,5]
```

#### Explanation:
x = lambda a : a % x

### Testcases
| Input | Output |
| ------ | ------ |
| [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  | Even = [2 ,4 ,6 ,8 ,10] |
| [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  | Odd = [1, 3, 5, 7, 9] |


#### P5: Write a Python program to extract year, month, date and time using Lambda.
#### Sample Output:
 2020-01-15 09:03:32.744178
 2020
 1
 15
 09:03:32.744178

#### Input:
#
```sh
Time, Date, Month, Year
```
#### Output:
#
```sh
Time: 09:03:32.744178
Date: 15
Month: 1
Year: 2020
```

#### Explanation:
By using datetime library

### Testcases
| Input | Output |
| ------ | ------ |
| Time | *Current Time* |
| Year  | *Current Year* |




