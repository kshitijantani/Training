# Count the occurrence of each element from a list
# Sample: [11, 45, 8, 11, 23, 45, 23, 45, 89]
# Result: {11: 2, 45: 3, 8: 1, 23: 2, 89: 1}

list1 = [11, 45, 8, 11, 23, 45, 23, 45, 89]
dictionary = {}

# #Using count function
for i in list1: 
    if i in dictionary:
        dictionary[i] += 1
    else:
        dictionary[i] = 1

print(dictionary)



