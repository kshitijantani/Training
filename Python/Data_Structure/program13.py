# Return the array which contains the elements which are greater than from its right side
# 	Sample = [5, 17, 2, 6, 3]
# 	Output = [17, 6, 3] 

list = [5, 17, 2, 6, 3]
new_list = []

# appends the last element of the list
new_list.append(list[len(list)-1])
end_list = 0

# check elements from list from the end
for i in range(len(list)-2,-1,-1):

    # compares with last element
    if list[i] > list[end_list]:

        # inserts at first position
        new_list.insert(0,list[i])

print("Output: ",new_list)
