# Write a Python program to add two positive integers without using the '+' operator

def addition(num1, num2):
    while(num2 != 0):
        add = num1 & num2   #and operator
        num1 = num1 ^ num2  #xor operator
        num2 = add << 1     #shift operator

    return num1

print(addition(10,20))