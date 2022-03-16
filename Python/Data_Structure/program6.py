# Create a function to reverse the entire list without any function 
# and also do not use any indexing or slicing shortcut. 
# Time Complexity O(logn)

list = [1,2,3,4,5,6,7]

len_list = len(list)

# index 0
start_list = 0

# last index 
end_list = len_list - 1
 
# compares starting and ending values
while start_list < end_list:

    # swap two values
    list[start_list], list[end_list] = list[end_list], list[start_list]
    start_list += 1
    end_list -= 1

print("Output: ",list)