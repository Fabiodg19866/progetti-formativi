class Istituto:

 def __init__(self, fname, lname, age):
  self.firstname = fname
  self.lastname = lname
  self.age = age

  def printname(self):
    print(self.firstname, self.lastname)



class Student(Istituto):

 pass


def printname(self):
 print(self.firstname, self.lastname)



ist = Student("Mike", "Olsen",45)
ist.printname()

