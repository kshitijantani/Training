# Write a Python program to find common divisors between two numbers in a given pair

num1 = 5
num2 = 25

def common_divisor(num1,num2):
    if(num1 == 0):
        return num2
    elif(num2 == 0):
        return num1
    return(common_divisor(num2, num1 % num2))


if(common_divisor(num1,num2)):
    print("Common divisor of",num1," and ",num2, ": ", common_divisor(num1,num2))
else:
    print("Nmber is zero")