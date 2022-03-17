# Regular Expresssions

### P1. Write a regular expression to search digits inside a string

### Input:
```
string = '1Dog25Tiger4Rabbit3Cat2Elephant'
```

### Output:
```
['1', '25', '4', '3', '2']
```
---

### P2. Find the words with exactly 8 letters from paragraph using regex

### Input:
```

paragraph = """Then came the night of the first falling star.It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him."""

```
### Output:
```
['eastward', 'Hundreds', 'ordinary']
```

---

### P3. Find the numbers starting with 212 from a string.

### Input:
```
string = "Here, 212 is a number not equal to 21287956"
```

### Output:
```
21287956
```
---

### P4. Loop through the list and apply the regex to each element so that only items ending with a semicolon (;) are matched

### Input:
```
List = ['Joan', 'likes', 'eggs;', 'Jennifer', 'does', 'not.']
```

### Output:
```
eggs;
```
---

### P5. Write a regular expression to get only the part of the email before the "@" sign and include the "@" sign

### Input:
```
string = "abc12_34@yahoo.com"
```
### Ouput:
```
['abc12_34@']
```
---

### P6. Replace all special characters with space using regex

### Input:
```
string = "A!B@C#D$E^F&G*Hello"

```
### Output;
```
A B C D E F G Hello
```
---

### P7. Replace the space character that occurs after a word ending with a or r with a newline character
- Sample input:
    - area not a _a2_ roar took 22
- Sample output:
    - area
    - not s
    - a
    - _a2_ roar
    - took 22

### Input:
```
string = 'area not a _a2_ roar took 22'
```

### Output:
```
area
not a
_a2_ roar
```
---

### P8. Split the given input string on one or more repeated sequences of cat using regex
- Sample input: 

    firecatlioncatcatcatbearcatcatparrot
- Sample output:

    ['fire', 'lion', 'bear', 'parrot']

### Input:
```
string = "firecatlioncatcatcatbearcatcatparrot"
```

### Output:
```
['fire', 'lion', 'bear', 'parrot']
```
---

### P9. Filter all elements that contain a sequence of lowercase alphabets followed by - followed by digits. 
-   They can be optionally surrounded by {{ and }}. Any partial match shouldn't be part of the output.
-   Sample input: 
    
    ['{{apple-150}}', '{{mango2-100}}', '{{cherry-200', 'grape-87']
-   Sample output: 
    
    ['{{apple-150}}', 'grape-87']

### Input:
```
List = ['{{apple-150}}', '{{mango2-100}}', '{{cherry-200', 'grape-87']
```

### Output:
```
{{apple-150}}
grape-87
```
---

