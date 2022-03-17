# You're going to write an interactive calculator!
# User input is assumed to be a formula that consists 
# of a number, an operator (at least + and -), and another number, separated by white space
# (e.g. 1 + --> Split user input and check whether the resulting list is valid:
# --If the input does not consist of 3 elements, raise a FormulaError, which is a custom Exception.
# --Try to convert the first and third input to a float (like so: float_value = float(str_value)). 
# --Catch any ValueError that occurs, and instead raise a FormulaError
# --If the second input is not '+' or '-', again raise a FormulaError
# --If the input is valid, perform the calculation and print out the result.
# --The user is then prompted to provide new input, and so on until the user enters quit.
# --Example image in attached in thread

class FormulaError(ValueError):
    pass

while True:
    val = list(map(str,input("Enter values: ").split()))
    try:
        if val[0] == "quit":
            break
        else: 
            val1 = float(val[0])
            op = val[1]
            val2 = float(val[2])

            if op == "+":
                    add = val1 + val2
                    print("Ans: ", add)
        
            elif op == "-":
                    sub = val1 - val2
                    print("Ans: ", sub)

    except ValueError as ver:
              print("Sorry, Try a number instead!")



    