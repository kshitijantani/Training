# Replace the space character that occurs after a word ending with a or r with a newline character
# Sample input: 
# -- area not a _a2_ roar took 22
# Sample output:
# -- area
# -- not a
# -- _a2_ roar
# -- took 22

import re
string = 'area not a _a2_ roar took 22'

for word in string.split(" "):
    if re.search(r'a$',word) or re.search(r'r$',word):
        print(word,end = '\n')
    else:
        print(word, end = " ")


