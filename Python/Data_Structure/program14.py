# Add 1 to given list elements. Do not use string conversion.
# 	Sample = [1, 2, 3]
#   Output = [1, 2, 4]

# L = [1,2,3]
list = [9,9,9]
l = []
l2 = []
end_list =  len(list) - 1
carry_sum = 1

for i in range(len(list)):
    var = 10 ** end_list
    val = list[i]*var
    carry_sum = carry_sum + val
    # print(sum)
    end_list -= 1

while carry_sum > 0:
    var1 = carry_sum%10
    l.append(var1)
    carry_sum = carry_sum//10

for i in range(len(l)-1,-1,-1):
    l2.append(l[i])

print(l2)

