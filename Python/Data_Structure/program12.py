# Create a simulation program for Hot Potato Game.
# You can develop with your ideas. Just take care of the following things:

# - At least one person must remove from each round.
# - Display name in the console that which user has a hot potato.
# - Each user holds a potato for random seconds between 0.1 to 3.0
# - Each round starts after 3 seconds of the previous elimination.
# - Each round stops at random seconds between 5 to 20.
# - Display the name of the winner.

import random, time

#list of members playing Hot Potato game
list = ['Kshitij', 'Aksh', 'Pravin', 'Prachi', 'Komal']         

print("Game starts now!")

# to print seconds on starting of new round
for i in range(3):

    print(i+1)
    # use of time.sleep function
    time.sleep(1)

# loop to remove player one by one round
for player in range(len(list)-1):

    #take random number from 5 to 20
    random_sec_round = random.randrange(5,20)                      
    var1 = 0
    var2 = 0

    while var1 <= random_sec_round:

        # take random number from 0.1 to 3.0 for individual's seconds of holding potato
        random_sec_player = round(random.uniform(0.1,3),1)          
        var1 += random_sec_player
        var2 += 1

        # removes the player from list
        if var2 == len(list):
            var2 = 0
        removed_player = list[var2]
    
    # use of remove function in list
    list.remove(removed_player)
    print(len(list))

    # to start game timing again
    if len(list) > 1:
        print("Uh-ohh '%s' lose the game.. better luck next time!\n" % removed_player)
        print("Game starts again in...")

        for i in range(3):
            print(i+1)
            time.sleep(1)

    # print the last player who wins the game from remaining two
    if len(list)==2:
        print("And the remaining two are: ", list[0]," and ",list[1])
        break

# winner
print("Woohoo! Winner of the Hot Potato game is: ", list[0])