# Write a NumPy program to compute the sum of the diagonal elements of a given array.

import numpy as np

#create a matrix
array1 = np.array([[1,0,1],[2,4,2],[3,6,3]])

diagonal = np.diag(array1)

print("Diagonal of given matrix is: ",np.sum(diagonal))
