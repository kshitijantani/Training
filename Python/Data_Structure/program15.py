# Calculate the sum of the major and minor diagonals of the given matrix
# A = [ [2, 0, 7],
#       [4, 1, 9],
#       [8, 1, -1], 
#      ]
# ans = 2, 16
A = [ [2, 0, 7],
      [4, 1, 9],
      [8, 1, -1], 
     ]
     
sum_major = 0
sum_minor = 0
major = 0
minor = len(A)- 1

for i in A:
    sum_major = sum_major + i[major]
    sum_minor = sum_minor + i[minor]
    major += 1
    minor -= 1

print("Output: ",sum_major, sum_minor)