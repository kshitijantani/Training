# Write a Python program to filter(even and odd) a list of integers using Lambda.
#  Original list of integers:
#  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#  Even numbers from the said list:
#  [2, 4, 6, 8, 10]
#  Odd numbers from the said list:
#  [1, 3, 5, 7, 9]

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd = []
even = []

for i in list:
        ans = lambda a : a % 2
        if ans(i) == 0:
            even.append(i)
        else:
            odd.append(i)

print("Even number list: ",even)
print("Odd number list: ",odd)