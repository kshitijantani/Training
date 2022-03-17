# Return the sum of duplicates elements from the given List
# 	Ex. L = [3, 5, 6, 11, 12, 3, 5, 2]
# 	Output = 8 (3+5)

list = [3, 5, 2, 11, 12, 3, 5, 2]

list1 = []
count_element = 0

for i in list:
    if i in list1:
        count_element += i
    else:
        list1.append(i)

print("Output: ",count_element)