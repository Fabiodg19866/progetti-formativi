import datetime

date= datetime.datetime.now()
print(date)



date= datetime.datetime.now()

print(date.day)
print(date.strftime("%A"))



data = datetime.datetime(2021, 3, 17)

print(data)

datas= datetime.datetime(2021, 3, 18)

print(datas.strftime("%e/%m/%Y %H:%M"))

