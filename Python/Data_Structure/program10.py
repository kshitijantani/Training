# Find the max sum of sub array
# 			Ex L = [5, 4, 7, -2, 5, 0, 6, 9, 15, -3]
# 			Output = 49

list = [5, 4, 7, -2, 5, 0, 6, 9, 15, -3]

def max_sum_subarray(list, len_list):
    """ function to find maximum sum of subarray"""

    sum_array = 0
    max_sum = 0

    # loop to check elements
    for i in range(0,len_list):
        max_sum = max_sum + list[i]
        
        # if sum of subarray is less then latest maximum sum
        if sum_array < max_sum:
            sum_array = max_sum
        
        # if latest maximum sum is negative or less than zero 
        if max_sum < 0:
            max_sum = 0
    print("Output: ",sum_array)

# called function
max_sum_subarray(list,len(list))