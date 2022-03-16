# Write a regular expression to search digits inside a string

import re

string = "1Dog25Tiger4Rabbit3Cat2Elephant"

match = re.findall(r'\d+',string)
print(match)