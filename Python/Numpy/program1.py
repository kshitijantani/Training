#Write a NumPy program to compute the multiplication of two given matrices.

import numpy as np

#----If given matrices are of same shape and dimensions-----
#create two rank 2 array
array1 = np.array([[1,2,3,4],[10,20,30,40]])

array2 = np.array([[5,5,5,5], [1,1,1,1]])

#variable that stores the multiplied matrices
multiplied_array = np.multiply(array1,array2)

#Print multiplication of two matrices
print("\nMultiplication of two matrices: \n", multiplied_array)


#----If given matrices are of different shape and dimensions-----
#create two rank 2 array
array1 = np.array([[1,2,3],[10,20,30]])
array2 = np.array([[5,5],[1,1],[2,2]])

#Print multiplication of two matrices
print("\nMultiplication of two different matrices: \n", array1.dot(array2))
