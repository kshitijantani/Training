# Write a NumPy program to compute the determinant of a given square array.

import numpy as np

#create a square matrix
matrix = np.array([[16,15,3], [4,2,10], [1,1,1]]) 

#variable that stores result determinant
determinant = np.linalg.det(matrix)

#Print the determinant of given square matrix
print("Determinant of given square matrix: ", int(determinant))