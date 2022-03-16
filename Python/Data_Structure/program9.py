# Count the subsequence “AG” in the given string.
# 	Ex. S = “BCAHGBNAJKGTYUALKWG”
# 	Output: 6

string = "BCAHGBNAJKGTYUALKWG"
sub_seq =  "AG"
count_seq = 0

# count subsequence after every first alphabet given in subsequence 
for i in string:
    if i == sub_seq[0]:
        count_seq += 1
    elif i == sub_seq[1]:
        count_seq += 1

print("Output: ",count_seq)
