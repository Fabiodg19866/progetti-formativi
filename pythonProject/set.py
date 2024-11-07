myset = {"red", 1, True}

set1 = {"apple", "banana", "cherry"}# not duplica

for set in set1: # set loop
  print(set)

  set2 = {"apple", "banana", "cherry"}

  print("banana" in set2)

  set3 = {"apple", "banana", "cherry"} #add element set

  set3.add("orange")

  print(set3)

  set4 = {"apple", "banana", "cherry"}#remove element set

  set4.remove("banana")

  print(set4)

  set5 = {1,2,3,4,5}
  set6 = {6,7,8,9}
  se7 = set5.union(set6)
  print(se7)

  set5.intersection_update(set6)
  print(set5)

  