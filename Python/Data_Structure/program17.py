# Print reverse string using recursion
# A = "helloworld"
# ans = "dlrowolleh"

A = "helloworld"
output = ""
def recursion(A):
    if len(A) == 0:
        return
    temp = A[0]
    recursion(A[1:])
    print(temp, end = "")

recursion(A)