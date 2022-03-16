#Replace all special characters with space using regex

import re

string = "A!B@C#D$E^F&G*Hello"

regex = r'[!@#$^&*]'
match = re.sub(regex," ",string)
print(match)