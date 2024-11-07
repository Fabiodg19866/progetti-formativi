import os

file = open("nuovo documento di testo.txt", "r")

print(file.read())


file = open("nuovo documento di testo.txt", "r")

print(file.read(5))


file = open("nuovo documento di testo.txt", "r")
print(file.readline())

file = open("nuovo documento di testo.txt", "r")
for fl in file:
    print(fl)

    file = open("nuovo documento di testo.txt", "r")
    print(file.readline())
    file.close()

if os.path.exists("nuovo documento di testo.txt"):
    os.remove("nuovo documento di testo.txt")
else:
    print("The file does not exist")

    os.rmdir("myfolder")