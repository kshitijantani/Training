# Find the numbers starting with 212 from a string.

import re

string = "Here, 212564 is a number not equal to 21287956"

for i in string.split():
    if re.findall(r'^212[0-9]', i):
        print(i)