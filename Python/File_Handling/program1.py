# You have two files named questions.txt and answer.txt. 
# You need to create a file that contains questions and answers. 
# But both input files contain random questions followed by a numeric value. 
# You need to match both values and then copy the question-answer pair in a new file.
# -> Optimize code properly.
# Sample file: question.txt:
# 3. What is your Hobby?
# 1. What is your name?
# 2. Where are you from?
# Sample file: answer.txt:
# 	2. India
# 	1. Bob
# 	3. Swimming
# Output file:
# 1. What is your name?
# Bob
# 2. Where are you from?
# 	India
# 	3. What is your Hobby?
# 	Swimming
file = open("question.txt","r")
# file.write("3. What is your hobby? \n1. What is your name? \n2. Where are you from?\n")

file = open("answer.txt","r")
# # file.write("2. India \n1. Bob \n3. Swimming")

file = open("question_answer.txt","w")
# # file.close()

with open("question.txt", "r") as q:
    with open("answer.txt", "r") as a:
        with open("question_answer.txt", "w") as q_a:
        
            que = q.readlines()
            ans = a.readlines()
            # print(que)
            for line in range(len(que)):
                sort_que = que.sort(key = lambda x : int(x[0]))
                sort_ans = ans.sort(key = lambda x : int(x[0]))
                q_a.write(que[line])
                q_a.write(ans[line])

file.close()
