import re

txt = "The rain in Spain"
reg = re.findall("n", txt)
print(reg)

txt = "The rain in Spain"
regg = re.search("\s", txt)

print("The first white-space character is located in position:", regg.start())

txt = "The rain in Spain"
r = re.split("\s", txt)
print(r)

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)

if x:
  print("YES! We have a match!")
else:
  print("No match")



  