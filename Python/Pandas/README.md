# Pandas Library

### P1. 
1. From the given data set print the first and last five rows
2. Clean data and update the CSV file (Replace all column values which contain ‘?’ and n.a with NaN.)
3. Find the most expensive car company name
4. Print All Toyota Cars details
5. Count total car per company
6. Find each company’s Highest price car
7. Find the average mileage of each car making company
8. Sort all cars by Price column

### Input:
```
- Read dataset from csv file
- And functions to perform tasks
```

### Output:
```
Shows the data as per given tasks
```

### Explaination
1. Use **df[ : n]**, where df is dataframe of the dataset and n is number of rows to be printed
2. Use **df.replace(to_replace=, value=)**, here, add two values to ***to_replace*** and ***value*** to be replaced
3. Use **df[['column_name']]** and then compare it with other data in the same column using max function.
4. Use **df.groupby()** and **df.get_group()** functions for grouping the same items.
5. Use **df['column_name'].value_counts()** function for 
6. Add max function after grouping some items.
7. Use **df.['column_name'].mean(axis=)** function, where ***mean*** function gives average of all values and ***axis*** is for column(1) and rows(0)
8. Use **df.sort_values(by=['column'])** function to sort all the data of given column.

---

### P2. 
1. Write a Pandas program to create today's date.

2. Write a Pandas program to calculate all the sighting days of the unidentified flying object (ufo) from the current date.

### Input:
```
Read dataset from csv file (Can use kaggle as well)
```

### Output:
```
Print the data as per task
```

### Explaination:
1. import datetime and use date.today()
2. Use **df.to_datetime(df['column_name'])** function to get date data from the column in particular format. Use comaprison operators for the task and **df.loc[value]** for printing data as per values in column.


