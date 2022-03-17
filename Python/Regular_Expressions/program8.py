# Split the given input string on one or more repeated sequences of cat using regex
# Sample input: firecatlioncatcatcatbearcatcatparrot
# Sample output: ['fire', 'lion', 'bear', 'parrot']

import re

string = "firecatlioncatcatcatbearcatcatparrot"

x = re.split(r'(?:cat)+',string)

print(x)