# Filter all elements that contain a sequence of lowercase alphabets followed by - followed by digits. 
# They can be optionally surrounded by {{ and }}. Any partial match shouldn't be part of the output.
# Sample input: 
# ['{{apple-150}}', '{{mango2-100}}', '{{cherry-200', 'grape-87']
# Sample output: 
# ['{{apple-150}}', 'grape-87']

import re

List = ['{{apple-150}}', '{{mango2-100}}', '{{cherry-200', 'grape-87']

regex = r'^{{+[a-z]+[-][0-9]+}}$'

for i in List:
    # print(i)
    if re.findall(regex,i):
        print(i)
    elif re.findall(r'^[a-z]+[-]+[0-9]',i):
        print(i)