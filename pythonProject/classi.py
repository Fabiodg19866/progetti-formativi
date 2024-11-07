class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

person1 = Person("John", 36)

print(person1.name)
print(person1.age)

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

person1 = Person("John", 36)
person1.myfunc()   #chiamata funzione

class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

person1 = Person("John", 36)
person1.myfunc()

