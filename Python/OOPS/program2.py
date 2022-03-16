# Create classes according to the following class map:
# -> Animal => Wild => Leopard, Tiger
# 	=> Pet => Dog
# 	=> Canine => Fox
# -> Each class contains two methods to get a name and info. 
#    Get the name returns the name of that animal and get the info returns hierarchy.
# For example,
# print(dog.get_name())  ⇒ My name is Tommy
# print(dog.get_info())  ⇒  I am Dog. I am Pet. I am Animal



class Animal():                               
    def __init__(self,name):
        self.name = name
    
    def get_info(self):
        # print("I am Animal.")
        return "I am Animal."

#---------------------------------------------

class Wild(Animal):                          

    def get_info(self):
        # print("I am Wild.")
        return "I am Wild. {}".format(Animal.get_info(self))

class Leopard(Wild):                       

    def get_name(self):
        # print("My name is", self.name)
        return "My name is {}".format(self.name)

    def get_info(self):
        # print("I am", self.name)
        return "I am Leopard. {}".format(Wild.get_info(self))

class Tiger(Wild):                    

    def get_name(self):
        # print("My name is", self.name)
        return "My name is {}".format(self.name)

    def get_info(self):
        # print("I am ", self.name)
        return "I am Tiger. {}".format(Wild.get_info(self))

#----------------------------------------------
class Pet(Animal):
    def get_info(self):
        # print("I am Pet.")
        return "I am Pet. {}".format(Animal.get_info(self))

class Dog(Pet):

    def get_name(self):
        # print("My name is", self.name)
        return "My name is {}".format(self.name)

    def get_info(self):
        # print("I am", self.name)
        return "I am Dog. {}".format(Pet.get_info(self))

#----------------------------------------------
class Canine(Animal):
    def get_info(self):
        # print("I am Canine.")
        return "I am Canine. {}".format(Animal.get_info(self))

class Fox(Canine):

    def get_name(self):
        # print("My name is", self.name)
        return "My name is {}".format(self.name)

    def get_info(self):
        # print("I am", self.name)
        return "I am Fox. {}".format(Canine.get_info(self))

leo = Leopard("Leo")
tiger = Tiger("Tigerr")
dog = Dog("Tommy")
fox = Fox("Kai")

print(dog.get_name())
print(dog.get_info())

print(tiger.get_name())
print(tiger.get_info())

print(leo.get_name())
print(leo.get_info())

print(fox.get_name())
print(fox.get_info())


