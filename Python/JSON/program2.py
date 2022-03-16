# Write a code to load a .json file and print JSON data. 
# Display error if a file is empty or data is not in a json format. 

import json

class JSONError(Exception):
    pass

try:
    with open("Sample.json", "r") as data:
        value = json.load(data)
    print(value)
    
except:
    print("Error! There is no data in json file")
    raise JSONError