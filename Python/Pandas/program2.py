# Write a Pandas program to create today's date
# Write a Pandas program to calculate all the sighting days of the unidentified flying object (ufo) 
# from the current date.

import pandas as pd
from datetime import date, datetime

# 1. Write a Pandas program to create today's date
now = pd.to_datetime(str(date.today()), format='%Y-%m-%d').date()

print("Today's date:", now)
print()

# 2. Write a Pandas program to calculate all the sighting days of the unidentified flying object (ufo) from the current date.

# Read given csv file
ufo_data = pd.read_csv("/home/woc/Kshitij_Antani/Training/Python/Assignments/Pandas/ufo_sighting_data.csv", low_memory= False)

# Input from the user in yyyy-mm-dd format
user_date = str(input("Enter date of birth (YYYY-MM-DD): "))
dates = datetime.strptime(user_date,"%Y-%m-%d")

print("UFO sightings after {}:".format(user_date))

# Get date documented column from csv file
ufo_data['date_documented'] = pd.to_datetime(ufo_data['date_documented'])

# Check whether user given date exist in column
# If exist then print all data after that date
exist_date = (ufo_data['date_documented'] < user_date)
data_from_date = ufo_data.loc[exist_date]
print(data_from_date)

# Calculate total sighting data after user given data
print(len(data_from_date))

