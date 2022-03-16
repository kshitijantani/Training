#From the given data set print the first and last five rows
# Clean data and update the CSV file (Replace all column values which contain ‘?’ and n.a with NaN.)
# Find the most expensive car company name
# Print All Toyota Cars details
# Count total car per company
# Find each company’s Highest price car
# Find the average mileage of each car making company
# Sort all cars by Price column

from numpy import NaN
import pandas as pd

automobile_data = pd.read_csv("/home/woc/Kshitij_Antani/Training/Python/Assignments/Pandas/automobile_data.csv")

# 1. From the given data set print the first and last five rows
top_5_rows = automobile_data[:5]
last_5_rows = automobile_data[:-5]
print(top_5_rows)
print()
print(last_5_rows)

# 2. Clean data and update the CSV file (Replace all column values which contain ‘?’ and n.a with NaN.)
updated_data = automobile_data.replace(to_replace = ["?","n.a"], value = NaN)
print(updated_data)

# 3. Find the most expensive car company name
updated_data.to_csv("/home/woc/Kshitij_Antani/Training/Python/Assignments/Pandas/automobile_data.csv")

price_list = updated_data[["make","price"]][updated_data.price == updated_data['price'].max()]
print(price_list)

# 4. Print All Toyota Cars details
all_toyota = updated_data.groupby(['make'])
t = all_toyota.get_group('toyota')
print(t)

# 5. Count total car per company
all_car = updated_data['make'].value_counts()
print(all_car, end = '  ')

# 6. Find each company’s Highest price car
highest_price_car = updated_data.groupby('make')['price'].max()
print(highest_price_car)

# 7. Find the average mileage of each car making company
total_mpg = updated_data[['city-mpg','highway-mpg']].mean(axis = 1)
updated_data['total-mpg'] = total_mpg

average_of_mpg = updated_data[['total-mpg']].mean(axis = 0)
print("Average of average mileage: ", average_of_mpg)

# 8. Sort all cars by Price column
sorted_all_cars = updated_data.sort_values(by = ['price'])
print(sorted_all_cars)
