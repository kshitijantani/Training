# Write a NumPy program to compute the inverse of a given matrix.
import numpy as np

#create a matrix
matrix = np.array([[3,4],[60,34]])

#variable stores inverse of matrix
inv = np.linalg.inv(matrix)
print("Inverse of given matrix: \n",inv)