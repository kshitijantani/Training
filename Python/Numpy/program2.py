# Write a NumPy program to compute the outer product of two given vectors.

import numpy as np

#create two vectors
vector1 = np.array([2,3,4])
vector2 = np.array([10,50,100])

#variable that stores result of outer product
result = np.outer(vector1, vector2)

#Compute the outer product
print("Outer product of two given vectors is: \n", result)