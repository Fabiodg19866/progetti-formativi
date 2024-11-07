



while1 = 1
while while1 < 6:
  print(while1)
  while1 += 1

  while2 = 1
  while while2 < 6:
      print(while2)
      if while2== 3:
          break
      while2+= 1

      while3 = 0
      while while3 < 6:
          while3 += 1
          if while3 == 3:
              continue
          print(while3)

          while4 = 1
          while while4 < 6:
              print(while4)
              while4 += 1
          else:
              print("i is no longer less than 6")