# Loop through the list and apply the regex to each element 
# so that only items ending with a semicolon (;) are matched
import re

List = ['Joan', 'likes', 'eggs;', 'Jennifer', 'does', 'not.']

for word in List:
    if re.search(r';$',word):
        print(word)