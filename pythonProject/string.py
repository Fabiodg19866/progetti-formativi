
string1 = "Hello" #stringa
print(string1)

string2= """Lorem ipsum dolor sit amet,       #stringa multilinea
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(string2)

string3 = "Hello, World!" #string array
print(string1[1])

for str in "frutta": #string loop
 print(str)

 string4 = "Hello, World!" #lunghezza stringa
 print(len(string4))

 string5 = "Hello, World!" #slicing string
 print(string5[2:5])

 string6 = "Hello, World!"
 print(string6[:1])

 string7 = "Hello, World!"
 print(string7[2:])

 string8 = "Hello, World!"
 print(string8.upper())

 string9 = "Hello, World!"
 print(string9.lower())

 string10 = " Hello, World! "
 print(string10.strip())  # returns "Hello, World!"

 string11 = "Hello, World!"
 print(string11.replace("H", "J"))

 string12= "Hello, World!"
 print(string12.split(","))  # returns ['Hello', ' World!']

str1 = "Hello"
str2 = "World"
str3 = str1+ " " + str2
print(str3)

age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))

txt = "We are the so-called \"Vikings\" from the north."
print(txt)

