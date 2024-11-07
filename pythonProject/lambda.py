

num= lambda a:a+ 10
print(num(5))

num2 = lambda a, b:a * b
print(num2(5, 6))

num3 = lambda a, b, c: a + b + c
print(num3(5, 6, 2))


def myfunc(num4):
  return lambda a : a * num4

mydoubler = myfunc(2)

print(mydoubler(11))


def myfunc(num5):
  return lambda a : a * num5

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11))
print(mytripler(11))