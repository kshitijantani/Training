# Find the overlapping area of two rectangles
# Rectangles can be in any direction
# A = 2      E = 4   left point
# B = 2      F = 4   top point
# C = 6      G = 8   right point
# D = 6      H = 8   bottom point

# Ans = 4

l1 = [2, 2]
b1 = [6, 6]
l2 = [4, 4]
b2 = [8, 8]

def Area(l1, b1, l2, b2):
	x = 0
	y = 1
    
	x_d = (min(b1[x], b2[x]) - max(l1[x], l2[x]))
	y_d = (min(b1[y], b2[y]) - max(l1[y], l2[y]))

	area = 0
	if x_d > 0 and y_d > 0:
		area = x_d * y_d

	return (area)

print(Area(l1, b1, l2, b2))
