variablename = {}
person = {
    'name':'Alice',
    'age' : 20,
    'address' : {
        'city' : 'New York',
        'zipcode' : 100010
    }
}

# fName=person.get('fName',"No Father Name Provided")
# print(fName)

# print(person['address']['city'])
print(person.get('address').get('city'))