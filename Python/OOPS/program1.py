# Take the word and its meaning as input from the user.
# -> Create a class named flashcard, use the __init__() function to assign values for Word and Meaning.
# -> Now use the __str__() function to return a string that contains the word and meaning.
# -> Store the returned strings in a list named flash.
# -> Use a while loop to print all the stored flashcards.
# -> Add proper error handling
# 		-> Result image is attached in thread

list = []
class flashcard():
    def __init__(self, word, meaning):
        self.word = word
        self.meaning = meaning

    def __str__ (self):
        return ' ('+ str(self.word) + ' : ' + self.meaning + ')'.format(i)

print("Welcome to Flashcard Application!\n")
print("Enter a value from below:\n0 to continue \n1 to see the list \n2 to quit\n\n")

while True:
    try: 
        val = int(input("Enter a value: "))
        if val == 0:
            full_forms = flashcard(str(input("Enter a word: ")), str(input("Enter meaning of the word: ")))
            list.append(full_forms)
        elif val == 1:
            i = 0
            while i < len(list):
                print(i+1, list[i])
                i += 1
        elif val == 2:
            break            
        else:
            raise
    except Exception as error:
       print("Error! Try again.")         


