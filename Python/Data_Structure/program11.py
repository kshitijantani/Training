# Return product of minimum of odd and maximum of even from a given list.
#        Sample = [7, 5, 2, 3, 12, 9, 15, 24]
#        Output = 72      (24 max even * 3 min odd)

list = [7, 5, 2, 3, 12, 9, 15, 24]
min_odd = []
max_even = []

# to add elements as per odd and even
for i in list:
    if i % 2 == 0:
        max_even.append(i)
        
    elif i % 1 == 0:
        min_odd.append(i)

# sorted both the lists in ascending oreder       
min_odd.sort()
max_even.sort()

# last element is max
even = max_even[-1]

# first element is min
odd = min_odd[0]

print("Output: ",even * odd)