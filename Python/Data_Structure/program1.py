# Slice list into 3 equal chunks and reverse each chunk
# Sample:  [11, 45, 8, 23, 14, 12, 78, 45, 89]
# Result: [[8, 45, 11], [12, 14, 23], [89, 45, 78]]

list1 = [11, 45, 8, 23, 14, 12, 78, 45, 89]
list2 = []

for i in range(0,len(list1),3):
    d = list1[i:i+3][::-1]
    list2.append(d)

print("Result: ",list2)
