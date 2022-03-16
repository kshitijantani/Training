# Find the intersection (common) of two sets and remove those elements from the first set.
# Sample: {23, 42, 65, 57, 78, 83, 29}
#         {57, 83, 29, 67, 73, 43, 48}
# Result: {57, 83, 29}, {65, 42, 78, 23}

dict1 = {23, 42, 65, 57, 78, 83, 29}
dict2 = {57, 83, 29, 67, 73, 43, 48}

#intersection of two dictionary
print(dict1 & dict2 ,",",dict1-dict2)