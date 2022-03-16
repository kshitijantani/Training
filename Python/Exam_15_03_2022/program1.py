# 1. Finding the sum of all digits of a number until the sum becomes a single digit.
# Examples. 10589=>5 , 121=>4, 99=>9, 10=>1

input_number = int(input("Enter 6 digits number: "))

if input_number == 0:
    print(input_number)
elif (input_number % 9 == 0):
    print("9")
else:
    ans=input_number % 9
    print(ans)



        
