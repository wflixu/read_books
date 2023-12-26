# with open('pi_digits.txt') as file_object:
#     contents = file_object.read()
#     print(contents)

# filename = 'pi_digits.txt'
# with open(filename, 'a') as file_object:
#     file_object.write("i love programing.\n")


# # with open(filename) as file_object:
# #     for line in file_object:
# #         print(line.rstrip())

# try:
#     print(5/0)
# except ZeroDivisionError:
#     print("You can't divide by zero!")



import json

numbers = [2,3,5,6,11,13]

filename = 'numbers.json'
with open(filename, 'w') as fo:
    json.dump(numbers, fo)
with open(filename,'r') as fr:
    numbs =  json.load(fr)
    print(numbs)