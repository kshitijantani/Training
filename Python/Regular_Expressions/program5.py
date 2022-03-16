# Write a regular expression to get only the part of the email 
# before the "@" sign and include the "@" sign
import re

string = "abc12_34@yahoo.com"

regex = r'[a-zA-Z._0-9]+@'

match = re.findall(regex, string)
print(match)