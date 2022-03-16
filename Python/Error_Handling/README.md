# Error Handling
### P1: You're going to write an interactive calculator!
User input is assumed to be a formula that consists of a number, an operator (at least + and -), and another number, separated by white space

(e.g. 1 + --> Split user input and check whether the resulting list is valid:

--If the input does not consist of 3 elements, raise a FormulaError, which is a custom Exception.

--Try to convert the first and third input to a float (like so: float_value = float(str_value)). 

--Catch any ValueError that occurs, and instead raise a FormulaError

--If the second input is not '+' or '-', again raise a FormulaError

--If the input is valid, perform the calculation and print out the result.

--The user is then prompted to provide new input, and so on until the user enters quit.

--Example image in attached in thread

#### Input:
#
```sh
Input : 1 + 2
```
#### Output:
#
```sh
Output : 3
```
### Testcases
| Input | Output |
| ------ | ------ |
| 1 + 3 | 4.0 |
| 4 - 2 | 2.0 |
| a + b | print error |
| 2 3   | print error |


-----------------------------------------------
-----------------------------------------------

### P2: Create while loop which increase counter by one every second.

-- Start count from 0

-- Stop while loop when counter is greater than 500

-- Program must not stop on any keyboard press. 

*(Not even ctrl + c or ctrl + x)*


#### Input:
#
```sh
Input : No input
```
#### Output:
#
```sh
Output : Does not stop untill 500 even if on pressing any keys on keyboard 
```
#### Explanation:
It will print 1 to 500 in time interval of 1 sec and will not terminate by pressing any keys on keyboard. i.e (Ctrl+X), (Ctrl+C)


-----------------------------------------------
-----------------------------------------------