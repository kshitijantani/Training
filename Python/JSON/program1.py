#Create class Vehicle with properties name, engine, and price. Create vehicle object and convert it into JSON and vice-versa.

import json

class Vehicle():

    #Initialised properties of vehicle
    def __init__(self, name, engine, price):
        self.name = name
        self.engine = engine
        self.price = price

# Vehicle class object 
two_wheeler = Vehicle("Activa","124cc",72000)


#Check the type of python object in json
two_json_obj = json.dumps(two_wheeler.__dict__)
print("Serialized python object to json: ", type(two_json_obj))

#Python dictionary to object
with open("Vehicles.json", "w") as v:
	json.dump(two_wheeler.__dict__, v)
    
print(type(two_wheeler.__dict__))
#JSON to python object
with open("Vehicles.json","r") as data:
    data = json.load(data)
print("Deserialized json to python object: "+ str(type(data)))