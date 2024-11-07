dict1 = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}

print(dict1)
dict2 = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(dict2["brand"], dict2["model"])
print(dict2)
for d in dict2:
    print(d)
    dict2["colore"] = "rosso"
