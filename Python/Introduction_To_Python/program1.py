# Write a Python function that takes a sequence of numbers and determines 
# whether all the numbers are different from each other.

list = [1,2,3,7,4,6]

def sequence(list):
    sum1 = 0
    for i in range(len(list)):
        for x in range(len(list)):
            if x != i:
                if list[i] == list[x]:
                    sum1  += 1
                else:
                    sum1 = sum1 
    if sum1 < 1:
        return True
    else:
        return False

print(sequence(list))