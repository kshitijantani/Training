# Find the majority element of the given list.
# Majority element: count of the element > N/2
# N = length of list
# A = [5, 2, 3, 5, 1, 5, 1, 2, 5, 5, 5]
# Ans = 5

A = [5, 2, 3, 5, 1, 5, 1, 2, 5, 5, 5]
N = len(A)//2
s = {}

for i in A:
    if i in s:
        s[i] += 1
    else:
        s[i] = 1
if s[i]>N:
    print(i)
