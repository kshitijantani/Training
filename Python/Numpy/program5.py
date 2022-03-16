# Write a NumPy program to compute the eigenvalues and eigenvectors of a given square array.
import numpy as np

#create a sqaure array
array = np.array([[1,0], [4,5]])

#variables for eigen-value and eigen-vector
value,vector = np.linalg.eig(array)

#print result of eigen values and vectors
print("Eigen-values of given square array: \n",value)
print("Eigen-vectors of given square array: \n",vector)