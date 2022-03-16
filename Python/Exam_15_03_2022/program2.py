# 2. Check is given number is prime or not

number = int(input("Enter number to check prime or not: "))
factor_list = []

for i in range(2,number):
    if number % i == 0:
        factor_list.append(i)

if len(factor_list) < 2:
    print("Given number {} is prime.".format(number))
else:
    print("Not prime")
