# OOPS Concepts

### P1. 
Take the word and its meaning as input from the user.

- Create a class named flashcard, use the __init__() function to assign values for Word and Meaning.

- Now use the __str__() function to return a string that contains the word and meaning.

- Store the returned strings in a list named flash.

- Use a while loop to print all the stored flashcards.

- Add proper error handling
		-> Result image is attached in thread

### Input
```
word : lol
meaning : lots of laughter
```

### Output:
```
('lol:lots of laughter')
```

### Test cases

| Input | Output |
|-------|--------|
| gm good morning | ('lol:lots of laughter', 'gm:good morning')|
| k okay | ('lol:lots of laughter', 'gm:good morning', 'k:okay') |


---

### P2. Create classes according to the following class map:
- Animal => Wild => Leopard, Tiger

 	=> Pet => Dog
 	=> Canine => Fox
- Each class contains two methods to get a name and info. 

    Get the name returns the name of that animal and get the info returns hierarchy.

- For example,

    -> print(dog.get_name())  ⇒ My name is Tommy

    -> print(dog.get_info())  ⇒  I am Dog. I am Pet. I am Animal


### Input:
```
Create object and call info function
```

### Output:
```
Inheritance of class by printing statements of parent class' functions
```

### Test cases;

| Input | Output |
|-------|--------|
| print(dog.get_name()) | My name is Tommy |
| print(dog.get_info()) | I am Dog. I am Pet. I am Animal |

---


### P3. 
- Create class Cards with two list suits (Hearts, Diamonds, Clubs, Spades) and  values (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)

- Create a class deck. That contains a method to get a card set containing 52 elements.

- Create class shuffle. That contains two methods to shuffle given cards and remove/pick a single card.

- Create two objects of the above class as players. Each player pick/remove 5 cards from the shuffle cards. Total points of both players and display name of winner player. 

### Input:
```
Create two objects of person who plays the game
```

### Output:
```
Total points of the players comparing with each other
Print the winner name in the end.
```

### Test cases

| Input | 
|-------|
|1 . player_1 = Shuffle(5)   
player_2 = Shuffle(5) |

| Output |
|--------|
|1.  Total points of player 1: 50, 
Total points of player 2: 62, 
Player 2 is Winner! |

---

### P4. 
-> Create a class for Users, username, account no, mobile no, address, account balance

-> Create a class for user manager

- Manages user => Add new user, Get existing user, remove user

-> Create a class for ATM,

- Enter account no and get user if not found then show a valid message

- Show options for user operations like creating new users, View Balance. Deposit, Withdraw, Close account, etc...

- Transaction charge: 0.5 for every operation

- Account balance limit: 10000

### Input:
```
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above:
```

### Ouput:
```
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above: 1
Enter your name: kshitij
Enter your account number: 345123
Enter your mobile number: 9377402378
Enter your address: street 4, LA
Enter some account balance: 69000
Congrats!! You are member of this bank.
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above: 2
Enter account number to view balance: 345123
Your bank account's balance is: 69000
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above: 3
Enter account number:  345123
Enter deposit amount: 5600
Your current balance is 74600
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above: 4
Enter account number:  345123
Enter amount to be withdrawn: 600
Curently your account has balance: 73999.5
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above: 5
Enter account number: 345123
1: Create an account 
2: View Balance 
3: Deposit 
4: Withdraw 
5: Close account 
6: Exit
Enter a value from above: 6
```
---

### P5.
Create class Person:
- Name, DOB, City, Contact No

Create class Employee (Inherit person class)
- employee id, joining date, salary, department, post

Employee manager class

- Add/Remove Employee, Get all employees list, get employee by his name, 
get all employees by his/her department

|Task:|
| ---- |

1. Add few employees
2. Print all the employees
3. Find an employee with the name
4. Print all employees with department Finance
5. Find all employees whose salary is greater than 50000
6. Find all employees whose salary is between 50000-100000
7. Find a list of employees who are joined in the current year
8. Find all employees who are from Mirzapur
9. Find employees whose birthday in the current month
10. Sort employee list with salary in descending order

### Input:
```
Employee Management
1. Add an employee 
2. Print list of employees 
3. Find an employee 
4. Find employee with its department 
5. Find employee whose salary is greater than 50000  
6. Find list of employees whise salary is between 50000 - 100000
7. Find employee by year 
8. Find employee by place 
9. Find employee from date of birth 
10. Sorted list of employees by salary 
0. Exit
Enter a option: 
```

### Output:
```
Shows the details as per the option selected
```
---




