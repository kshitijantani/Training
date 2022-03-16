# Find the words with exactly 8 letters from paragraph using regex

import re

para = """ Then came the night of the first falling star. ,
        It was seen early in the morning, rushing over Winchester eastward, 
        a line of flame high in the atmosphere. Hundreds must have seen,
         it and taken it for an ordinary falling star. It seemed that it fell,
          to earth about one hundred miles east of him."""

regex = r'\b[a-zA-z]{8}\b'

match = re.findall(regex, para)
print(match)