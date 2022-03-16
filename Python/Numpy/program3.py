# Write a NumPy program to compute the cross-product of two given vectors.

import numpy as np

#create two vectors
vector1 = np.array([[2,3],[6,5]])
vector2 = np.array([[9,7],[3,8]])

print("Cross product of two given vectors: ", np.cross(vector1, vector2))