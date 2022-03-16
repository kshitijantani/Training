## Numpy

#### P1: Write a NumPy program to compute the multiplication of two given matrices.
#### Input
```
x = nxn matrix
y = mxm matrix
```

#### Output
```
Output: element-wise product 
```

#### Test cases
```
x  = [1,2,3,4]         y = [5,5,5,5] 
     [10,20,30,40]         [1,1,1,1]
```
```
Ouput: [[ 5 10 15 20]
        [10 20 30 40]]
```

#### P2: Write a NumPy program to compute the outer product of two given vectors.
#### Input
```
x = array
y = array
```

#### Output
```
Output: element-wise product 
```

#### Test cases
```
x  = [2,3,4]        y = [10,50,100] 
```
```
Ouput:  [[ 20 100 200]
        [ 30 150 300]
        [ 40 200 400]]
```


#### P3: Write a NumPy program to compute the cross-product of two given vectors.
#### Input
```
x = nxn matrix
y = mxm matrix
```

#### Output
```
Output: every element product 
```

#### Test cases
```
x = [[2,3]             y = [[9,7]
    [6,5]]                  [3,8]]
```
```
Output: [-13  33]
```


#### P4: Write a NumPy program to compute the determinant of a given square array.

#### Input
```
x = nxn matrix
```

#### Output
```
Output: determinant value of matrix 
```

#### Test cases
```
x = [[16,15,3]
    [4,2,10]
    [1,1,1]]
```
```
Output: -32
```


#### P5: Write a NumPy program to compute the eigenvalues and eigenvectors of a given square array.

#### Input
```
x = nxn matrix
```

#### Output
```
Output: eigen value and vectors
```

#### Test cases
```
x = [[1,0]
    [4,5]]
```
```
Output:
eigen-value = [5. 1.]
eigen-vector = [[ 0. 0.70710678]
                [ 1. -0.70710678]]
```

#### P6: Write a NumPy program to compute the inverse of a given matrix.

#### Input
```
x = nxn matrix
```

#### Output
```
Output: inverse of matrix
```

#### Test cases
```
x = [3,4]
    [60,34]]
```
```
Output:  [[-0.24637681  0.02898551]
            [ 0.43478261 -0.02173913]]
```


#### P7: Write a NumPy program to compute the sum of the diagonal elements of a given array.

#### Input
```
x = nxn matrix
```

#### Output
```
Output: sum of diagonal
```

#### Test cases
```
x = [[1,0,1]
    [2,4,2]
    [3,6,3]]
```
```
Output: 8
```