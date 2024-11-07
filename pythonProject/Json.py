import json

# some JSON:
jso=  '{ "name":"John", "age":30, "city":"New York"}'

# parse
jso= json.loads(jso)

# the result is a Python dictionary:
print(jso["age"])

jsn = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

# convert into JSON:
jsn = json.dumps(jsn)

# the result is a JSON string:
print(jsn)


print(json.dumps({"name": "John", "age": 30}))
print(json.dumps(["apple", "bananas"]))
print(json.dumps(("apple", "bananas")))
print(json.dumps("hello"))
print(json.dumps(42))
print(json.dumps(31.76))
print(json.dumps(True))
print(json.dumps(False))
print(json.dumps(None))


json1 = {
  "name": "John",
  "age": 30,
  "married": True,
  "divorced": False,
  "children": ("Ann","Billy"),
  "pets": None,
  "cars": [
    {"model": "BMW 230", "mpg": 27.5},
    {"model": "Ford Edge", "mpg": 24.1}
  ]
}

print(json.dumps(json1))



js=  '{ "name":"John", "age":30, "city":"New York", "abilitazione":true}'

# parse
js= json.loads(js)

# the result is a Python dictionary:
print(js)

j = {
  "name": "John",
  "age": 30,
  "city": "New York",
  "abilitazione": True
}

# convert into JSON:
j = json.dumps(j)

# the result is a JSON string:
print(j)