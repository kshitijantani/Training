# Find the elements of the given list which are exactly the same as 
# the entire product of the list except itself
# A = [1, 5, 1, 10, 50]
# Ans = 50
# A = [1, 2, 4, 8, 1]
# Ans = 8

# A = [1, 5, 1, 10, 50]
A = [1, 2, 4, 8, 1]

count  = 0
for i in range(len(A)):
    count = count + 1
    product = 1
    for j in range(len(A)):
        if i != j:
            product = product * A[j]
            # print(product)
    if A[i] == product:
        print(A[i])
    # count = 0
