# Create class Cards with two list suits (Hearts, Diamonds, Clubs, Spades) and  
# values (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)
# -> Create a class deck. That contains a method to get a card set containing 52 elements.
# -> Create class shuffle. That contains two methods to shuffle given cards 
#    and remove/pick a single card.
# -> Create two objects of the above class as players. Each player pick/remove 5 cards
#    from the shuffle cards. Total points of both players and display name of winner player. 

import random

class Cards():

    def __init__(self, number):
        self.number = number

    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    points = {"A":16, "K":12, "Q":11, "J":10, "10":10, "9":9, "8":8, "7":7, "6":6, "5":5, "4":4, "3":3, "2":2, "1":1}

class Deck(Cards):
    def deck_values(self):
        card_set =[]
        for i in Cards.suits:
            for j in Cards.values:
                card_set.append((i,j))
        return card_set 

class Shuffle(Deck):
    def suf_card(self):
        list = self.deck_values()
        random.shuffle(list)
        return list
        
    def remove_card(self):
        shuffled_list = self.suf_card()
        list1 = []
        i = 0
        points = 0

        while i < self.number:
            remove = shuffled_list[i]
            list1.append(remove)
            shuffled_list.remove(remove)
            i += 1
    

        x = Cards.points
        
        for i in list1:
            Values = i[1]
            for j in x:
                if Values == j:
                    points += x[j]
        return points


player_1 = Shuffle(5)
player_2 = Shuffle(5)

x = player_1.remove_card()
y = player_2.remove_card()

print("Total points of player 1:",x)
print("Total points of player 2:",y)


if x > y:
    print("Player 1 is Winner!")
elif x == y:
    print("Match is drawn")
else:
    print("Player 2 is Winner!")



