# Write a Python program to extract year, month, date and time using Lambda.
#  Sample Output:
#  2020-01-15 09:03:32.744178
#  2020
#  1
#  15
#  09:03:32.744178


import datetime 
now = datetime.datetime.now()

year = lambda y: y.year
print("Current year: ", year(now))

month = lambda m: m.month
print("Current month: ", month(now))

day = lambda d: d.day
print("Current date: ", day(now))

time = lambda t: t.time()
print("Current time: ", time(now))