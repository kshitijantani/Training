# Convert stringny lower cstringse string to upper cstringse without in-built python functions.
# 	Ex. string = “abcdef ghi”
# 	Output: “ABCDEF GHI

string = 'abcdef ghi'

for i in string:

    #convert lowercase to uppercase
    string1 = ord(i) - 32

    if string1 == 0:
        # if element is alphabet
        string2 = string1 + 32
        print(chr(string2), end = "")
        
    elif string1 > 0:
        # if element is special character
        print(chr(string1), end = "")